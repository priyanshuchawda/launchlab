import type { LucideIcon } from "lucide-react";

type CardColor = "cyan" | "violet" | "lime";

interface FeatureCardProps {
  color: CardColor;
  description: string;
  highlight: string;
  icon: LucideIcon;
  step: string;
  title: string;
}

const colorMap: Record<
  CardColor,
  {
    border: string;
    bgAccent: string;
    iconBg: string;
    iconColor: string;
    stepColor: string;
    glow: string;
    highlightBg: string;
    highlightText: string;
  }
> = {
  cyan: {
    border: "rgb(34 211 238 / 0.22)",
    bgAccent: "rgb(34 211 238 / 0.07)",
    iconBg: "rgb(34 211 238 / 0.12)",
    iconColor: "#22d3ee",
    stepColor: "rgb(34 211 238 / 0.35)",
    glow: "0 0 40px rgb(34 211 238 / 0.12)",
    highlightBg: "rgb(34 211 238 / 0.1)",
    highlightText: "#67e8f9",
  },
  violet: {
    border: "rgb(139 92 246 / 0.22)",
    bgAccent: "rgb(139 92 246 / 0.07)",
    iconBg: "rgb(139 92 246 / 0.12)",
    iconColor: "#8b5cf6",
    stepColor: "rgb(139 92 246 / 0.35)",
    glow: "0 0 40px rgb(139 92 246 / 0.12)",
    highlightBg: "rgb(139 92 246 / 0.1)",
    highlightText: "#c4b5fd",
  },
  lime: {
    border: "rgb(163 230 53 / 0.22)",
    bgAccent: "rgb(163 230 53 / 0.06)",
    iconBg: "rgb(163 230 53 / 0.12)",
    iconColor: "#a3e635",
    stepColor: "rgb(163 230 53 / 0.35)",
    glow: "0 0 40px rgb(163 230 53 / 0.1)",
    highlightBg: "rgb(163 230 53 / 0.1)",
    highlightText: "#bef264",
  },
};

export function FeatureCard({
  color,
  description,
  highlight,
  icon: Icon,
  step,
  title,
}: FeatureCardProps) {
  const c = colorMap[color];

  return (
    <div
      className="feature-card surface-shimmer motion-reveal"
      style={{
        borderColor: c.border,
        background: `linear-gradient(145deg, ${c.bgAccent}, transparent 50%), rgb(2 6 23 / 0.7)`,
        boxShadow: `inset 0 1px 0 rgb(255 255 255 / 0.05), ${c.glow}`,
      }}
    >
      {/* Top accent line */}
      <div
        className="feature-card__accent-line"
        aria-hidden="true"
        style={{
          background: `linear-gradient(90deg, transparent, ${c.iconColor}, transparent)`,
        }}
      />

      <div className="feature-card__body">
        {/* Step number */}
        <div className="feature-card__meta">
          <span
            className="feature-card__step"
            aria-hidden="true"
            style={{ color: c.stepColor }}
          >
            {step}
          </span>
          <span
            className="feature-card__highlight"
            style={{ background: c.highlightBg, color: c.highlightText }}
          >
            {highlight}
          </span>
        </div>

        {/* Icon */}
        <div
          className="feature-card__icon"
          aria-hidden="true"
          style={{ background: c.iconBg, color: c.iconColor }}
        >
          <Icon className="size-5" />
        </div>

        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </div>
  );
}
