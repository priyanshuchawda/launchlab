import type { ExperimentStage } from "@/types/experiment";

export interface ExperimentBlueprint {
  slug: string;
  title: string;
  effort: number;
  expectedImpact: number;
  metric: string;
  stage: ExperimentStage;
  signal: string;
  hypothesis: (goal: string) => string;
}

export const experimentBlueprints = [
  {
    slug: "signup-proof",
    title: "Signup proof strip",
    effort: 2,
    expectedImpact: 8,
    metric: "signup conversion rate",
    stage: "conversion",
    signal: "More visitors start the signup flow",
    hypothesis: (goal) =>
      `If LaunchLab adds focused social proof beside the primary signup action for "${goal}", more high-intent visitors will trust the product promise and start signup.`,
  },
  {
    slug: "activation-checklist",
    title: "Activation checklist",
    effort: 3,
    expectedImpact: 7,
    metric: "activation completion rate",
    stage: "activation",
    signal: "More new users complete the first useful action",
    hypothesis: (goal) =>
      `If new users see a three-step activation checklist tied to "${goal}", they will understand the product path faster and reach the first value moment sooner.`,
  },
  {
    slug: "cta-contrast",
    title: "CTA contrast test",
    effort: 1,
    expectedImpact: 6,
    metric: "hero CTA click-through",
    stage: "acquisition",
    signal: "More qualified clicks from the first viewport",
    hypothesis: (goal) =>
      `If the landing page tests a stronger CTA hierarchy for "${goal}", qualified visitors will see the next action faster and click through at a higher rate.`,
  },
  {
    slug: "onboarding-sample",
    title: "Onboarding sample goal",
    effort: 4,
    expectedImpact: 8,
    metric: "week-one activation rate",
    stage: "activation",
    signal: "More users create a complete first project",
    hypothesis: (goal) =>
      `If onboarding preloads a realistic sample based on "${goal}", users will avoid blank-state friction and understand what success looks like in the product.`,
  },
  {
    slug: "pricing-proof",
    title: "Proof-led pricing nudge",
    effort: 2,
    expectedImpact: 5,
    metric: "trial to upgrade conversion",
    stage: "conversion",
    signal: "More trial users visit and act on pricing",
    hypothesis: (goal) =>
      `If pricing moments include quantified proof connected to "${goal}", trial users will have stronger confidence that the product can justify the next step.`,
  },
  {
    slug: "retention-loop",
    title: "Weekly wins loop",
    effort: 3,
    expectedImpact: 6,
    metric: "weekly retained teams",
    stage: "retention",
    signal: "More teams return to review shipped progress",
    hypothesis: (goal) =>
      `If teams receive a weekly shipped-experiments recap for "${goal}", they will return more often because progress is visible and tied to measurable growth.`,
  },
] as const satisfies readonly ExperimentBlueprint[];
