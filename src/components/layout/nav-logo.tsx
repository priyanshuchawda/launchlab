import { Sparkles } from "lucide-react";
import Link from "next/link";

export function NavLogo() {
  return (
    <Link
      aria-label="LaunchLab — home"
      className="nav-logo group"
      href="/"
      id="nav-logo"
    >
      <span className="nav-logo__icon" aria-hidden="true">
        <Sparkles className="size-4 motion-spin-slow" />
      </span>
      <span className="nav-logo__text">
        Launch<span className="nav-logo__text--accent">Lab</span>
      </span>
    </Link>
  );
}
