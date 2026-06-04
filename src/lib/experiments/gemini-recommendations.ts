import { GoogleGenAI, type Schema, Type } from "@google/genai";

import type { Experiment } from "@/types/experiment";

import {
  experimentStageValues,
  recommendationDraftSchema,
} from "./recommendation-contract";

const geminiModel = "gemini-3.5-flash";

const recommendationResponseSchema: Schema = {
  properties: {
    experiments: {
      description: "Exactly six ranked startup growth experiment ideas.",
      items: {
        properties: {
          effort: {
            description: "Implementation effort from 1 to 10.",
            maximum: 10,
            minimum: 1,
            type: Type.INTEGER,
          },
          expectedImpact: {
            description: "Expected business impact from 1 to 10.",
            maximum: 10,
            minimum: 1,
            type: Type.INTEGER,
          },
          hypothesis: {
            description:
              "A concise if-then hypothesis tied to the user's goal.",
            type: Type.STRING,
          },
          metric: {
            description: "The primary metric this experiment should move.",
            type: Type.STRING,
          },
          signal: {
            description: "The next observable signal after shipping the test.",
            type: Type.STRING,
          },
          stage: {
            description: "The growth funnel stage for the experiment.",
            enum: [...experimentStageValues],
            format: "enum",
            type: Type.STRING,
          },
          title: {
            description: "A short, specific experiment title.",
            type: Type.STRING,
          },
        },
        propertyOrdering: [
          "title",
          "hypothesis",
          "effort",
          "expectedImpact",
          "metric",
          "stage",
          "signal",
        ],
        required: [
          "title",
          "hypothesis",
          "effort",
          "expectedImpact",
          "metric",
          "stage",
          "signal",
        ],
        type: Type.OBJECT,
      },
      maxItems: "6",
      minItems: "6",
      type: Type.ARRAY,
    },
  },
  required: ["experiments"],
  type: Type.OBJECT,
};

export function buildGeminiRecommendationPrompt(goal: string) {
  return [
    "You are LaunchLab, an AI product experimentation strategist for early-stage startup teams.",
    "Recommend exactly six practical growth experiments for the founder goal below.",
    "Make every recommendation specific to the product, audience, metric, and funnel stage implied by the goal.",
    "Avoid generic advice. Keep copy concise enough to fit compact dashboard cards.",
    `Founder goal: ${goal}`,
  ].join("\n");
}

function createRecommendationId(title: string, index: number) {
  const slug =
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 42) || "recommendation";

  return `ai-${slug}-${index + 1}`;
}

export function normalizeGeminiRecommendations(value: unknown): Experiment[] {
  const experiments =
    typeof value === "object" && value !== null && "experiments" in value
      ? (value as { experiments: unknown }).experiments
      : value;
  const drafts = recommendationDraftSchema.array().length(6).parse(experiments);

  return drafts.map((draft, index) => ({
    ...draft,
    effort: Math.round(draft.effort),
    expectedImpact: Math.round(draft.expectedImpact),
    id: createRecommendationId(draft.title, index),
  }));
}

export async function generateGeminiRecommendations(
  goal: string,
): Promise<Experiment[]> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("Gemini API key is not configured.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    config: {
      responseMimeType: "application/json",
      responseSchema: recommendationResponseSchema,
      temperature: 0.65,
    },
    contents: buildGeminiRecommendationPrompt(goal),
    model: process.env.GEMINI_MODEL?.trim() || geminiModel,
  });

  if (!response.text) {
    throw new Error("Gemini returned an empty recommendation response.");
  }

  return normalizeGeminiRecommendations(JSON.parse(response.text));
}
