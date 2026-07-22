import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const GALLERY_ITEMS = [
  {
    src: "/media/events/orientation/Image-2.jpg",
    label: "Orientation",
  },
  {
    src: "/media/events/movie-night/Image-1.jpg",
    label: "Movie Night",
  },
  {
    src: "/media/events/self-defence-workshop/image-1.JPG",
    label: "Self Defence Workshop",
  },
  {
    src: "/media/events/soch-ka-safar/Image-1.jpg",
    label: "Soch ka Safar",
  },
  {
    src: "/media/events/behenchaara-circle/image-2.jpeg",
    label: "BehenChaara Circle",
  },
  {
    src: "/media/events/womens-day/Image-1.JPG",
    label: "Women's Day",
  },
] as const;

export function Gallery() {
  const track = [...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section className="py-20">
      <Reveal className="px-6 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
          Gallery
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
          Moments from the WIN community
        </h2>
      </Reveal>

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="gallery-wave" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.82 C0.85,0.98 0.65,0.98 0.5,0.88 C0.35,0.78 0.15,0.78 0,0.9 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mt-10 overflow-hidden" style={{ clipPath: "url(#gallery-wave)" }}>
        <div className="flex w-max animate-marquee-left">
          {track.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square w-[46vw] shrink-0 overflow-hidden sm:w-[30vw] md:w-[18vw]"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 18vw, (min-width: 640px) 30vw, 46vw"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
