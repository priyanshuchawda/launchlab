import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  getRelevantFinalLines,
  getSpawnOptions,
  toStatusLine,
} from "../../scripts/validation/run-quality-gates.mjs";

describe("validation gate output helpers", () => {
  it("keeps only the final relevant lines from noisy command output", () => {
    const output = [
      "resolved dependencies",
      "building chunks",
      "[warn] src/app/page.tsx",
      "[warn] Code style issues found in 1 file.",
      "ELIFECYCLE Command failed with exit code 1.",
    ].join("\n");

    assert.deepEqual(getRelevantFinalLines(output, 3), [
      "[warn] src/app/page.tsx",
      "[warn] Code style issues found in 1 file.",
      "ELIFECYCLE Command failed with exit code 1.",
    ]);
  });

  it("prints compact status lines with log paths", () => {
    assert.equal(
      toStatusLine({
        command: "pnpm run typecheck",
        durationSeconds: 1.4,
        logPath: "artifacts/validation/run/pnpm-run-typecheck.log",
        status: "PASS",
      }),
      "PASS | pnpm run typecheck | 1.4s | log=artifacts/validation/run/pnpm-run-typecheck.log",
    );
  });

  it("uses shell execution for pnpm on Windows", () => {
    assert.deepEqual(getSpawnOptions("pnpm run build", "win32"), {
      args: [],
      binary: "pnpm.cmd run build",
      shell: true,
    });
  });
});
