"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Experiment } from "@/types/experiment";
import type { LandingVariant } from "@/types/landing-variant";

function VariantPanel({ variant }: { variant: LandingVariant }) {
  return (
    <div className="grid gap-5 rounded-lg border border-white/10 bg-slate-950/55 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge variant={variant.id === "variant-a" ? "cyan" : "violet"}>
          {variant.style}
        </Badge>
        <div className="rounded-lg border border-lime-300/20 bg-lime-300/10 px-3 py-2 text-right">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-lime-100/75">
            Conversion prediction
          </p>
          <p className="font-mono text-2xl font-semibold text-lime-200">
            {variant.conversionPrediction}%
          </p>
        </div>
      </div>

      <div className="grid gap-3">
        <h3 className="font-display text-3xl font-semibold tracking-normal text-slate-50">
          {variant.headline}
        </h3>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          {variant.subheadline}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            CTA
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-100">
            {variant.cta}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Social proof
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {variant.socialProof}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Pricing angle
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {variant.pricingAngle}
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm font-medium text-cyan-100">
        Recommended: {variant.recommendation}
      </div>
    </div>
  );
}

export function LandingVariantPreview({
  experiment,
  variants,
}: {
  experiment: Experiment;
  variants: readonly LandingVariant[];
}) {
  return (
    <section
      aria-labelledby="landing-variant-preview-title"
      className="grid gap-4 rounded-lg border border-violet-300/20 bg-violet-300/[0.035] p-4 sm:p-5"
      id="variants"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
            Selected experiment
          </p>
          <h2
            className="mt-2 font-display text-2xl font-semibold tracking-normal text-slate-50"
            id="landing-variant-preview-title"
          >
            A/B landing preview
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {experiment.title}
          </p>
        </div>
        <Badge variant="violet">2 variants</Badge>
      </div>

      <Tabs defaultValue={variants[0]?.id}>
        <TabsList aria-label="Landing variant comparison">
          {variants.map((variant) => (
            <TabsTrigger key={variant.id} value={variant.id}>
              {variant.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {variants.map((variant) => (
          <TabsContent key={variant.id} value={variant.id}>
            <VariantPanel variant={variant} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
