# Runner verification

Use this only for a model/reader mismatch or measured runner overhead. Repair
the affected path with existing interfaces, then return to the requested build.
This reference does not require a new verification subsystem.

## Independent expected state and observation

A model and a local reader can agree because both omit the same state change.
If a native comparison fails, report safe field paths and error classifications
without dumping private actual/expected values. Check the exact getter and
compiled transition before assigning the defect to the contract.

For each affected observation, use the real compiled getter where practical.
Do not hardcode a changing revision or feed the expected model back into the
observation. If one logical value occurs in multiple views, derive every expected
copy from the protocol transition; verify market/operation binding and baseline
consistency. Do not normalize observations to match an expected value.

A zero economic change can still re-encrypt a stored value. Determine the fields
written by the exact compiled action, branch and direction before allowing raw
ciphertext differences. Keep all other protected fields fixed. Independently
verify logical amounts and token flows; a permitted ciphertext change does not
prove unchanged value. Check zero-change execution, an unexpected field write
and a wrong logical amount. Do not allow the union of unrelated write sets.

Reproduce the old failure with the faithful reader, then repair only the proven
model or reader defect. Retain independent token-flow, private-accounting and
protected-state assertions. Cover other lifecycle actions that change the same
field, unaffected markets, and mutations of either or both copies. Matching two
copies is insufficient if both can contain the same wrong value.

If a mined transaction remains unverified, preserve its original inputs, source
identity and journal. Repair the supported checker and reconcile that exact hash
read-only. Use existing version control or required snapshots to retain old source;
a new runner version is needed only when a consumer requires different behavior.
Keep the original failure. A local pass does not accept native accounting or
resume sends. Do not resend to fix a check; future sends need fresh admission.

## Measured admission overhead

Measure runner work separately from contract gas, network confirmation and wallet
interaction. Count startup and per-action invocations: a moderate check repeated
through a dependency graph can consume the trial's expiry window. Include reads,
estimates, reconciliation and recovery when assessing the remaining time. State
sample counts; an extrapolation is not a completed-run measurement.

Count logical RPC operations separately from HTTP requests, including provider
polling and retries. Fewer HTTP requests do not prove a faster reader: batching
delays can accumulate across serial calls. Compare complete observations at the
same canonical block with unchanged fields and accounting checks. Isolate the
transport option under test, keep timing-only metadata separate, and measure
complete latency as well as request counts. A provider setting is not a universal
optimization or proof that the whole operation meets its deadline.

First remove a proven duplicate within the affected operation. Reuse its verified
immutable result through the existing interface when the input and dependency
contents and relevant canonical proof still match. Preserve independent observations.
Reject reuse on changed inputs or failed checks; a timestamp or prior accepted
label is insufficient. Use existing identity records rather than building a new recursive
inventory or cache unless that is the specific task.

Keep fresh permission, expiry, chain/head, nonce, balance, fees, private state,
action fit and accounting at their required live boundaries. Before consolidating
a current-state read, check every consumer: it may supply calldata, model input or
authorization. Remove only the comparison proved redundant for that exact action.
Retain final signing checks and independent post-receipt accounting.

Keep active-run inputs frozen. Integrate repairs after pending/funded reconciliation
at a safe checkpoint. Run focused drift and mutation cases for the affected reuse
or read boundary. Preserve required historical evidence; do not create another
wrapper or full evidence package for each repair.

Measure the complete affected path before claiming lower latency or deadline fit.
Local timing remains component evidence. Never extend expiry or remove fresh
checks to make a timing result pass. Stop this optimization when it resolves the
named build blocker or delivers the requested measured improvement.
