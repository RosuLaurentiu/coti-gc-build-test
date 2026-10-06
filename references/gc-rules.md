# GC rules

The example baseline is `@coti-io/coti-contracts@1.2.0` with Solidity
`0.8.19`. This is a tested example dependency, not a requirement to downgrade a
project. Inspect the installed source and lockfile before applying a rule to a
different version.

## Value lifecycle

| Value | Purpose | Required handling |
| --- | --- | --- |
| `itUint64` and related input types | Ciphertext plus input authentication | Validate with the installed `validateCiphertext` API before computation. Use the project's SDK to create real native inputs. |
| `gtUint64` and related garbled types | Computation during one transaction | Use during that transaction. Do not persist or reuse in a later transaction. |
| System `ctUint64` | Stored encrypted value for the creating contract | Obtain through `offBoard`; later use `onBoard` from the owning contract. |
| User `ctUint64` | Value encrypted for a designated user | Obtain through `offBoardToUser`; use the user's supported SDK decryption path. It is not system ciphertext. |
| `utUint64` | System and user ciphertext pair | In this baseline, `offBoardCombined` creates both representations. |

COTI documents transaction-local garbledtext and contract-scoped ciphertext.
Pass garbled values across contract calls within the transaction when supported.
Do not hand another contract system ciphertext and assume it has the same owner.
[Type lifetime and ownership](https://docs.coti.io/coti-documentation/build-on-coti/guides/dos-and-donts/proper-use-of-types)

Zero storage bits are not an encrypted zero. Initialize a stored private value
through a valid GC conversion, or use a reviewed uninitialized-state branch before
onboarding it. Apply this to each new mapping entry.
[Initialization](https://docs.coti.io/coti-documentation/build-on-coti/guides/best-practices/careful-onboarding)

## Public constants, decryption, and viewers

`setPublic64(uint64)` converts a clear input into garbledtext. It does not reveal
an existing secret. `validateCiphertext(itUint64)` returns `gtUint64`, not an
input structure or a stored ciphertext. The baseline APIs use `onBoard`,
`offBoard`, and `offBoardToUser` with this capitalization.
[MPC Core signatures](https://docs.coti.io/coti-documentation/build-on-coti/tools/contracts-library/mpc-core)

Do not return decrypted private balances through an RPC read. An RPC caller can
supply a `from` address; an apparent `msg.sender` check is not a private
read channel. Return ciphertext encrypted for the authorized viewer. Derive the
viewer from established authority, not an unchecked recipient parameter.
[Private reads](https://docs.coti.io/coti-documentation/build-on-coti/guides/best-practices/careful-decrypting)

Solidity `private` controls source-level access. It does not encrypt storage.
Contract addresses, senders, selectors, transaction timing, and other public
metadata still require a stated disclosure policy. A revert driven by a secret
reveals the tested condition. Only use that behavior when the product permits it.

## Arithmetic and selection

- Define base units, supported range, intermediate width, and rounding direction.
  Token decimals alone do not prove that a chosen encrypted width is sufficient.
- Use the actual GC overflow semantics. Solidity's normal checked arithmetic does
  not automatically protect an operation performed inside a precompile.
- Check zero denominators, underflow, maximum inputs, intermediate products,
  scaling conversions, and cumulative rounding.
- Validate mux argument order. The documented baseline selects the first value
  when the bit is false and the second when true. Test both branches. Do not copy
  a tutorial expression without checking its signatures and intended result.
- When using an encrypted overflow bit, enforce the chosen failure behavior.
  Merely calculating the bit provides no protection.
- Approximate selection or price math must not produce approximate token spending.
  Apply exact final accounting and the user's actual protections.

[Operations and costs](https://docs.coti.io/coti-documentation/build-on-coti/core-concepts/secure-operations-and-gas)
and [overflow guidance](https://docs.coti.io/coti-documentation/build-on-coti/guides/best-practices/check-overflow)
are useful entry points. Verify examples against the installed library; prose or
sample code is not compilation or native execution evidence.
