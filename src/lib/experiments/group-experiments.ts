import type { Experiment } from "@/types/experiment";

export type ExperimentPipelineLaneId =
  | "quick-wins"
  | "high-impact"
  | "learning-bets";

type ExperimentLaneItem = Pick<Experiment, "effort" | "expectedImpact">;

export interface ExperimentPipelineLane<
  TExperiment extends ExperimentLaneItem = Experiment,
> {
  description: string;
  experiments: TExperiment[];
  id: ExperimentPipelineLaneId;
  title: string;
}

export const experimentPipelineLanes = [
  {
    description: "Low-effort tests that can ship inside one focused sprint.",
    id: "quick-wins",
    title: "Quick wins",
  },
  {
    description: "Bigger bets with the strongest expected conversion lift.",
    id: "high-impact",
    title: "High impact",
  },
  {
    description: "Learning loops that clarify retention and activation risk.",
    id: "learning-bets",
    title: "Learning bets",
  },
] as const satisfies readonly Omit<ExperimentPipelineLane, "experiments">[];

function getLaneId(experiment: ExperimentLaneItem) {
  if (experiment.effort <= 2) {
    return "quick-wins";
  }

  if (experiment.expectedImpact >= 8) {
    return "high-impact";
  }

  return "learning-bets";
}

export function groupExperimentsByLane(
  experiments: readonly Experiment[],
): ExperimentPipelineLane[];
export function groupExperimentsByLane<TExperiment extends ExperimentLaneItem>(
  experiments: readonly TExperiment[],
): ExperimentPipelineLane<TExperiment>[];
export function groupExperimentsByLane<TExperiment extends ExperimentLaneItem>(
  experiments: readonly TExperiment[],
): ExperimentPipelineLane<TExperiment>[] {
  return experimentPipelineLanes.map((lane) => ({
    ...lane,
    experiments: experiments.filter(
      (experiment) => getLaneId(experiment) === lane.id,
    ),
  }));
}
