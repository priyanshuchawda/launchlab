import { Badge } from "@/components/ui/badge";

const shipLog = [
  "Built core experiment generator",
  "Added A/B preview",
  "Improved mobile responsiveness",
];

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
      <div className="grid gap-3 md:grid-cols-3">
        {shipLog.map((item, index) => (
          <div
            className="rounded-lg border border-white/10 bg-slate-950/60 p-4"
            key={item}
          >
            <p className="font-mono text-xs text-lime-200">Day {index + 1}</p>
            <p className="mt-2 text-sm font-medium text-slate-100">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
