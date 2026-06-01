import { Sparkles } from "lucide-react";
import Link from "next/link";

import { FooterLinks } from "@/components/layout/footer-links";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__separator" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__brand">
          <Sparkles aria-hidden="true" className="size-4 text-cyan-400" />
          <span className="footer__logo-text">LaunchLab</span>
        </div>
        <p className="footer__tagline">
          AI-powered experiment builder for startup growth.
        </p>
        <FooterLinks />
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} LaunchLab. Built in public.
        </p>
      </div>
    </footer>
  );
}
