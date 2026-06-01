"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { SectionLabel } from "@/components/marketing/section-label";
import { analyticsSnapshot } from "@/data/analytics";
import type { MetricCard } from "@/types/analytics";

const trafficColors = ["#22d3ee", "#a3e635", "#8b5cf6", "#fbbf24"];
const tileAccents = ["#22d3ee", "#8b5cf6", "#a3e635"];

const TOOLTIP_STYLE = {
  backgroundColor: "rgb(2 6 23 / 0.95)",
  border: "1px solid rgb(255 255 255 / 0.1)",
  borderRadius: "0.5rem",
  color: "#e2e8f0",
  fontSize: "0.8125rem",
};

function MetricTile({ metric, index }: { metric: MetricCard; index: number }) {
  const accent = tileAccents[index % tileAccents.length] ?? "#22d3ee";
  return (
    <div className="metric-tile">
      <div
        className="metric-tile__top-line"
        aria-hidden="true"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div className="flex items-center justify-between gap-2 mt-1">
        <p className="metric-tile__label">{metric.label}</p>
        <span
          className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
          style={{ background: `${accent}1a`, color: accent }}
        >
          {metric.trend}
        </span>
      </div>
      <p className="metric-tile__value">{metric.value}</p>
      <p className="metric-tile__detail">{metric.detail}</p>
    </div>
  );
}

function ChartShell({
  children,
  description,
  title,
}: {
  children: React.ReactNode;
  description: string;
  title: string;
}) {
  return (
    <div className="chart-shell" data-testid="analytics-chart">
      <div>
        <p className="chart-shell__title">{title}</p>
        <p className="chart-shell__desc">{description}</p>
      </div>
      <div className="h-60 min-h-60 w-full">
        <ResponsiveContainer height={240} initialDimension={{ height: 240, width: 640 }} minHeight={240} minWidth={0} width="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AnalyticsDashboard() {
  const { conversionTrend, experimentImpact, metricCards, signupTrend, trafficSources } =
    analyticsSnapshot;

  return (
    <section
      aria-labelledby="growth-analytics-title"
      className="grid gap-5 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.025] p-5 sm:p-6"
      id="analytics"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <SectionLabel label="Product signals" />
          <h2
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-50"
            id="growth-analytics-title"
          >
            Growth analytics
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Mock startup metrics tied to the generated experiment queue.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-300/25 bg-lime-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-200">
          <span className="size-1.5 rounded-full bg-lime-400 motion-signal-pulse" aria-hidden="true" />
          Live demo data
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {metricCards.map((metric, i) => (
          <MetricTile key={metric.label} metric={metric} index={i} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ChartShell
          description="Conversion and activation improved after proof and onboarding tests."
          title="Conversion trend"
        >
          <AreaChart accessibilityLayer data={conversionTrend}>
            <CartesianGrid stroke="rgb(30 41 59 / 0.8)" strokeDasharray="4 4" />
            <XAxis dataKey="week" stroke="#475569" tick={{ fontSize: 11 }} />
            <YAxis stroke="#475569" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Area dataKey="conversionRate" fill="#22d3ee" fillOpacity={0.15} isAnimationActive={false} name="Conversion" stroke="#22d3ee" type="monotone" />
            <Area dataKey="activationRate" fill="#a3e635" fillOpacity={0.1} isAnimationActive={false} name="Activation" stroke="#a3e635" type="monotone" />
          </AreaChart>
        </ChartShell>

        <ChartShell
          description="Impact scores keep the team focused on the highest-leverage experiments."
          title="Experiment impact"
        >
          <BarChart accessibilityLayer data={experimentImpact}>
            <CartesianGrid stroke="rgb(30 41 59 / 0.8)" strokeDasharray="4 4" />
            <XAxis dataKey="name" stroke="#475569" tick={{ fontSize: 11 }} />
            <YAxis stroke="#475569" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Bar dataKey="impact" fill="#8b5cf6" isAnimationActive={false} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartShell>

        <ChartShell
          description="Signup volume rises as landing page and onboarding tests compound."
          title="Signup trend"
        >
          <LineChart accessibilityLayer data={signupTrend}>
            <CartesianGrid stroke="rgb(30 41 59 / 0.8)" strokeDasharray="4 4" />
            <XAxis dataKey="week" stroke="#475569" tick={{ fontSize: 11 }} />
            <YAxis stroke="#475569" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Line dataKey="signups" dot={false} isAnimationActive={false} name="Signups" stroke="#a3e635" strokeWidth={2.5} type="monotone" />
            <Line dataKey="visitors" dot={false} isAnimationActive={false} name="Visitors" stroke="#22d3ee" strokeWidth={2} type="monotone" />
          </LineChart>
        </ChartShell>

        <ChartShell
          description="Traffic sources balance organic intent with founder-led launch motion."
          title="Traffic sources"
        >
          <PieChart accessibilityLayer>
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Pie cx="50%" cy="50%" data={trafficSources} dataKey="value" innerRadius={50} isAnimationActive={false} nameKey="name" outerRadius={84} paddingAngle={4}>
              {trafficSources.map((source, index) => (
                <Cell fill={trafficColors[index % trafficColors.length]} key={source.name} />
              ))}
            </Pie>
          </PieChart>
        </ChartShell>
      </div>
    </section>
  );
}
