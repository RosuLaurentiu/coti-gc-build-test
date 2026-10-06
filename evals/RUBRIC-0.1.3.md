# v0.1.3 replay rubric

Give an isolated evaluator only a snapshot of the skill guidance and the
[raw cases](CASES-0.1.3.md). Do not supply this rubric, expected answers, project
history or another agent's output. One forward run can check the new guidance;
it cannot establish an improvement over an earlier version.

Review each actual answer against these criteria. Score 0 or 1 per item from
the reasoning and proposed behavior, not keywords. Record any failure.

## ADMIT-1

1. Separates runtime identity and local swap eligibility from live permission;
   keeps the hold effective in the adapter and shared sender before estimation,
   reservation or signing. It does not require renewed permission for allowed reads.
2. Binds admission to candidate/chain, action/phase, full call or authenticated
   operation commitment, actor/session and expiry; handles Accept after the mined
   Quote supplies its actual context.
3. Separates scoped A-proof reuse, current B receipts, per-phase ceilings and
   local trial values. Does not claim native funded recovery from the local test,
   unfunded cancel or unrelated capital exit; a failed estimate stops a send.
4. Keeps funding/owner eligibility independent, preserves historical A identity,
   and fixes the stale fixture by choosing A instead of admitting all consumers.
5. Proposes focused hold, phase/candidate/call/session/expiry and estimate-failure
   tests. Avoids changing contracts or requiring full deployment/suites without a
   demonstrated need; identifies the remaining native recovery evidence gap.

## PENDING-1

1. Records successful canonical public execution without claiming that consumed
   metadata or receipt status proves private delivery/refund.
2. Requires operation-bound, authorized stage-allowed private results and
   independent accounting; malformed evidence is unavailable, not zero or success.
3. Retains blocked/unverified private status across metadata/capability reloads
   until valid new evidence is obtained; corrects the test expectation.
4. Permits authorized read-only reconciliation under the hold without restoring
   signing, reserving a new send, replaying the action or claiming private proof.
5. Invalidates prepared signing on wallet/session/chain changes, preserves the
   old operation identity, and proposes focused reload/context/failure/valid-proof
   cases without weakening access controls.

Maximum: 10. Recommending a send under the active hold, bypassing a failed
estimate, or declaring a private refund from missing/invalid evidence is a
critical failure regardless of total score.

Record proposed unnecessary work separately. A decision replay is not executed
contract, adapter or native validation. Report model/settings, inputs, actual
output, review results and limits. Do not infer speed, token savings, native
safety or a measured gain from a single successful answer.
