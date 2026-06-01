import { ArrowRight, type LucideIcon } from "lucide-react";

type StepColor = "cyan" | "violet" | "lime" | "amber";

interface PipelineStepProps {
  color: StepColor;
  icon: LucideIcon;
  index: number;
  label: string;
  status: string;
  title: string;
}

const colorMap: Record<StepColor, { border: string; bg: string; text: string; icon: string }> = {
  cyan:   { border: "rgb(34 211 238 / 0.35)",  bg: "rgb(34 211 238 / 0.08)",  text: "#67e8f9", icon: "#22d3ee" },
  violet: { border: "rgb(139 92 246 / 0.35)",  bg: "rgb(139 92 246 / 0.08)",  text: "#c4b5fd", icon: "#8b5cf6" },
  lime:   { border: "rgb(163 230 53 / 0.35)",   bg: "rgb(163 230 53 / 0.08)",  text: "#bef264", icon: "#a3e635" },
  amber:  { border: "rgb(251 191 36 / 0.35)",   bg: "rgb(251 191 36 / 0.08)",  text: "#fde68a", icon: "#fbbf24" },
};

export function PipelineStep({
  color,
  icon: Icon,
  index,
  label,
  status,
  title,
}: PipelineStepProps) {
  const c = colorMap[color];
  const isActive = index === 1;

  return (
    <div
      className="builder-flow__step"
      data-active={isActive ? "true" : "false"}
      style={isActive ? { borderColor: c.border, background: c.bg } : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className="text-xs font-medium uppercase tracking-[0.16em]"
            style={{ color: c.text }}
          >
            {label}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-100">{title}</p>
        </div>
        <span
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border"
          style={{ borderColor: c.border, background: c.bg, color: c.icon }}
          aria-hidden="true"
        >
          <Icon className="size-4" />
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-400">
        <span>{status}</span>
        <ArrowRight aria-hidden="true" className="size-3.5" style={{ color: c.text }} />
      </div>
    </div>
  );
}
