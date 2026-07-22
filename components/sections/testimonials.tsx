import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.2-3.5 4-5.5 7-5.5s5.8 2 7 5.5" strokeLinecap="round" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Sharing my story anonymously gave me a way to speak up without fear. WIN made it feel safe.",
    name: "Anonymous",
    role: "Story contributor",
  },
  {
    quote:
      "The podcast episodes made me feel less alone in what I was going through as a student here.",
    name: "Anonymous",
    role: "Listener",
  },
  {
    quote:
      "Having a clear, trustworthy 'What To Do' page meant I knew exactly where to turn.",
    name: "Anonymous",
    role: "Community member",
  },
  {
    quote:
      "Reading other women's stories made me realize I wasn't the only one carrying this.",
    name: "Anonymous",
    role: "Story contributor",
  },
  {
    quote:
      "The moderation made me trust the process — I knew my story would be handled with care.",
    name: "Anonymous",
    role: "Story contributor",
  },
  {
    quote:
      "WIN's newsletter is the first thing I read every month. It feels like it's written for us.",
    name: "Anonymous",
    role: "Reader",
  },
];

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[22rem] shrink-0 flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-jacarta/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-queen-pink">
            <UserIcon className="size-5 text-jacarta" />
          </div>
          <figcaption className="text-sm font-medium text-jacarta">
            {t.name}
            <span className="block text-xs font-normal text-jacarta/60">{t.role}</span>
          </figcaption>
        </div>
        <Quote className="size-5 shrink-0 text-middle-purple" />
      </div>
      <blockquote className="text-sm text-jacarta/80">&ldquo;{t.quote}&rdquo;</blockquote>
    </figure>
  );
}

function TestimonialRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-6 pr-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {track.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const rowOne = TESTIMONIALS.slice(0, half);
  const rowTwo = TESTIMONIALS.slice(half);

  return (
    <section className="py-20">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
          Testimonials
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
          What our community says
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-6">
        <TestimonialRow items={rowOne} direction="left" />
        <TestimonialRow items={rowTwo} direction="right" />
      </div>
    </section>
  );
}
