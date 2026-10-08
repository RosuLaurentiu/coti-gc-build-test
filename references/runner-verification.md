# Runner verification

Use this for disagreement between local and native verification, or measured
runner overhead. Preserve the exact candidate and current authority.

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

Reproduce the old failure with the faithful reader, then repair only the proven
model or reader defect. Retain independent token-flow, private-accounting and
protected-state assertions. Cover other lifecycle actions that change the same
field, unaffected markets, and mutations of either or both copies. Matching two
copies is insufficient if both can contain the same wrong value.

If a mined transaction remains unverified, keep its original manifest, source and
journal history. Use a versioned repair and a supported read-only reconciliation
of that exact hash. Record the evidence amendment without rewriting the original
failure. A local pass does not accept native accounting or resume the batch;
future sends need their applicable fresh admission. Do not resend to fix a check.

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

When repeated verification of immutable accepted history is the proven cost,
consider reusing its result only with a reviewed complete dependency inventory.
Bind source and source-pin sets, saved candidate inputs, referenced paths,
manifests, journals, reconciliation records, terminal results, build information
and artifacts actually used. Check the inventory before and after initial
semantic verification, then verify content digests on reuse. Reject missing,
changed, added or redirected dependencies; an mtime or prior "accepted" label
is insufficient. A changed source/read set needs renewed review.

Keep the accepted result immutable and invalidate its context on drift or read
failure. This must not cache current permission, manifest expiry, chain/head,
nonce, balance, fees, private state, action fit or accounting. Keep those checks
at their required live boundaries.

Before consolidating repeated current-state reads, trace every use of the earlier
result, including calldata, model inputs, refresh hooks and authorization. Remove
only a comparison proved redundant for the named action and exact call. Do not
remove a read that supplies a distinct decision or execution input. Preserve the
complete final fresh check before signing, fresh admission and fit, and independent
post-receipt accounting. Other actions retain their required read schedule. Test
state drift and altered inputs; local ordering tests do not prove native latency.
This is not permission to cache current state or relax deadlines.

Keep an active run's inputs frozen. Integrate a change after a safe terminal
checkpoint and pending/funded reconciliation, with new source identities and
admission as required. Test dependency and saved-input mutations, unchanged-mtime
edits, initialization races, returned-object mutation and rejection after drift.
Reuse existing interfaces instead of adding a general caching framework.

A faster local guard is component evidence. Check the integrated validator and
measure a permitted complete run before claiming lower transaction latency or
that the full batch fits its deadline. Never extend expiry or remove fresh
checks to make a timing result pass.
