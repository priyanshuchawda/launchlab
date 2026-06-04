import {
  type RecommendationResponse,
  recommendationResponseSchema,
} from "./recommendation-contract";

export async function requestAiRecommendations(
  goal: string,
): Promise<RecommendationResponse> {
  const response = await fetch("/api/recommendations", {
    body: JSON.stringify({ goal }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Recommendation request failed.");
  }

  return recommendationResponseSchema.parse(await response.json());
}
