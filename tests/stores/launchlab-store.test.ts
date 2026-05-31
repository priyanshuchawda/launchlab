import { beforeEach, describe, expect, it } from "vitest";

import { generateExperiments } from "@/lib/experiments/generate-experiments";
import {
  launchLabStoreStorageKey,
  useLaunchLabStore,
} from "@/stores/use-launchlab-store";

describe("useLaunchLabStore", () => {
  beforeEach(() => {
    localStorage.clear();
    useLaunchLabStore.getState().resetDemoState();
    useLaunchLabStore.getState().resetSettings();
  });

  it("persists generated experiments, shipped status, selected variant, and settings", () => {
    const experiments = generateExperiments(
      "Increase signup conversion for my AI notes app",
    );

    useLaunchLabStore
      .getState()
      .setGeneratedExperiments(
        "Increase signup conversion for my AI notes app",
        experiments,
      );
    useLaunchLabStore.getState().markExperimentShipped(experiments[0].id);
    useLaunchLabStore.getState().selectVariantExperiment(experiments[0].id);
    useLaunchLabStore.getState().setThemeMode("focus");
    useLaunchLabStore.getState().setCompactLayout(true);

    expect(useLaunchLabStore.getState().generatedExperiments).toHaveLength(6);
    expect(useLaunchLabStore.getState().shippedExperimentIds).toContain(
      experiments[0].id,
    );
    expect(useLaunchLabStore.getState().selectedExperimentId).toBe(
      experiments[0].id,
    );
    expect(useLaunchLabStore.getState().settings.themeMode).toBe("focus");

    const persisted = JSON.parse(
      localStorage.getItem(launchLabStoreStorageKey) ?? "{}",
    );

    expect(persisted.state.generatedExperiments).toHaveLength(6);
    expect(persisted.state.shippedExperimentIds).toContain(experiments[0].id);
    expect(persisted.state.selectedExperimentId).toBe(experiments[0].id);
    expect(persisted.state.settings.compactLayout).toBe(true);
  });
});
