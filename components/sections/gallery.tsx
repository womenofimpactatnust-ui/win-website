const GALLERY_ITEMS = [
  "Event",
  "Workshop",
  "Community",
  "Podcast",
  "Gathering",
  "Celebration",
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
        {GALLERY_ITEMS.map((label, i) => (
          <div
            key={label}
            className="flex aspect-square items-center justify-center rounded-2xl text-xs font-medium text-white/80"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(135deg, var(--queen-pink), var(--middle-purple))"
                  : "linear-gradient(135deg, var(--old-lavender), var(--jacarta))",
            }}
          >
            Photo: {label}
          </div>
        ))}
      </div>
    </section>
  );
}
