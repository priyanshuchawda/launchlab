import { describe, expect, it } from "vitest";

import { analyticsSnapshot } from "@/data/analytics";

describe("analyticsSnapshot", () => {
  it("contains realistic typed dashboard data", () => {
    expect(analyticsSnapshot.metricCards).toHaveLength(6);
    expect(analyticsSnapshot.conversionTrend.length).toBeGreaterThanOrEqual(6);
    expect(analyticsSnapshot.experimentImpact.length).toBeGreaterThanOrEqual(4);
    expect(analyticsSnapshot.signupTrend.at(-1)?.signups).toBeGreaterThan(
      analyticsSnapshot.signupTrend[0].signups,
    );
    expect(
      analyticsSnapshot.trafficSources.reduce(
        (total, source) => total + source.value,
        0,
      ),
    ).toBe(100);
  });
});
