# Validation scope

Latest guidance validation: 2026-10-08. The skill example's executable local
checks were last run on 2026-10-06. It has no native COTI result. Diagnostic
cases are evaluated offline, not replayed on-chain.

## Local maintenance after v0.1.6

Added general guidance for ambiguous availability flags, complete refresh timing,
RPC batching measurements and evidence-based consolidation of duplicate reads.
These additions contain no project identifiers, operating figures or live inputs.
The entrypoint, example code, dependencies and earlier results are unchanged.

This is a local documentation update, reviewed against the confirmed diagnostic
lessons. No new independent replay, native transaction or performance result is
claimed. Metadata validation and local Markdown-link validation passed: one
link test, zero failures.

## v0.1.6 update

Added general access-change, exact-custody and policy-change recovery guidance,
plus short usage prompts. The main skill is 97 lines.

- Standard skill metadata validation passed.
- Local Markdown-link validation passed: 1 test, 0 failures.
- The lead reviewed the changed guidance and synthetic cases. No independent
  evaluator was run and no new replay score is claimed.
- A bounded scan of all 40 current package files found none of the checked
  project identifiers, earlier operating figures or common credential patterns.
  This is not a complete secret audit. Earlier figures remain in Git history.
- The example, executable contract tests, dependency graph and invocation
  settings are unchanged. Their historical local results were not rerun.
- v0.1.6 package-lock SHA-256:
  `4ca9db398c06475c22aa0630b09ba657840877f87a9824e8c4ec5d52b2adc132`.
  Only the package version fields changed in the lock.

See the [maintenance record](evals/RESULTS-0.1.6.md). There is no new native,
comparative performance or production-safety claim.

## v0.1.5 update

Added conditional guidance for controlled privacy comparisons, exact recipient
amounts after fees, and complete recovery obligations. The examples apply to
different COTI contract types and preserve each project's own product rules.

- Standard skill metadata validation passed.
- Local Markdown-link validation passed: 1 test, 0 failures.
- One independent offline check passed 15/15 predefined criteria.
  [Inputs, actual answer, review and limits](evals/RESULTS-0.1.5.md).
- A post-evaluation clarification covers caught external reverts. It was reviewed
  by the lead and was not independently replayed.
- The example, executable contract tests, dependencies and invocation settings
  are unchanged. Earlier executable and replay results retain their original
  scope; those checks were not rerun.
- v0.1.5 package-lock SHA-256:
  `b59bd08e5a7bd10cf1e80cf6eccca3f24e395401b1862df34ea9397754a4967d`.
  Only the package's version fields changed in the lock.

This is general COTI smart-contract guidance, not source-project acceptance or
new live permission.

## v0.1.4 update

Updated fit guidance for a diagnosed RPC estimation limit under an explicit,
separate model-admission policy. Added independent model/reader checks and
measured reuse of immutable validation history while preserving fresh admission.

- Standard skill metadata validation passed.
- Expanded local Markdown-link check: 1 passed, 0 failed.
- One independent offline check of three cases passed 15/15 predefined criteria.
  [Inputs, actual answer, review and limits](evals/RESULTS-0.1.4.md).
- The counter, executable contract tests, dependencies and earlier evaluation
  artifacts are unchanged from v0.1.3. The executable counter suite and earlier
  decision replays were not rerun; their historical results retain their scope.
- v0.1.4 package-lock SHA-256:
  `457c6e5e26f3a09cacbd5e20aff5019a2bee5bc70e8839df24732286da9ab9e6`.
  Only this package's version fields changed in the lock.

No current project runner, manifest, journal, permission or contract was changed.
This update grants no live gas-estimate exception, native accounting acceptance
or full-run speed claim.

## v0.1.3 update

Added guidance for candidate/action/phase admission, phase gas evidence, and
pending private-settlement verification. Public runtime identity, receipt success
and metadata do not grant send permission or private-accounting acceptance.

- Standard skill metadata validation passed.
- The expanded local Markdown-link check passed: 1 test, 0 failures.
- One independent offline forward check passed all 10 predefined review criteria.
  [Actual answer, inputs, results and limits](evals/RESULTS-0.1.3.md).
- The dependency graph, counter, executable contract tests and original replay
  cases are unchanged from v0.1.2. Only package version fields changed in the lock.
  Those executable tests were not rerun; their v0.1.1 results remain valid only
  within the recorded local scope.
- v0.1.3 package-lock SHA-256:
  `43c5e81adc6cee99b35732f2e2973c0da2588742dea440282a31727824d33e21`.

No native transaction, application test, funded recovery, measured performance
comparison or production acceptance was part of this update.

## v0.1.2 update

Added the checkpoint learning rule. It covers demonstrated reusable lessons,
focused checks, versioned source/installed-copy updates, and removal of obsolete
guidance within the current task authority. It preserves the build priority.

This is an instruction-only maintenance change. Metadata and document-link checks
passed. The counter, dependencies and three diagnostic cases are unchanged; the
v0.1.1 results below remain their evidence. No new native or performance claim.

v0.1.2 package-lock SHA-256: `de5f211fdf010b7ddc163cd18fe54553b0a67d6cd77a0c6dd00e52a9d50da732`.
Only the package version fields changed in the lock.

## v0.1.1 update

- Added guidance for published MPC RPC modes, nested gas forwarding, and runner
  time/private-read/provider handling. The counter and dependencies are unchanged.
- `npm test`: 11 passed, 0 failed, 0 skipped; 26.83 seconds. This includes real
  compilation, local counter/model checks and the expanded document-link check.
- The standard skill metadata validator passed.
- A paired offline evaluation used the same three cases and model/settings for
  v0.1.0 and v0.1.1. Both scored 15/15 reviewed criteria. No accuracy or speed
  improvement is claimed. [Full results and limits](evals/RESULTS-0.1.1.md).
- v0.1.1 package-lock SHA-256:
  `7f8ebfe08ef2b3f7e6701eb4bbe1a5185f737531b5e5be19153b1cd6e47b7122`.
  The lock differs from v0.1.0 only in this package's version fields.

## Baseline

- Node.js: 24.13.1.
- COTI contracts: 1.2.0.
- Solidity: 0.8.19+commit.7dd6d404.Emscripten.clang.
- Local EVM: Hardhat 2.28.6.
- Client: ethers 6.16.0.
- Compiler: optimizer enabled, 200 runs, Paris EVM target.

## Initial v0.1.0 results

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

## Initial v0.1.0 inputs

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
