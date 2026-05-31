import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const baseCss = readFileSync("src/app/styles/base.css", "utf8");
const motionCss = readFileSync("src/app/styles/motion.css", "utf8");
const routeTargets = [
  ["src/app/page.tsx"],
  ["src/app/app/page.tsx", "src/components/app/app-cockpit-shell.tsx"],
  ["src/app/case-study/page.tsx"],
];

describe("accessibility shell", () => {
  it("exposes a single skip-link target on each page", () => {
    for (const routeFiles of routeTargets) {
      const source = routeFiles
        .map((routeFile) => readFileSync(routeFile, "utf8"))
        .join("\n");

      assert.match(source, /<main[^>]*id="main-content"/);
    }
  });

  it("keeps focus visible and honors reduced motion", () => {
    assert.match(baseCss, /:focus-visible/);
    assert.match(motionCss, /prefers-reduced-motion: reduce/);
    assert.match(motionCss, /transition-duration: 0\.01ms/);
    assert.match(motionCss, /animation-duration: 0\.01ms/);
  });

  it("guards the document against mobile horizontal overflow", () => {
    assert.match(baseCss, /overflow-x: clip/);
  });
});
