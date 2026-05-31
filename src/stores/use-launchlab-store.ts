import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Experiment } from "@/types/experiment";

export type ThemeMode = "dark" | "focus";

export interface LaunchLabSettings {
  compactLayout: boolean;
  quietMotion: boolean;
  themeMode: ThemeMode;
}

export interface LaunchLabStoreState {
  demoGoal: string;
  generatedExperiments: Experiment[];
  selectedExperimentId: string | null;
  settings: LaunchLabSettings;
  shippedExperimentIds: string[];
}

export interface LaunchLabStoreActions {
  markExperimentShipped: (experimentId: string) => void;
  resetDemoState: () => void;
  resetSettings: () => void;
  selectVariantExperiment: (experimentId: string | null) => void;
  setCompactLayout: (compactLayout: boolean) => void;
  setGeneratedExperiments: (goal: string, experiments: Experiment[]) => void;
  setQuietMotion: (quietMotion: boolean) => void;
  setThemeMode: (themeMode: ThemeMode) => void;
}

export type LaunchLabStore = LaunchLabStoreState & LaunchLabStoreActions;

export const launchLabStoreStorageKey = "launchlab-demo-state";

const defaultSettings: LaunchLabSettings = {
  compactLayout: false,
  quietMotion: true,
  themeMode: "dark",
};

const defaultDemoState: LaunchLabStoreState = {
  demoGoal: "",
  generatedExperiments: [],
  selectedExperimentId: null,
  settings: defaultSettings,
  shippedExperimentIds: [],
};

export const useLaunchLabStore = create<LaunchLabStore>()(
  persist(
    (set) => ({
      ...defaultDemoState,
      markExperimentShipped: (experimentId) =>
        set((state) => {
          if (state.shippedExperimentIds.includes(experimentId)) {
            return state;
          }

          return {
            shippedExperimentIds: [...state.shippedExperimentIds, experimentId],
          };
        }),
      resetDemoState: () =>
        set({
          demoGoal: defaultDemoState.demoGoal,
          generatedExperiments: defaultDemoState.generatedExperiments,
          selectedExperimentId: defaultDemoState.selectedExperimentId,
          shippedExperimentIds: defaultDemoState.shippedExperimentIds,
        }),
      resetSettings: () => set({ settings: defaultSettings }),
      selectVariantExperiment: (experimentId) =>
        set({ selectedExperimentId: experimentId }),
      setCompactLayout: (compactLayout) =>
        set((state) => ({
          settings: { ...state.settings, compactLayout },
        })),
      setGeneratedExperiments: (goal, experiments) =>
        set({
          demoGoal: goal,
          generatedExperiments: experiments,
          selectedExperimentId: null,
          shippedExperimentIds: [],
        }),
      setQuietMotion: (quietMotion) =>
        set((state) => ({
          settings: { ...state.settings, quietMotion },
        })),
      setThemeMode: (themeMode) =>
        set((state) => ({
          settings: { ...state.settings, themeMode },
        })),
    }),
    {
      name: launchLabStoreStorageKey,
      partialize: (state) => ({
        demoGoal: state.demoGoal,
        generatedExperiments: state.generatedExperiments,
        selectedExperimentId: state.selectedExperimentId,
        settings: state.settings,
        shippedExperimentIds: state.shippedExperimentIds,
      }),
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
