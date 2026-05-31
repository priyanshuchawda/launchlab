import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppCockpitShell } from "@/components/app/app-cockpit-shell";

describe("AppCockpitShell", () => {
  it("frames the workspace as a focused experiment builder", () => {
    render(
      <AppCockpitShell>
        <section aria-label="Main workspace">Workspace content</section>
      </AppCockpitShell>,
    );

    expect(
      screen.getByRole("heading", { name: /experiment builder/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /builder flow rail/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /test queue/i })).toHaveAttribute(
      "href",
      "#board",
    );
    expect(
      screen.getAllByText(/goal to test to result/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText(/workspace content/i)).toBeInTheDocument();
  });
});
