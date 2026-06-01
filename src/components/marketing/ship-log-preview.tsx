import { SectionLabel } from "@/components/marketing/section-label";
import { ShipLogCard } from "@/components/marketing/ship-log-card";
import { shipLogEntries } from "@/data/ship-log";

export function ShipLogPreview() {
  return (
    <section
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      id="ship-log"
    >
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <SectionLabel label="Public ship log" />
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Evidence of shipping, not polishing.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-400">
            Every day is committed. Every signal is measurable.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {shipLogEntries.map((entry, index) => (
          <ShipLogCard
            day={entry.day}
            index={index}
            key={entry.day}
            signal={entry.signal}
            summary={entry.summary}
            title={entry.title}
          />
        ))}
      </div>
    </section>
  );
}
