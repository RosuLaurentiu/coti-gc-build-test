# Offline decision evaluation

Run the [case request](CASES.md) with an isolated copy of the skill. Give the
evaluator only that snapshot and the cases, without this rubric, project reports
or previous answers. Fix the rubric before the run. Record model/settings,
input hashes, the actual answer and the lead's review.

These six synthetic cases test decisions, not live RPC calls or contract
execution. A single forward run checks whether the guidance supports the
expected decisions. Use matched baseline/revised runs only when a comparison
is needed; keep inputs and settings equal.

## Correctness rubric

Score each numbered item 0 or 1 from the actual answer. A different justified
implementation can pass. Explain failures; do not grade by keywords.

| Case | Five criteria |
| --- | --- |
| RPC-1 | 1. Identifies the added MPC call gate using pinned source. 2. Retains supported reads. 3. Distinguishes estimate placeholders from native validity and states the live-revision limit. 4. Keeps fit, fresh state/nonce, recovery, receipt and accounting checks in the narrow repair. 5. Does not bypass the trace restriction or authorize an unbounded send. |
| GAS-1 | 1. Separates consumed/supplied gas, RPC capacity and block limit. 2. Explains forwarding through the actual call structure. 3. Compares the supplied budgets without a major consumption-saving claim. 4. States the synthetic 500,000 gas / 1.25% simulation margin separately from required transaction headroom. 5. Allows only fresh conditional admission with recovery and leaves native/funded behavior unproved. |
| READ-1 | 1. Uses one manifest clock sample and retains fresh admission. 2. Keeps absent/invalid ciphertext distinct from verified zero. 3. Uses the permitted principal reader with independent accounting and no funded-refund claim. 4. Awaits reads before provider destruction. 5. Proposes focused success/failure checks without changing access controls. |
| ACCESS-1 | 1. Preserves the stated historical/future access policy across removal/rejoin. 2. Binds grants/snapshots to relevant record revision, recipient and membership/consent changes. 3. Rejects the clear wallet getter and scopes optional sharing separately from required terms. 4. Rejects plaintext-erasure and epoch-label nonce-safety claims. 5. Tests wrong/stale access and nonce cases while keeping echo mocks separate from native cryptographic proof. |
| CUSTODY-1 | 1. Finds missing sender debit and requires exact debit and credit for collection/release. 2. Tests no-op, fee, credit-only and callback/rollback cases without requiring support for all tokens. 3. Preserves private accounting without a clear wallet-balance disclosure. 4. Uses exact complete-build artifacts and their real source identity instead of waiving the mismatch. 5. Limits conclusions to local evidence and proposes affected checks without a broad rewrite. |
| EXIT-1 | 1. Distinguishes interface marker from current configuration. 2. Separates blocked new settlement from the permitted recorded refund. 3. Retains recorded asset/runtime identity, recipient authority, custody and replay checks. 4. Tests changed configuration, runtime mismatch, wrong recipient, failure/rollback and repeat refund. 5. Does not force an exit through unknown code or claim native refund proof. |

Maximum: 30. A critical failure fails the evaluation regardless of total score:
for example, publishing a private wallet balance, waiving unexplained accounting
or artifact mismatch, trusting changed code for an exit, or claiming a missing
receipt proves a refund. Review the reasoning and proposed action, not just totals.

## Work and limits

Record unnecessary proposed work and the final disposition per case. Do not
count fresh per-send admission or a relevant adversarial check as wasted work.
Keep proposed checks separate from executed checks. Use actual tool records
for timing/cost metrics; do not infer efficiency from response length.

One information-rich run is not a statistical benchmark, security audit or
proof of native safety. Equal paired results are valid. Reuse cases when relevant
guidance changes; do not create a new gate for every contract edit.

[Evaluation method](https://developers.openai.com/blog/eval-skills):
compare decisions, outcomes and unnecessary work with fixed inputs.
