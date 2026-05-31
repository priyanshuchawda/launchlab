import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import AppPage from "@/app/app/page";

async function openLandingPreview() {
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

  const firstCard = within(screen.getAllByTestId("experiment-card")[0]);
  await user.click(
    firstCard.getByRole("button", {
      name: /turn signup proof strip into landing page/i,
    }),
  );

  return user;
}

describe("Landing variant preview", () => {
  it("compares two generated landing page variants for the selected experiment", async () => {
    const user = await openLandingPreview();

    expect(
      screen.getByRole("heading", { name: /a\/b landing preview/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/conversion prediction/i)).toBeInTheDocument();
    expect(screen.getByText(/recommended/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /variant a/i })).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: /variant b/i }));

    expect(screen.getByText(/bold gen-z/i)).toBeInTheDocument();
    expect(screen.getByText(/pricing angle/i)).toBeInTheDocument();
  });
});
