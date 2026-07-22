import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { WHAT_TO_DO_TOPICS } from "../topics";

export function generateStaticParams() {
  return WHAT_TO_DO_TOPICS.map((topic) => ({ slug: topic.slug }));
}

export default async function WhatToDoTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = WHAT_TO_DO_TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  const Icon = topic.icon;

  return (
    <main className="pb-20">
      <PageHero
        eyebrow="What To Do"
        title={topic.title}
        description="This page is a design preview — content is pending verification by the society."
        image={topic.image}
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/what-to-do"
          className="inline-flex items-center gap-1 text-sm font-medium text-old-lavender hover:text-jacarta"
        >
          <ArrowLeft className="size-4" />
          Back to What To Do
        </Link>

        <div className="mt-8 rounded-2xl bg-secondary/60 p-5 text-sm text-jacarta/80">
          <strong className="font-semibold text-jacarta">Note:</strong> the guidance,
          reporting steps, and any contact details on this page are placeholders.
          Real content — including any helpline numbers — will only be published
          once verified by the society. Nothing here should be treated as
          verified guidance yet.
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-jacarta/5 sm:p-12">
          <div className="flex size-12 items-center justify-center rounded-full bg-queen-pink">
            <Icon className="size-5 text-jacarta" />
          </div>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-jacarta">
            {topic.summary}
          </h2>
          <p className="mt-4 text-jacarta/75">
            TODO(society) — replace this section with verified step-by-step
            guidance, reporting channels, and support contacts for {topic.title.toLowerCase()}.
          </p>
        </div>
      </div>
    </main>
  );
}
