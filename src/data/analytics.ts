import type { AnalyticsSnapshot } from "@/types/analytics";

export const analyticsSnapshot = {
  conversionTrend: [
    { activationRate: 34.2, conversionRate: 4.8, week: "W1" },
    { activationRate: 35.9, conversionRate: 5.1, week: "W2" },
    { activationRate: 38.4, conversionRate: 5.7, week: "W3" },
    { activationRate: 39.1, conversionRate: 6.0, week: "W4" },
    { activationRate: 41.7, conversionRate: 6.5, week: "W5" },
    { activationRate: 43.8, conversionRate: 7.0, week: "W6" },
  ],
  experimentImpact: [
    { impact: 8, name: "Proof strip" },
    { impact: 7, name: "Checklist" },
    { impact: 6, name: "CTA test" },
    { impact: 5, name: "Pricing nudge" },
  ],
  metricCards: [
    {
      detail: "+18.4% from last week",
      label: "Visitors",
      trend: "up",
      value: "18,420",
    },
    {
      detail: "+22.1% from last week",
      label: "Signups",
      trend: "up",
      value: "1,284",
    },
    {
      detail: "+1.2 pts after proof strip",
      label: "Conversion rate",
      trend: "up",
      value: "7.0%",
    },
    {
      detail: "+2.1 pts after checklist",
      label: "Activation rate",
      trend: "up",
      value: "43.8%",
    },
    {
      detail: "Healthy weekly lift",
      label: "Weekly growth",
      trend: "up",
      value: "18.4%",
    },
    {
      detail: "Highest CTA click-through",
      label: "Best CTA",
      trend: "flat",
      value: "Start the guided experiment",
    },
  ],
  signupTrend: [
    { signups: 142, visitors: 3200, week: "W1" },
    { signups: 188, visitors: 3700, week: "W2" },
    { signups: 246, visitors: 4300, week: "W3" },
    { signups: 318, visitors: 5100, week: "W4" },
    { signups: 402, visitors: 6100, week: "W5" },
    { signups: 516, visitors: 7380, week: "W6" },
  ],
  trafficSources: [
    { name: "Organic", value: 36 },
    { name: "Launch post", value: 28 },
    { name: "Founder referrals", value: 22 },
    { name: "Paid tests", value: 14 },
  ],
} satisfies AnalyticsSnapshot;
