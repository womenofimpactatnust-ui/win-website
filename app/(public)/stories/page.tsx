import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";

const PLACEHOLDER_STORIES = [
  {
    slug: "finding-my-voice",
    title: "Finding My Voice",
    excerpt:
      "How joining a small support circle at NUST helped me speak up for the first time.",
    tag: "Personal Growth",
  },
  {
    slug: "the-support-i-needed",
    title: "The Support I Needed",
    excerpt:
      "I didn't think anyone would understand what I was going through — I was wrong.",
    tag: "Community",
  },
  {
    slug: "breaking-the-silence",
    title: "Breaking the Silence",
    excerpt:
      "Sharing this anonymously gave me the courage to finally ask for help.",
    tag: "Anonymous",
  },
] as const;

export default function StoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Stories"
        title="Real Stories, Real Strength"
        description="Biographies and personal stories from women of NUST — reviewed and published with care. Every story matters."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-jacarta/70">
            These stories are placeholder content until real submissions are approved
            through moderation.
          </p>
          <Button
            className="rounded-full px-6"
            nativeButton={false}
            render={<Link href="/stories/submit" />}
          >
            Share Your Story
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_STORIES.map((story) => (
            <Card key={story.slug} className="border-none bg-white p-2 shadow-sm ring-0">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {story.tag}
                </Badge>
                <CardTitle className="mt-3 text-xl">{story.title}</CardTitle>
                <CardDescription className="text-base">{story.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/stories/${story.slug}`}
                  className="text-sm font-medium text-middle-purple hover:text-jacarta"
                >
                  Read story →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
