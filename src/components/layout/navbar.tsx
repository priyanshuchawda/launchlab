"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NavCta } from "@/components/layout/nav-cta";
import { NavLinks } from "@/components/layout/nav-links";
import { NavLogo } from "@/components/layout/nav-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "navbar",
        scrolled ? "navbar--scrolled" : "",
      ].join(" ")}
      role="banner"
    >
      <div className="navbar__inner">
        <NavLogo />
        <NavLinks />
        <NavCta />
      </div>
    </header>
  );
}
