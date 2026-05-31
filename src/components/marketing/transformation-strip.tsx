import {
  ArrowRight,
  ClipboardList,
  LineChart,
  type LucideIcon,
  PenLine,
  Rocket,
} from "lucide-react";

import { PremiumSurface } from "@/components/design/premium-surface";

const flowSteps = [
  {
    detail: "Write the measurable startup outcome.",
    icon: ClipboardList,
    label: "Goal",
  },
  {
    detail: "Rank tests by effort, impact, and learning value.",
    icon: Rocket,
    label: "Test queue",
  },
  {
    detail: "Open the landing-page angle before shipping.",
    icon: PenLine,
    label: "Variant",
  },
  {
    detail: "Keep the next result signal attached to the test.",
    icon: LineChart,
    label: "Result",
  },
] as const;

export function TransformationStrip() {
  return (
    <section className="mx-auto max-w-6xl py-10">
      <PremiumSurface
        className="grid gap-5 p-5"
        interactive={false}
        variant="spotlight"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
              From idea to next test
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-normal text-slate-50">
              One visible flow from goal to result.
            </h2>
          </div>
          <div className="hidden size-11 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 sm:flex">
            <ArrowRight aria-hidden="true" className="size-5" />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {flowSteps.map(({ detail, icon: Icon, label }) => (
            <TransformationStep
              detail={detail}
              icon={Icon}
              key={label}
              label={label}
            />
          ))}
        </div>
      </PremiumSurface>
    </section>
  );
}

function TransformationStep({
  detail,
  icon: Icon,
  label,
}: {
  detail: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
        <span className="text-cyan-200">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        {label}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}
