export function ImageTextBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid items-center gap-10 rounded-[2rem] bg-secondary/60 p-8 md:grid-cols-2 md:p-14">
        {/* Placeholder for community photography */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-middle-purple to-old-lavender text-sm font-medium text-white/80">
          Photo: community
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
            Since day one
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
            A safe space, built by and for the women of NUST
          </h2>
          <p className="mt-4 max-w-md text-jacarta/75">
            Every story submitted is reviewed with care before it&apos;s shared. WIN
            exists to make sure no one has to face a hard moment alone — and that
            support, resources, and community are always within reach.
          </p>
        </div>
      </div>
    </section>
  );
}
