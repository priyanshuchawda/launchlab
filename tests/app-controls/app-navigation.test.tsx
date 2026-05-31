import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppNavigation } from "@/components/app/app-navigation";

describe("AppNavigation", () => {
  it("links to core app sections and opens the command menu from keyboard", () => {
    render(<AppNavigation />);

    expect(
      screen.getByRole("navigation", { name: /app sections/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /generator/i })).toHaveAttribute(
      "href",
      "#generator",
    );
    expect(screen.getByRole("link", { name: /board/i })).toHaveAttribute(
      "href",
      "#board",
    );
    expect(screen.getByRole("link", { name: /variants/i })).toHaveAttribute(
      "href",
      "#variants",
    );
    expect(screen.getByRole("link", { name: /analytics/i })).toHaveAttribute(
      "href",
      "#analytics",
    );
    expect(screen.getByRole("link", { name: /settings/i })).toHaveAttribute(
      "href",
      "#settings",
    );

    fireEvent.keyDown(window, { ctrlKey: true, key: "k" });

    expect(
      screen.getByRole("dialog", { name: /command menu/i }),
    ).toBeInTheDocument();
  });
});
