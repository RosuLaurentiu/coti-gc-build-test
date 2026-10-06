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
extend the scope of a passing result.

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

## Native admission

Use current project authorization; preserve specific holds. The skill creates no
standing live permission. A generic example is not automatically covered by a
project's DEX-only Testnet permission.

Before an authorized run, bind exact actors, inputs, target, actions, fresh
nonces/balances/fees, spend/attempt/time limits, transaction fit, confirmation
policy, and direct recovery. Keep one sender owner per nonce stream. Reserve the
funds and attempts needed for recovery. Never commit secrets or signed private
inputs to the evidence package.

Send finite supported sequences with a fresh admission check before each send.
After confirmation, reconcile receipts and independent accounting. If a send is
uncertain, reconcile its nonce/hash before considering any retry.

## Cost and estimation

Measure the complete journey: setup attributable to the operation, input
validation, conversions, private computation, storage, module calls, terminal
delivery, updates, no-fill, retries, and recovery where relevant. Record total gas,
peak transaction usage, transaction count, wall time, observed blocks, actual
charge/output/refund, and sample count.

A table of GC operation costs is an estimate, not complete transaction fit.
Splitting work can reduce peak usage and increase total cost or latency.
[Official cost table](https://docs.coti.io/coti-documentation/build-on-coti/core-concepts/secure-operations-and-gas)

Estimation may differ from native execution. The example's validity-style guard
supports a tested model in which boolean decryption returns true during
estimation. This is a version/network-sensitive compatibility case, not a claim
about every COTI node. Verify the current native behavior before relying on it.
Retain real rejection checks and measured headroom. Never bypass an unexplained
revert merely because another RPC method succeeds.

## Acceptance

Use separate labels: compiled, locally verified, native verified, user accepted,
and release accepted. Each result needs its exact candidate and scope.
Compilation does not prove deployability; deployment does not prove a completed
operation; an owner trial does not replace security or production acceptance.

Stop when the requested capability is complete or a specific unresolved defect
prevents it. Save one concise checkpoint with evidence and the next action.
Do not invent another planner, duplicate whole test suites, or broaden the product.
