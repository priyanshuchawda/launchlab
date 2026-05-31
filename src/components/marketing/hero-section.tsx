import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { LaunchCommandVisual } from "@/components/marketing/launch-command-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="max-w-3xl motion-reveal">
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
      <LaunchCommandVisual />
    </section>
  );
}
