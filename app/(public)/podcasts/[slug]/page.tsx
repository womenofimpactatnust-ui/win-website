import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SOCH_KA_SAFAR_EPISODES } from "../episodes";

export default async function PodcastPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = SOCH_KA_SAFAR_EPISODES.find((ep) => ep.slug === slug);

  if (!episode) {
    notFound();
  }

  const otherEpisodes = SOCH_KA_SAFAR_EPISODES.filter((ep) => ep.slug !== slug);

  return (
    <main className="pb-20">
      <section>
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id="episode-hero-wave" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.94 C0.85,0.99 0.65,0.99 0.5,0.955 C0.35,0.92 0.15,0.92 0,0.965 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="relative isolate flex min-h-[28rem] w-full flex-col overflow-hidden bg-gradient-to-br from-old-lavender via-middle-purple to-jacarta sm:min-h-[32rem]"
          style={{ clipPath: "url(#episode-hero-wave)" }}
        >
          <Image
            src={episode.thumbnail}
            alt={episode.title}
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

            <div className="flex flex-col items-start gap-8">
              <button
                type="button"
                aria-label="Play episode"
                className="flex size-20 items-center justify-center rounded-full bg-white/90 text-jacarta shadow-lg transition-transform hover:scale-105"
              >
                <Play className="size-8 fill-current" />
              </button>

              <div className="max-w-2xl px-2 sm:px-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-queen-pink">
                  Soch ka Safar · {episode.duration}
                </p>
                <h1 className="mt-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
                  {episode.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 pt-8 md:px-10">
        <Link
          href="/podcasts"
          className="inline-flex items-center gap-1 text-sm font-medium text-old-lavender hover:text-jacarta"
        >
          <ArrowLeft className="size-4" />
          Back to Podcasts
        </Link>
      </div>

      <div className="mt-6 px-6 md:px-10">
        <p className="max-w-2xl text-jacarta/75">{episode.description}</p>
      </div>

      <div className="mt-16 px-6 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
          More episodes
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta">
          Keep listening
        </h2>

        <div className="mt-8 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {otherEpisodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcasts/${ep.slug}`}
              className="group w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={ep.thumbnail}
                  alt={ep.title}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-jacarta/20" aria-hidden />
                <div className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-white text-jacarta shadow-md">
                  <Play className="size-3.5 fill-current" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-jacarta group-hover:text-middle-purple">
                  {ep.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
