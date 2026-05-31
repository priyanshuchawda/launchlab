import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import AppPage from "@/app/app/page";

describe("Experiment generator app page", () => {
  it("validates a founder goal and renders generated experiment cards", async () => {
    const user = userEvent.setup();

    render(<AppPage />);

    await user.click(
      screen.getByRole("button", { name: /generate experiments/i }),
    );
    expect(
      await screen.findByText(/describe a startup goal/i),
    ).toBeInTheDocument();

    await user.type(
      screen.getByLabelText(/startup growth goal/i),
      "I want to increase signup conversion for my AI notes app",
    );
    await user.click(
      screen.getByRole("button", { name: /generate experiments/i }),
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("experiment-card")).toHaveLength(6);
    });
    expect(screen.getByText(/metric to track/i)).toBeInTheDocument();
  });
});
