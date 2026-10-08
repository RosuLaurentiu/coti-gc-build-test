# Implementation plan

Requested 2026-10-06: create a separate skill project and GitHub repository.

Current status, 2026-10-08: v0.1.7 keeps the general build/test workflow and adds
focused diagnostic lessons in its references. The checkpoints below record skill
development, not readiness of contracts built with it. See [validation](VALIDATION.md)
for the checks run at each update and the limits of earlier results.

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

## v0.1.4 checkpoint

Requested 2026-10-07: apply further confirmed build lessons to the existing skill.

- [x] Distinguish a separately approved model-fit trial from automatic estimate fallback.
- [x] Add independent model/reader diagnosis and measured-history verification guidance.
- [x] Check three synthetic cases with an independent evaluator: 15/15 reviewed criteria.
- [x] Validate metadata and document links; verify unchanged dependencies, executable
  example and earlier evidence. Preserve all project authority and active runs.

See the [result and limits](evals/RESULTS-0.1.4.md). Source-project native results
and local prototypes are evidence for guidance, not new acceptance by this skill.

## v0.1.5 checkpoint

Requested 2026-10-07: retain useful archived lessons while keeping the skill
general for COTI smart contracts.

- [x] Add conditional privacy, recipient-amount and recovery checks.
- [x] Use synthetic private-job, payment and escrow cases without project policy.
- [x] Review one independent forward answer: 15/15 predefined criteria; record
  the separate lead-reviewed clarification about caught external reverts.
- [x] Validate metadata and links; confirm unchanged dependencies, executable
  example and invocation settings before publication and installation.

See the [result and limits](evals/RESULTS-0.1.5.md). The unchanged counter and
historical build evidence retain their recorded scope.

## v0.1.6 checkpoint

- Added general access, custody and policy-change recovery checks to existing
  references; retained a short entrypoint and added practical usage prompts.
- Replaced current operating examples with synthetic inputs and labeled old
  answer summaries without changing historical scores or Git history.
- Passed metadata and link checks. The lead reviewed the changed guidance;
  no independent replay was run. Executable examples and dependencies are
  unchanged. See the [maintenance record](evals/RESULTS-0.1.6.md).

## v0.1.7 checkpoint

- Added preparation-freshness checks, exact ciphertext write-set checks and early
  capture of expected-revert evidence to the existing references.
- Recorded the intervening maintenance: optional runner components remain
  conditional; availability, refresh timing, RPC batching and duplicate-read
  guidance use evidence from the exact path.
- Kept project identifiers, operating figures and private evidence out of this
  update. The main skill remains 97 lines; examples and dependencies are unchanged.
- Used the existing metadata and link checks plus a review of the changed guidance.
  No new independent evaluation score or native result is claimed. See the
  [validation record](VALIDATION.md).

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
