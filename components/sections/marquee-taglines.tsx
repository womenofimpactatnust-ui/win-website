const ROW_ONE = [
  "Women of Impact",
  "Your Story, Your Strength",
  "Built by Women, for Women",
  "Real Voices, Real Change",
];

const ROW_TWO = [
  "A Safe Space, Always",
  "Community First",
  "Heard. Believed. Supported.",
  "Women of NUST, United",
];

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const track = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {track.map((text, i) => (
          <span key={i} className="flex shrink-0 items-center gap-4">
            <span className="font-heading text-lg font-semibold uppercase tracking-wide text-white sm:text-2xl">
              {text}
            </span>
            <span className="size-1.5 shrink-0 rounded-full bg-queen-pink" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeTaglines() {
  return (
    <section className="bg-jacarta py-10">
      <div className="flex flex-col gap-6">
        <MarqueeRow items={ROW_ONE} direction="left" />
        <div className="h-px w-full bg-white/10" aria-hidden />
        <MarqueeRow items={ROW_TWO} direction="right" />
      </div>
    </section>
  );
}
