import { FlaskConical, Gauge, Target, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-slate-950/50 px-3">
      <Icon aria-hidden="true" className="size-4 text-cyan-200" />
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="font-mono text-sm font-semibold text-slate-100">
          {value}/10
        </p>
      </div>
    </div>
  );
}

export function ExperimentCard({
  experiment,
  onCreateVariant,
  onShip,
  status,
}: {
  experiment: Experiment;
  onCreateVariant: (experiment: Experiment) => void;
  onShip: (experiment: Experiment) => void;
  status: ExperimentCardStatus;
}) {
  const isShipped = status === "shipped";

  return (
    <Card
      className="grid min-h-[25rem] grid-rows-[auto_1fr] transition-colors duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/[0.04]"
      data-testid="experiment-card"
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Badge>{experiment.stage}</Badge>
            {isShipped ? <Badge variant="success">Shipped</Badge> : null}
          </div>
          <Target aria-hidden="true" className="size-5 text-lime-200" />
        </div>
        <CardTitle>{experiment.title}</CardTitle>
        <CardDescription>{experiment.hypothesis}</CardDescription>
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
    </Card>
  );
}
