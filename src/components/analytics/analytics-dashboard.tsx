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

import { Badge } from "@/components/ui/badge";
import { analyticsSnapshot } from "@/data/analytics";
import type { MetricCard } from "@/types/analytics";

const trafficColors = ["#22d3ee", "#a3e635", "#8b5cf6", "#38bdf8"];

function MetricTile({ metric }: { metric: MetricCard }) {
  return (
    <div className="min-h-32 rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-300">{metric.label}</p>
        <Badge variant={metric.trend === "up" ? "success" : "cyan"}>
          {metric.trend}
        </Badge>
      </div>
      <p className="mt-4 font-mono text-2xl font-semibold text-slate-50">
        {metric.value}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
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
    <div
      className="grid gap-3 rounded-lg border border-white/10 bg-slate-950/45 p-4"
      data-testid="analytics-chart"
    >
      <div>
        <h3 className="font-display text-lg font-semibold tracking-normal text-slate-50">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
      </div>
      <div className="h-64 min-h-64 w-full">
        <ResponsiveContainer
          height={256}
          initialDimension={{ height: 256, width: 640 }}
          minHeight={256}
          minWidth={0}
          width="100%"
        >
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AnalyticsDashboard() {
  const {
    conversionTrend,
    experimentImpact,
    metricCards,
    signupTrend,
    trafficSources,
  } = analyticsSnapshot;

  return (
    <section
      aria-labelledby="growth-analytics-title"
      className="grid gap-5 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.03] p-4 sm:p-5"
      id="analytics"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
            Product signals
          </p>
          <h2
            className="mt-2 font-display text-2xl font-semibold tracking-normal text-slate-50"
            id="growth-analytics-title"
          >
            Growth analytics
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Mock startup metrics tied to the generated experiment queue.
          </p>
        </div>
        <Badge variant="success">Live demo data</Badge>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {metricCards.map((metric) => (
          <MetricTile key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ChartShell
          description="Conversion and activation improved after the proof and onboarding tests."
          title="Conversion trend"
        >
          <AreaChart accessibilityLayer data={conversionTrend}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="4 4" />
            <XAxis dataKey="week" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Area
              dataKey="conversionRate"
              fill="#22d3ee"
              fillOpacity={0.18}
              isAnimationActive={false}
              name="Conversion"
              stroke="#22d3ee"
              type="monotone"
            />
            <Area
              dataKey="activationRate"
              fill="#a3e635"
              fillOpacity={0.12}
              isAnimationActive={false}
              name="Activation"
              stroke="#a3e635"
              type="monotone"
            />
          </AreaChart>
        </ChartShell>

        <ChartShell
          description="Impact scores keep the team focused on the highest leverage experiments."
          title="Experiment impact"
        >
          <BarChart accessibilityLayer data={experimentImpact}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="4 4" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="impact" fill="#8b5cf6" isAnimationActive={false} />
          </BarChart>
        </ChartShell>

        <ChartShell
          description="Signup volume rises as the landing page and onboarding tests compound."
          title="Signup trend"
        >
          <LineChart accessibilityLayer data={signupTrend}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="4 4" />
            <XAxis dataKey="week" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              dataKey="signups"
              dot={false}
              isAnimationActive={false}
              name="Signups"
              stroke="#a3e635"
              strokeWidth={3}
              type="monotone"
            />
            <Line
              dataKey="visitors"
              dot={false}
              isAnimationActive={false}
              name="Visitors"
              stroke="#22d3ee"
              strokeWidth={2}
              type="monotone"
            />
          </LineChart>
        </ChartShell>

        <ChartShell
          description="Traffic sources balance organic intent with founder-led launch motion."
          title="Traffic sources"
        >
          <PieChart accessibilityLayer>
            <Tooltip />
            <Pie
              cx="50%"
              cy="50%"
              data={trafficSources}
              dataKey="value"
              innerRadius={54}
              isAnimationActive={false}
              nameKey="name"
              outerRadius={88}
              paddingAngle={3}
            >
              {trafficSources.map((source, index) => (
                <Cell
                  fill={trafficColors[index % trafficColors.length]}
                  key={source.name}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartShell>
      </div>
    </section>
  );
}
