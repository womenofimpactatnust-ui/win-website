import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";

const NEWSLETTER_ARTICLES = [
  {
    slug: "orientation-25-26-a-new-chapter-begins",
    title: "Orientation 25-26: A New Chapter Begins",
    excerpt: "How WIN welcomed the newest batch of women at NUST and what the day looked like.",
    date: "September 2025",
    dateTime: "2025-09",
    tag: "Event Recap",
    thumbnail: "/media/events/orientation/Image-1.jpg",
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
    slug: "self-defence-workshop-strength-is-a-skill",
    title: "Self Defence Workshop: Strength Is a Skill",
    excerpt: "Recapping WIN's hands-on workshop that gave women practical tools to feel safer every day.",
    date: "November 2025",
    dateTime: "2025-11",
    tag: "Wellness",
    thumbnail: "/media/events/self-defence-workshop/image-1.JPG",
  },
] as const;

export default function NewsletterPage() {
  return (
    <main>
      <PageHero
        eyebrow="Newsletter"
        title="Stories, Updates & Guides"
        description="Articles from the WIN team — news, features, and resources for the community."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {NEWSLETTER_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/newsletter/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <Badge variant="secondary" className="w-fit">
                  {article.tag}
                </Badge>
                <h2 className="font-heading text-lg font-semibold text-jacarta group-hover:text-middle-purple">
                  {article.title}
                </h2>
                <p className="flex-1 text-sm text-jacarta/70">{article.excerpt}</p>
                <time className="text-xs text-jacarta/50" dateTime={article.dateTime}>
                  {article.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
