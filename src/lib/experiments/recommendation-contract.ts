import { z } from "zod";

export const experimentStageValues = [
  "acquisition",
  "activation",
  "conversion",
  "retention",
] as const;

const scoreSchema = z.coerce.number().min(1).max(10);

export const recommendationRequestSchema = z.object({
  goal: z
    .string()
    .trim()
    .min(12, "Describe a startup goal with product, audience, and metric.")
    .max(220, "Keep the goal focused enough for one recommendation pass."),
});

export const recommendationDraftSchema = z.object({
  effort: scoreSchema,
  expectedImpact: scoreSchema,
  hypothesis: z.string().trim().min(40).max(260),
  metric: z.string().trim().min(5).max(70),
  signal: z.string().trim().min(12).max(140),
  stage: z.enum(experimentStageValues),
  title: z.string().trim().min(4).max(70),
});

export const recommendationExperimentSchema = recommendationDraftSchema.extend({
  id: z.string().trim().min(3),
});

export const recommendationResponseSchema = z.object({
  message: z.string().optional(),
  recommendations: z.array(recommendationExperimentSchema).length(6),
  source: z.enum(["gemini", "fallback"]),
});

export type RecommendationResponse = z.infer<
  typeof recommendationResponseSchema
>;
