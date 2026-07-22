import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";

const NEWSLETTER_ARTICLES = [
  {
    slug: "self-defence-workshop-strength-is-a-skill",
    title: "Self Defence Workshop: Strength Is a Skill",
    excerpt: "Recapping WIN's hands-on workshop that gave women practical tools to feel safer every day.",
    date: "November 2025",
    dateTime: "2025-11",
    tag: "Wellness",
    thumbnail: "/media/events/self-defence-workshop/image-1.JPG",
  },
  {
    slug: "behenchaara-circle-building-bonds-beyond-campus",
    title: "BehenChaara Circle: Building Bonds Beyond Campus",
    excerpt: "A look inside WIN's sisterhood initiative and what it means for women navigating NUST together.",
    date: "October 2025",
    dateTime: "2025-10",
    tag: "Community",
    thumbnail: "/media/events/behenchaara-circle/image-2.jpeg",
  },
  {
    slug: "orientation-25-26-a-new-chapter-begins",
    title: "Orientation 25-26: A New Chapter Begins",
    excerpt: "How WIN welcomed the newest batch of women at NUST and what the day looked like.",
    date: "September 2025",
    dateTime: "2025-09",
    tag: "Event Recap",
    thumbnail: "/media/events/orientation/Image-1.jpg",
  },
] as const;

const [RECENT_ARTICLE, ...PREVIOUS_ARTICLES] = NEWSLETTER_ARTICLES;

const UPCOMING_ARTICLES = [
  {
    slug: "upcoming-womens-day-recap",
    title: "Women's Day: A Recap Is Coming",
    excerpt: "The team is putting together highlights from this year's Women's Day celebrations.",
    thumbnail: "/media/events/womens-day/Image-1.JPG",
  },
  {
    slug: "upcoming-movie-night",
    title: "Movie Night, Written Up",
    excerpt: "A recap of WIN's community movie night is in the works — check back soon.",
    thumbnail: "/media/events/movie-night/Image-1.jpg",
  },
  {
    slug: "upcoming-soch-ka-safar-reflections",
    title: "Soch ka Safar: Season Reflections",
    excerpt: "A newsletter feature reflecting on the podcast's first season is being drafted.",
    thumbnail: "/media/events/soch-ka-safar/image-6.jpg",
  },
] as const;

export default function NewsletterPage() {
  return (
    <main>
      <PageHero
        eyebrow="Newsletter"
        title="Stories, Updates & Guides"
        description="Articles from the WIN team — news, features, and resources for the community."
        image="/media/events/soch-ka-safar/Image-1.jpg"
      />

      <section className="pt-16">
        <div className="px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-middle-purple">
            Recent
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            Latest from WIN
          </h2>
        </div>

        <div className="mt-8 px-6 md:px-10">
          <Link
            href={`/newsletter/${RECENT_ARTICLE.slug}`}
            className="group grid overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md md:grid-cols-2"
          >
            <div className="relative h-64 w-full overflow-hidden md:h-full">
              <Image
                src={RECENT_ARTICLE.thumbnail}
                alt={RECENT_ARTICLE.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
              <Badge variant="secondary" className="w-fit">
                {RECENT_ARTICLE.tag}
              </Badge>
              <h3 className="font-heading text-2xl font-semibold text-jacarta group-hover:text-middle-purple">
                {RECENT_ARTICLE.title}
              </h3>
              <p className="text-jacarta/70">{RECENT_ARTICLE.excerpt}</p>
              <time className="text-xs text-jacarta/50" dateTime={RECENT_ARTICLE.dateTime}>
                {RECENT_ARTICLE.date}
              </time>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
            Previous
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            More from the archive
          </h2>
        </div>

        <div className="mt-8 grid gap-5 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {PREVIOUS_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/newsletter/${article.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <Badge variant="secondary" className="w-fit">
                  {article.tag}
                </Badge>
                <h3 className="font-heading text-base font-semibold text-jacarta group-hover:text-middle-purple">
                  {article.title}
                </h3>
                <p className="text-sm text-jacarta/70">{article.excerpt}</p>
                <time className="text-xs text-jacarta/50" dateTime={article.dateTime}>
                  {article.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-middle-purple">
            Coming soon
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            Upcoming articles
          </h2>
        </div>

        <div className="mt-8 grid gap-5 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {UPCOMING_ARTICLES.map((article) => (
            <div
              key={article.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-jacarta/5"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={article.thumbnail}
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
                  {article.title}
                </h3>
                <p className="text-sm text-jacarta/70">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
