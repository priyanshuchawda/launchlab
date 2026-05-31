import { describe, expect, it } from "vitest";

import { experimentBlueprints } from "@/data/experiment-blueprints";
import { groupExperimentsByLane } from "@/lib/experiments/group-experiments";

describe("groupExperimentsByLane", () => {
  it("sorts generated experiments into distinct cockpit lanes", () => {
    const lanes = groupExperimentsByLane(experimentBlueprints);

    expect(lanes).toHaveLength(3);
    expect(lanes.map((lane) => lane.title)).toEqual([
      "Quick wins",
      "High impact",
      "Learning bets",
    ]);
    expect(lanes.flatMap((lane) => lane.experiments)).toHaveLength(
      experimentBlueprints.length,
    );
    expect(lanes[0]?.experiments.map((experiment) => experiment.title)).toEqual(
      expect.arrayContaining(["Signup proof strip", "CTA contrast test"]),
    );
    expect(lanes[1]?.experiments.map((experiment) => experiment.title)).toEqual(
      expect.arrayContaining(["Onboarding sample goal"]),
    );
  });
});
