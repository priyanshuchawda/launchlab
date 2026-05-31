import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SkipLink } from "@/components/layout/skip-link";

describe("SkipLink", () => {
  it("targets the main content landmark and is hidden until focused", () => {
    render(<SkipLink />);

    const link = screen.getByRole("link", { name: /skip to content/i });

    expect(link).toHaveAttribute("href", "#main-content");
    expect(link).toHaveClass("sr-only");
    expect(link).toHaveClass("focus:not-sr-only");
  });
});
