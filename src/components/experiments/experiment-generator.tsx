"use client";

import { useState } from "react";

import { ExperimentBoard } from "@/components/experiments/experiment-board";
import { ExperimentGoalForm } from "@/components/experiments/experiment-goal-form";
import { FlowProgress } from "@/components/experiments/flow-progress";
import { generateExperiments } from "@/lib/experiments/generate-experiments";
import { groupExperimentsByLane } from "@/lib/experiments/group-experiments";
import { requestAiRecommendations } from "@/lib/experiments/request-ai-recommendations";
import { useLaunchLabStore } from "@/stores/use-launchlab-store";
import type { Experiment } from "@/types/experiment";

const fallbackFeedback =
  "Local recommendations loaded while Gemini is unavailable.";

export function ExperimentGenerator() {
  const [feedback, setFeedback] = useState("");
  const experiments = useLaunchLabStore((state) => state.generatedExperiments);
  const shippedExperimentIds = useLaunchLabStore(
    (state) => state.shippedExperimentIds,
  );
  const selectedExperimentId = useLaunchLabStore(
    (state) => state.selectedExperimentId,
  );
  const markExperimentShipped = useLaunchLabStore(
    (state) => state.markExperimentShipped,
  );
  const selectVariantExperiment = useLaunchLabStore(
    (state) => state.selectVariantExperiment,
  );
  const setGeneratedExperiments = useLaunchLabStore(
    (state) => state.setGeneratedExperiments,
  );
  const selectedExperiment =
    experiments.find((experiment) => experiment.id === selectedExperimentId) ??
    null;
  const pipelineLanes = groupExperimentsByLane(experiments);
  const handleGenerate = async (goal: string) => {
    setFeedback("");

    try {
      const result = await requestAiRecommendations(goal);

      setGeneratedExperiments(goal, result.recommendations);
      setFeedback(
        result.source === "gemini"
          ? "Gemini recommended 6 experiments for this goal."
          : (result.message ?? fallbackFeedback),
      );
    } catch {
      setGeneratedExperiments(goal, generateExperiments(goal));
      setFeedback(fallbackFeedback);
    }
  };

  const handleCreateVariant = (experiment: Experiment) => {
    selectVariantExperiment(experiment.id);
    setFeedback(`${experiment.title} queued for landing page variant.`);
  };

  const handleShip = (experiment: Experiment) => {
    markExperimentShipped(experiment.id);
    setFeedback(`${experiment.title} marked as shipped.`);
  };

  return (
    <section className="grid gap-6" id="generator">
      <ExperimentGoalForm onGenerate={handleGenerate} />

      <FlowProgress
        hasExperiments={experiments.length > 0}
        hasSelectedExperiment={Boolean(selectedExperiment)}
      />

      <ExperimentBoard
        experiments={experiments}
        feedback={feedback}
        lanes={pipelineLanes}
        onCreateVariant={handleCreateVariant}
        onShip={handleShip}
        selectedExperiment={selectedExperiment}
        selectedExperimentId={selectedExperimentId}
        shippedExperimentIds={shippedExperimentIds}
      />
    </section>
  );
}
