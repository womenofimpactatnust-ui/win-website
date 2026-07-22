import { Hero } from "@/components/sections/hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { ImageTextBand } from "@/components/sections/image-text-band";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <ImageTextBand />
      <Testimonials />
      <Gallery />
      <CtaBand />
    </main>
  );
}
