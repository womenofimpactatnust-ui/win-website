import Image from "next/image";
import { Heart, Users, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

const VALUES = [
  {
    icon: Heart,
    title: "Community",
    description:
      "A space where women at NUST find each other, build friendships, and feel less alone.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Moderated, judgment-free channels for sharing experiences and asking for help.",
  },
  {
    icon: Users,
    title: "Impact",
    description:
      "Real conversations and resources that shape how women navigate campus life.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Women of Impact at NUST"
        description="A society dedicated to community, support, and impact for women at NUST."
        image="/media/events/womens-day/Image-1.JPG"
      />

      <section className="py-20">
        <div className="grid gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-middle-purple">
              Our mission
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
              A space to find community, safely and without judgment
            </h2>
            <p className="mt-4 max-w-md text-base text-jacarta/75">
              WIN exists to give women at NUST a place to connect with others and
              access the support and resources they need — on their own terms.
            </p>
          </div>

          <div className="relative h-64 overflow-hidden rounded-[2rem] md:h-full">
            <Image
              src="/media/events/orientation/Image-2.jpg"
              alt="WIN community event"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative mt-20 px-6 md:px-10">
          <div
            className="absolute left-6 right-6 top-6 hidden h-px bg-jacarta/15 md:left-10 md:right-10 md:block"
            aria-hidden
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-queen-pink ring-4 ring-background">
                  <Icon className="size-5 text-jacarta" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-jacarta">
                  {title}
                </h3>
                <p className="mt-1 max-w-xs text-base text-jacarta/70">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 px-6 md:px-10">
          <div className="rounded-[2rem] bg-brown-chocolate p-8 sm:p-12">
            <h2 className="font-heading text-2xl font-semibold text-white">
              What we do
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              We produce podcast conversations, put out a regular newsletter, and
              maintain a dedicated resource page for safety concerns like
              harassment and cyberbullying — built by and for women at NUST.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
