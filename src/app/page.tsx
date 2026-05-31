import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-10 sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-3xl">
            <Badge variant="cyan">
              <Sparkles aria-hidden="true" className="size-3.5" />
              AI experiment dashboard
            </Badge>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-normal text-slate-50 sm:text-6xl">
              Launch experiments faster than competitors can write specs.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Turn messy startup goals into testable landing variants,
              experiment cards, and conversion insights in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Try live demo
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline">
                View shipped experiments
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Weekly experiment pulse</CardTitle>
              <CardDescription>
                Foundation preview for the LaunchLab product UI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {[
                  "Activation audit",
                  "CTA contrast test",
                  "Pricing proof block",
                ].map((item, index) => (
                  <div
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/60 p-3"
                    key={item}
                  >
                    <span className="text-sm font-medium text-slate-100">
                      {item}
                    </span>
                    <span className="font-mono text-sm text-lime-200">
                      +{12 + index * 4}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
