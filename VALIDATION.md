# Validation scope

Local validation completed on 2026-10-06. No native COTI result is claimed.

## Baseline

- Node.js: 24.13.1.
- COTI contracts: 1.2.0.
- Solidity: 0.8.19+commit.7dd6d404.Emscripten.clang.
- Local EVM: Hardhat 2.28.6.
- Client: ethers 6.16.0.
- Compiler: optimizer enabled, 200 runs, Paris EVM target.

## Results

`npm test`: 11 passed, 0 failed, 0 skipped. Terminal duration: 26.60 seconds.

The checks cover real-library compilation; initialized zero; zero and repeated
additions; unauthorized writes; exact maximum and overflow rollback; modeled
viewer and ciphertext scope; a compiler type-mismatch regression; two simulated
estimator cases; and local documentation links.

The standard Codex skill-creator `quick_validate.py` passed. Its PyYAML 6.0.3
dependency was installed only in an ignored temporary directory.

`npm run compile` passed. The example has 2,406 bytes of creation code and 1,796
bytes of runtime code. Its constructor has no arguments. These are local artifact
sizes, not native deployment or transaction-fit evidence. The script writes the
reproducible compiler summary to ignored `.artifacts/compile.json`.

An independent agent applied the skill to a new fixed-owner counter request and
a deployed-candidate diagnostic request. It generated a compatible contract,
compiled it without errors or warnings, and kept native requirements explicit.
For diagnosis, it selected recovery of the exact deployed build and comparison
of same-state evidence before changing a guard or sending a transaction.
No blocking guidance defect was found. That generated contract was not executed.

## Exact local inputs

SHA-256:

| Input | Hash |
| --- | --- |
| package-lock.json | `b7a04be57493e61c65bd201da5c055287349c0f6556899fe001382d0535f75e6` |
| assets/examples/PrivateCounter.sol | `f8c0f76e1d835c48c5a272084b8a9aa26f7abe0fef8ecea84fd2ba0dac3b2419` |
| tests/fixtures/ModelMpc.sol | `e57a2b5cc7373b7fe6b2e3362238432e85925657e141d149c0359aea10494a64` |
| tests/fixtures/GuardProbe.sol | `61e4fa1daf3c05a4cb321d8868ee8a8efc6b2612ab820c266b019e57cf01025b` |
| Installed COTI MpcCore.sol | `92784ce2cb6bfaf24d099c78692306fb427f6c3748cec36f5cda9d56e66c9e4a` |

## What local tests establish

The example compiles with real library signatures. A deliberately limited model
exercises initialization, persisted state, exact updates, caller authorization,
overflow rejection, rollback, and selected model ownership/viewer rules.
Negative fixtures check a real compiler type mismatch and a simulated estimator
guard difference.

## What remains unverified

The model uses plaintext values and artificial handles. It ignores input
signatures. It does not implement cryptography, real garbledtext lifetimes,
native input domains/replay, node estimation behavior, network gas, native
ownership enforcement, or native viewer decryption. Any model gas is irrelevant
to COTI transaction fit. No native transaction was part of repository setup.

The example has an explicit disclosure: overflow rejection reveals a validity
bit. It also exposes ordinary transaction metadata. It is a teaching counter,
not an audited asset contract.

Before native reuse, verify owner key setup, authentic SDK inputs, signer/domain
and replay behavior, authorized decryption, rejection, state preservation, and
complete deployment/operation cost under a finite authorized trial.
