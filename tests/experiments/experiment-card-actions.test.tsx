import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import AppPage from "@/app/app/page";

async function generateExperimentCards() {
  const user = userEvent.setup();

  render(<AppPage />);
  await user.type(
    screen.getByLabelText(/startup growth goal/i),
    "Increase signup conversion for my AI notes app",
  );
  await user.click(
    screen.getByRole("button", { name: /generate experiments/i }),
  );

  await waitFor(() => {
    expect(screen.getAllByTestId("experiment-card")).toHaveLength(6);
  });

  return user;
}

describe("Experiment card actions", () => {
  it("shows landing variant and ship actions, then marks a card as shipped", async () => {
    const user = await generateExperimentCards();
    const [firstCard] = screen.getAllByTestId("experiment-card");
    const card = within(firstCard);

    expect(
      card.getByRole("button", {
        name: /turn signup proof strip into landing page/i,
      }),
    ).toBeInTheDocument();

    await user.click(
      card.getByRole("button", { name: /mark signup proof strip as shipped/i }),
    );

    expect(
      card.getByRole("button", { name: /mark signup proof strip as shipped/i }),
    ).toHaveTextContent(/shipped/i);
    expect(screen.getByRole("status")).toHaveTextContent(
      /signup proof strip marked as shipped/i,
    );
  });
});
