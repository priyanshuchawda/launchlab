"use client";

import { useEffect } from "react";
import { useLaunchLabStore } from "@/stores/use-launchlab-store";

/**
 * Syncs the Zustand themeMode to a data-theme attribute on <html>
 * so CSS can respond with different visual treatments.
 */
export function ThemeProvider() {
  const themeMode = useLaunchLabStore((s) => s.settings.themeMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-app-theme", themeMode);
    return () => {
      document.documentElement.removeAttribute("data-app-theme");
    };
  }, [themeMode]);

  return null;
}
