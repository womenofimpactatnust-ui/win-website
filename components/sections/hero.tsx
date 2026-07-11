import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

export function Hero() {
  return (
    <section className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-old-lavender via-middle-purple to-jacarta">
        {/* Placeholder for hero photography — swap for a real background image */}
        <div className="absolute inset-0 bg-jacarta/60" aria-hidden />

        <div className="relative flex flex-col gap-16 px-4 pb-16 pt-4 sm:px-6 md:pb-24 md:pt-6">
          <Navbar />

          <div className="max-w-xl px-2 sm:px-4">
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Your Story, Your Strength, Our Impact
            </h1>
            <p className="mt-4 max-w-md text-base text-white/85">
              WIN is a community for women of NUST to share their stories, listen to
              others, and find the support and resources they need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full px-6"
                nativeButton={false}
                render={<Link href="/stories/submit" />}
              >
                Share Your Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/40 bg-white/10 px-6 text-white hover:bg-white/20"
                nativeButton={false}
                render={<Link href="/stories" />}
              >
                Read Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
