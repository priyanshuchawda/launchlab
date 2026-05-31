export type ExperimentStage =
  | "acquisition"
  | "activation"
  | "conversion"
  | "retention";

export interface Experiment {
  id: string;
  title: string;
  hypothesis: string;
  effort: number;
  expectedImpact: number;
  metric: string;
  stage: ExperimentStage;
  signal: string;
}
