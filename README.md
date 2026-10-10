# COTI GC Build and Test

A Codex skill for building correct, private and efficient COTI smart contracts.

Start with [SKILL.md](SKILL.md). It helps with contract design, GC value lifetimes,
private arithmetic, exact accounting and complete gas cost. Focused checks and
diagnostic references support the requested build; load them only when relevant.

The skill uses current project rules and tools. It carries no wallets, secrets,
live permissions, product parameters, or production-readiness claim.

## Use

Use the folder containing `SKILL.md` as the skill package. Place it in your
Codex skills directory, or ask Codex to use this folder explicitly:

> Use $coti-gc-build-test to build and test this custom COTI contract.

State the desired behavior, what must stay private, and whether the task is a
new build, a change, a test or a diagnosis. Supply the repository or failing
case. The skill uses the project's dependencies and selects relevant checks.

It applies to private tokens, messages, credentials, payments, escrow and other
custom contracts. For example:

> Use $coti-gc-build-test to check access after membership and key changes.

> Use $coti-gc-build-test to diagnose this failed private transfer from its exact build.

Automatic discovery is enabled by default. The package is independent of its
source project and does not need the COTI MCP server.

## Validate the example

Requires Node.js 22 or later and npm. From this repository:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
```

The dependency lock pins COTI contracts 1.2.0 and Solidity 0.8.19.
Tests compile a small private counter and execute it against a local EVM model.
The model does not provide encryption or native input authentication.
See [VALIDATION.md](VALIDATION.md) for the evidence scope and [PLAN.md](PLAN.md)
for implementation and follow-up work.

For maintainers, [synthetic decision cases](evals/CASES.md) and their
[rubric](evals/RUBRIC.md) test RPC diagnosis, gas fit, readers, access changes,
custody and exits after policy changes. They are offline decisions, separate
from executable contract tests. See [current validation and history](VALIDATION.md)
for the latest changes, actual checks and limits.
Neither a replay score nor the local model proves native safety.

Share general rules and synthetic cases. Keep private project source and
operating data in its own repository. Earlier evaluation measurements were
removed from current files in v0.1.6; older Git history retains those values.

This repository has no open-source license grant. Third-party packages retain
their own licenses and are installed as dependencies, not copied here.
