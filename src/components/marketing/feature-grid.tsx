import { BarChart3, FlaskConical, LayoutTemplate } from "lucide-react";

import { FeatureCard } from "@/components/marketing/feature-card";
import { SectionLabel } from "@/components/marketing/section-label";

const features = [
  {
    color: "cyan" as const,
    description:
      "Transform a founder goal into six testable hypotheses with effort and impact scores so you know exactly where to start.",
    icon: FlaskConical,
    step: "01",
    title: "Build",
    highlight: "Hypothesis engine",
  },
  {
    color: "violet" as const,
    description:
      "Compare clean landing-page variants side-by-side before a test reaches the team. Catch weak copy before it ships.",
    icon: LayoutTemplate,
    step: "02",
    title: "Preview",
    highlight: "Variant comparison",
  },
  {
    color: "lime" as const,
    description:
      "Track signups, conversion rate, activation, and the next result signal — all attached to the test that generated them.",
    icon: BarChart3,
    step: "03",
    title: "Measure",
    highlight: "Live metrics",
  },
] as const;

export function FeatureGrid() {
  return (
    <section
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      id="features"
    >
      <SectionLabel label="Product system" />
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        A cleaner experiment loop.
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
        Three stages, one continuous flow. No context-switching, no spreadsheets.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
