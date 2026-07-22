import Image from "next/image";

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
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
          Gallery
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
          Moments from the WIN community
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.label}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              sizes="(min-width: 768px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-jacarta/70 px-3 py-2 text-white">
              <p className="text-xs font-semibold leading-tight">{item.label}</p>
              <p className="mt-0.5 text-[0.7rem] leading-tight text-white/80">25–26</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
