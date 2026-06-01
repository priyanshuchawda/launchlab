import { ArrowLeft, Gauge, ListChecks, Radar, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import type * as React from "react";

import { AppNavigation } from "@/components/app/app-navigation";
import { CockpitHeader } from "@/components/app/cockpit-header";
import { PremiumSurface } from "@/components/design/premium-surface";

const commandRailItems = [
  { color: "#22d3ee", href: "#generator", icon: Sparkles, label: "Goal" },
  { color: "#8b5cf6", href: "#board",     icon: ListChecks, label: "Test queue" },
  { color: "#a3e635", href: "#analytics", icon: Gauge,      label: "Metrics" },
  { color: "#fbbf24", href: "#settings",  icon: Radar,      label: "Settings" },
] as const;

function CockpitCommandRail() {
  return (
    <PremiumSurface
      className="grid gap-5 p-4 lg:sticky lg:top-24"
      interactive={false}
      variant="command"
    >
      {/* Back button */}
      <Link
        className="cockpit-rail__back"
        href="/"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to landing
      </Link>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/70">
          Builder flow rail
        </p>
        <p className="mt-1.5 text-sm leading-6 text-slate-400">
          Goal → test → result, without losing context.
        </p>
      </div>

      <nav aria-label="Builder flow rail" className="grid gap-2">
        {commandRailItems.map(({ color, href, icon: Icon, label }) => (
          <a
            className="cockpit-rail__item group"
            href={href}
            key={href}
          >
            <span className="inline-flex min-w-0 items-center gap-2.5">
              <span
                className="cockpit-rail__item-icon"
                aria-hidden="true"
                style={{ color, background: `${color}1a`, borderColor: `${color}40` }}
              >
                <Icon className="size-3.5" />
              </span>
              <span className="truncate">{label}</span>
            </span>
            <Rocket
              aria-hidden="true"
              className="size-3.5 shrink-0 text-slate-600 transition-colors duration-200 group-hover:text-lime-300"
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
