import type { Experiment } from "@/types/experiment";
import type { LandingVariant } from "@/types/landing-variant";

function toPercent(value: number) {
  return Math.min(24, Math.max(6, Math.round(value)));
}

export function generateLandingVariants(
  experiment: Experiment,
): LandingVariant[] {
  const cleanPrediction = toPercent(8 + experiment.expectedImpact * 1.2);
  const boldPrediction = toPercent(7 + experiment.expectedImpact * 1.45);

  return [
    {
      conversionPrediction: cleanPrediction,
      cta: "Start the guided experiment",
      headline: `Turn ${experiment.metric} into a repeatable growth system`,
      id: "variant-a",
      name: "Variant A",
      pricingAngle: "Free diagnostic, paid plan after the first shipped test",
      recommendation: "Recommended for trust-sensitive founder audiences",
      socialProof: "42 early teams use LaunchLab to ship weekly tests",
      style: "Clean professional startup style",
      subheadline: `Use ${experiment.title.toLowerCase()} to move from a rough idea to a measurable launch decision.`,
    },
    {
      conversionPrediction: boldPrediction,
      cta: "Ship the test now",
      headline: `Stop guessing. Ship ${experiment.title.toLowerCase()} today.`,
      id: "variant-b",
      name: "Variant B",
      pricingAngle: "Starter plan framed around one high-impact win this week",
      recommendation: "Recommended for impatient product-led teams",
      socialProof: "12 experiments shipped this week by teams moving fast",
      style: "Bold Gen-Z startup style",
      subheadline: `A sharper page for teams that want ${experiment.metric} movement without another planning cycle.`,
    },
  ];
}
