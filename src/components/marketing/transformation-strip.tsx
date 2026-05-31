import { ArrowRight, ClipboardList, Rocket } from "lucide-react";
import type * as React from "react";

import { PremiumSurface } from "@/components/design/premium-surface";

const beforeItems = [
  "Scattered growth ideas",
  "Unclear landing copy",
  "No ranked next action",
] as const;

const afterItems = [
  "Ranked experiment queue",
  "A/B landing variants",
  "Metrics-backed ship log",
] as const;

export function TransformationStrip() {
  return (
    <section className="mx-auto max-w-6xl py-10">
      <PremiumSurface
        className="grid gap-5 p-5 md:grid-cols-[1fr_auto_1fr] md:items-center"
        interactive={false}
        variant="spotlight"
      >
        <TransformationColumn
          icon={<ClipboardList aria-hidden="true" className="size-5" />}
          items={beforeItems}
          label="Before LaunchLab"
        />
        <div className="hidden size-11 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 md:flex">
          <ArrowRight aria-hidden="true" className="size-5" />
        </div>
        <TransformationColumn
          icon={<Rocket aria-hidden="true" className="size-5" />}
          items={afterItems}
          label="After LaunchLab"
        />
      </PremiumSurface>
    </section>
  );
}

function TransformationColumn({
  icon,
  items,
  label,
}: {
  icon: React.ReactNode;
  items: readonly string[];
  label: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
        <span className="text-cyan-200">{icon}</span>
        {label}
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-slate-400">
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item}>
            <span className="size-1.5 rounded-full bg-lime-300" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
