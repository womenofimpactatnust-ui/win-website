import { Quote } from "lucide-react";

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
] as const;

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
          Testimonials
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
          What our community says
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-jacarta/5"
          >
            <Quote className="size-6 text-middle-purple" />
            <blockquote className="flex-1 text-sm text-jacarta/80">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="text-sm font-medium text-jacarta">
              {t.name}
              <span className="block text-xs font-normal text-jacarta/60">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
