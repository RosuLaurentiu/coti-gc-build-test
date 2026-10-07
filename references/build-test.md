# Build and test

Use only the sections that apply to the requested change.

## Identify the candidate

Record source or working-copy hashes, dependency lock, compiler and settings,
linked libraries, ABI, storage layout, constructor arguments, and runtime identity.
For native work, also identify network, chain ID, genesis or equivalent network
binding, addresses, and the observation block. Never diagnose a deployed binary
from an unrelated newer source tree.

Compile all affected consumers after changing a linked module. Check runtime size
and complete init code, including constructor arguments, against the target
network's limits and the project's growth margin. A file split is not proof of a
smaller runtime. Inspect emitted artifacts and source maps when duplication is
suspected. A constructor-created child must match the image embedded in its actual
parent compilation, including links and immutables.

## Local evidence

Use a clear reference model for math and invariants. Test boundaries and
adversarial state changes, not just a selected happy path.

For each mock, list supported operations, widths, auth behavior, ciphertext
ownership, persistence, and overflow behavior. A plaintext or handle model can
test application control flow. It does not establish native encryption, signature
validation, GC lifetime, privacy, native gas, or node behavior. Do not silently
extend the scope of a passing result. When model and reader agree but native
verification fails, check their independence using [runner verification](runner-verification.md).

For accounting paths, as applicable, check:

- Successful debit, credit, fee, and refund conservation.
- Zero-output behavior and the agreed charge rule.
- Stale state, repeated calls, expiry boundaries, cancellation, and recovery.
- Both transfer-leg failures and full atomic rollback.
- Concurrent or changed state and preserved liabilities.
- Unauthorized users, recipients, signature domains, and replay restrictions.

Cheap checks should catch wrong ABI identities, missing mock operations, stale
imports, and changed storage layouts before a long suite. Reuse supported runner
exports. Do not extract and evaluate source strings to assemble a runner.

## Compare privacy outcomes

When a change can expose a private result, compare the same candidate, caller,
public inputs, configuration, work class and prior public state. Vary only the
secret under test. A ready job and an idle job can legitimately take different
paths under the selected disclosure policy; that comparison cannot isolate a
secret's effect.

Inspect the relevant observable surface: ordered secure operations and calls,
storage access, public results, errors, events, transaction count and timing.
Matching event names alone is insufficient. Separate production-frame evidence
from plaintext-mock internals. A mock gas difference can be a diagnostic lead;
neither that difference nor structural parity proves native leakage or privacy.
Use the current threat model to select the observations and native checks.

## Check the promised asset amount

When a contract promises a minimum amount received, apply the final check to
recipient net base units after the applicable fees and rounding. Do not lower a
signed bound to fit an implementation. Keep internal gross accounting distinct
from the recipient guarantee and verify their exact conservation.

Test the exact accepted boundary, one unit below, zero and fee-rounding edges.
For example, gross 100 minus fee 2 cannot satisfy a net minimum of 99. These
numbers are illustrative, not a fee policy. Use the admitted token's actual
transfer semantics; a nominal transfer is insufficient if that token can deduct
another fee. Preserve the selected privacy and failure behavior. An encrypted
failure may require a fixed-shape no-effect result rather than a public revert.

## Preserve recovery obligations

For a multi-stage operation, list what survives cancellation or settlement:
principal, fees, worker credits, reserved cleanup funds, external reservations
and locks, as applicable. Returning principal does not prove every obligation is
resolved. Retain the state and funding needed to finish them before deleting or
reusing the work identity. Protect affected resources from mutations that would
invalidate the recovery path; choose the mechanism for the actual protocol.

Test partial completion, failure after writes, retry, replay, conflicting state
changes and final release. Each failed transaction must preserve its relevant
pre-call accounting and external state; earlier successful transactions remain
committed. Catching an external revert does not undo earlier caller writes;
propagate the failure or verify safe handling of those writes. Check no double
debit or credit and exact remaining liabilities.
An expired lock is not automatically reusable. Keep cleanup from stranding the
owner's permitted exit. Paid cleanup, particular stages and public lock designs
are protocol choices, not universal requirements.

## Native admission

Use current project authorization; preserve specific holds. The skill creates no
standing live permission. A generic example is not automatically covered by a
project's DEX-only Testnet permission.

Before an authorized run, bind exact actors, inputs, target, actions, fresh
nonces/balances/fees, spend/attempt/time limits, transaction fit, confirmation
policy, and direct recovery. Keep one sender owner per nonce stream. Reserve the
funds and attempts needed for recovery. Never commit secrets or signed private
inputs to the evidence package.

Before adding an MPC simulation prerequisite or a private-state read, check the
[native diagnostics](native-diagnostics.md) for supported RPC modes, clock
sampling, lifecycle access and unavailable ciphertext. Reuse established checks.

Send finite supported sequences with a fresh admission check before each send.
After confirmation, reconcile receipts and independent accounting. If a send is
uncertain, reconcile its nonce/hash before considering any retry. For measured
admission overhead, separate unchanged historical checks from fresh conditions
using [runner verification](runner-verification.md#measured-admission-overhead).

## Cost and estimation

Measure the complete journey: setup attributable to the operation, input
validation, conversions, private computation, storage, module calls, terminal
delivery, updates, no-fill, retries, and recovery where relevant. Record total gas,
peak transaction usage, transaction count, wall time, observed blocks, actual
charge/output/refund, and sample count.

A table of GC operation costs is an estimate, not complete transaction fit.
Splitting work can reduce peak usage and increase total cost or latency.
[Official cost table](https://docs.coti.io/coti-documentation/build-on-coti/core-concepts/secure-operations-and-gas)

Separate gas consumed from minimum supplied gas through nested calls, RPC
simulation capacity, and transaction/block limits. Use the exact call tree and
check [forwarding and estimation](native-diagnostics.md#gas-consumed-gas-supplied-and-rpc-capacity)
when an isolated callee passes but the entry point fails.

The counter's estimator test models a placeholder boolean result. The
[pinned node mode evidence](native-diagnostics.md#rpc-execution-modes) explains
why an estimate does not validate real private computation. Verify the applicable
version and path. Retain rejection checks and measured headroom; never bypass an
unexplained revert merely because another RPC method succeeds.

## Acceptance

Use separate labels: compiled, locally verified, native verified, user accepted,
and release accepted. Each result needs its exact candidate and scope.
Compilation does not prove deployability; deployment does not prove a completed
operation; an owner trial does not replace security or production acceptance.

Stop when the requested capability is complete or a specific unresolved defect
prevents it. Save one concise checkpoint with evidence and the next action.
Do not invent another planner, duplicate whole test suites, or broaden the product.
