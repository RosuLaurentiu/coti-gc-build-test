# Implementation plan

Requested 2026-10-06: create a separate skill project and GitHub repository.

## Build now

One portable skill, owned by this repository. Keep its entrypoint short.
Use focused references for GC rules, build/test workflow, lessons/diagnosis,
and native RPC, gas and reader failure cases.
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

## v0.1.1 checkpoint

Requested 2026-10-06: add the three demonstrated diagnostic gaps and compare
old/revised behavior on the saved failure cases.

- [x] Add focused RPC mode, gas forwarding and runner-read guidance.
- [x] Preserve source-version limits and current-project authority.
- [x] Compare isolated baseline/revised agents on three identical offline cases.
- [x] Run the affected package checks and record results without a speed claim.

Both versions passed all 15 reviewed replay criteria. See
[validation](VALIDATION.md) and [replay results](evals/RESULTS-0.1.1.md).
This checkpoint changes the reusable skill; it does not advance a project release.

## v0.1.3 checkpoint

Requested 2026-10-07: incorporate the latest confirmed integration lessons.

- [x] Add candidate/action/phase admission and pending private-settlement guidance.
- [x] Keep private project evidence and policy in the consuming project.
- [x] Test two synthetic cases with an independent forward evaluator: 10/10
  reviewed criteria, with no comparison or performance claim.
- [x] Validate metadata, links and the unchanged dependency graph; retain earlier
  executable counter evidence within its original scope.

See the [replay result](evals/RESULTS-0.1.3.md). The update changes guidance;
it does not supply missing native funded-recovery or private-settlement proof.

## Before production

A contract built with this skill still needs current-candidate native
authentication, GC ownership/lifetime, viewer decryption, transaction-fit,
recovery, and relevant privacy/security review. This skill is not a release gate.
A native trial requires its own applicable authority and finite run inputs.

## Next action

Use the installed version on the next requested COTI contract task. Check compatibility
with that project's installed dependencies. Improve the skill only from a
demonstrated defect or useful new evidence. The local result is in
[VALIDATION.md](VALIDATION.md); native example validation remains a separate scope.
