"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { PodcastEpisodeModal } from "@/components/sections/podcast-episode-modal";
import type { PodcastEpisode } from "@/app/(public)/podcasts/episodes";

export function PodcastRecentEpisode({ episode }: { episode: PodcastEpisode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-8 px-6 md:px-10">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group grid w-full overflow-hidden rounded-[2rem] bg-white text-left shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md md:grid-cols-2"
        >
          <div className="relative h-64 w-full overflow-hidden md:h-full">
            <Image
              src={episode.thumbnail}
              alt={episode.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-jacarta/20" aria-hidden />
            <span className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full bg-white/90 text-jacarta shadow-md">
              <Play className="size-5 fill-current" />
            </span>
          </div>
          <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-old-lavender">
              Soch ka Safar · {episode.duration}
            </p>
            <h3 className="font-heading text-2xl font-semibold text-jacarta group-hover:text-middle-purple">
              {episode.title}
            </h3>
            <p className="text-jacarta/70">{episode.description}</p>
          </div>
        </button>
      </div>

      <PodcastEpisodeModal episode={open ? episode : null} onClose={() => setOpen(false)} />
    </>
  );
}
