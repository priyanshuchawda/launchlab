import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges conditional classes and resolves Tailwind conflicts", () => {
    expect(
      cn("px-2 text-slate-400", false && "hidden", "px-4 text-white"),
    ).toBe("px-4 text-white");
  });
});
