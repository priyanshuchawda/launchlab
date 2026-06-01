import Link from "next/link";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#ship-log", label: "Ship Log" },
  { href: "/case-study", label: "Case Study" },
] as const;

export function NavLinks() {
  return (
    <nav aria-label="Main navigation" className="nav-links">
      {NAV_LINKS.map(({ href, label }) => (
        <Link className="nav-links__item" href={href} key={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
