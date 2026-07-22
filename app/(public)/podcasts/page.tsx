import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";
import { PodcastEpisodeList } from "@/components/sections/podcast-episode-list";
import { PodcastRecentEpisode } from "@/components/sections/podcast-recent-episode";
import { SOCH_KA_SAFAR_EPISODES } from "./episodes";
import Image from "next/image";

const [RECENT_EPISODE, ...PREVIOUS_EPISODES] = SOCH_KA_SAFAR_EPISODES;

const UPCOMING_EPISODES = [
  {
    slug: "upcoming-episode-8",
    title: "Soch ka Safar — Episode 8",
    excerpt: "The next conversation in the series is being recorded — check back soon.",
    thumbnail: "/media/events/womens-day/image-7.JPG",
  },
  {
    slug: "upcoming-episode-9",
    title: "Soch ka Safar — Episode 9",
    excerpt: "A new voice from the WIN community joins for an upcoming episode.",
    thumbnail: "/media/events/orientation/Image-4.JPG",
  },
] as const;

export default function PodcastsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Podcasts"
        title="Conversations Worth Hearing"
        description="Episodes exploring the experiences shaping women's lives at NUST and beyond."
        image="/media/events/behenchaara-circle/image-2.jpeg"
      />

      <section className="pt-16">
        <div className="px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-middle-purple">
            Recent
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            Latest episode
          </h2>
        </div>

        <PodcastRecentEpisode episode={RECENT_EPISODE} />
      </section>

      <section className="py-16">
        <div className="px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
            Previous
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            Soch ka Safar
          </h2>
        </div>

        <PodcastEpisodeList episodes={PREVIOUS_EPISODES} />
      </section>

      <section className="pb-20">
        <div className="px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-middle-purple">
            Coming soon
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            Upcoming episodes
          </h2>
        </div>

        <div className="mt-8 grid gap-5 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {UPCOMING_EPISODES.map((episode) => (
            <div
              key={episode.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-jacarta/5"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={episode.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-70 grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-jacarta/30" aria-hidden />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <Badge variant="outline" className="w-fit gap-1 border-old-lavender/40 text-old-lavender">
                  <Clock className="size-3" />
                  Upcoming
                </Badge>
                <h3 className="font-heading text-base font-semibold text-jacarta">
                  {episode.title}
                </h3>
                <p className="text-sm text-jacarta/70">{episode.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
