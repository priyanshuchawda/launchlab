import {
  CheckCircle2,
  FlaskConical,
  Gauge,
  Target,
  TrendingUp,
} from "lucide-react";

import { PremiumSurface } from "@/components/design/premium-surface";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Experiment } from "@/types/experiment";

export type ExperimentCardStatus = "queued" | "shipped";

function ScorePill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Gauge;
  label: string;
  value: number;
}) {
  return (
    <div className="metric-counter flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-slate-950/50 px-3">
      <Icon aria-hidden="true" className="size-4 text-cyan-200" />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="font-mono text-sm font-semibold text-slate-100">
          {value}/10
        </p>
        <span className="metric-counter__track" aria-hidden="true">
          <span
            className="metric-counter__fill"
            style={{ inlineSize: `${value * 10}%` }}
          />
        </span>
      </div>
    </div>
  );
}

export function ExperimentCard({
  experiment,
  onCreateVariant,
  onShip,
  selected = false,
  status,
}: {
  experiment: Experiment;
  onCreateVariant: (experiment: Experiment) => void;
  onShip: (experiment: Experiment) => void;
  selected?: boolean;
  status: ExperimentCardStatus;
}) {
  const isShipped = status === "shipped";

  return (
    <PremiumSurface
      aria-label={`${experiment.title} experiment card`}
      className={cn(
        "experiment-shell grid min-h-[25rem] grid-rows-[auto_1fr] border-white/10 bg-slate-950/45",
        selected ? "experiment-shell--selected" : null,
      )}
      data-selected={selected ? "true" : "false"}
      data-status={status}
      data-testid="experiment-card"
      variant="lane"
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Badge>{experiment.stage}</Badge>
            {isShipped ? <Badge variant="success">Shipped</Badge> : null}
            {selected ? <Badge variant="violet">Selected</Badge> : null}
          </div>
          {isShipped ? (
            <CheckCircle2 aria-hidden="true" className="size-5 text-lime-200" />
          ) : (
            <Target aria-hidden="true" className="size-5 text-lime-200" />
          )}
        </div>
        <CardTitle>{experiment.title}</CardTitle>
        <CardDescription>{experiment.hypothesis}</CardDescription>
        {selected ? (
          <p className="mt-3 rounded-lg border border-violet-300/25 bg-violet-300/10 px-3 py-2 text-sm font-medium text-violet-100">
            Selected for landing preview
          </p>
        ) : null}
      </CardHeader>
      <CardContent className="grid content-between gap-4">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            <ScorePill icon={Gauge} label="Effort" value={experiment.effort} />
            <ScorePill
              icon={TrendingUp}
              label="Impact"
              value={experiment.expectedImpact}
            />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Metric
            </p>
            <p className="mt-1 text-sm font-medium text-slate-100">
              {experiment.metric}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Suggested next action
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              {experiment.signal}
            </p>
          </div>
          {isShipped ? (
            <div className="flex min-h-11 items-center gap-2 rounded-lg border border-lime-300/20 bg-lime-300/10 px-3 text-sm font-semibold text-lime-100">
              <CheckCircle2 aria-hidden="true" className="size-4" />
              Shipped to ship log
            </div>
          ) : null}
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <Button
            aria-label={`Turn ${experiment.title} into landing page`}
            onClick={() => onCreateVariant(experiment)}
            type="button"
            variant="outline"
          >
            <FlaskConical aria-hidden="true" />
            Turn into landing page
          </Button>
          <Button
            aria-label={`Mark ${experiment.title} as shipped`}
            disabled={isShipped}
            onClick={() => onShip(experiment)}
            type="button"
            variant={isShipped ? "secondary" : "default"}
          >
            {isShipped ? "Shipped" : "Mark as shipped"}
          </Button>
        </div>
      </CardContent>
    </PremiumSurface>
  );
}
