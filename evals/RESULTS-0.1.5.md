# v0.1.5 offline decision results

Date: 2026-10-07. Scope: one independent forward check of three synthetic cases.

## Change and scope

Saved historical reports support three reusable lessons: control public state
when comparing private outcomes, enforce a promised recipient amount after fees,
and preserve every unresolved recovery obligation. The general rules were
present in the skill; this update makes these decision boundaries explicit.

The guidance applies across COTI contract types. The examples use a private job,
payment and escrow. Fees, stages, public disclosures, paid cleanup and lock
designs remain choices of the consuming protocol. No source-project architecture,
addresses, private source, live inputs, permissions or release rules were added.
Historical local passes and native gas figures were not promoted to this version.

## Method

One isolated evaluator was requested with GPT-6 Astra, High, and no inherited
conversation. It read the [raw cases](CASES-0.1.5.md) and a minimal skill snapshot:
SKILL.md, five references, the unchanged counter and prior validation history.
It did not receive the [predefined rubric](RUBRIC-0.1.5.md), source-project
reports, intended fixes or other evaluator answers. It made no edits or live calls.

The lead scored the [actual answer](results/v0.1.5.md) against the rubric.
Grading was not blind. The answer is retained with an added heading, normalized
typographic apostrophes and a trailing newline. Proposed tests were not executed.

SHA-256:

| Input | Hash |
| --- | --- |
| Raw cases | `678979e12f87684a28078dc538e46ba4a94811c4ae24b8063cc08ad7e4d20d4b` |
| Evaluated SKILL.md | `27ee64ca4277d5cb796c62113c66988de094f87ccdd01913b558c246b02a1b2c` |
| Evaluated build/test reference | `008c28cfec185841b363c4e7062f248c1e04c311eb0f20fb6118e01a33e17c27` |
| Evaluated lessons reference | `4726325a4eeb489abaeb68b10f68c0887810792ea0bebdd18905702a349ff0be` |
| Predefined rubric | `7bf064b1e780481fb827e6dbc82a9e9b30203094cf04cf634ea896746cc7c27b` |
| Final build/test reference | `6cbfe2262106365c0f1764da580398f8bac8a625b6c7c0189f22a96b88de18a8` |
| Final package lock | `b59bd08e5a7bd10cf1e80cf6eccca3f24e395401b1862df34ea9397754a4967d` |

The remaining snapshot references, counter and prior validation file are
unchanged from v0.1.4 commit `1297f778c0fdf733c1c07126f49f33af85e36036`.
The evaluated input hashes are retained in the ignored local evaluation snapshot.

## Results

| Case | Score | Observed decisions |
| --- | ---: | --- |
| PRIVATE-JOB-1 | 5/5 | Rejects the mismatched public-state comparison and unnecessary idle padding, checks the observable surface, and keeps mock gas and native privacy claims separate. |
| PRIVATE-PAYMENT-1 | 5/5 | Preserves the signed minimum, applies the 98-unit net result and exact fee boundaries, retains private no-effect behavior, and checks conservation and rollback. |
| PRIVATE-ESCROW-1 | 5/5 | Preserves principal return and recovery obligations, accounts for 1 caller credit + 6 reserve + 4 owner credit, protects identities, and checks partial cleanup, retry and final release. |
| Total | 15/15 | All predefined criteria passed; no critical failure observed. |

No trading architecture, global padding requirement, whole-contract rewrite,
new deployment or arbitrary-token support requirement was proposed. Additional
checks for arithmetic limits, external failure and reentrancy were relevant to
the supplied paths. They are proposed work, not completed verification.

The evaluator also identified that catching an external revert does not undo
earlier writes in its caller. The final recovery paragraph now states that
exception and requires propagated failure or reviewed safe handling. The lead
reviewed this clarification; the agent was not rerun on the final wording.
The evaluated and final reference hashes above distinguish those two inputs.

## Limits

This single information-rich forward check does not establish a measured gain
over v0.1.4, broad accuracy, lower cost or native safety. It is not a security
audit. The original executable counter, its tests and dependency versions are
unchanged. Earlier replay cases and executable contract tests were not rerun.

Package metadata and local Markdown-link validation passed: 1 link test, 0 failures.
No application code, active runner, manifest, journal, native transaction or
project authority changed.
