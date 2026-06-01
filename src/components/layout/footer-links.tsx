import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/app", label: "Demo" },
  { href: "/case-study", label: "Case Study" },
  { href: "/#ship-log", label: "Ship Log" },
  { href: "https://github.com/priyanshuchawda/launchlab", label: "GitHub", external: true },
] as const;

export function FooterLinks() {
  return (
    <nav aria-label="Footer navigation" className="footer__links">
      {FOOTER_LINKS.map(({ href, label, external }) => (
        <Link
          className="footer__link"
          href={href}
          key={label}
          {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
