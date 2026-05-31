import type * as React from "react";

import { cn } from "@/lib/utils";

type PremiumSurfaceVariant = "command" | "spotlight" | "lane";

const surfaceVariantClass: Record<PremiumSurfaceVariant, string> = {
  command: "surface-command",
  lane: "surface-lane",
  spotlight: "surface-spotlight",
};

export interface PremiumSurfaceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  variant?: PremiumSurfaceVariant;
}

export function PremiumSurface({
  className,
  interactive = true,
  variant = "spotlight",
  ...props
}: PremiumSurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-lg surface-glow",
        surfaceVariantClass[variant],
        interactive ? "motion-hover-lift" : null,
        className,
      )}
      {...props}
    />
  );
}

export function MetricBeacon({
  className,
  label,
  value,
}: {
  className?: string;
  label: string;
  value: string;
}) {
  return (
    <div className={cn("metric-beacon", className)}>
      <p className="metric-beacon__label">{label}</p>
      <p className="metric-beacon__value">{value}</p>
    </div>
  );
}

export function WorkflowLane({
  children,
  className,
  description,
  meta,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  description?: string;
  meta?: string;
  title: string;
}) {
  return (
    <section
      aria-label={title}
      className={cn("surface-lane rounded-lg p-4 motion-hover-lift", className)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold tracking-normal text-slate-50">
            {title}
          </h3>
          {description ? (
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
        {meta ? (
          <span className="shrink-0 rounded-lg border border-lime-300/20 bg-lime-300/10 px-2.5 py-1 font-mono text-xs font-semibold text-lime-100">
            {meta}
          </span>
        ) : null}
      </div>
      <div className="mt-3 grid gap-3">{children}</div>
    </section>
  );
}
