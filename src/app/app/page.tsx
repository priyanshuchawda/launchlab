import Link from "next/link";
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard";
import { AppNavigation } from "@/components/app/app-navigation";
import { AppSettingsPanel } from "@/components/app/app-settings-panel";
import { ExperimentGenerator } from "@/components/experiments/experiment-generator";
import { Button } from "@/components/ui/button";

export default function AppPage() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 lg:py-10" id="main-content">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <Button asChild variant="outline">
            <Link href="/">Back to landing</Link>
          </Button>
          <p className="mt-10 font-mono text-sm text-cyan-200">
            LaunchLab workspace
          </p>
          <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-normal text-slate-50 sm:text-5xl">
            Generate the next startup growth experiment.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            A focused product surface for turning rough founder goals into
            measurable tests with clear effort, impact, and success signals.
          </p>
          <AppNavigation />
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["6", "experiments"],
              ["10", "impact score"],
              ["1", "decision queue"],
            ].map(([value, label]) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                key={label}
              >
                <p className="font-mono text-2xl font-semibold text-lime-200">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          <ExperimentGenerator />
          <AnalyticsDashboard />
          <AppSettingsPanel />
        </div>
      </section>
    </main>
  );
}
