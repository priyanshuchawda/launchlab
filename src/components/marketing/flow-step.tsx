import type { LucideIcon } from "lucide-react";

type StepColor = "cyan" | "violet" | "lime" | "amber";

interface FlowStepProps {
  color: StepColor;
  detail: string;
  icon: LucideIcon;
  label: string;
  number: string;
}

const colorMap: Record<StepColor, { circle: string; text: string; border: string; glow: string }> = {
  cyan:   { circle: "rgb(34 211 238 / 0.15)",  text: "#22d3ee", border: "rgb(34 211 238 / 0.4)",  glow: "rgb(34 211 238 / 0.3)" },
  violet: { circle: "rgb(139 92 246 / 0.15)",  text: "#8b5cf6", border: "rgb(139 92 246 / 0.4)",  glow: "rgb(139 92 246 / 0.3)" },
  lime:   { circle: "rgb(163 230 53 / 0.15)",   text: "#a3e635", border: "rgb(163 230 53 / 0.4)",   glow: "rgb(163 230 53 / 0.25)" },
  amber:  { circle: "rgb(251 191 36 / 0.15)",   text: "#fbbf24", border: "rgb(251 191 36 / 0.4)",   glow: "rgb(251 191 36 / 0.25)" },
};

export function FlowStep({ color, detail, icon: Icon, label, number }: FlowStepProps) {
  const c = colorMap[color];

  return (
    <div className="flow-step">
      {/* Numbered circle */}
      <div
        className="flow-step__circle"
        aria-hidden="true"
        style={{
          background: c.circle,
          borderColor: c.border,
          color: c.text,
          boxShadow: `0 0 16px ${c.glow}`,
        }}
      >
        <Icon className="size-4" />
      </div>

      <div className="flow-step__body">
        <div className="flow-step__label-row">
          <span
            className="flow-step__number"
            aria-hidden="true"
            style={{ color: c.text, opacity: 0.5 }}
          >
            {number}
          </span>
          <p className="flow-step__label" style={{ color: c.text }}>
            {label}
          </p>
        </div>
        <p className="flow-step__detail">{detail}</p>
      </div>
    </div>
  );
}
