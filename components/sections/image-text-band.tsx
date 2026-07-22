import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function ImageTextBand() {
  return (
    <section className="bg-secondary/60 py-16">
      <div className="grid items-center gap-10 px-6 md:grid-cols-2 md:px-12 lg:px-20">
        <Reveal direction="left" className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/media/events/behenchaara-circle/image-2.jpeg"
            alt="Women of Impact at NUST"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-full object-cover"
          />
        </Reveal>

        <Reveal direction="right" delay={150} className="text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
            About
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
            Women of Impact at NUST
          </h2>
          <p className="mt-4 max-w-md text-jacarta/75">
            It started with a simple realization: too many women at NUST were
            carrying hard stories alone. WIN began as a handful of conversations
            in a circle — and grew into a community where every voice is heard,
            every story matters, and no one has to face a hard moment by
            herself.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-middle-purple hover:text-jacarta"
          >
            Learn more about WIN
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
