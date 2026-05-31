import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders an accessible button with the LaunchLab primary style", () => {
    render(<Button>Generate experiments</Button>);

    const button = screen.getByRole("button", { name: "Generate experiments" });

    expect(button).toHaveClass("cursor-pointer");
    expect(button).toHaveClass("bg-lime-300");
  });
});
