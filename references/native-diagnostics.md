# Native diagnostics

Read this when RPC modes disagree, gas fit or action admission is unclear, or
a runner cannot verify private state or reconcile a pending action. Use the current project's source, authority,
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
sends still stop. A separate model-based trial requires the explicit conditions
below; an estimate failure cannot switch admission modes automatically.
Restricted traces do not justify bypassing access controls.

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
native path with fresh inputs and recovery. Stop on a failed estimate under the
current admission policy; do not increase limits silently or claim the old native
failing instruction is proved from a local trace. Never turn one observed RPC
ceiling into a COTI-wide limit.

### Explicit model-based admission for a diagnosed RPC limit

A demonstrated endpoint estimation limit can prevent an otherwise feasible phase
from receiving a native estimate. If current project authority explicitly permits
model-based admission, prepare a separate finite trial under that policy. Preserve
the failed run and its manifest. Reconcile any pending send first. This is not an
automatic fallback or permission to ignore an unexplained application revert.

Bind the model to the exact compiled call path, populated state, inputs, operation
metadata and pricing source. Include ordinary EVM costs, nested forwarding,
minimum supplied gas, complete phase cost, model uncertainty and required margin.
Identify unpriced operations and unsupported input ranges; reject them until the
model and authority cover them. Distinguish node-source tariffs from native
measurements. Aggregate calibration does not verify every primitive tariff or
attest the live endpoint binary, even when a filename says "measurement".

The new admission must identify the permitted phase and model, supplied-gas bound,
observed network limits, attempt/spend/time limits and direct recovery. Retain
fresh identity, revisions, deadline, nonce, balance, fee and protected-state checks;
keep estimates for other paths where their admission still requires them. Stop
on drift or an unexplained failure. Preserve owner holds and signing restrictions.

After a permitted native action, verify its canonical receipt and independent
accounting, and compare measured gas with the model. A successful unfunded
quote-and-cancel proves only that path; it does not prove funded refunds, other
phases, all input sizes, or the precise cause of an earlier failed estimate.

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

## Admission for each candidate, action and phase

A verified runtime establishes code identity. It does not admit every action or
prove its private inputs, gas fit, or recovery. Record candidate identity in the
project's existing deployment records or manifests. Use a registry only when
multiple candidates need one; a simple workflow does not require that structure.
Keep old identities available for historical reads and pending records.
Changing the default candidate must not silently rebind those records.

Bind each send decision to the chain, exact candidate and ABI, actor/session,
action and phase, full calldata or authenticated operation/context commitment,
and applicable expiry. A selector or global `candidateReady` flag is insufficient.
Some protocols learn the Accept context only after Quote is mined; check each
phase with its actual inputs. Recheck identity, state and permission before signing.

Keep gas evidence by phase. Separate a measured cost, a permitted supplied-gas
ceiling, a scoped reuse of older evidence, and a local trial value. Reuse must
identify the unchanged path and valid bindings. A local recovery result is not
native funded recovery; an unfunded cancel or a different capital exit is not
proof for that path. Missing proof is an evidence gap, not a demonstrated defect.
A ceiling alone cannot replace a failed fresh estimate or grant send permission.
Any model-based trial must meet the separate conditions above.

Enforce current holds in the existing execution path before estimation,
reservation or signing. If the project has an adapter and a shared sender,
enforce holds at both boundaries. These components are not required for a
simpler workflow. Check each consumer's own admission: permission for one action
must not enable other actions or consumers by inheritance.
Test the active hold, wrong candidate/phase/full call/session, expiry and failed
estimate in the affected sender path. Update stale fixtures to select their
historical candidate; do not weaken the current guard to make them pass.

## Pending records and private settlement

A saved pending status, consumed quote, timeout, or successful transaction receipt
does not alone prove private delivery or refund. Treat saved metadata as a lookup
aid. Bind the canonical transaction and receipt to the chain, candidate, full call,
mode and phase, and bind private reads to the authorized actor/session and
operation context. Use the protocol's stage-allowed protected results and
independent accounting before accepting a private terminal result.

If ciphertext is absent, malformed, or cannot be authenticated or decrypted,
retain unavailable or blocked verification. A capability reload or public status
refresh must not clear that state without new valid evidence. Verify a legitimate
encrypted zero under the protocol; do not substitute zero for a failed read.

When authority permits, reconcile an existing receipt through read-only paths
while sends remain held. Report public transaction status separately from private
accounting and signing readiness. Read-only reconciliation must not reserve a new
send, restore permission, or claim private settlement from public metadata.

An account, chain, wallet or session change invalidates prepared signing inputs.
Reconcile the old operation under its original identity; obtain the required
authorized context for private reads without weakening access controls. Do not
replay an unknown action. Test reloads after blocked verification, context changes,
a consumed quote without delivery proof, and a valid terminal proof. Correct a
test's unsupported completion expectation instead of bypassing the guard.
