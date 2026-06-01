"use client";

/** Purely decorative atmospheric orbs behind the CTA block */
export function CtaOrb() {
  return (
    <div className="cta-orb" aria-hidden="true">
      <div className="cta-orb__cyan" />
      <div className="cta-orb__violet" />
    </div>
  );
}
