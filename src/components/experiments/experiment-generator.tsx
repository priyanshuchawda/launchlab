"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BarChart3, Gauge, Sparkles, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { generateExperiments } from "@/lib/experiments/generate-experiments";
import type { Experiment } from "@/types/experiment";

const experimentFormSchema = z.object({
  goal: z
    .string()
    .min(12, "Describe a startup goal with product, audience, and metric."),
});

type ExperimentFormValues = z.infer<typeof experimentFormSchema>;

const defaultGoal = "Increase signup conversion for my AI notes app";

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

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <Card
      className="min-h-72 transition-colors duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/[0.04]"
      data-testid="experiment-card"
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <Badge>{experiment.stage}</Badge>
          <Target aria-hidden="true" className="size-5 text-lime-200" />
        </div>
        <CardTitle>{experiment.title}</CardTitle>
        <CardDescription>{experiment.hypothesis}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
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
        <p className="text-sm leading-6 text-slate-400">{experiment.signal}</p>
      </CardContent>
    </Card>
  );
}

export function ExperimentGenerator() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<ExperimentFormValues>({
    defaultValues: {
      goal: "",
    },
    resolver: zodResolver(experimentFormSchema),
  });

  const onSubmit: SubmitHandler<ExperimentFormValues> = ({ goal }) => {
    setExperiments(generateExperiments(goal));
  };

  return (
    <section className="grid gap-6">
      <Card className="overflow-hidden border-cyan-300/20 bg-cyan-300/[0.035]">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
            <Sparkles aria-hidden="true" className="size-4" />
            Live generator
          </div>
          <CardTitle className="text-2xl">Build the next growth test</CardTitle>
          <CardDescription>
            Turn a founder goal into ranked product, onboarding, and conversion
            experiments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="startup-growth-goal"
              >
                Startup growth goal
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <Input
                  aria-describedby={
                    errors.goal ? "startup-growth-goal-error" : undefined
                  }
                  aria-invalid={Boolean(errors.goal)}
                  autoComplete="off"
                  id="startup-growth-goal"
                  placeholder={defaultGoal}
                  {...register("goal")}
                />
                <Button disabled={isSubmitting} type="submit">
                  <Sparkles aria-hidden="true" />
                  Generate experiments
                </Button>
              </div>
              {errors.goal ? (
                <p
                  className="text-sm font-medium text-lime-200"
                  id="startup-growth-goal-error"
                  role="alert"
                >
                  {errors.goal.message}
                </p>
              ) : null}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
              Metric to track
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-normal text-slate-50">
              Ranked experiment queue
            </h2>
          </div>
          <Badge className="bg-lime-300/10 text-lime-100">
            {experiments.length || 0} ready
          </Badge>
        </div>

        {experiments.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {experiments.map((experiment) => (
              <ExperimentCard experiment={experiment} key={experiment.id} />
            ))}
          </div>
        ) : (
          <Card className="min-h-52 border-dashed border-white/15 bg-white/[0.025]">
            <CardContent className="flex min-h-52 flex-col items-center justify-center gap-3 p-6 text-center">
              <BarChart3 aria-hidden="true" className="size-8 text-cyan-200" />
              <p className="max-w-md text-sm leading-6 text-slate-400">
                Add a measurable startup goal to open the first experiment
                queue.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
