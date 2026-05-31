"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { PremiumSurface } from "@/components/design/premium-surface";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const experimentFormSchema = z.object({
  goal: z
    .string()
    .min(12, "Describe a startup goal with product, audience, and metric."),
});

type ExperimentFormValues = z.infer<typeof experimentFormSchema>;

const defaultGoal = "Increase signup conversion for my AI notes app";

export function ExperimentGoalForm({
  onGenerate,
}: {
  onGenerate: (goal: string) => void;
}) {
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
    onGenerate(goal);
  };

  return (
    <PremiumSurface className="overflow-hidden" variant="spotlight">
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
    </PremiumSurface>
  );
}
