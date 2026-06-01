"use client";

import { Moon, Rows3, Sparkles, Sun } from "lucide-react";

import { SectionLabel } from "@/components/marketing/section-label";
import { useLaunchLabStore } from "@/stores/use-launchlab-store";

export function AppSettingsPanel() {
  const compactLayout = useLaunchLabStore((s) => s.settings.compactLayout);
  const quietMotion   = useLaunchLabStore((s) => s.settings.quietMotion);
  const themeMode     = useLaunchLabStore((s) => s.settings.themeMode);
  const setCompactLayout = useLaunchLabStore((s) => s.setCompactLayout);
  const setQuietMotion   = useLaunchLabStore((s) => s.setQuietMotion);
  const setThemeMode     = useLaunchLabStore((s) => s.setThemeMode);

  return (
    <section
      aria-labelledby="settings-title"
      className="grid gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
      id="settings"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <SectionLabel label="Workspace controls" />
          <h2
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-50"
            id="settings-title"
          >
            Settings
          </h2>
        </div>
        <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
          Local demo
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Theme card */}
        <div className="grid gap-3 rounded-xl border border-white/10 bg-slate-950/50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Moon aria-hidden="true" className="size-4 text-cyan-300" />
            Theme mode
          </div>
          <p className="text-xs text-slate-500">
            Focus mode reduces ambient glow and dims non-active elements for
            deep work sessions.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              aria-pressed={themeMode === "dark"}
              className="theme-btn"
              onClick={() => setThemeMode("dark")}
              type="button"
            >
              <Moon aria-hidden="true" className="size-4" />
              Dark
            </button>
            <button
              aria-pressed={themeMode === "focus"}
              className="theme-btn"
              onClick={() => setThemeMode("focus")}
              type="button"
            >
              <Sun aria-hidden="true" className="size-4" />
              Focus
            </button>
          </div>
          <p className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-slate-400">
            Active:{" "}
            <span className="font-semibold text-cyan-200">
              {themeMode === "focus" ? "Focus — ambient glow reduced" : "Dark — full ambient experience"}
            </span>
          </p>
        </div>

        {/* Layout toggles */}
        <div className="grid gap-3 rounded-xl border border-white/10 bg-slate-950/50 p-4">
          <div className="text-sm font-semibold text-slate-200">Layout & motion</div>
          <button
            aria-checked={compactLayout}
            aria-label="Compact layout"
            className="settings-toggle"
            onClick={() => setCompactLayout(!compactLayout)}
            role="switch"
            type="button"
          >
            <span className="inline-flex items-center gap-2.5">
              <Rows3 aria-hidden="true" className="size-4 text-cyan-300" />
              Compact layout
            </span>
            <span className="settings-toggle__indicator">
              {compactLayout ? "On" : "Off"}
            </span>
          </button>

          <button
            aria-checked={quietMotion}
            aria-label="Reduced motion"
            className="settings-toggle"
            onClick={() => setQuietMotion(!quietMotion)}
            role="switch"
            type="button"
          >
            <span className="inline-flex items-center gap-2.5">
              <Sparkles aria-hidden="true" className="size-4 text-cyan-300" />
              Reduced motion
            </span>
            <span className="settings-toggle__indicator">
              {quietMotion ? "On" : "Off"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
