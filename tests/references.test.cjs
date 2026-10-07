const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");

test("all local Markdown links in the skill package resolve inside the repository", () => {
  const documents = [
    "SKILL.md", "README.md", "PLAN.md", "VALIDATION.md",
    "references/gc-rules.md", "references/build-test.md", "references/lessons.md",
    "references/native-diagnostics.md", "evals/CASES.md", "evals/RUBRIC.md",
    "evals/RESULTS-0.1.1.md", "evals/results/v0.1.0.md", "evals/results/v0.1.1.md",
    "evals/CASES-0.1.3.md", "evals/RUBRIC-0.1.3.md",
    "evals/RESULTS-0.1.3.md", "evals/results/v0.1.3.md",
    "references/runner-verification.md", "evals/CASES-0.1.4.md", "evals/RUBRIC-0.1.4.md",
    "evals/RESULTS-0.1.4.md", "evals/results/v0.1.4.md",
    "evals/CASES-0.1.5.md", "evals/RUBRIC-0.1.5.md",
    "evals/RESULTS-0.1.5.md", "evals/results/v0.1.5.md"
  ];
  for (const file of documents) {
    const body = fs.readFileSync(path.join(root, file), "utf8");
    for (const [, link] of body.matchAll(/\]\(([^)]+)\)/g)) {
      if (/^https?:\/\//.test(link) || link.startsWith("#")) continue;
      const target = path.resolve(path.dirname(path.join(root, file)), link.split("#")[0]);
      assert.ok(target.startsWith(root + path.sep), "Link leaves repository: " + file);
      assert.ok(fs.existsSync(target), "Broken link in " + file + ": " + link);
    }
  }
});
