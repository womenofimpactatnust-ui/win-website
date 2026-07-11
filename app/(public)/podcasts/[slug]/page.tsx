import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default async function PodcastPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/podcasts"
        className="inline-flex items-center gap-1 text-sm font-medium text-old-lavender hover:text-jacarta"
      >
        <ArrowLeft className="size-4" />
        Back to Podcasts
      </Link>

      {/* Placeholder for the HLS video player (hls.js) — wired once episodes exist */}
      <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-jacarta via-old-lavender to-middle-purple">
        <div className="flex size-16 items-center justify-center rounded-full bg-white/20">
          <Play className="size-7 fill-white text-white" />
        </div>
      </div>

      <h1 className="mt-6 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
        Episode: {slug}
      </h1>
      <p className="mt-4 text-jacarta/75">
        This is a placeholder for a podcast episode page. Once video assets are
        hosted, this will stream via hls.js from the configured origin.
      </p>
    </main>
  );
}
