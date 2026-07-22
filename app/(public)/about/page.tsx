import { PageHero } from "@/components/sections/page-hero";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Women of Impact at NUST"
        description="A society dedicated to community, support, and impact for women at NUST."
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-jacarta/5 sm:p-12">
          <h2 className="font-heading text-2xl font-semibold text-jacarta">
            Our Mission
          </h2>
          <p className="mt-4 text-jacarta/75">
            WIN exists to give women at NUST a space to share their stories, find
            community, and access the support and resources they need — safely and
            without judgment.
          </p>

          <h2 className="mt-10 font-heading text-2xl font-semibold text-jacarta">
            What We Do
          </h2>
          <p className="mt-4 text-jacarta/75">
            We publish moderated personal stories, produce podcast conversations, put
            out a regular newsletter, and maintain a dedicated resource page for
            safety concerns like harassment and cyberbullying.
          </p>
        </div>
      </section>
    </main>
  );
}
