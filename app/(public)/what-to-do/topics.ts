import { LifeBuoy, ShieldAlert, MessageCircleWarning, type LucideIcon } from "lucide-react";

export type WhatToDoTopic = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  image: string;
};

export const WHAT_TO_DO_TOPICS: WhatToDoTopic[] = [
  {
    slug: "cyberbullying",
    icon: MessageCircleWarning,
    title: "Cyberbullying",
    summary: "TODO — verified guidance and reporting steps to be provided by WIN.",
    image: "/media/events/behenchaara-circle/image-3.jpeg",
  },
  {
    slug: "harassment",
    icon: ShieldAlert,
    title: "Harassment",
    summary: "TODO — verified guidance and reporting steps to be provided by WIN.",
    image: "/media/events/self-defence-workshop/image-3.jpg",
  },
  {
    slug: "support",
    icon: LifeBuoy,
    title: "Getting Support",
    summary: "TODO — verified on/off-campus support contacts to be provided by WIN.",
    image: "/media/events/soch-ka-safar/image-5.jpg",
  },
];
