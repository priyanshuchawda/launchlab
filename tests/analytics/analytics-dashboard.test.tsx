import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard";

describe("AnalyticsDashboard", () => {
  it("renders metric cards and chart summaries", () => {
    render(<AnalyticsDashboard />);

    expect(
      screen.getByRole("heading", { name: /growth analytics/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/visitors/i)).toBeInTheDocument();
    expect(screen.getByText(/conversion rate/i)).toBeInTheDocument();
    expect(screen.getByText(/activation rate/i)).toBeInTheDocument();
    expect(screen.getByText(/best CTA/i)).toBeInTheDocument();
    expect(
      screen.getByText(/start the guided experiment/i),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("analytics-chart")).toHaveLength(4);
  });
});
