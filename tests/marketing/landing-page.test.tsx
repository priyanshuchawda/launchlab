import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("LaunchLab landing page", () => {
  it("renders the premium product shell with demo and shipped experiment paths", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /turn one startup goal into a testable experiment/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /open experiment builder/i }),
    ).toHaveAttribute("href", "/app");
    expect(
      screen.getByRole("link", { name: /see build log/i }),
    ).toHaveAttribute("href", "#ship-log");
    expect(
      screen.getAllByText(/experiment builder preview/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText(/active goal/i)).toBeInTheDocument();
    expect(screen.getAllByText(/test queue/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/variant preview/i)).toBeInTheDocument();
    expect(screen.getAllByText(/result signal/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/from idea to next test/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /a cleaner experiment loop/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /measure/i }),
    ).toBeInTheDocument();
  });
});
