import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AppSettingsPanel } from "@/components/app/app-settings-panel";

describe("AppSettingsPanel", () => {
  it("updates theme and density settings with accessible controls", async () => {
    const user = userEvent.setup();

    render(<AppSettingsPanel />);

    await user.click(screen.getByRole("button", { name: /focus theme/i }));
    expect(screen.getByText(/theme preview: focus/i)).toBeInTheDocument();

    const compactSwitch = screen.getByRole("switch", {
      name: /compact layout/i,
    });
    expect(compactSwitch).toHaveAttribute("aria-checked", "false");

    await user.click(compactSwitch);
    expect(compactSwitch).toHaveAttribute("aria-checked", "true");
  });
});
