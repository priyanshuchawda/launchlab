"use client";

import { Command, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const appSections = [
  ["Generator", "#generator"],
  ["Board", "#board"],
  ["Variants", "#variants"],
  ["Analytics", "#analytics"],
  ["Settings", "#settings"],
] as const;

const commandActions = [
  ["Focus generator", "#generator"],
  ["Open experiment board", "#board"],
  ["Compare variants", "#variants"],
  ["Review analytics", "#analytics"],
  ["Adjust settings", "#settings"],
] as const;

function moveToSection(hash: string) {
  const target = document.querySelector(hash);
  target?.scrollIntoView({ block: "start", behavior: "smooth" });
  window.history.replaceState(null, "", hash);
}

export function AppNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mt-8 grid gap-4">
      <nav aria-label="App sections" className="flex flex-wrap gap-2">
        {appSections.map(([label, href]) => (
          <a
            className="inline-flex h-9 items-center rounded-lg border border-white/10 bg-white/[0.035] px-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-cyan-300/40 hover:text-slate-50 focus-visible:ring-2 focus-visible:ring-cyan-300"
            href={href}
            key={href}
          >
            {label}
          </a>
        ))}
      </nav>

      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button type="button" variant="outline">
            <Search aria-hidden="true" />
            Open command menu
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="pr-8">
            <DialogTitle className="font-display text-2xl font-semibold tracking-normal text-slate-50">
              Command menu
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-slate-400">
              Jump to product sections and core demo pages.
            </DialogDescription>
          </div>
          <div className="grid gap-2">
            {commandActions.map(([label, hash]) => (
              <button
                className="flex min-h-11 cursor-pointer items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-3 text-left text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-300/40 hover:bg-cyan-300/10 focus-visible:ring-2 focus-visible:ring-cyan-300"
                key={hash}
                onClick={() => {
                  moveToSection(hash);
                  setOpen(false);
                }}
                type="button"
              >
                {label}
                <Command aria-hidden="true" className="size-4 text-slate-500" />
              </button>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button asChild variant="secondary">
              <Link href="/app">Open demo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/case-study">
                Read case study
                <ExternalLink aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
