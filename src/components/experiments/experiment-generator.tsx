"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BarChart3, Sparkles } from "lucide-react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { ExperimentCard } from "@/components/experiments/experiment-card";
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
import { LandingVariantPreview } from "@/components/variants/landing-variant-preview";
import { generateExperiments } from "@/lib/experiments/generate-experiments";
import { generateLandingVariants } from "@/lib/variants/generate-landing-variants";
import { useLaunchLabStore } from "@/stores/use-launchlab-store";
import type { Experiment } from "@/types/experiment";

const experimentFormSchema = z.object({
  goal: z
    .string()
    .min(12, "Describe a startup goal with product, audience, and metric."),
});

type ExperimentFormValues = z.infer<typeof experimentFormSchema>;

const defaultGoal = "Increase signup conversion for my AI notes app";

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
    setGeneratedExperiments(goal, generateExperiments(goal));
    setFeedback("");
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

      <div className="grid gap-4" id="board">
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
        {feedback ? (
          <output className="rounded-lg border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm font-medium text-lime-100">
            {feedback}
          </output>
        ) : null}
        {selectedExperiment ? (
          <LandingVariantPreview
            experiment={selectedExperiment}
            variants={generateLandingVariants(selectedExperiment)}
          />
        ) : null}

        {experiments.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {experiments.map((experiment) => (
              <ExperimentCard
                experiment={experiment}
                key={experiment.id}
                onCreateVariant={handleCreateVariant}
                onShip={handleShip}
                status={
                  shippedExperimentIds.includes(experiment.id)
                    ? "shipped"
                    : "queued"
                }
              />
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
