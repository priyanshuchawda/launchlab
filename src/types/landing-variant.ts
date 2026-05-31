export type LandingVariantId = "variant-a" | "variant-b";

export interface LandingVariant {
  id: LandingVariantId;
  name: "Variant A" | "Variant B";
  style: string;
  headline: string;
  subheadline: string;
  cta: string;
  socialProof: string;
  pricingAngle: string;
  conversionPrediction: number;
  recommendation: string;
}
