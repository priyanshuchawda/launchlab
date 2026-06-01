/** nav-links.tsx
 * Hash anchors (/#features, /#ship-log) and external hrefs are not valid
 * Next.js RouteImpl types (typedRoutes: true), so we use native <a> tags.
 * /case-study is a real page route and can use <Link>.
 */
import Link from "next/link";

const PAGE_LINKS = [{ href: "/case-study" as const, label: "Case Study" }];

const ANCHOR_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#ship-log", label: "Ship Log" },
];

export function NavLinks() {
  return (
    <nav aria-label="Main navigation" className="nav-links">
      {ANCHOR_LINKS.map(({ href, label }) => (
        <a className="nav-links__item" href={href} key={href}>
          {label}
        </a>
      ))}
      {PAGE_LINKS.map(({ href, label }) => (
        <Link className="nav-links__item" href={href} key={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
