import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard";
import { AppCockpitShell } from "@/components/app/app-cockpit-shell";
import { AppSettingsPanel } from "@/components/app/app-settings-panel";
import { ExperimentGenerator } from "@/components/experiments/experiment-generator";

export default function AppPage() {
  return (
    <AppCockpitShell>
      <ExperimentGenerator />
      <AnalyticsDashboard />
      <AppSettingsPanel />
    </AppCockpitShell>
  );
}
