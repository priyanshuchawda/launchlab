import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard";
import { AppCockpitShell } from "@/components/app/app-cockpit-shell";
import { AppSettingsPanel } from "@/components/app/app-settings-panel";
import { ThemeProvider } from "@/components/app/theme-provider";
import { ExperimentGenerator } from "@/components/experiments/experiment-generator";

export default function AppPage() {
  return (
    <>
      <ThemeProvider />
      <AppCockpitShell>
        <ExperimentGenerator />
        <AnalyticsDashboard />
        <AppSettingsPanel />
      </AppCockpitShell>
    </>
  );
}
