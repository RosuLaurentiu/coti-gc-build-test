# v0.1.3 diagnostic replay results

Date: 2026-10-07. Scope: one independent offline forward check. No native action.

## Inputs and method

The two [cases](CASES-0.1.3.md) carry lessons from current application integration:
candidate/action admission and pending private-accounting verification. The
snippets, names, identifiers and gas values are synthetic. They test faulty
proposals; they are not copied production code or native execution traces.
Original project evidence remains in its owning project.

One independent agent used GPT-6 Astra, High, with no inherited conversation.
It received a snapshot of v0.1.3 guidance and the raw cases. It was restricted
to those files and did not receive the [predefined rubric](RUBRIC-0.1.3.md),
intended answers, source-project history or another agent's output. The snapshot
contained SKILL.md, four references, the counter example and the unchanged
v0.1.2 validation history. Only relevant guidance was needed for these cases.

The lead graded the [actual answer](results/v0.1.3.md) against the ten predefined
criteria. Grading was not blind. The answer is retained verbatim apart from its
file heading and a trailing newline. Proposed code corrections and tests were
not executed.

SHA-256 of evaluated inputs:

| Input | Hash |
| --- | --- |
| Raw cases | `8df0f30579f9df55510872ab4710b2e3a2ddbc2745c2e76434e721be9d0b5974` |
| SKILL.md | `988047909b0077653cc8ee63822b57896122afb38ae053bcdbdc520b91ed590c` |
| Native diagnostics | `b83dfe97ef6f304721b1a70805d928ffd7587777e9986a7f45781d427565dafa` |
| Lessons reference | `752b0e4c85658b90cba043fdc752b43ad3a70530da288cda129c9a5180f5fc1e` |
| Predefined rubric | `6a044261a77909ba8a333702549d062a5ab3dc00c3836dad24b9c683d64158a4` |

The build/test and GC references and example are unchanged from v0.1.2 commit
`ac6865358c5b1af0848a232fbdbfb8d322de8c8f`. The prior validation history is
context only; it does not report a v0.1.3 result.

## Results

| Criterion | Score | Observed decision |
| --- | ---: | --- |
| ADMIT-1.1 | 1/1 | Runtime identity does not grant live permission; both sender boundaries enforce the hold, while permitted reads continue. |
| ADMIT-1.2 | 1/1 | Admission binds the complete call and context; Accept is admitted after the mined Quote supplies its commitment. |
| ADMIT-1.3 | 1/1 | Separates scoped older proof, current receipts, ceilings and local trials; stops on failed estimation and retains the native recovery gap. |
| ADMIT-1.4 | 1/1 | Preserves independent consumer eligibility and repairs the historical fixture by selecting archive-A. |
| ADMIT-1.5 | 1/1 | Proposes focused admission failure/success checks and no broad contract, deployment or framework change. |
| PENDING-1.1 | 1/1 | Records public execution without claiming private delivery from consumed status. |
| PENDING-1.2 | 1/1 | Requires authorized, operation-bound private results and independent accounting; malformed data is unavailable. |
| PENDING-1.3 | 1/1 | Keeps verification blocked across reloads and changes the unsupported completion expectation. |
| PENDING-1.4 | 1/1 | Allows permitted receipt reconciliation without signing, reservation or replay. |
| PENDING-1.5 | 1/1 | Invalidates prepared inputs after context changes and tests blocked, changed-context and valid-proof paths without relaxing access. |
| Total | 10/10 | No critical failure observed. |

No unnecessary full suite, deployment, framework, denied trace, or new permission
request for allowed reads was proposed. This is a review of proposed work, not a
measurement of commands or elapsed time.

## Limits

The check supports the revised guidance on two information-rich cases. There
was no comparison with an earlier version and no measured improvement in speed,
token use, failure rate or general accuracy. One successful answer is not a
statistical benchmark.

No application correction, contract execution, native privacy validation or
funded recovery was performed. The skill counter still has only the previously
recorded local evidence. Private project data and live authority are not part
of this package.
