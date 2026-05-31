import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperimentGenerator } from "@/components/experiments/experiment-generator";

async function generateExperimentCards() {
  render(<ExperimentGenerator />);
  fireEvent.change(screen.getByLabelText(/startup growth goal/i), {
    target: { value: "Increase signup conversion for my AI notes app" },
  });
  fireEvent.click(
    screen.getByRole("button", { name: /generate experiments/i }),
  );

  await waitFor(() => {
    expect(screen.getAllByTestId("experiment-card")).toHaveLength(6);
  });
}

describe("Experiment card actions", () => {
  it("shows landing variant and ship actions, then marks a card as shipped", async () => {
    await generateExperimentCards();
    const [firstCard] = screen.getAllByTestId("experiment-card");
    const card = within(firstCard);

    expect(
      card.getByRole("button", {
        name: /turn signup proof strip into landing page/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      card.getByRole("button", { name: /mark signup proof strip as shipped/i }),
    );

    expect(
      card.getByRole("button", { name: /mark signup proof strip as shipped/i }),
    ).toHaveTextContent(/shipped/i);
    expect(firstCard).toHaveAttribute("data-status", "shipped");
    expect(card.getByText(/shipped to ship log/i)).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      /signup proof strip marked as shipped/i,
    );

    fireEvent.click(
      card.getByRole("button", {
        name: /turn signup proof strip into landing page/i,
      }),
    );

    expect(firstCard).toHaveAttribute("data-selected", "true");
    expect(card.getByText(/selected for landing preview/i)).toBeInTheDocument();
    expect(screen.getByText(/selected insight/i)).toBeInTheDocument();
    expect(screen.getByText(/impact 8\/10/i)).toBeInTheDocument();
  });
});
