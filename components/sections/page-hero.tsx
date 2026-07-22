import { Navbar } from "@/components/layout/navbar";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-old-lavender via-middle-purple to-jacarta">
        <div className="absolute inset-0 bg-jacarta/50" aria-hidden />
        <div className="relative flex flex-col gap-16 px-4 pb-16 pt-4 text-center sm:px-6 md:pb-20 md:pt-6">
          <Navbar />
          <div className="mx-auto max-w-2xl px-2 sm:px-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-queen-pink">
              {eyebrow}
            </p>
            <h1 className="mt-2 font-heading text-4xl font-semibold text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base text-white/85">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
