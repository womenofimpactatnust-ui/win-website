export const SOCH_KA_SAFAR_EPISODES = [
  {
    slug: "soch-ka-safar-episode-1",
    title: "Soch ka Safar — Episode 1",
    description:
      "The first episode of WIN's podcast series — candid conversations from women of NUST.",
    thumbnail: "/media/events/soch-ka-safar/Image-1.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-2",
    title: "Soch ka Safar — Episode 2",
    description: "Continuing the journey — more voices, more stories from the WIN community.",
    thumbnail: "/media/events/soch-ka-safar/Image-2.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-3",
    title: "Soch ka Safar — Episode 3",
    description: "Season highlights — reflections from the women who shaped this community.",
    thumbnail: "/media/events/soch-ka-safar/image-5.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-4",
    title: "Soch ka Safar — Episode 4 (placeholder)",
    description: "TODO — replace with real episode details once recorded.",
    thumbnail: "/media/events/orientation/Image-2.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-5",
    title: "Soch ka Safar — Episode 5 (placeholder)",
    description: "TODO — replace with real episode details once recorded.",
    thumbnail: "/media/events/self-defence-workshop/image-3.jpg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-6",
    title: "Soch ka Safar — Episode 6 (placeholder)",
    description: "TODO — replace with real episode details once recorded.",
    thumbnail: "/media/events/behenchaara-circle/image-3.jpeg",
    duration: "— min",
  },
  {
    slug: "soch-ka-safar-episode-7",
    title: "Soch ka Safar — Episode 7 (placeholder)",
    description: "TODO — replace with real episode details once recorded.",
    thumbnail: "/media/events/womens-day/image-5.JPG",
    duration: "— min",
  },
] as const;

export type PodcastEpisode = (typeof SOCH_KA_SAFAR_EPISODES)[number];
