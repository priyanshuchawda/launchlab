import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperimentGenerator } from "@/components/experiments/experiment-generator";

async function openLandingPreview() {
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

  const firstCard = within(screen.getAllByTestId("experiment-card")[0]);
  fireEvent.click(
    firstCard.getByRole("button", {
      name: /turn signup proof strip into landing page/i,
    }),
  );
}

describe("Landing variant preview", () => {
  it("compares two generated landing page variants for the selected experiment", async () => {
    await openLandingPreview();

    expect(
      screen.getByRole("heading", { name: /a\/b landing preview/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/conversion prediction/i)).toBeInTheDocument();
    expect(screen.getByText(/recommended/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /variant a/i })).toBeInTheDocument();

    const variantBTab = screen.getByRole("tab", { name: /variant b/i });
    fireEvent.pointerDown(variantBTab, { button: 0, ctrlKey: false });
    fireEvent.mouseDown(variantBTab, { button: 0, ctrlKey: false });
    fireEvent.pointerUp(variantBTab, { button: 0, ctrlKey: false });
    fireEvent.mouseUp(variantBTab, { button: 0, ctrlKey: false });
    fireEvent.click(variantBTab);

    expect(await screen.findByText(/bold gen-z/i)).toBeInTheDocument();
    expect(screen.getByText(/pricing angle/i)).toBeInTheDocument();
  });
});
