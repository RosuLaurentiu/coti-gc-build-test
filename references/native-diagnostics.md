# Native diagnostics

Read this when an MPC call and an estimate disagree, a nested path fails fit, or
a runner cannot verify private state. Use the current project's source, authority,
and accepted evidence. The examples below do not grant live permission.

## RPC execution modes

The public COTI node source at commit
`df22d58e68b73845bda665646ccacb2b81b3a9cf` has distinct modes:

| Path | What the pinned implementation does | What a result can establish |
| --- | --- | --- |
| Ordinary call that only returns stored values | Uses the normal read path. | The returned public value or viewer ciphertext at that block. |
| `eth_call` that enters the MPC precompile | Returns `ErrInvalidCall` after operation/width checks. | A failed call can be a method limitation. It is not by itself a contract defect. |
| MPC gas estimation | Returns `fakeMPC` placeholder results; this implementation starts with value 1. | An estimate does not authenticate private inputs or prove real comparisons, arithmetic, or custody. |
| Included native transaction | Uses the transaction execution path. | Check its canonical receipt and independent state/accounting before accepting the operation. |

Sources: [mode dispatch](https://github.com/coti-io/gcEVM-node/blob/df22d58e68b73845bda665646ccacb2b81b3a9cf/core/vm/soda_extension_mpc.go#L1233-L1256),
[placeholders](https://github.com/coti-io/gcEVM-node/blob/df22d58e68b73845bda665646ccacb2b81b3a9cf/core/vm/soda_extension_mpc.go#L1393-L1418),
and [RPC mode flags](https://github.com/coti-io/gcEVM-node/blob/df22d58e68b73845bda665646ccacb2b81b3a9cf/internal/ethapi/api.go#L1089-L1098).
This pin identifies published code, not the live endpoint's revision.
A client version string alone does not bind that endpoint to this commit.
Recheck changed libraries, node versions, and provider behavior.

Before adding a simulation-success requirement, determine whether the exact path
executes MPC or only reads storage. Reuse an already supported runner when its
bindings remain valid. If an MPC call fails but estimation passes, compare the
same candidate, inputs and block where the methods support it; then check the
documented execution mode before changing contract protections.

When this method limitation is established for the path, correct only the
incompatible runner prerequisite. Keep calls for supported reads, strict fit and
headroom, fresh nonce/state checks, spend/attempt/time bounds, recovery capacity,
and canonical receipt plus independent accounting checks. Do not require an
unsupported MPC simulation to pass. Do not discard an unexplained application
revert or treat every COTI call as unsupported. Failed estimation and uncertain
sends still stop. Restricted traces do not justify bypassing access controls.

## Gas consumed, gas supplied, and RPC capacity

Record these quantities separately for the exact candidate:

- Modeled or measured gas consumed, including ordinary EVM work and MPC charges.
- Minimum gas supplied at the entry point for the complete call path.
- The endpoint's supported simulation/estimation budget.
- The transaction and block limits, plus the project's required headroom.

Under [EIP-150](https://eips.ethereum.org/EIPS/eip-150), a call cannot forward
all remaining parent gas. Nested calls can therefore require more supplied gas
than their total consumed gas. A primitive tariff subtotal, an isolated callee,
or a transaction below the block limit does not prove that the entry point fits
the endpoint's estimator. Do not substitute a larger request gas value for
evidence that the provider accepts that budget.

Where this is the suspected cause, inspect the exact call tree and applicable
forwarding rules. Reuse a recorded trace or focused model; retain its assumptions,
MPC tariff/version, ordinary costs, and success/failure boundary. Establish RPC
capacity with provider documentation or an authorized bounded public probe when
needed. A measured cap is specific to that endpoint and observation time.

Compare a proposed call-boundary change against the same baseline. Check behavior,
storage/context, linked runtime and init-code size, operation counts, consumed
gas, minimum supplied gas, and margin. Inlining may improve forwarding while
barely reducing consumption and increasing code size. It is not automatically
a cheaper complete operation.

A local fit model supports only its modeled path. A narrow margin must be stated
and assessed under the current project's bounds. Confirm a permitted finite
native path with fresh inputs and recovery; do not guess past a failed estimate,
increase limits silently, or claim the old native failing instruction is proved
from a local trace. Never turn one observed RPC ceiling into a COTI-wide limit.

## Runner time, reads, and resource lifetime

Sample one clock value when deriving related manifest issue/expiry fields.
Use the same units and bind any deadline conversion. Still take a fresh time
and admission sample before each send; an internally consistent old manifest can
be expired. Test clock movement and expiry without relying on wall-clock sleeps.

Distinguish a decrypted zero from unavailable or invalid evidence. A missing
envelope, zero raw ciphertext, decode error, or failed decryption is not a zero
balance or a successful refund. Treat an uninitialized value as a logical zero
only when the exact protocol and a verified public initialization marker establish
that rule. Otherwise keep the value unavailable and stop dependent accounting.

Read receipts through the methods allowed at the observed lifecycle stage.
For example, a destination receipt may be accessible after settlement but not
after cancellation. Use the supported principal receipt and independent token/
protected-state checks for that stage. Do not weaken contract access or substitute
zero for an inaccessible receipt. An unfunded cancellation cannot prove a funded
token refund.

Await asynchronous reads before closing their provider in `finally`. A provider
closed before its promise settles is a runner failure. It is not evidence of a
contract revert. Keep private values in memory; publish only the permitted result.

Run the affected focused cases: clock drift/expiry; missing or malformed
ciphertext; legitimate encrypted zero; supported and forbidden terminal reads;
provider lifetime; and uncertain-send reconciliation when the changed path uses
it. Reuse unchanged contract evidence. Add no general requirement for a fresh
deployment or full suite to repair a reader.
