import { Badge } from "@/components/ui/badge";

export function CommandHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
      <div>
        <p className="text-sm font-semibold text-slate-100">
          Experiment builder preview
        </p>
        <p className="text-xs text-slate-500">
          Goal to test to result, kept in one path.
        </p>
      </div>
      <Badge variant="success">
        <span className="mr-1.5 inline-block size-1.5 rounded-full bg-lime-400 motion-signal-pulse" aria-hidden="true" />
        Flow ready
      </Badge>
    </div>
  );
}
