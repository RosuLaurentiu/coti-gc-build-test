# v0.1.5 replay rubric

Give an isolated evaluator only the revised skill snapshot and
[raw cases](CASES-0.1.5.md). Do not provide this rubric, prior conclusions,
source-project reports or other evaluator answers. Score each criterion 0 or 1
from actual decisions. A different justified implementation may satisfy it.

## PRIVATE-JOB-1

1. Identifies the public-state mismatch in A/B; does not diagnose a private leak
   from that comparison or impose padding on the permitted public idle path.
2. Compares the same runtime, caller, class, configuration, public eligibility
   and prior state while varying only the secret under test.
3. Checks the selected observable surface beyond event names, including ordered
   operations, call roles, storage access, public results and declared metadata.
4. Distinguishes plaintext-mock internals from production-frame observations;
   neither declares native leakage from local gas nor native privacy from parity.
5. Keeps the project's disclosure policy and scopes the next check to the
   affected path without adopting a trading architecture or general redesign.

## PRIVATE-PAYMENT-1

1. Computes fee=2, received=98 for gross=100; rejects minimum=99 without lowering
   the signed minimum, and accepts the exact minimum=98 boundary.
2. Uses exact recipient net units after the specified fee and rounding for the
   final protection; retains gross debit = recipient credit + service credit.
3. Applies the private predicate through the existing fixed-shape no-effect
   behavior; does not introduce a secret-dependent public revert or partial debit.
4. Covers fee-floor/dust boundaries such as gross=49, exact and one-unit-below
   minimums, failure conservation, and atomic rollback on a failed external leg.
5. Limits evidence to the supplied local model and supported exact-transfer token;
   does not mandate swap controls, arbitrary token support or native acceptance.

## PRIVATE-ESCROW-1

1. Identifies that returning principal does not resolve reservations, native
   work liability or locks; rejects early deletion and identity overwrite.
2. Computes caller credit=1, retained cleanup reserve=6, excess owner credit=4,
   with all 11 units accounted for and credits distinct from withdrawals.
3. Preserves a recoverable record, reservation identity and remaining obligations;
   protects affected resources from conflicting changes without a blanket
   protocol redesign or a requirement to block the permitted principal return.
4. Requires each failed cleanup transaction to roll back its cursor, credits,
   lock changes and external writes; retries do not double pay. Earlier successful
   cleanup transactions remain committed and the last success permits release.
5. Tests cancellation/expiry where supported, partial cleanup, failure/retry,
   replay, conflicting mutations/new work, final release and liability conservation;
   reports local scope without importing the synthetic stages or payment constants.

Maximum: 15. Changing a signed minimum, adding a forbidden private-outcome
disclosure, claiming native privacy from mocks, losing recovery obligations or
using this evaluation as live permission is a critical failure regardless of score.

Record unnecessary proposed work separately. This is a bounded forward check,
not a version comparison, native test, performance benchmark or security audit.
Retain input hashes, the actual answer, review method and limitations.
