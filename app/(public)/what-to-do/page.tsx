import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WHAT_TO_DO_TOPICS } from "./topics";

export default function WhatToDoPage() {
  return (
    <main>
      <PageHero
        eyebrow="What To Do"
        title="Safety Resources & Guidance"
        description="Clear, verified information for cyberbullying, harassment, and safety concerns. This page is currently a design preview — content is pending verification."
        image="/media/events/self-defence-workshop/image-1.JPG"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl bg-secondary/60 p-5 text-sm text-jacarta/80">
          <strong className="font-semibold text-jacarta">Note:</strong> the guidance
          and contact details below are placeholders. Real content — including any
          helpline numbers — will only be published once verified by the society.
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {WHAT_TO_DO_TOPICS.map(({ slug, icon: Icon, title, summary }) => (
            <Link key={slug} href={`/what-to-do/${slug}`} className="group">
              <Card className="h-full border-none bg-white p-2 shadow-sm ring-0 transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-full bg-queen-pink transition-colors group-hover:bg-middle-purple">
                    <Icon className="size-5 text-jacarta transition-colors group-hover:text-white" />
                  </div>
                  <CardTitle className="mt-3 text-xl">{title}</CardTitle>
                  <CardDescription className="text-base">{summary}</CardDescription>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-middle-purple group-hover:text-jacarta">
                    Read more
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
