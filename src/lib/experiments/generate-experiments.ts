import { experimentBlueprints } from "@/data/experiment-blueprints";
import type { Experiment } from "@/types/experiment";

const fallbackGoal = "improve signup conversion for a startup product";

function normalizeGoal(goal: string) {
  const trimmed = goal.trim().replace(/\s+/g, " ");

  return trimmed.length > 0 ? trimmed : fallbackGoal;
}

export function generateExperiments(goal: string): Experiment[] {
  const normalizedGoal = normalizeGoal(goal);

  return experimentBlueprints.map((blueprint, index) => ({
    effort: blueprint.effort,
    expectedImpact: blueprint.expectedImpact,
    hypothesis: blueprint.hypothesis(normalizedGoal),
    id: `${blueprint.slug}-${index + 1}`,
    metric: blueprint.metric,
    signal: blueprint.signal,
    stage: blueprint.stage,
    title: blueprint.title,
  }));
}
