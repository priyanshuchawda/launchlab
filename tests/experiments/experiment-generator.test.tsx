import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperimentGenerator } from "@/components/experiments/experiment-generator";

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
    expect(screen.getByText(/metric to track/i)).toBeInTheDocument();
  });
});
