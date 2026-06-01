/* Maps day index (0–4) to a color accent */
type DayColor = "cyan" | "violet" | "lime" | "amber" | "coral";

interface ShipLogCardProps {
  day: number;
  index: number;
  signal: string;
  summary: string;
  title: string;
}

const colorByIndex: DayColor[] = ["cyan", "violet", "lime", "amber", "coral"];

const colorMap: Record<
  DayColor,
  { border: string; glow: string; badgeBg: string; badgeText: string; signalColor: string }
> = {
  cyan:   { border: "rgb(34 211 238 / 0.2)",  glow: "rgb(34 211 238 / 0.12)", badgeBg: "rgb(34 211 238 / 0.12)",  badgeText: "#67e8f9",  signalColor: "#22d3ee" },
  violet: { border: "rgb(139 92 246 / 0.2)",  glow: "rgb(139 92 246 / 0.12)", badgeBg: "rgb(139 92 246 / 0.12)", badgeText: "#c4b5fd",  signalColor: "#8b5cf6" },
  lime:   { border: "rgb(163 230 53 / 0.2)",   glow: "rgb(163 230 53 / 0.1)",  badgeBg: "rgb(163 230 53 / 0.12)",  badgeText: "#bef264",  signalColor: "#a3e635" },
  amber:  { border: "rgb(251 191 36 / 0.2)",   glow: "rgb(251 191 36 / 0.1)",  badgeBg: "rgb(251 191 36 / 0.12)",  badgeText: "#fde68a",  signalColor: "#fbbf24" },
  coral:  { border: "rgb(248 113 113 / 0.2)",  glow: "rgb(248 113 113 / 0.1)", badgeBg: "rgb(248 113 113 / 0.12)", badgeText: "#fca5a5",  signalColor: "#f87171" },
};

export function ShipLogCard({ day, index, signal, summary, title }: ShipLogCardProps) {
  const colorKey = colorByIndex[index % colorByIndex.length] ?? "cyan";
  const c = colorMap[colorKey];

  return (
    <div
      className="ship-log-card surface-shimmer motion-reveal"
      style={{
        borderColor: c.border,
        boxShadow: `inset 0 1px 0 rgb(255 255 255 / 0.05), 0 0 40px ${c.glow}`,
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Top accent line */}
      <div
        className="ship-log-card__accent-line"
        aria-hidden="true"
        style={{ background: `linear-gradient(90deg, transparent, ${c.signalColor}, transparent)` }}
      />

      {/* Day badge */}
      <span
        className="ship-log-card__day"
        style={{ background: c.badgeBg, color: c.badgeText, borderColor: c.border }}
      >
        Day {day}
      </span>

      <div className="ship-log-card__body">
        <p className="ship-log-card__title">{title}</p>
        <p className="ship-log-card__summary">{summary}</p>
        <div className="ship-log-card__signal">
          <span
            className="ship-log-card__signal-dot motion-signal-pulse"
            aria-hidden="true"
            style={{ background: c.signalColor, boxShadow: `0 0 6px ${c.signalColor}` }}
          />
          <span style={{ color: c.signalColor }}>{signal}</span>
        </div>
      </div>
    </div>
  );
}
