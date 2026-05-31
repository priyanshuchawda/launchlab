import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { caseStudyMetrics, caseStudySections } from "@/data/case-study";
import { shipLogEntries } from "@/data/ship-log";

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 lg:py-10">
      <section className="mx-auto max-w-6xl">
        <Button asChild variant="outline">
          <Link href="/">Back to landing</Link>
        </Button>

        <div className="grid gap-8 py-14 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="font-mono text-sm text-cyan-200">
              Product build case study
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-normal text-slate-50">
              LaunchLab case study
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A focused frontend product that turns startup goals into
              measurable experiments, landing variants, analytics, and a public
              iteration record.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {caseStudyMetrics.map(([value, label]) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                key={label}
              >
                <p className="font-mono text-3xl font-semibold text-lime-200">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {caseStudySections.map((section) => (
            <section
              className="rounded-lg border border-white/10 bg-slate-950/55 p-5"
              key={section.title}
            >
              <h2 className="font-display text-2xl font-semibold tracking-normal text-slate-50">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <section className="py-14">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
                Iteration proof
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-normal text-slate-50">
                Ship log
              </h2>
            </div>
            <Button asChild>
              <Link href="/app">
                Open demo
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {shipLogEntries.map((entry) => (
              <div
                className="min-h-48 rounded-lg border border-white/10 bg-white/[0.035] p-4"
                key={entry.day}
              >
                <p className="font-mono text-xs text-lime-200">
                  Day {entry.day}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-100">
                  {entry.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {entry.summary}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
