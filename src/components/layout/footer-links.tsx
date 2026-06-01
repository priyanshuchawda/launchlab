/** footer-links.tsx
 * External URLs and hash anchors are not valid Next.js RouteImpl types
 * (typedRoutes: true). We render those as native <a> tags and use <Link>
 * only for real internal page routes.
 */
import Link from "next/link";

interface InternalLink {
  external?: false;
  href: "/app" | "/case-study";
  label: string;
}

interface AnchorOrExternalLink {
  external: true;
  href: string;
  label: string;
}

type FooterLink = InternalLink | AnchorOrExternalLink;

const FOOTER_LINKS: FooterLink[] = [
  { href: "/app", label: "Demo" },
  { href: "/case-study", label: "Case Study" },
  { external: true, href: "/#ship-log", label: "Ship Log" },
  {
    external: true,
    href: "https://github.com/priyanshuchawda/launchlab",
    label: "GitHub",
  },
];

export function FooterLinks() {
  return (
    <nav aria-label="Footer navigation" className="footer__links">
      {FOOTER_LINKS.map((link) =>
        link.external ? (
          <a
            className="footer__link"
            href={link.href}
            key={link.label}
            {...(link.href.startsWith("http")
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            {link.label}
          </a>
        ) : (
          <Link
            className="footer__link"
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}
