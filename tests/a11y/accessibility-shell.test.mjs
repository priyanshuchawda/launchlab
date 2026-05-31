import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const css = readFileSync("src/app/globals.css", "utf8");
const routeFiles = [
  "src/app/page.tsx",
  "src/app/app/page.tsx",
  "src/app/case-study/page.tsx",
];

describe("accessibility shell", () => {
  it("exposes a single skip-link target on each page", () => {
    for (const routeFile of routeFiles) {
      const source = readFileSync(routeFile, "utf8");

      assert.match(source, /<main[^>]*id="main-content"/);
    }
  });

  it("keeps focus visible and honors reduced motion", () => {
    assert.match(css, /:focus-visible/);
    assert.match(css, /prefers-reduced-motion: reduce/);
    assert.match(css, /transition-duration: 0\.01ms/);
    assert.match(css, /animation-duration: 0\.01ms/);
  });

  it("guards the document against mobile horizontal overflow", () => {
    assert.match(css, /overflow-x: clip/);
  });
});
