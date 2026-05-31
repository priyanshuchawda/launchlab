import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppCockpitShell } from "@/components/app/app-cockpit-shell";

describe("AppCockpitShell", () => {
  it("frames the workspace as a premium growth cockpit", () => {
    render(
      <AppCockpitShell>
        <section aria-label="Main workspace">Workspace content</section>
      </AppCockpitShell>,
    );

    expect(
      screen.getByRole("heading", { name: /growth cockpit/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /cockpit command rail/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /experiment pipeline/i }),
    ).toHaveAttribute("href", "#board");
    expect(screen.getByText(/workspace content/i)).toBeInTheDocument();
  });
});
