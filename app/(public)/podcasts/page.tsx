import Link from "next/link";
import { Play } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

const PLACEHOLDER_EPISODES = [
  {
    slug: "starting-the-conversation",
    title: "Starting the Conversation",
    description: "Our first episode — why WIN exists and what we hope to build.",
    duration: "24 min",
  },
  {
    slug: "navigating-campus-life",
    title: "Navigating Campus Life",
    description: "Three NUST students talk about finding community and support.",
    duration: "31 min",
  },
  {
    slug: "when-to-ask-for-help",
    title: "When to Ask for Help",
    description: "A conversation about recognizing when — and how — to reach out.",
    duration: "28 min",
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
          {PLACEHOLDER_EPISODES.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcasts/${ep.slug}`}
              className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
            >
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
