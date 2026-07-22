import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-jacarta px-8 py-14 text-center">
        <h2 className="font-heading text-3xl font-semibold text-cream sm:text-4xl">
          Your voice belongs here
        </h2>
        <p className="max-w-md text-cream/75">
          Share your story with the WIN community — anonymously if you choose. Every
          submission is reviewed with care before it&apos;s published.
        </p>
        <Button
          size="lg"
          className="rounded-full px-8"
          nativeButton={false}
          render={<Link href="/stories/submit" />}
        >
          Share Your Story
        </Button>
      </div>
    </section>
  );
}
