import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import {
  launchLabStoreStorageKey,
  useLaunchLabStore,
} from "@/stores/use-launchlab-store";

afterEach(() => {
  cleanup();

  if (typeof localStorage === "undefined") {
    return;
  }

  useLaunchLabStore.getState().resetDemoState();
  useLaunchLabStore.getState().resetSettings();
  localStorage.removeItem(launchLabStoreStorageKey);
});
