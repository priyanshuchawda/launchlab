import { BarChart3, FlaskConical, LayoutTemplate } from "lucide-react";

import { PremiumSurface } from "@/components/design/premium-surface";

const features = [
  {
    description:
      "Transform a founder goal into six testable hypotheses with effort and impact.",
    icon: FlaskConical,
    title: "Build",
  },
  {
    description:
      "Compare clean landing-page variants before a test reaches the team.",
    icon: LayoutTemplate,
    title: "Preview",
  },
  {
    description:
      "Track signups, conversion rate, activation, and the next result signal.",
    icon: BarChart3,
    title: "Measure",
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl py-16">
      <div className="mb-6 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
          Product system
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-normal text-slate-50">
          A cleaner experiment loop.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <PremiumSurface
            className="min-h-52 p-5 motion-reveal"
            key={feature.title}
            variant={feature.title === "Build" ? "spotlight" : "lane"}
          >
            <div className="grid gap-3">
              <feature.icon
                aria-hidden="true"
                className="size-5 text-cyan-200"
              />
              <h3 className="font-display text-lg font-semibold tracking-normal text-slate-50">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </div>
          </PremiumSurface>
        ))}
      </div>
    </section>
  );
}
