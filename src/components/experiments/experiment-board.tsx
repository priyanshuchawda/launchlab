import { BarChart3 } from "lucide-react";

import { WorkflowLane } from "@/components/design/premium-surface";
import { ExperimentCard } from "@/components/experiments/experiment-card";
import { SelectedExperimentInsight } from "@/components/experiments/selected-experiment-insight";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LandingVariantPreview } from "@/components/variants/landing-variant-preview";
import type { ExperimentPipelineLane } from "@/lib/experiments/group-experiments";
import { generateLandingVariants } from "@/lib/variants/generate-landing-variants";
import type { Experiment } from "@/types/experiment";

export function ExperimentBoard({
  experiments,
  feedback,
  lanes,
  onCreateVariant,
  onShip,
  selectedExperiment,
  selectedExperimentId,
  shippedExperimentIds,
}: {
  experiments: readonly Experiment[];
  feedback: string;
  lanes: readonly ExperimentPipelineLane[];
  onCreateVariant: (experiment: Experiment) => void;
  onShip: (experiment: Experiment) => void;
  selectedExperiment: Experiment | null;
  selectedExperimentId: string | null;
  shippedExperimentIds: readonly string[];
}) {
  return (
    <div className="grid gap-4" id="board">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
            Test queue
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-normal text-slate-50">
            Choose the next test
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Tests are grouped by effort and impact so the next action is
            obvious.
          </p>
        </div>
        <Badge className="bg-lime-300/10 text-lime-100">
          {experiments.length || 0} ready
        </Badge>
      </div>
      {feedback ? (
        <output className="rounded-lg border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm font-medium text-lime-100">
          {feedback}
        </output>
      ) : null}
      {selectedExperiment ? (
        <>
          <SelectedExperimentInsight
            experiment={selectedExperiment}
            isShipped={shippedExperimentIds.includes(selectedExperiment.id)}
          />
          <LandingVariantPreview
            experiment={selectedExperiment}
            variants={generateLandingVariants(selectedExperiment)}
          />
        </>
      ) : null}

      {experiments.length > 0 ? (
        <div className="grid gap-4 xl:grid-cols-3">
          {lanes.map((lane) => (
            <WorkflowLane
              description={lane.description}
              key={lane.id}
              meta={`${lane.experiments.length} tests`}
              title={lane.title}
            >
              {lane.experiments.map((experiment) => (
                <ExperimentCard
                  experiment={experiment}
                  key={experiment.id}
                  onCreateVariant={onCreateVariant}
                  onShip={onShip}
                  selected={experiment.id === selectedExperimentId}
                  status={
                    shippedExperimentIds.includes(experiment.id)
                      ? "shipped"
                      : "queued"
                  }
                />
              ))}
            </WorkflowLane>
          ))}
        </div>
      ) : (
        <Card className="min-h-52 border-dashed border-white/15 bg-white/[0.025]">
          <CardContent className="flex min-h-52 flex-col items-center justify-center gap-3 p-6 text-center">
            <BarChart3 aria-hidden="true" className="size-8 text-cyan-200" />
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Add a measurable startup goal to open the first experiment queue.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
