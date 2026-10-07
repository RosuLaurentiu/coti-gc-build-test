# v0.1.5 offline decision cases

These synthetic cases apply the skill to different private-contract tasks.
They contain no production inputs or live permission. Review the supplied
material, identify any supported defect, propose a bounded correction and useful
checks, and state what the evidence establishes. Do not execute or deploy code.

## PRIVATE-JOB-1

A private eligibility service exposes its job epoch and whether work is ready.
Eligibility results must remain private. The selected policy allows a public
early return when no work is ready. A ready job uses a fixed public capacity.

The same runtime and caller produced this local report:

| Run | Public epoch | Public ready before call | Private eligible | MPC calls |
| --- | ---: | --- | --- | ---: |
| A | 11 | true | true | 180 |
| B | 12 | false | false | 6 |

An engineer proposes padding every idle call to 180 operations and marking
privacy verified once the event names match.

A second fixture uses two fresh instances of the same runtime. Both have epoch
11, ready=true, the same caller, capacity, configuration and prior public state.
Only private eligibility inputs differ. Both have the same ordered MPC
operations, call roles, written slots and event schema. Their local receipt gas
is 410,000 versus 372,000. The mock stores clear values as fake ciphertext and
executes ordinary branches internally. No native run or receipt exists.

What should change, what should be compared, and what can the report claim?

## PRIVATE-PAYMENT-1

A private payment service promises that a successful recipient payout meets the
recipient's signed minimum, in integer token base units after the service fee.
Its supported token moves the requested amount exactly. The fee is 200 basis
points, rounded down. The gross allocation and signed minimum remain private.
A private failed condition must follow the service's existing fixed-shape
no-effect path. Failure must leave asset balances, fee credits and liabilities
unchanged. Publicly invalid requests may still revert under the selected policy.

This clear reference-model fragment mirrors the encrypted implementation:

```text
accept = gross >= minimumReceived
fee = floor(gross * 200 / 10000)
received = gross - fee
if accept:
    debitEscrow(gross)
    creditRecipient(received)
    creditService(fee)
```

The saved test used gross=100 and minimumReceived=97 and passed. A new request
uses gross=100 and minimumReceived=99. A developer suggests reducing the client
minimum automatically by the fee. For gross=49, the integer fee is zero.

Identify the supported correction and focused checks. This is local material;
no encrypted execution, token callback or native result has been tested.

## PRIVATE-ESCROW-1

A multi-stage private escrow records token principal, three remaining external
reservations, a public cleanup cursor, a request lock and native worker credit.
Returning the token principal on cancellation is allowed before cleanup finishes.
Each reservation still needs one successful cleanup call. Cleanup can fail and
must be retried. It relies on the saved reservation identity and revision.
The independent cleanup calls may happen in different transactions.

Before cancellation, 11 units of native work escrow remain. The agreed policy
pays 1 unit to the cancellation caller, reserves 2 units for each remaining
cleanup, and credits excess to the owner's withdrawal balance. These numbers
are specific to this synthetic protocol.

The proposed cancellation code aborts the coordinator, returns token principal,
credits the caller 1 and the owner 10, deletes the work record, and clears the
request lock. A new request can then replace the reservation identities.
Its test asserts only that token principal was returned. A cleanup receiver
can revert after the worker has written its next cursor and payment credit.

Review this design. Describe the accounting and lifecycle checks needed to
accept a local correction. Do not assume every escrow needs paid cleanup or
that this protocol's stages and fee constants apply to other contracts.
