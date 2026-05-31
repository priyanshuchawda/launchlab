import { describe, expect, it } from "vitest";

import { generateExperiments } from "@/lib/experiments/generate-experiments";
import { generateLandingVariants } from "@/lib/variants/generate-landing-variants";

describe("generateLandingVariants", () => {
  it("creates two distinct landing page variants from an experiment", () => {
    const [experiment] = generateExperiments(
      "Increase signup conversion for my AI notes app",
    );
    const variants = generateLandingVariants(experiment);

    expect(variants).toHaveLength(2);
    expect(variants.map((variant) => variant.name)).toEqual([
      "Variant A",
      "Variant B",
    ]);
    expect(variants[0].style).toMatch(/clean professional/i);
    expect(variants[1].style).toMatch(/bold gen-z/i);
    expect(variants.every((variant) => variant.conversionPrediction > 0)).toBe(
      true,
    );
    expect(variants[0].headline).not.toBe(variants[1].headline);
  });
});
