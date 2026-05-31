import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  MetricBeacon,
  PremiumSurface,
  WorkflowLane,
} from "@/components/design/premium-surface";

describe("premium design surfaces", () => {
  it("renders reusable premium panel variants", () => {
    render(
      <PremiumSurface aria-label="Command panel" variant="command">
        Mission Queue
      </PremiumSurface>,
    );

    const panel = screen.getByLabelText("Command panel");

    expect(panel).toHaveClass("surface-command");
    expect(panel).toHaveClass("motion-hover-lift");
  });

  it("renders metric and lane primitives with semantic labels", () => {
    render(
      <>
        <MetricBeacon label="Lift" value="+18%" />
        <WorkflowLane title="Quick Wins">CTA contrast sprint</WorkflowLane>
      </>,
    );

    expect(screen.getByText("Lift")).toBeInTheDocument();
    expect(screen.getByText("+18%")).toHaveClass("metric-beacon__value");
    expect(screen.getByRole("region", { name: "Quick Wins" })).toHaveClass(
      "surface-lane",
    );
  });
});
