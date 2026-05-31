import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-8 py-8 lg:grid-cols-[1fr_460px] lg:items-center">
      <div className="max-w-3xl">
        <Badge variant="cyan">
          <Sparkles aria-hidden="true" className="size-3.5" />
          AI experiment dashboard
        </Badge>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-normal text-slate-50 sm:text-6xl">
          Launch experiments faster than competitors can write specs.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Turn messy startup goals into testable landing variants, experiment
          cards, and conversion insights in minutes.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/app">
              Try live demo
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#ship-log">View shipped experiments</Link>
          </Button>
        </div>
      </div>
      <HeroDashboardPreview />
    </section>
  );
}

function HeroDashboardPreview() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/75 p-4 shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-sm font-semibold text-slate-100">Conversion lab</p>
          <p className="text-xs text-slate-500">AI notes app workspace</p>
        </div>
        <Badge variant="success">Shipped 12 experiments this week</Badge>
      </div>
      <div className="mt-4 grid gap-3">
        {[
          ["Signup friction audit", "+18%", "High impact"],
          ["CTA contrast sprint", "+11%", "Low effort"],
          ["Founder proof block", "+9%", "Ready next"],
        ].map(([title, lift, status]) => (
          <div
            className="rounded-lg border border-white/10 bg-white/[0.045] p-3"
            key={title}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-100">{title}</p>
                <p className="mt-1 text-xs text-slate-500">{status}</p>
              </div>
              <span className="font-mono text-sm text-lime-200">{lift}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-3">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
          AI suggestion
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-200">
          Move social proof above pricing and test a “Try with sample notes” CTA
          this week.
        </p>
      </div>
    </div>
  );
}
