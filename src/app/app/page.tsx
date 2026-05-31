import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AppPage() {
  return (
    <main className="min-h-screen px-5 py-10 sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col justify-center">
        <p className="font-mono text-sm text-cyan-200">LaunchLab app</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-normal text-slate-50">
          Experiment generator workspace
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          The interactive generator is next in the issue flow. This route exists
          now so the landing CTA is type-safe.
        </p>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">Back to landing</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
