import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { HeroRotatingText } from "@/components/sections/hero-rotating-text";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="hero-wave" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.94 C0.85,0.99 0.65,0.99 0.5,0.955 C0.35,0.92 0.15,0.92 0,0.965 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative isolate flex min-h-[38rem] w-full flex-col overflow-hidden bg-gradient-to-br from-old-lavender via-middle-purple to-jacarta sm:min-h-[42rem] md:min-h-[46rem]"
        style={{ clipPath: "url(#hero-wave)" }}
      >
        <Image
          src="/media/events/orientation/Image-1.jpg"
          alt="Orientation"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-jacarta/60 via-jacarta/55 to-jacarta/60"
          aria-hidden
        />

        <div className="relative flex flex-1 flex-col justify-between gap-16 px-4 pb-16 pt-4 sm:px-6 md:px-10 md:pb-24 md:pt-6">
          <Navbar />

          <div className="max-w-xl animate-hero-in px-2 sm:px-4">
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Your Strength, <HeroRotatingText />
            </h1>
            <p className="mt-4 max-w-md text-base text-white/85">
              WIN is a community for women of NUST to find support, connect with
              others, and access the resources they need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full px-6"
                nativeButton={false}
                render={<Link href="/podcasts" />}
              >
                Listen to Podcasts
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
