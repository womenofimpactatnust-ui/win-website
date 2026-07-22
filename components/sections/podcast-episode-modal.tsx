"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import type { PodcastEpisode } from "@/app/(public)/podcasts/episodes";

export function PodcastEpisodeModal({
  episode,
  onClose,
}: {
  episode: PodcastEpisode | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!episode) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [episode, onClose]);

  if (!episode) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-jacarta/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={episode.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-jacarta shadow-md transition-colors hover:bg-queen-pink/50"
        >
          <X className="size-4" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-t-[2rem]">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            sizes="(min-width: 768px) 42rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-jacarta/40" aria-hidden />
          {/* Placeholder for the HLS video player (hls.js) — wired once episodes exist */}
          <button
            type="button"
            aria-label="Play episode"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-jacarta shadow-lg transition-transform hover:scale-105">
              <Play className="size-6 fill-current" />
            </span>
          </button>
        </div>

        <div className="p-6 text-left sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
            Soch ka Safar · {episode.duration}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-jacarta sm:text-3xl">
            {episode.title}
          </h2>
          <p className="mt-4 text-jacarta/75">{episode.description}</p>
        </div>
      </div>
    </div>
  );
}
