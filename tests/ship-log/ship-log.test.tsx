import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ShipLogPreview } from "@/components/marketing/ship-log-preview";
import { shipLogEntries } from "@/data/ship-log";

describe("ShipLogPreview", () => {
  it("renders five shipped milestones from shared data", () => {
    render(<ShipLogPreview />);

    expect(shipLogEntries).toHaveLength(5);
    expect(screen.getByText(/day 1/i)).toBeInTheDocument();
    expect(screen.getByText(/day 5/i)).toBeInTheDocument();
    expect(screen.getAllByText(/keyboard shortcuts/i).length).toBeGreaterThan(
      0,
    );
  });
});
