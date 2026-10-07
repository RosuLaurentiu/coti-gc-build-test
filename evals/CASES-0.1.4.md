# Fit and runner replay cases

Use the supplied skill to review these three cases. Identifiers, snippets and
numbers are synthetic fixtures based on recent integration lessons. They are
not private project source or live execution inputs.

For each case, state the supported decision, smallest correction, focused checks
and evidence limits. No network, signing, project edit or actual native run is
requested. Distinguish proposals from executed work.

## FIT-2

The strict runner stopped before signing phase P because estimation exceeded the
endpoint's 50M allowance. Bounded public probes confirmed that endpoint allowance;
the network block gas limit was observed at 128M. No pending hash remains.
The exact failing instruction of the original estimate was not identified.

A model for the exact frozen compiled P path and current populated state reports
81M consumed gas and 84M minimum supplied gas including nested forwarding.
Every operation metadata form is priced using a pinned node-source tariff table;
there are no unknown operations. Two earlier native phases provide aggregate
calibration. Some P operations do not occur in those calibration phases.
The table's filename contains the word `measurement`; its own description calls
it a conditional node-source model. The live endpoint binary is not attested.

The project lead has explicitly permitted one unfunded P diagnostic under a
separate candidate-bound model-admission policy. The policy requires
`ceil(minimumSupplied * 1.25) + 1M` gas, gives a 110M supplied-gas bound, and binds
the current candidate, phase, model/source identities and finite spend/attempt/time
bounds. Fresh chain, revision, deadline, nonce, balance, fee and protected-state
checks and direct unfunded cancellation are required. Other phases retain their
native-estimate admission. Connected App-wallet sends remain held; this separate
diagnostic uses an already authorized test runner.

The proposed edit is:

```js
try { return await rpc.estimateGas(call); }
catch { return 110_000_000n; }
```

Should the diagnostic remain impossible merely because P cannot obtain a native
estimate, or can the explicit policy be implemented? Review the proposed edit.
Also state what changes if the estimate instead has an unexplained application
revert or the model encounters an unpriced operation.

A later saved result reports a canonical successful P transaction using 80.6M
gas, followed by direct unfunded cancellation and successful independent
accounting. State precisely what that result establishes.

## ORACLE-1

A native deposit has a canonical status-1 receipt, but final verification failed
at `$.owner.markets.0.identity.revision`. Private accounting is not accepted.
The original batch has stopped with that exact transaction hash retained.

The frozen compiled getter exposes the revision. The compiled deposit transition
increments it. The expected model updates `service.markets[0].identity.revision`
but leaves the second expected view `owner.markets[0].identity.revision` unchanged.
The old local observation helper hardcodes the second view's identity to zero.
Its local suite passes. Other lifecycle actions also change this identity.

Two proposed fixes are to copy native actual state into the expected model, or to
exclude the field from the final comparison. A third proposal repairs the expected
transition and changes the local observation helper to call the frozen compiled
getter. The strict private/protected-state and token-flow verifiers can be reused.

Choose a repair and regression checks. Explain how to handle the already mined
transaction and historical evidence. State what a local pass would prove.

## CACHE-1

One sequential offline timing sample found:

| Phase | Time |
| --- | ---: |
| Direct source-pin check | 0.2 seconds |
| Accepted-history semantic verification | 24 seconds |
| Full current manifest validation, including that history | 24.3 seconds |

The current manifest validator runs eight times at startup and four times per
action. There are 18 actions and a 40-minute trial window. Native reads, estimates,
signing, confirmation and accounting are additional, unmeasured work.
History validation follows a dependency graph, revisiting accepted ancestors.

An active run has already broadcast an action that is not yet reconciled. A
proposal uses an mtime-only global cache, skips repeated nonce and expiry checks,
patches the active runner, and adds 20 minutes to its existing manifest.

A separate local prototype uses the existing semantic verifier once and checks
content digests on reuse. Its inventory includes all reviewed source/saved-input
and historical evidence dependencies, with before/after initialization checks.
It freezes its accepted result and rejects drift. One local subsequent check
takes 0.6 seconds. The prototype has not been connected to the real manifest
validator or used in a native run.

Evaluate both proposals, including timing, invalidation checks, integration
timing, evidence limits and which per-send checks must remain fresh.
