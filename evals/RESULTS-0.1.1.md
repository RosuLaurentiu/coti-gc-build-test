# v0.1.1 diagnostic replay results

Date: 2026-10-06. Scope: one offline paired diagnostic run. No native action.

## Inputs and method

- Baseline: v0.1.0 at commit `da21f8e76cd0b03ac3907c7bef3dbd77e01ffa3e`.
- Revised instructions: v0.1.1, same example and dependency versions.
- Two independent agents, each with an empty conversation history, one skill
  snapshot and identical [raw cases](CASES.md). Same model: GPT-6 Astra, High.
- The agents were restricted to their snapshot and the shared case file.
  They did not receive the [review rubric](RUBRIC.md), the other output, or the
  historical diagnosis. Public source excerpts were included as raw evidence.
- Three case answers per version, one run per version. The lead reviewed the
  actual answers against the 15 predefined criteria; grading was not blind.
- [Baseline answer](results/v0.1.0.md) and [revised answer](results/v0.1.1.md)
  retain the outputs with punctuation normalized to ASCII. Proposed pseudocode
  was not executed.

SHA-256 of evaluated inputs:

| Input | Hash |
| --- | --- |
| Common cases | `cf74bf39d7f4aa1d97f4cb4e4d3c1a10379b5420ac4af449221bb1c9ed620f16` |
| Revised SKILL.md | `24f9f3ecc291abcafd8dd1526b1a66c71bdb58bfb7cae5416a23443ce79bb32a` |
| Revised native diagnostics | `dbbc45344d6c6529564cd64a3e5915b737971a3314730805ece545d23d77cdf2` |
| Predefined rubric | `e0484afb3720ed11935cb976003d6928fd0d1b67e09dd35f8437dc6ce93ff9de` |

## Results

| Case | v0.1.0 | v0.1.1 | Observed final disposition in both |
| --- | ---: | ---: | --- |
| RPC-1 | 5/5 | 5/5 | Correct the added MPC call gate locally; retain supported reads and all finite native admission/verification checks. Live node revision and native validity remain unproved. |
| GAS-1 | 5/5 | 5/5 | Use a fresh estimate/admission check for the exact derivative. State 0.39% modeled simulation margin separately from transaction headroom. No unconditional send or broad cost claim. |
| READ-1 | 5/5 | 5/5 | Correct clock sampling, lifecycle reader, unavailable evidence, and provider lifetime. Check independent accounting; no funded-refund claim. |
| Total | 15/15 | 15/15 | No critical failure observed. |

All five rubric criteria passed in each case for each answer. Neither answer
required a denied trace, repeated full contract suite, new framework, or fresh
deployment before the supported local corrections. Unnecessary proposed work:
0 such actions identified in each answer. This is a review of proposals, not a
count of executed commands.

## Interpretation and limits

The revised skill passes this small regression check. It does not outperform the
baseline on these inputs. Both agents could derive the right decisions from the
supplied evidence; the cases were information-rich and do not test discovery of
missing node semantics from scratch.

The improvement delivered is explicit, reusable guidance for three demonstrated
failure classes. This run does not establish a speed gain, token saving, reduced
live failure rate, general superiority, or native contract safety. Comparable
command traces and timing were not collected. Do not infer efficiency from
response length or agent completion order. More independent cases/runs would be
needed to estimate a performance difference.

No production source, project task, wallet, credential, live runner or permission
was changed by this skill update. Historical native observations remain in their
own project evidence; the skill's counter still has local-only validation.
