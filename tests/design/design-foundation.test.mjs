import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const globals = readFileSync("src/app/globals.css", "utf8");

describe("design foundation CSS", () => {
  it("splits global design concerns into focused files", () => {
    assert.match(globals, /@import "\.\/styles\/tokens\.css"/);
    assert.match(globals, /@import "\.\/styles\/base\.css"/);
    assert.match(globals, /@import "\.\/styles\/surfaces\.css"/);
    assert.match(globals, /@import "\.\/styles\/motion\.css"/);
  });

  it("defines reusable motion primitives with reduced-motion fallback", () => {
    const motion = readFileSync("src/app/styles/motion.css", "utf8");

    assert.match(motion, /\.motion-reveal/);
    assert.match(motion, /\.motion-hover-lift/);
    assert.match(motion, /\.motion-signal-pulse/);
    assert.match(motion, /prefers-reduced-motion: reduce/);
    assert.doesNotMatch(motion, /transition:\s*all/);
  });

  it("defines premium product surfaces without page-specific selectors", () => {
    const surfaces = readFileSync("src/app/styles/surfaces.css", "utf8");

    assert.match(surfaces, /\.surface-command/);
    assert.match(surfaces, /\.surface-spotlight/);
    assert.match(surfaces, /\.surface-lane/);
    assert.match(surfaces, /\.metric-beacon/);
    assert.match(surfaces, /\.experiment-shell/);
    assert.match(surfaces, /\.selected-insight/);
    assert.doesNotMatch(surfaces, /#generator|#analytics|#settings/);
  });
});
