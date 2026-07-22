import { Hero } from "@/components/sections/hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { MarqueeTaglines } from "@/components/sections/marquee-taglines";
import { ImageTextBand } from "@/components/sections/image-text-band";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <MarqueeTaglines />
      <ImageTextBand />
      <Testimonials />
      <Gallery />
    </main>
  );
}
