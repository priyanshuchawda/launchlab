import { MetricBeacon, PremiumSurface } from "@/components/design/premium-surface";

const cockpitStats = [
  { color: "#22d3ee", label: "Active goal",  value: "1"    },
  { color: "#8b5cf6", label: "Queued tests", value: "6"    },
  { color: "#a3e635", label: "Next result",  value: "+18%" },
] as const;

export function CockpitHeader() {
  return (
    <PremiumSurface
      className="cockpit-header grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
      interactive={false}
      variant="spotlight"
    >
      <div className="motion-reveal">
        <div className="cockpit-header__badge">
          <span className="cockpit-header__badge-dot motion-signal-pulse" aria-hidden="true" />
          LaunchLab workspace
        </div>
        <h1 className="cockpit-header__headline mt-5">
          Experiment{" "}
          <span className="gradient-text-static">builder</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Generate a test queue, choose a variant, and keep the next action
          visible from goal to test to result.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[26rem]">
        {cockpitStats.map((stat) => (
          <div key={stat.label} className="cockpit-stat" style={{ borderColor: `${stat.color}30` }}>
            <p className="cockpit-stat__label">{stat.label}</p>
            <p className="cockpit-stat__value" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </PremiumSurface>
  );
}
