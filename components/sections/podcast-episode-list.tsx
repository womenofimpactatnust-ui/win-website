"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { DragScroll } from "@/components/ui/drag-scroll";
import { PodcastEpisodeModal } from "@/components/sections/podcast-episode-modal";
import type { PodcastEpisode } from "@/app/(public)/podcasts/episodes";

export function PodcastEpisodeList({ episodes }: { episodes: readonly PodcastEpisode[] }) {
  const [active, setActive] = useState<PodcastEpisode | null>(null);

  return (
    <>
      <DragScroll className="mt-8 gap-5 px-6 pb-4 md:px-10">
        {episodes.map((ep) => (
          <button
            key={ep.slug}
            type="button"
            onClick={() => setActive(ep)}
            draggable={false}
            className="group w-72 shrink-0 select-none overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-jacarta/5 transition-shadow hover:shadow-md"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={ep.thumbnail}
                alt={ep.title}
                fill
                draggable={false}
                sizes="288px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-jacarta/20" aria-hidden />
              <div className="absolute bottom-3 left-3 flex size-11 items-center justify-center rounded-full bg-white text-jacarta shadow-md">
                <Play className="size-4 fill-current" />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <h3 className="font-heading text-base font-semibold text-jacarta group-hover:text-middle-purple">
                {ep.title}
              </h3>
              <p className="text-sm text-jacarta/70">{ep.description}</p>
              <span className="mt-1 text-xs text-jacarta/50">{ep.duration}</span>
            </div>
          </button>
        ))}
      </DragScroll>

      <PodcastEpisodeModal episode={active} onClose={() => setActive(null)} />
    </>
  );
}
