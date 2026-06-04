import { HeroActions } from "@/components/marketing/hero-actions";
import { HeroBadge } from "@/components/marketing/hero-badge";
import { LaunchCommandVisual } from "@/components/marketing/launch-command-visual";

export function HeroSection() {
  return (
    <section
      className="hero-section mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      id="hero"
    >
      <div className="hero-section__content max-w-3xl motion-reveal">
        <HeroBadge />

        <h1 className="hero-section__headline mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[3.75rem]">
          Turn one startup goal into a{" "}
          <span className="gradient-text">testable experiment.</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300/90">
          LaunchLab turns a rough growth idea into a prioritized test queue,
          variant copy, and a measurable next action — all in one flow.
        </p>

        <HeroActions />

        <div className="hero-section__social-proof mt-8 flex items-center gap-3">
          <div className="hero-section__avatars" aria-hidden="true">
            {["C", "V", "A"].map((letter, i) => (
              <span
                className="hero-section__avatar"
                key={letter}
                style={{ zIndex: 3 - i }}
              >
                {letter}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-slate-200">120+</span> founders
            running experiments this week
          </p>
        </div>
      </div>

      <div
        className="motion-reveal motion-float"
        style={{ animationDelay: "200ms" }}
      >
        <LaunchCommandVisual />
      </div>
    </section>
  );
}
