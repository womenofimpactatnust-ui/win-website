import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";

const EVENTS = [
  {
    name: "Orientation",
    image: "/media/events/orientation/Image-1.jpg",
    description:
      "WIN kicked off the new tenure with a warm welcome session for freshers. The orientation brought together women from across NUST to connect, share, and discover what WIN stands for. It was the beginning of something meaningful.",
  },
  {
    name: "Movie Night",
    image: "/media/events/movie-night/Image-1.jpg",
    description:
      "A cozy evening of film, laughter, and good company. WIN hosted a movie night that gave members a chance to unwind and bond outside the academic grind. Simple moments, lasting memories.",
  },
  {
    name: "Self Defence Workshop",
    image: "/media/events/self-defence-workshop/image-1.JPG",
    description:
      "WIN organized a hands-on self defence workshop to equip women with practical safety skills. The session was empowering, energetic, and a reminder that strength is something every woman can build.",
  },
  {
    name: "Soch ka Safar",
    image: "/media/events/soch-ka-safar/Image-1.jpg",
    description:
      "WIN's podcast series came to life with candid conversations from women of NUST. Soch ka Safar created a space for honest voices, real stories, and ideas worth sharing.",
  },
  {
    name: "BehenChaara Circle",
    image: "/media/events/behenchaara-circle/image-2.jpeg",
    description:
      "A sisterhood initiative built on trust and community. The BehenChaara Circle brought women together in small groups to support one another through campus life and beyond.",
  },
  {
    name: "Women's Day",
    image: "/media/events/womens-day/Image-1.JPG",
    description:
      "WIN celebrated Women's Day with an event that honoured the strength, resilience, and achievements of women at NUST. A day of recognition, reflection, and pride.",
  },
] as const;

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="EVENTS"
        title="Moments That Define Us"
        description="A look back at the events that brought the WIN community together — tenure 25–26."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <article
              key={event.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-jacarta/5"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-heading text-xl font-semibold text-jacarta">
                    {event.name}
                  </h2>
                  <Badge variant="secondary" className="shrink-0 rounded-full">
                    25–26
                  </Badge>
                </div>
                <p className="text-sm leading-6 text-jacarta/70">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
