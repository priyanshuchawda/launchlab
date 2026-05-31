export function SkipLink() {
  return (
    <a
      className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-lime-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-black/40 outline-none focus:not-sr-only focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      href="#main-content"
    >
      Skip to content
    </a>
  );
}
