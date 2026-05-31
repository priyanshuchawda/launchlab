import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";

import {
  launchLabStoreStorageKey,
  useLaunchLabStore,
} from "@/stores/use-launchlab-store";

afterEach(() => {
  useLaunchLabStore.getState().resetDemoState();
  useLaunchLabStore.getState().resetSettings();
  localStorage.removeItem(launchLabStoreStorageKey);
});
