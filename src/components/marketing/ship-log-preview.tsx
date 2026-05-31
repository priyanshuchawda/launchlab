import { Badge } from "@/components/ui/badge";
import { shipLogEntries } from "@/data/ship-log";

export function ShipLogPreview() {
  return (
    <section className="mx-auto max-w-6xl py-16" id="ship-log">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <Badge variant="violet">Public ship log</Badge>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-slate-50">
            Evidence of shipping, not just polishing.
          </h2>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        {shipLogEntries.map((entry) => (
          <div
            className="min-h-48 rounded-lg border border-white/10 bg-slate-950/60 p-4"
            key={entry.day}
          >
            <p className="font-mono text-xs text-lime-200">Day {entry.day}</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {entry.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {entry.summary}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">
              {entry.signal}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
