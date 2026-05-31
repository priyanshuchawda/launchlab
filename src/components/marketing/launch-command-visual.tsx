import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Radio,
  Sparkles,
} from "lucide-react";

import {
  MetricBeacon,
  PremiumSurface,
} from "@/components/design/premium-surface";
import { Badge } from "@/components/ui/badge";

const pipelineSteps = [
  ["Active goal", "Increase signup conversion", "Goal locked"],
  ["Test queue", "6 ranked experiments", "Next best tests"],
  ["Variant preview", "Signup proof landing page", "Copy ready"],
  ["Result signal", "+18% predicted lift", "Measure next"],
] as const;

export function LaunchCommandVisual() {
  return (
    <PremiumSurface
      aria-label="Experiment builder preview"
      className="relative grid gap-4 p-4 motion-reveal"
      variant="command"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-sm font-semibold text-slate-100">
            Experiment builder preview
          </p>
          <p className="text-xs text-slate-500">
            Goal to test to result, kept in one path.
          </p>
        </div>
        <Badge variant="success">Flow ready</Badge>
      </div>

      <div className="builder-flow motion-stagger">
        {pipelineSteps.map(([label, title, status], index) => (
          <div
            className="builder-flow__step"
            data-active={index === 1 ? "true" : "false"}
            key={label}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {title}
                </p>
              </div>
              <span className="inline-flex size-8 items-center justify-center rounded-md border border-lime-300/20 bg-lime-300/10 text-lime-200">
                {index === 0 ? (
                  <Radio aria-hidden="true" className="size-4" />
                ) : index === 1 ? (
                  <FlaskConical aria-hidden="true" className="size-4" />
                ) : index === 2 ? (
                  <Sparkles aria-hidden="true" className="size-4" />
                ) : (
                  <CheckCircle2 aria-hidden="true" className="size-4" />
                )}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-400">
              <span>{status}</span>
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 text-lime-200"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <MetricBeacon label="Predicted lift" value="+18%" />
        <MetricBeacon label="Time to test" value="24h" />
        <MetricBeacon label="Test queue" value="6" />
      </div>
    </PremiumSurface>
  );
}
