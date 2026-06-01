import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

const FOOTER_LINKS: FooterLink[] = [
  { href: "/app", label: "Demo" },
  { href: "/case-study", label: "Case Study" },
  { href: "/#ship-log", label: "Ship Log" },
  {
    external: true,
    href: "https://github.com/priyanshuchawda/launchlab",
    label: "GitHub",
  },
];

export function FooterLinks() {
  return (
    <nav aria-label="Footer navigation" className="footer__links">
      {FOOTER_LINKS.map(({ external, href, label }) => (
        <Link
          className="footer__link"
          href={href}
          key={label}
          {...(external
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
