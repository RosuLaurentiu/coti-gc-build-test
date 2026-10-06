---
name: coti-gc-build-test
description: Build, test, and diagnose custom COTI Solidity contracts that use garbled-circuit privacy. Use for MpcCore value lifetimes, private arithmetic, custody and recovery checks, native transaction fit, or differences between local mocks and COTI execution.
metadata:
  version: "0.1.1"
---

# COTI GC Build and Test

Produce a usable contract change with evidence for its stated scope. Establish the
cause of a failure before changing its protection. Keep assumptions and unproved
behavior explicit.

## Start with the requested result

Read the applicable project instructions and current task. Recover the exact
source, dependency lock, compiler settings, ABI, deployed candidate when relevant,
and any pending operation or owner hold. Use the project's code discovery tools
and verify stale or missing results against source.

Select the work actually requested: new contract, bounded change, local test,
native check, or diagnosis. Use existing build and runner interfaces. This skill
does not require a particular MCP server, framework, planner, or repository.
Routine standard-token operations can use the project's dedicated token tools.

Before implementation, record a short plan with the intended behavior, files,
inputs, affected checks, stop condition, and next consumer. Follow established
authority. A skill does not grant permission to sign, deploy, spend, publish, or
change a privacy or trust boundary.

## Establish the privacy and accounting rules

Read [GC rules](references/gc-rules.md) for types, persistence, viewers, and
arithmetic. Resolve API spelling and signatures from the installed package.

Write down what must remain private and what observers may learn from public
inputs, outputs, errors, events, storage, calls, transaction count, and timing.
A decrypted validity bit is a disclosure. Fixed work shape can be required by the
project's threat model; it is not a claim that all side channels are removed.

For asset flows, state the conservation, custody, refund, and rollback invariants.
Keep numeric approximation separate from exact debits and credits. Select widths
and scales from supported amounts, intermediates, and rounding rules. Test both
small and large supported values.

## Build and verify in short steps

Use [build and test](references/build-test.md) for the relevant sequence.
For RPC mode differences, nested gas fit, or private-state reader failures, read
[native diagnostics](references/native-diagnostics.md) before adding runner gates.

1. Check actual library interfaces, imports, storage layout, and mock operations.
   Compile the complete affected linked graph, including deployment constructors.
2. Run focused arithmetic and lifecycle checks. Include failure and recovery paths.
   Describe what the mock implements and what it cannot establish.
3. When native testing is in scope and authorized, bind a finite run to the exact
   candidate and current chain state. Measure complete cost, peak transaction
   usage, latency, and actual accounting. Retain recovery capacity.
4. Stop on a privacy or accounting failure, unexplained revert, uncertain send, or
   failed transaction fit. Reconcile before retry. Do not remove a guard to obtain
   a successful estimate or increase bounds without applicable authority.
5. Run the affected integration subset at a stable checkpoint. Keep local,
   native, user-acceptance, and release evidence separate.

Do not copy a gas target, module layout, permission, or release rule from another
project. Renew affected evidence when a source, library, build, or runtime changes.

## Diagnose the exact failure

Use [lessons and diagnosis](references/lessons.md) when execution differs from a
mock, estimate, earlier run, or source expectation. Treat error selectors and
timestamps as observations. A selector alone does not prove the failing frame.

Preserve failed-case evidence. Use a minimal reproducer or existing regression.
Fix the demonstrated cause and rerun the affected cases. An unresolved diagnostic
must remain unresolved; do not convert it into a universal GC rule.

## Examples and reporting

[PrivateCounter](assets/examples/PrivateCounter.sol) is a small version-bound
example of signed input types, persisted system ciphertext, user ciphertext, and
explicit overflow rejection. It is a counter, not a token or custody template.
Its local tests use a deliberately limited model. Read [validation scope](VALIDATION.md)
before reusing its results.

Report changed behavior, exact inputs, checks and terminal results, disclosed
information, remaining limits, and the next action. Keep private keys, AES keys,
signed private inputs, credentials, and private plaintext out of artifacts.
