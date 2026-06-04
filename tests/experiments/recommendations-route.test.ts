// @vitest-environment node

import { afterEach, describe, expect, it } from "vitest";

import { POST } from "@/app/api/recommendations/route";

const originalGeminiApiKey = process.env.GEMINI_API_KEY;

function createRecommendationRequest(body: unknown) {
  return new Request("http://localhost/api/recommendations", {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

afterEach(() => {
  if (originalGeminiApiKey) {
    process.env.GEMINI_API_KEY = originalGeminiApiKey;
  } else {
    delete process.env.GEMINI_API_KEY;
  }
});

describe("recommendations route", () => {
  it("returns local fallback recommendations when Gemini is not configured", async () => {
    delete process.env.GEMINI_API_KEY;

    const response = await POST(
      createRecommendationRequest({
        goal: "Increase signup conversion for my AI notes app",
      }),
    );
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.source).toBe("fallback");
    expect(payload.recommendations).toHaveLength(6);
    expect(payload.recommendations[0].id).toMatch(/signup-proof/);
  });

  it("validates the submitted goal before calling Gemini", async () => {
    const response = await POST(createRecommendationRequest({ goal: "short" }));
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload.error).toMatch(/describe a startup goal/i);
  });
});
