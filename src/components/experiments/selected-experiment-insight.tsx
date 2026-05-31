import { Gauge, Rocket, Target, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Experiment } from "@/types/experiment";

export function SelectedExperimentInsight({
  experiment,
  isShipped,
}: {
  experiment: Experiment;
  isShipped: boolean;
}) {
  return (
    <section
      aria-label="Selected insight"
      className="selected-insight motion-reveal"
    >
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
          Selected insight
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-normal text-slate-50">
          {experiment.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {experiment.signal}
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <div className="selected-insight__metric">
          <TrendingUp aria-hidden="true" className="size-4 text-lime-200" />
          <span>Impact {experiment.expectedImpact}/10</span>
        </div>
        <div className="selected-insight__metric">
          <Gauge aria-hidden="true" className="size-4 text-cyan-200" />
          <span>Effort {experiment.effort}/10</span>
        </div>
        <div className="selected-insight__metric">
          {isShipped ? (
            <Rocket aria-hidden="true" className="size-4 text-lime-200" />
          ) : (
            <Target aria-hidden="true" className="size-4 text-violet-200" />
          )}
          <Badge variant={isShipped ? "success" : "violet"}>
            {isShipped ? "Shipped" : "Queued"}
          </Badge>
        </div>
      </div>
    </section>
  );
}
