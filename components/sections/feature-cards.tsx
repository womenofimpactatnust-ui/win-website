import Link from "next/link";
import { ArrowUpRight, Mic, LifeBuoy, Newspaper } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    index: "01",
    href: "/podcasts",
    icon: Mic,
    title: "Podcasts",
    description:
      "Conversations that dig into the experiences shaping women's lives on and off campus.",
  },
  {
    index: "02",
    href: "/what-to-do",
    icon: LifeBuoy,
    title: "What To Do",
    description:
      "Clear guidance and verified resources for harassment, cyberbullying, and safety concerns.",
  },
  {
    index: "03",
    href: "/newsletter",
    icon: Newspaper,
    title: "Newsletter",
    description:
      "Regular articles and updates from the WIN community, straight from the source.",
  },
] as const;

export function FeatureCards() {
  return (
    <section className="py-20">
      <Reveal className="px-6 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-middle-purple">
          What you&apos;ll find
        </p>
        <h2 className="mt-2 max-w-lg font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
          Three ways WIN shows up for you
        </h2>
      </Reveal>

      <div className="relative mt-16 px-6 md:px-10">
        <div
          className="absolute left-6 right-6 top-6 hidden h-px bg-jacarta/15 md:left-10 md:right-10 md:block"
          aria-hidden
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {FEATURES.map(({ index, href, icon: Icon, title, description }, i) => (
            <Reveal
              key={href}
              direction={i === 0 ? "left" : i === FEATURES.length - 1 ? "right" : "up"}
              delay={i * 120}
            >
              <Link href={href} className="group relative flex flex-col text-left">
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-queen-pink ring-4 ring-background transition-colors group-hover:bg-middle-purple">
                    <Icon className="size-5 text-jacarta transition-colors group-hover:text-white" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-old-lavender/60 md:mt-4">
                    {index}
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-xl font-semibold text-jacarta">
                  {title}
                </h3>
                <p className="mt-1 max-w-xs text-base text-jacarta/70">{description}</p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-middle-purple group-hover:text-jacarta">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
