import {
  ArrowLeft,
  Gauge,
  ListChecks,
  Radar,
  Rocket,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type * as React from "react";

import { AppNavigation } from "@/components/app/app-navigation";
import {
  MetricBeacon,
  PremiumSurface,
} from "@/components/design/premium-surface";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cockpitStats = [
  { label: "Active goal", value: "1" },
  { label: "Queued tests", value: "6" },
  { label: "Next result", value: "+18%" },
] as const;

const commandRailItems = [
  { href: "#generator", icon: Sparkles, label: "Goal" },
  { href: "#board", icon: ListChecks, label: "Test queue" },
  { href: "#analytics", icon: Gauge, label: "Metrics" },
  { href: "#settings", icon: Radar, label: "Settings" },
] as const;

function CockpitHeader() {
  return (
    <PremiumSurface
      className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
      interactive={false}
      variant="spotlight"
    >
      <div className="motion-reveal">
        <Badge variant="cyan">LaunchLab workspace</Badge>
        <h1 className="mt-4 max-w-3xl text-pretty font-display text-4xl font-semibold tracking-normal text-slate-50 sm:text-5xl">
          Experiment builder
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Generate a test queue, choose a variant, and keep the next action
          visible from goal to test to result.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[25rem]">
        {cockpitStats.map((stat) => (
          <MetricBeacon
            key={stat.label}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </PremiumSurface>
  );
}

function CockpitCommandRail() {
  return (
    <PremiumSurface
      className="grid gap-5 p-4 lg:sticky lg:top-8"
      interactive={false}
      variant="command"
    >
      <Button asChild variant="outline">
        <Link href="/">
          <ArrowLeft aria-hidden="true" />
          Back to landing
        </Link>
      </Button>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
          Builder flow rail
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Goal to test to result, without losing context.
        </p>
      </div>

      <nav aria-label="Builder flow rail" className="grid gap-2">
        {commandRailItems.map(({ href, icon: Icon, label }) => (
          <a
            className="group flex min-h-11 items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-3 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-slate-50 focus-visible:ring-2 focus-visible:ring-cyan-300"
            href={href}
            key={href}
          >
            <span className="inline-flex min-w-0 items-center gap-2">
              <Icon
                aria-hidden="true"
                className="size-4 shrink-0 text-cyan-200"
              />
              <span className="truncate">{label}</span>
            </span>
            <Rocket
              aria-hidden="true"
              className="size-4 text-slate-600 transition-colors duration-200 group-hover:text-lime-200"
            />
          </a>
        ))}
      </nav>

      <AppNavigation />
    </PremiumSurface>
  );
}

export function AppCockpitShell({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="min-h-screen overflow-x-hidden px-5 py-8 sm:px-8 lg:py-10"
      id="main-content"
    >
      <section className="mx-auto grid max-w-[92rem] gap-6">
        <CockpitHeader />
        <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
          <CockpitCommandRail />
          <div className="grid min-w-0 gap-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
