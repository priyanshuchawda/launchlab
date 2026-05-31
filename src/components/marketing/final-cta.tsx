import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl py-16">
      <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-display text-2xl font-semibold tracking-normal text-slate-50">
            Ready to turn one startup goal into a week of growth tests?
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            The live demo will generate experiments, variants, analytics, and
            next actions without requiring login.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button asChild size="lg" variant="outline">
            <Link href="/case-study">Read case study</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/app">
              Open demo
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
