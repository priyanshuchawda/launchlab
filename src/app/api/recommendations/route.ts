import { generateGeminiRecommendations } from "@/lib/experiments/gemini-recommendations";
import { generateExperiments } from "@/lib/experiments/generate-experiments";
import {
  type RecommendationResponse,
  recommendationRequestSchema,
} from "@/lib/experiments/recommendation-contract";

const fallbackMessage =
  "Local recommendations loaded while Gemini is unavailable.";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "Expected a JSON request body." },
      { status: 400 },
    );
  }

  const parsed = recommendationRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json(
      {
        error:
          parsed.error.issues[0]?.message ??
          "Describe a startup goal with product, audience, and metric.",
      },
      { status: 400 },
    );
  }

  const { goal } = parsed.data;

  try {
    const recommendations = await generateGeminiRecommendations(goal);

    return Response.json({
      recommendations,
      source: "gemini",
    } satisfies RecommendationResponse);
  } catch {
    return Response.json({
      message: fallbackMessage,
      recommendations: generateExperiments(goal),
      source: "fallback",
    } satisfies RecommendationResponse);
  }
}
