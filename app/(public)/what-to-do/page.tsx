import { LifeBuoy, ShieldAlert, MessageCircleWarning } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const TOPICS = [
  {
    icon: MessageCircleWarning,
    title: "Cyberbullying",
    // TODO(society): replace with verified steps + reporting channels.
    description: "TODO — verified guidance and reporting steps to be provided by WIN.",
  },
  {
    icon: ShieldAlert,
    title: "Harassment",
    // TODO(society): replace with verified steps + reporting channels.
    description: "TODO — verified guidance and reporting steps to be provided by WIN.",
  },
  {
    icon: LifeBuoy,
    title: "Getting Support",
    // TODO(society): replace with verified on/off-campus support contacts.
    description: "TODO — verified support contacts to be provided by WIN.",
  },
] as const;

export default function WhatToDoPage() {
  return (
    <main>
      <PageHero
        eyebrow="What To Do"
        title="Safety Resources & Guidance"
        description="Clear, verified information for cyberbullying, harassment, and safety concerns. This page is currently a design preview — content is pending verification."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl bg-secondary/60 p-5 text-sm text-jacarta/80">
          <strong className="font-semibold text-jacarta">Note:</strong> the guidance
          and contact details below are placeholders. Real content — including any
          helpline numbers — will only be published once verified by the society.
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TOPICS.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-none bg-white p-2 shadow-sm ring-0">
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-full bg-queen-pink">
                  <Icon className="size-5 text-jacarta" />
                </div>
                <CardTitle className="mt-3 text-xl">{title}</CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
