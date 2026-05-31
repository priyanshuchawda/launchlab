import { FeatureGrid } from "@/components/marketing/feature-grid";
import { FinalCta } from "@/components/marketing/final-cta";
import { HeroSection } from "@/components/marketing/hero-section";
import { ShipLogPreview } from "@/components/marketing/ship-log-preview";
import { TransformationStrip } from "@/components/marketing/transformation-strip";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-10 sm:px-8" id="main-content">
      <HeroSection />
      <TransformationStrip />
      <FeatureGrid />
      <ShipLogPreview />
      <FinalCta />
    </main>
  );
}
