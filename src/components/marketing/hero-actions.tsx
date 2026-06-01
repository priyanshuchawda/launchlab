import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link className="hero-cta-primary" href="/app" id="hero-cta-primary">
        Open experiment builder
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
      <Link className="hero-cta-secondary" href="#ship-log" id="hero-cta-secondary">
        <Play aria-hidden="true" className="size-3.5 fill-current" />
        See build log
      </Link>
    </div>
  );
}
