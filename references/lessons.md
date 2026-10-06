# Lessons and diagnosis

These lessons combine public COTI interfaces with general engineering lessons from
private-contract work. Private project source, addresses, wallets, receipts, and
internal plans are intentionally not distributed with this skill.

## Evidence labels

- **Interface verified:** checked against the pinned library and compiled example.
- **Locally modeled:** exercised by a named local model; its limitations still apply.
- **Native observed:** requires an exact native candidate and retained receipts.
  This repository currently claims no native-observed result.
- **Engineering rule:** an implementation or diagnostic practice. It is not a
  statement about a specific node or cryptographic guarantee.
- **Project policy:** supplied by the current project; never inherited from this skill.
- **Unresolved:** an observation without a demonstrated cause.

## Reusable cases

| Case | Action that changes the result | Evidence boundary |
| --- | --- | --- |
| Confusing inputtext, garbledtext, and stored ciphertext | Check the library return types; persist only the appropriate stored representation. | Interface verified; native ownership still needs native checks. |
| Treating an empty storage slot as encrypted zero | Initialize through GC or explicitly handle the uninitialized case before onboarding. | Official initialization rule; local model tests the application's path. |
| A test accepts an input that native COTI rejects | Inspect the mock's auth, metadata, width, and ownership behavior before changing production validation. | A mock result cannot settle native validity. |
| An estimate and call disagree | Bind candidate/state, then check the path's RPC execution mode before adding a simulation gate or changing a guard. | Published node code can explain a method limitation; the live revision and native result still need evidence. |
| An isolated callee fits but its entry point fails | Compare consumed and minimum supplied gas across the actual call tree with the observed RPC capacity. | EIP-150 models and an endpoint-specific cap do not identify an unobserved native failing instruction. |
| A cancellation reader reports zero from a missing receipt | Use the stage-allowed reader; keep missing ciphertext unavailable and check independent accounting. | Unavailable, initialized zero, and verified decrypted zero are different states. |
| Matching ciphertext handles as if they were clear values | Use the protocol's authenticated logical identity or private equality operation. Do not assume independent encryption yields the same handle. | Engineering rule; choose the binding under current protocol authority. |
| A module fits alone but its deployment graph fails | Rebuild linked consumers and embedded children; measure real runtime and init code. | Complete candidate artifacts are required. |
| A cheaper primitive makes the overall path worse | Count conversions, storage, no-op, updates, terminal work, retries, and recovery. | Local estimates and native measurements remain separate. |
| Arithmetic improves a quote but breaks exact spending | Check conservation, final protection, atomic settlement, and complete refunds. | Approximation policy does not relax accounting. |

## Bounded diagnosis

1. Save the exact failing action, candidate, chain/block/time, public state, and
   error or receipt. Redact secrets and private signed inputs.
2. Compare the observed stage with its requirements, including expiry at the
   actual block timestamp. Do not reuse an old diagnosis from another candidate.
3. Check ABI/import identity and the failing predicate against the exact binary's
   source. Record RPC pruning, unavailable traces, and missing evidence.
4. Use a minimal reproducer or an existing focused test. Distinguish an
   application defect from an incomplete mock or an unproved native behavior.
5. Repair the demonstrated cause, preserve the invariant, and rerun the affected
   success and failure cases. Keep an unresolved frame labelled unresolved.

These three diagnostic cases are detailed in [native diagnostics](native-diagnostics.md).
The skill's [offline replay cases](../evals/CASES.md) test the decisions without
replaying a transaction or distributing project-private evidence.

## Keeping the skill useful

At a stable build checkpoint, consider whether a confirmed failure, successful
simplification, changed dependency, or repeated wasted work reveals a reusable
lesson. Keep it only if it changes a future decision. Record the supporting
source or reproducer, applicable versions, and the expected behavior. An
unresolved hypothesis remains in project evidence.

Finish the requested build step before doing skill maintenance. Within the
current task's authority, edit the repository source, preserve local changes,
and correct the relevant reference instead of adding duplicate rules. Add or
update a focused reproducer or decision replay when the guidance changes
behavior. Run affected checks and reuse unchanged evidence. Record results and
limits, version the change, and refresh the installed copy from that validated
revision. Publication and installation still require applicable user authority;
this skill does not grant it. If maintenance is outside the task's scope, record
one concise improvement candidate in the existing checkpoint and continue the
build.

Keep private project artifacts, wallets, secrets, product policy and live
permissions in their owning project. Put portable version-specific details in
references. Remove obsolete or redundant guidance through a recoverable Git
change. A skill should become more useful, not merely longer. Do not create a
separate lesson database, background job, or review gate for every test.
