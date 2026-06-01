import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CtaOrb } from "@/components/marketing/cta-orb";

export function FinalCta() {
  return (
    <section className="final-cta mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="final-cta__card surface-border-trace">
        {/* Atmospheric glow orbs */}
        <CtaOrb />

        <div className="final-cta__content">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/80">
              Ready to ship?
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Turn one startup goal into{" "}
              <span className="gradient-text-static">a week of growth tests.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              The live demo will generate experiments, variants, analytics, and
              next actions — no login required.
            </p>
          </div>

          <div className="final-cta__actions">
            <Link
              className="final-cta__primary"
              href="/app"
              id="final-cta-primary"
            >
              Open demo
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              className="final-cta__secondary"
              href="/case-study"
              id="final-cta-secondary"
            >
              Read case study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
