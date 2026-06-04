import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ExperimentGenerator } from "@/components/experiments/experiment-generator";
import { generateExperiments } from "@/lib/experiments/generate-experiments";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Experiment generator app page", () => {
  it("validates a founder goal and renders generated experiment cards", async () => {
    render(<ExperimentGenerator />);

    fireEvent.click(
      screen.getByRole("button", { name: /generate experiments/i }),
    );
    expect(
      await screen.findByText(/describe a startup goal/i),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/startup growth goal/i), {
      target: {
        value: "I want to increase signup conversion for my AI notes app",
      },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /generate experiments/i }),
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("experiment-card")).toHaveLength(6);
    });
    expect(screen.getByText(/flow progress/i)).toBeInTheDocument();
    expect(screen.getAllByText(/^goal$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^test queue$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^variant$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^result$/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("region", { name: /quick wins/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /high impact/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /learning bets/i }),
    ).toBeInTheDocument();
  });

  it("renders Gemini API recommendations when the route returns them", async () => {
    const goal = "Increase signup conversion for my AI notes app";
    const recommendations = generateExperiments(goal).map(
      (experiment, index) => ({
        ...experiment,
        id: `ai-test-${index + 1}`,
        title: index === 0 ? "Gemini onboarding proof path" : experiment.title,
      }),
    );
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          recommendations,
          source: "gemini",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: 200,
        },
      ),
    );

    vi.stubGlobal("fetch", fetchMock);
    render(<ExperimentGenerator />);

    fireEvent.change(screen.getByLabelText(/startup growth goal/i), {
      target: {
        value: goal,
      },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /generate experiments/i }),
    );

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "/api/recommendations",
        expect.objectContaining({
          method: "POST",
        }),
      );
    });
    expect(
      await screen.findByText(/gemini onboarding proof path/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/gemini recommended 6 experiments/i),
    ).toBeInTheDocument();
  });
});
