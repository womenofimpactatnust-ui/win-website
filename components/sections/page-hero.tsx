import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="page-hero-wave" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.94 C0.85,0.99 0.65,0.99 0.5,0.955 C0.35,0.92 0.15,0.92 0,0.965 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative isolate flex min-h-[26rem] w-full flex-col overflow-hidden bg-gradient-to-br from-old-lavender via-middle-purple to-jacarta sm:min-h-[28rem]"
        style={{ clipPath: "url(#page-hero-wave)" }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-jacarta/60 via-jacarta/55 to-jacarta/60"
          aria-hidden
        />

        <div className="relative flex flex-1 flex-col justify-between gap-16 px-4 pb-16 pt-4 sm:px-6 md:px-10 md:pb-20 md:pt-6">
          <Navbar />

          <div className="max-w-2xl px-2 sm:px-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-queen-pink">
              {eyebrow}
            </p>
            <h1 className="mt-2 font-heading text-4xl font-semibold text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base text-white/85">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
