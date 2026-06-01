import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NavCta() {
  return (
    <Link className="nav-cta" href="/app" id="nav-cta">
      Open demo
      <ArrowRight aria-hidden="true" className="size-3.5" />
    </Link>
  );
}
