const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const solc = require("solc");

const root = path.resolve(__dirname, "..");
const sources = [
  "assets/examples/PrivateCounter.sol",
  "tests/fixtures/ModelMpc.sol",
  "tests/fixtures/GuardProbe.sol"
];

function compile(extraSources = {}, sourcePaths = sources) {
  if (!solc.version().startsWith("0.8.19+")) {
    throw new Error("This example requires the locked Solidity 0.8.19 compiler.");
  }
  const input = {
    language: "Solidity",
    sources: Object.fromEntries(sourcePaths.map(file => [
      file, { content: fs.readFileSync(path.join(root, file), "utf8") }
    ])),
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: "paris",
      outputSelection: { "*": { "*": ["abi", "evm.bytecode.object", "evm.deployedBytecode.object"] } }
    }
  };
  Object.assign(input.sources, extraSources);
  const dependencyRoot = path.join(root, "node_modules");
  const output = JSON.parse(solc.compile(JSON.stringify(input), {
    import: importPath => {
      const resolved = path.resolve(dependencyRoot, importPath);
      if (!resolved.startsWith(dependencyRoot + path.sep)) {
        return { error: "Import leaves the dependency directory." };
      }
      try { return { contents: fs.readFileSync(resolved, "utf8") }; }
      catch { return { error: "Import not found in the installed dependencies: " + importPath }; }
    }
  }));
  return { input, output };
}

function requireCompiled() {
  const result = compile();
  const errors = (result.output.errors || []).filter(error => error.severity === "error");
  if (errors.length) throw new Error(errors.map(error => error.formattedMessage).join("\n"));
  return result;
}

function fingerprint(result) {
  const files = ["package-lock.json", ...sources];
  return {
    compiler: solc.version(),
    settings: result.input.settings,
    hashes: Object.fromEntries(files.map(file => [
      file, crypto.createHash("sha256").update(fs.readFileSync(path.join(root, file))).digest("hex")
    ])),
    contracts: Object.fromEntries(sources.flatMap(file =>
      Object.entries(result.output.contracts[file] || {}).map(([name, artifact]) => [
        name, {
          creationBytes: artifact.evm.bytecode.object.length / 2,
          runtimeBytes: artifact.evm.deployedBytecode.object.length / 2
        }
      ])
    ))
  };
}

if (require.main === module) {
  const result = requireCompiled();
  const folder = path.join(root, ".artifacts");
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, "compile.json"), JSON.stringify(fingerprint(result), null, 2) + "\n");
  console.log(JSON.stringify(fingerprint(result), null, 2));
}

module.exports = { compile, requireCompiled, fingerprint };
