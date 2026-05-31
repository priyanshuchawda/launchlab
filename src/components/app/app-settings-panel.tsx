"use client";

import { Moon, Rows3, Sparkles } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ThemeMode = "dark" | "focus";

export function AppSettingsPanel() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");
  const [compactLayout, setCompactLayout] = useState(false);
  const [quietMotion, setQuietMotion] = useState(true);

  return (
    <section
      aria-labelledby="settings-title"
      className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:p-5"
      id="settings"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
            Workspace controls
          </p>
          <h2
            className="mt-2 font-display text-2xl font-semibold tracking-normal text-slate-50"
            id="settings-title"
          >
            Settings
          </h2>
        </div>
        <Badge variant="cyan">Local demo</Badge>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <Moon aria-hidden="true" className="size-4 text-cyan-200" />
            Theme
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button
              aria-pressed={themeMode === "dark"}
              onClick={() => setThemeMode("dark")}
              type="button"
              variant={themeMode === "dark" ? "default" : "outline"}
            >
              Dark theme
            </Button>
            <Button
              aria-pressed={themeMode === "focus"}
              onClick={() => setThemeMode("focus")}
              type="button"
              variant={themeMode === "focus" ? "default" : "outline"}
            >
              Focus theme
            </Button>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Theme preview: {themeMode === "focus" ? "Focus" : "Dark"}
          </p>
        </div>

        <div className="grid gap-3 rounded-lg border border-white/10 bg-slate-950/50 p-4">
          <button
            aria-checked={compactLayout}
            aria-label="Compact layout"
            className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-3 text-left text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-300/40 focus-visible:ring-2 focus-visible:ring-cyan-300"
            onClick={() => setCompactLayout((current) => !current)}
            role="switch"
            type="button"
          >
            <span className="inline-flex items-center gap-2">
              <Rows3 aria-hidden="true" className="size-4 text-cyan-200" />
              Compact layout
            </span>
            <span>{compactLayout ? "On" : "Off"}</span>
          </button>

          <button
            aria-checked={quietMotion}
            aria-label="Reduced motion"
            className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-3 text-left text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-300/40 focus-visible:ring-2 focus-visible:ring-cyan-300"
            onClick={() => setQuietMotion((current) => !current)}
            role="switch"
            type="button"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles aria-hidden="true" className="size-4 text-cyan-200" />
              Reduced motion
            </span>
            <span>{quietMotion ? "On" : "Off"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
