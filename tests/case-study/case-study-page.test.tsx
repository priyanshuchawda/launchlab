import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CaseStudyPage from "@/app/case-study/page";

describe("Case study page", () => {
  it("explains the LaunchLab product process and impact", () => {
    render(<CaseStudyPage />);

    expect(
      screen.getByRole("heading", { name: /launchlab case study/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /problem/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /features shipped/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /design decisions/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /performance target/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /next improvements/i }),
    ).toBeInTheDocument();
  });
});
