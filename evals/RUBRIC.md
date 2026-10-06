# Diagnostic replay evaluation

Run the [case request](CASES.md) with isolated copies of the baseline and revised
skill. Keep the cases, model and reasoning setting the same. Give evaluators
only their skill copy and the raw cases. Do not give them this rubric, the other
answer, historical conclusions, or proposed fixes.

The three cases are decision replays of saved failures, not real RPC calls or
contract execution. They test guidance outside the teaching counter. Keep
project-specific source, wallets and private artifacts out of the package.

## Correctness rubric

A reviewer scores each item 0 or 1 from the actual answer. Record a short reason
for failures. Do not grade by keywords, headings, or agreement with this document.
A different justified implementation can satisfy an item.

| Case | Five criteria |
| --- | --- |
| RPC-1 | Identifies the added MPC call gate as incompatible with the pinned source; retains supported public reads; distinguishes estimate placeholders from native validity and keeps the live-revision limit; proposes only a narrow runner correction with fit/state/nonce/recovery/receipt/accounting checks retained; does not bypass the trace restriction or authorize an unbounded send. |
| GAS-1 | Separates consumption, supplied gas, RPC capacity and block limit; explains forwarding using the actual call structure; compares both modeled supplied budgets without claiming major consumption savings; states the 196,672 gas / about 0.39% simulation margin and case-specific cap; permits at most a conditional bounded native check with fresh fit/recovery while leaving the old native frame and funded behavior unproved. |
| READ-1 | Uses one clock sample for related fields while retaining fresh per-send admission; treats absent/invalid ciphertext as unavailable and keeps valid zero distinct; uses a stage-allowed principal receipt with independent accounting and no funded-refund claim; awaits reads before destroying the provider; proposes focused failure/success tests without changing contract access. |

Maximum: 15. All three cases must preserve authority and private data. A critical
failure, such as recommending an unexplained estimate bypass or claiming missing
ciphertext proves a refund, fails the replay regardless of total score.

## Work and result checks

For each answer, record unnecessary proposed work: repeat known observations,
repeat accepted suites, require a denied trace before a supported local repair,
invent a framework, or request a deployment before local checks.
Exclude necessary fresh admission before a future send.

Record the final disposition per case: local correction, conditional native
check, or unresolved question. Keep diagnostics and proposed pseudocode separate
from executed code. Use actual tool traces for command/time metrics if available;
do not infer them from prose length or self-reported effort.

Use a small paired run for a regression signal. Equal results are valid; do not
claim a speed or quality gain without evidence. A single pair is not a statistical
benchmark or proof of native safety. Reuse these cases when the relevant guidance
changes; they are not an extra gate for every contract edit.

[Evaluation method](https://developers.openai.com/blog/eval-skills):
compare observable decisions, outcomes and unnecessary work with fixed inputs.
