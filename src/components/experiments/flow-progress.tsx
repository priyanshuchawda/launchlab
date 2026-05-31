import { PremiumSurface } from "@/components/design/premium-surface";
import { Badge } from "@/components/ui/badge";

const flowProgressSteps = ["Goal", "Test queue", "Variant", "Result"] as const;

type FlowProgressStep = (typeof flowProgressSteps)[number];
type FlowProgressState = "current" | "done" | "waiting";

export function FlowProgress({
  hasExperiments,
  hasSelectedExperiment,
}: {
  hasExperiments: boolean;
  hasSelectedExperiment: boolean;
}) {
  return (
    <PremiumSurface
      aria-label="Flow progress"
      className="p-4"
      interactive={false}
      variant="lane"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
            Flow progress
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Keep the active builder step visible while the queue updates.
          </p>
        </div>
        <Badge className="bg-cyan-300/10 text-cyan-100">
          {getProgressLabel({ hasExperiments, hasSelectedExperiment })}
        </Badge>
      </div>
      <ol className="flow-progress mt-4" aria-label="Flow progress">
        {flowProgressSteps.map((step) => (
          <li
            className="flow-progress__step"
            data-state={getStepState({
              hasExperiments,
              hasSelectedExperiment,
              step,
            })}
            key={step}
          >
            <span className="flow-progress__marker" aria-hidden="true" />
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </PremiumSurface>
  );
}

function getProgressLabel({
  hasExperiments,
  hasSelectedExperiment,
}: {
  hasExperiments: boolean;
  hasSelectedExperiment: boolean;
}) {
  if (hasSelectedExperiment) {
    return "Variant ready";
  }

  return hasExperiments ? "Queue ready" : "Goal first";
}

function getStepState({
  hasExperiments,
  hasSelectedExperiment,
  step,
}: {
  hasExperiments: boolean;
  hasSelectedExperiment: boolean;
  step: FlowProgressStep;
}): FlowProgressState {
  if (step === "Goal") {
    return hasExperiments ? "done" : "current";
  }

  if (step === "Test queue") {
    return hasExperiments ? "done" : "waiting";
  }

  if (step === "Variant") {
    return hasSelectedExperiment
      ? "done"
      : hasExperiments
        ? "current"
        : "waiting";
  }

  return hasSelectedExperiment ? "current" : "waiting";
}
