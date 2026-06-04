import { CheckCircle2, FlaskConical, Radio, Sparkles } from "lucide-react";

import { MetricBeacon } from "@/components/design/premium-surface";
import { CommandHeader } from "@/components/marketing/command-header";
import { PipelineStep } from "@/components/marketing/pipeline-step";

const pipelineSteps = [
  {
    label: "Active goal",
    title: "Increase signup conversion",
    status: "Goal locked",
    icon: Radio,
    color: "cyan",
  },
  {
    label: "Test queue",
    title: "6 ranked experiments",
    status: "Next best tests",
    icon: FlaskConical,
    color: "violet",
  },
  {
    label: "Variant preview",
    title: "Signup proof landing page",
    status: "Copy ready",
    icon: Sparkles,
    color: "lime",
  },
  {
    label: "Result signal",
    title: "+18% predicted lift",
    status: "Measure next",
    icon: CheckCircle2,
    color: "amber",
  },
] as const;

export function LaunchCommandVisual() {
  return (
    <div
      aria-label="Experiment builder preview"
      className="launch-visual surface-command surface-shimmer motion-shimmer"
      role="img"
    >
      {/* Scan line animation */}
      <div className="launch-visual__scan" aria-hidden="true">
        <div className="launch-visual__scan-line motion-scan" />
      </div>

      <CommandHeader />

      <div className="builder-flow motion-stagger mt-4">
        {pipelineSteps.map((step, index) => (
          <PipelineStep
            color={step.color}
            icon={step.icon}
            index={index}
            key={step.label}
            label={step.label}
            status={step.status}
            title={step.title}
          />
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <MetricBeacon label="Predicted lift" value="+18%" />
        <MetricBeacon label="Time to test" value="24h" />
        <MetricBeacon label="Test queue" value="6" />
      </div>
    </div>
  );
}
