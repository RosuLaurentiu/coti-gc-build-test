# COTI GC Build and Test

A Codex skill for custom COTI privacy-contract development, testing, and diagnosis.

Start with [SKILL.md](SKILL.md). It covers GC value lifetimes, arithmetic,
accounting, build identity, mock limitations, native admission, and recovery.
Detailed guidance loads only when needed.

The skill uses current project rules and tools. It carries no wallets, secrets,
live permissions, product parameters, or production-readiness claim.

## Use

Use the folder containing `SKILL.md` as the skill package. Place it in your
Codex skills directory, or ask Codex to use this folder explicitly:

> Use $coti-gc-build-test to build and test this custom COTI contract.

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

For skill maintainers, [diagnostic replays](evals/CASES.md) and their
[evaluation rubric](evals/RUBRIC.md) cover RPC modes, forwarded gas, and runner
reads. These are offline decision tests, separate from the executable counter.
The [v0.1.1 comparison](evals/RESULTS-0.1.1.md) records equal results for both
versions; it does not establish a speed or accuracy gain.
The [v0.1.3 cases](evals/CASES-0.1.3.md) add action admission and pending-state
reconciliation. Their [rubric](evals/RUBRIC-0.1.3.md) checks permission boundaries
and private accounting. The [v0.1.3 result](evals/RESULTS-0.1.3.md) passed all
10 reviewed criteria in one forward check. This does not establish native safety
or a measured improvement over earlier versions.

The private repository has no open-source license grant. Third-party packages
retain their own licenses and are installed as dependencies, not copied here.
