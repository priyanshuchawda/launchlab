import { describe, expect, it } from "vitest";

import { generateExperiments } from "@/lib/experiments/generate-experiments";

describe("generateExperiments", () => {
  it("creates six actionable experiments for a founder goal", () => {
    const experiments = generateExperiments(
      "Increase signup conversion for my AI notes app",
    );

    expect(experiments).toHaveLength(6);
    expect(experiments[0]).toMatchObject({
      effort: expect.any(Number),
      expectedImpact: expect.any(Number),
      metric: expect.stringMatching(/signup|conversion|activation/i),
      title: expect.stringMatching(/signup|activation|proof|cta|onboarding/i),
    });
    expect(
      experiments.every((experiment) => experiment.hypothesis.length > 40),
    ).toBe(true);
  });
});
