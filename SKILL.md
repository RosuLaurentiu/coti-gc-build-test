---
name: coti-gc-build-test
description: Build and improve COTI Solidity contracts with garbled-circuit privacy. Use for contract design, MpcCore value lifetimes, private arithmetic and accounting, gas and code-size efficiency, and diagnosis of local/native execution differences.
metadata:
  version: "0.1.8"
---

# COTI GC Build and Test

Build correct, private and efficient smart contracts. Help the user choose a
simple design, avoid known COTI mistakes, and deliver working contract behavior.
Tests support that result. Measure progress by usable behavior and demonstrated
improvements in cost or reliability, not by test counts or verification artifacts.

## Build the requested capability

Read the project instructions, current task, existing implementation and relevant
library interfaces. Recover pending operations and owner holds before live work.
Use the project's tools and existing checkpoint; keep planning brief and scoped
to the requested result. This skill requires no particular framework or planner.

Choose the simplest design that meets the behavior, privacy and accounting rules.
Reuse existing modules and runner interfaces. Keep responsibilities clear; add an
abstraction only when it solves a current need. Routine standard-token operations
can use the project's dedicated tools.

Use [GC rules](references/gc-rules.md) for value lifetimes, ciphertext ownership,
private arithmetic and viewer access. Check API signatures in the installed
package. Define what must remain private and what public observations may reveal.
A secret-dependent result, revert or work shape can disclose information; apply
the project's threat model rather than claiming complete secrecy.

For asset flows, preserve exact debits, credits, fees, refunds and rollback.
Choose widths, scales and rounding for the supported amount range. Numerical
approximation must not weaken spending limits or recipient guarantees.

Improve cost where it affects the requested path: avoid unnecessary secure
operations, conversions, storage and module calls. Assess tradeoffs across the
complete operation, including no-fill and recovery. Use [build and test](references/build-test.md)
for linked runtime/init-code fit and complete cost measurement. A cheaper primitive
or a smaller source file does not prove a cheaper or deployable contract.

## Check the changed behavior

Select only the checks needed for the changed risk and the requested result.
Use existing tests and runners. A new harness, wrapper, evidence package or review
layer needs a concrete defect or requirement that existing tools cannot cover.
Fix that gap with the smallest useful change, then resume product integration.
References are conditional guidance, not a checklist to run on every task.

Compile the affected linked graph when contract code changes. Check the changed
arithmetic, access, lifecycle and accounting boundaries with focused tests. Exercise
actual module interfaces when integration changes. State mock limits: a local model
does not prove native encryption, authentication, GC lifetime or transaction fit.

When the requested result needs native execution and authority permits it, use a
bounded run on the exact candidate. Keep fresh state, nonce, fee, expiry, fit and
spending checks, recovery capacity, canonical receipts and independent accounting.
Stop on privacy/accounting failure, an unexplained revert, uncertain send or failed
fit. Reconcile before retry; never weaken a guard merely to make a run pass.

Reuse unchanged accepted evidence within its proven scope. Broaden checks only
for an affected risk or an explicit project gate. Once required checks pass,
continue to the requested working path; do not start another general proof cycle.
Preserve user-acceptance and release gates, including security review when required.
The skill grants no permission to sign, deploy, spend, publish or change trust rules.

## Diagnose a specific failure

Use [lessons and diagnosis](references/lessons.md) for a mismatch with a mock,
estimate or earlier run. Check the exact compiled/deployed candidate and preserve
the failed evidence. Repair the demonstrated cause with a focused regression.
An unresolved cause must stay unresolved; a selector alone does not identify it.

Read [native diagnostics](references/native-diagnostics.md) only for relevant RPC,
gas-fit, admission, reader or pending-settlement problems. Read
[runner verification](references/runner-verification.md) for a model/reader mismatch
or measured runner overhead. Keep diagnostic work bounded by the build task.

## Finish with a usable result

Report the behavior delivered, checks, measured cost changes, remaining limits
and next action in the existing task or checkpoint. Keep local, native and release
claims distinct. Keep secrets and private inputs out of reports.

[PrivateCounter](assets/examples/PrivateCounter.sol) is a small version-bound GC
example, not a custody template. Read [validation scope](VALIDATION.md) before
reusing its local results. Apply the [learning rule](references/lessons.md#keeping-the-skill-useful)
when useful evidence warrants a small skill correction; keep maintenance from
displacing the requested build.
