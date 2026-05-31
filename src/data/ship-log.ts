import type { ShipLogEntry } from "@/types/ship-log";

export const shipLogEntries = [
  {
    day: 1,
    signal: "First usable loop",
    summary:
      "Built the typed goal-to-experiment generator and connected it to the app route.",
    title: "Built core experiment generator",
  },
  {
    day: 2,
    signal: "Growth idea to page angle",
    summary:
      "Added A/B landing variants with headline, CTA, proof, pricing angle, and prediction.",
    title: "Added A/B preview",
  },
  {
    day: 3,
    signal: "Founder-ready scanning",
    summary:
      "Refined card structure, stable dimensions, mobile grids, and accessible action names.",
    title: "Improved mobile responsiveness",
  },
  {
    day: 4,
    signal: "Metrics story",
    summary:
      "Added analytics cards and charts for conversion, activation, signups, impact, and traffic.",
    title: "Added analytics signals",
  },
  {
    day: 5,
    signal: "Faster repeated use",
    summary:
      "Planned keyboard shortcuts, empty states, and local persistence as the next polish loop.",
    title: "Added keyboard shortcuts and empty states",
  },
] as const satisfies readonly ShipLogEntry[];
