# Admission and pending-state replay cases

Use the supplied skill to review the two cases below. These reduced fixtures
represent observed failure classes. Names, identifiers and gas values are
synthetic. No live endpoint, key, project source or private input is supplied.

For each case, state what the evidence permits, the cause of any incorrect
decision, the smallest correction, focused checks, and what remains unresolved.
Do not execute a transaction, change a project, or require a new framework.
Distinguish your proposal from work that has actually run.

## ADMIT-1

The registry has two explicit keys. `current` resolves to candidate B; `archive-A`
resolves to candidate A. All B runtime hashes match the new deployment manifest.
Historical pending records carry `archive-A`. The owner has kept connected-wallet
sends on hold. Read-only inspection is permitted.

The recorded evidence is:

| Operation | Supplied-gas ceiling | Evidence |
| --- | ---: | --- |
| B fast Quote / Accept | 72M / 72M | A native receipts, retained source comparison for the unchanged phase path; no B execution |
| B async Quote / Accept | 62M / 32M | B native receipts |
| B async unfunded cancel | 18M | B native receipt |
| B async funded principal recovery | 47M | Local compiled test; value selected for a future trial; no B native funded recovery |

An unrelated native capital-exit test also passed. The funding and owner consumers
have their own A-only eligibility predicate. The swap adapter accepts A and B
for local checks. The protocol obtains an Accept commitment from a mined Quote.

A proposed shared helper is:

```js
function prepare(capability, request) {
  if (!capability.runtimeVerified || !capability.swapAvailable) throw Error("not ready");
  return { ...request, candidate: capability.current, gasLimit: 72_000_000n, readyToSign: true };
}
```

Funding, owner actions and swaps would all call this helper. It checks the method
selector but does not bind the full calldata, action phase, actor/session or
expiry. The active hold is shown in the UI; the helper does not read it. A failed
estimate can be replaced with the returned gas limit.

A historical A test stopped passing after it used the new default `current` key.
A proposed test fix is to let B pass every A eligibility check.

Review the helper and test fix. State whether the runtime check and recorded gas
evidence permit the proposed actions, and how the Accept decision should be made.

## PENDING-1

A local pending record was saved for chain C, candidate B, wallet W, session S1,
mode Fast, operation Q, phase Accept. It records the intended full-call hash and
transaction hash T. Public reconciliation finds T in a canonical block, with
receipt status 1 and the recorded destination, selector and full-call hash.
The quote's public status is `consumed`.

The protocol exposes separate, authorized encrypted principal/destination results
at specific lifecycle stages. Its public `consumed` state has no delivery amounts.
The destination ciphertext read is malformed; decryption does not return a value.
No independent private balance or accounting check has succeeded. The stored
verification state is `verificationBlocked`.

On restart the capability endpoint reports matching runtimes and
`swapAvailable: true`. The connected wallet has changed to W2/session S2.
A send hold is still active; read-only receipt inspection is permitted.
The pending loader currently does this:

```js
if (receipt.status === 1 && quote.status === "consumed" && capability.swapAvailable) {
  pending.status = "complete";
  pending.privateAccountingVerified = true;
  pending.verificationBlocked = false;
  pending.readyToSign = true;
}
```

A test expects this transition to succeed after every capability reload. If the
private read fails again, the recovery UI offers to submit the same action from
the current wallet using the old prepared input.

Review the transition and retry behavior. State what can be recorded now, what
new evidence would justify a terminal private result, and the tests needed.
