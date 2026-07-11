import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";

const PLACEHOLDER_ARTICLES = [
  {
    slug: "welcome-to-win",
    title: "Welcome to WIN",
    excerpt: "An introduction to the community and what we're building together.",
    date: "2026-01-15",
    tag: "Announcement",
  },
  {
    slug: "building-safe-spaces",
    title: "Building Safe Spaces on Campus",
    excerpt: "What it takes to create environments where women feel safe to speak up.",
    date: "2026-02-20",
    tag: "Feature",
  },
  {
    slug: "resources-you-should-know",
    title: "Resources You Should Know About",
    excerpt: "A roundup of support resources available to NUST students.",
    date: "2026-03-10",
    tag: "Guide",
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
          {PLACEHOLDER_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/newsletter/${article.slug}`}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
            >
              <Badge variant="secondary" className="w-fit">
                {article.tag}
              </Badge>
              <h2 className="font-heading text-lg font-semibold text-jacarta group-hover:text-middle-purple">
                {article.title}
              </h2>
              <p className="flex-1 text-sm text-jacarta/70">{article.excerpt}</p>
              <time className="text-xs text-jacarta/50" dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
