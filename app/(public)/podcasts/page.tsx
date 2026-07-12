import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

const SOCH_KA_SAFAR_EPISODES = [
  {
    slug: "soch-ka-safar-episode-1",
    title: "Soch ka Safar — Episode 1",
    description: "The first episode of WIN's podcast series — candid conversations from women of NUST.",
    thumbnail: "/media/events/soch-ka-safar/Image-1.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-2",
    title: "Soch ka Safar — Episode 2",
    description: "Continuing the journey — more voices, more stories from the WIN community.",
    thumbnail: "/media/events/soch-ka-safar/Image-2.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-3",
    title: "Soch ka Safar — Episode 3",
    description: "Season highlights — reflections from the women who shaped this community.",
    thumbnail: "/media/events/soch-ka-safar/image-5.jpg",
    duration: "— min",
  },
] as const;

export default function PodcastsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Podcasts"
        title="Conversations Worth Hearing"
        description="Episodes exploring the experiences shaping women's lives at NUST and beyond."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col gap-4">
          {SOCH_KA_SAFAR_EPISODES.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcasts/${ep.slug}`}
              className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
            >
              <Image
                src={ep.thumbnail}
                alt={ep.title}
                width={80}
                height={80}
                className="rounded-xl object-cover"
              />
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-middle-purple to-old-lavender text-white">
                <Play className="size-5 fill-current" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-lg font-semibold text-jacarta group-hover:text-middle-purple">
                  {ep.title}
                </h2>
                <p className="mt-1 text-sm text-jacarta/70">{ep.description}</p>
              </div>
              <span className="shrink-0 text-sm text-jacarta/50">{ep.duration}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
