const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { ethers } = require("ethers");
const hre = require("hardhat");
const { compile, requireCompiled, fingerprint } = require("../scripts/compile.cjs");

const result = requireCompiled();
const artifact = (file, name) => result.output.contracts[file][name];
const counterArtifact = artifact("assets/examples/PrivateCounter.sol", "PrivateCounter");
const modelArtifact = artifact("tests/fixtures/ModelMpc.sol", "ModelMpc");
const guardArtifact = artifact("tests/fixtures/GuardProbe.sol", "GuardProbe");
const PRECOMPILE = "0x0000000000000000000000000000000000000064";
const MAX = (1n << 64n) - 1n;
const modelInput = value => ({ ciphertext: value, signature: "0x" });

async function setup() {
  await hre.network.provider.request({ method: "hardhat_reset" });
  await hre.network.provider.request({
    method: "hardhat_setCode",
    params: [PRECOMPILE, "0x" + modelArtifact.evm.deployedBytecode.object]
  });
  const provider = new ethers.BrowserProvider(hre.network.provider);
  const owner = await provider.getSigner(0);
  const other = await provider.getSigner(1);
  const model = new ethers.Contract(PRECOMPILE, modelArtifact.abi, owner);
  const counter = await new ethers.ContractFactory(
    counterArtifact.abi, counterArtifact.evm.bytecode.object, owner
  ).deploy();
  await counter.waitForDeployment();
  return { provider, owner, other, model, counter };
}

async function clearTotal(model, counter) {
  return model.readUserForTest(await counter.encryptedTotal());
}

async function expectCustomError(action, contract, name) {
  await assert.rejects(action, error => {
    const data = error.data ?? error.info?.error?.data;
    assert.equal(typeof data, "string", "Expected a revert with ABI error data");
    assert.equal(contract.interface.parseError(data).name, name);
    return true;
  });
}

test("real COTI interfaces compile and example bytecode is small", () => {
  const details = fingerprint(result);
  const compiled = details.contracts.PrivateCounter;
  assert.ok(compiled.runtimeBytes > 0 && compiled.runtimeBytes < 24576);
  assert.ok(compiled.creationBytes > 0 && compiled.creationBytes < 49152);
  assert.equal(require("@coti-io/coti-contracts/package.json").version, "1.2.0");
  assert.ok(details.compiler.startsWith("0.8.19+"));
  // These are local size checks, not a native deployment or fit claim.
});

test("local model: constructor initializes a usable encrypted zero", async () => {
  const { counter, model, owner } = await setup();
  assert.equal(await counter.owner(), await owner.getAddress());
  assert.notEqual(await counter.encryptedTotal(), 0n);
  assert.equal(await clearTotal(model, counter), 0n);
});

test("local model: zero and repeated additions preserve exact persisted value", async () => {
  const { counter, model } = await setup();
  for (const value of [0n, 7n, 23n]) {
    await (await counter.add(modelInput(value))).wait();
  }
  assert.equal(await clearTotal(model, counter), 30n);
});

test("local model: unauthorized write fails and state is unchanged", async () => {
  const { counter, model, other } = await setup();
  const before = await counter.encryptedTotal();
  await expectCustomError(
    () => counter.connect(other).add.staticCall(modelInput(1n)),
    counter, "Unauthorized"
  );
  assert.equal(await counter.encryptedTotal(), before);
  assert.equal(await clearTotal(model, counter), 0n);
});

test("local model: maximum value is exact and overflow rolls back", async () => {
  const { counter, model } = await setup();
  await (await counter.add(modelInput(MAX))).wait();
  const before = await counter.encryptedTotal();
  const handles = await model.lastHandle();
  await expectCustomError(() => counter.add.staticCall(modelInput(1n)), counter, "CounterOverflow");
  await assert.rejects(async () => {
    const tx = await counter.add(modelInput(1n), { gasLimit: 1000000 });
    await tx.wait();
  });
  assert.equal(await counter.encryptedTotal(), before);
  assert.equal(await model.lastHandle(), handles);
  assert.equal(await clearTotal(model, counter), MAX);
});

test("local model: returned ciphertext is bound to the intended viewer", async () => {
  const { counter, model, other } = await setup();
  const ciphertext = await counter.connect(other).encryptedTotal();
  await expectCustomError(
    () => model.connect(other).readUserForTest(ciphertext), model, "WrongViewer"
  );
  assert.equal(await model.readUserForTest(ciphertext), 0n);
});

test("local model: unknown and wrong-scope stored handles are rejected", async () => {
  const { counter, model } = await setup();
  await expectCustomError(() => model.OnBoard("0x04", 0n), model, "UnknownHandle");
  await expectCustomError(
    () => model.OnBoard("0x04", counter.encryptedTotal()), model, "WrongScope"
  );
});

test("compiler rejects storing validated garbledtext as inputtext", () => {
  const file = "tests/fixtures/BadStoredInput.sol";
  const content = fs.readFileSync(path.join(__dirname, "fixtures/BadStoredInput.sol"), "utf8");
  const compiled = compile({ [file]: { content } }, []);
  const errors = (compiled.output.errors || []).filter(error => error.severity === "error");
  assert.ok(errors.some(error => error.type === "TypeError"));
});

test("estimator model: equivalent guards differ when decryption returns true", async () => {
  const { model, owner } = await setup();
  const guard = await new ethers.ContractFactory(
    guardArtifact.abi, guardArtifact.evm.bytecode.object, owner
  ).deploy();
  await guard.waitForDeployment();
  await guard.validityGuard.staticCall();
  await guard.invalidityGuard.staticCall();
  await (await model.setEstimateMode(true)).wait();
  await guard.validityGuard.staticCall();
  await expectCustomError(() => guard.invalidityGuard.staticCall(), guard, "Rejected");
  await (await model.setEstimateMode(false)).wait();
  await guard.invalidityGuard.staticCall();
});

test("estimator model: successful simulated estimate does not prove private validity", async () => {
  const { counter, model } = await setup();
  await (await counter.add(modelInput(MAX))).wait();
  await (await model.setEstimateMode(true)).wait();
  await counter.add.staticCall(modelInput(1n));
  await (await model.setEstimateMode(false)).wait();
  await expectCustomError(() => counter.add.staticCall(modelInput(1n)), counter, "CounterOverflow");
  assert.equal(await clearTotal(model, counter), MAX);
});
