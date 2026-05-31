import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("LaunchLab landing page", () => {
  it("renders the premium product shell with demo and shipped experiment paths", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /launch experiments faster than competitors can write specs/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /try live demo/i }),
    ).toHaveAttribute("href", "/app");
    expect(
      screen.getByRole("link", { name: /view shipped experiments/i }),
    ).toHaveAttribute("href", "#ship-log");
    expect(
      screen.getByText(/shipped 12 experiments this week/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/goal captured/i)).toBeInTheDocument();
    expect(screen.getByText(/experiment pipeline/i)).toBeInTheDocument();
    expect(screen.getByText(/before launchlab/i)).toBeInTheDocument();
    expect(screen.getByText(/after launchlab/i)).toBeInTheDocument();
    expect(screen.getByText(/launch command center/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /experiment generator/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /analytics dashboard/i }),
    ).toBeInTheDocument();
  });
});
