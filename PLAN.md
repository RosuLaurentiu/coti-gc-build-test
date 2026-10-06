# Implementation plan

Requested 2026-10-06: create a separate skill project and GitHub repository.

## Build now

One portable skill, owned by this repository. Keep its entrypoint short.
Use three focused references: GC rules, build/test workflow, and lessons/diagnosis.
Ship one original private-counter example with pinned dependencies and focused
local tests. Preserve project-specific policy in the consuming project.

## Check now

- [x] Validate skill metadata and local references.
- [x] Compile the example against the locked COTI library and Solidity compiler.
- [x] Check initialized state, persistence, exact updates, unauthorized writes,
  overflow rejection, and rollback with a documented local model.
- [x] Exercise a type-mismatch regression and estimator compatibility models.
- [x] Independently apply the skill to a build request and a diagnostic request.
- [x] Record exact inputs, results, and the limits of local evidence.

Stop on an unexplained failure or unsupported claim. Preserve the tested invariant.

## Before production

A contract built with this skill still needs current-candidate native
authentication, GC ownership/lifetime, viewer decryption, transaction-fit,
recovery, and relevant privacy/security review. This skill is not a release gate.
A native trial requires its own applicable authority and finite run inputs.

## Next action

Use this first version on the next requested COTI contract task. Check compatibility
with that project's installed dependencies. Improve the skill only from a
demonstrated defect or useful new evidence. The local result is in
[VALIDATION.md](VALIDATION.md); native example validation remains a separate scope.
