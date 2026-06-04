import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <output className="hero-badge" aria-label="AI experiment builder">
      <span
        className="hero-badge__dot motion-signal-pulse"
        aria-hidden="true"
      />
      <Sparkles aria-hidden="true" className="size-3.5 text-cyan-300" />
      <span>AI experiment builder</span>
    </output>
  );
}
