import Link from "next/link";
import { BookHeart, Mic, LifeBuoy } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const FEATURES = [
  {
    href: "/stories",
    icon: BookHeart,
    title: "Stories",
    description:
      "Real stories from women of NUST — shared in their own words, moderated with care.",
  },
  {
    href: "/podcasts",
    icon: Mic,
    title: "Podcasts",
    description:
      "Conversations that dig into the experiences shaping women's lives on and off campus.",
  },
  {
    href: "/what-to-do",
    icon: LifeBuoy,
    title: "What To Do",
    description:
      "Clear guidance and verified resources for harassment, cyberbullying, and safety concerns.",
  },
] as const;

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {FEATURES.map(({ href, icon: Icon, title, description }) => (
          <Card key={href} className="border-none bg-white p-2 shadow-sm ring-0">
            <CardHeader>
              <div className="flex size-11 items-center justify-center rounded-full bg-queen-pink">
                <Icon className="size-5 text-jacarta" />
              </div>
              <CardTitle className="mt-3 text-xl">{title}</CardTitle>
              <CardDescription className="text-base">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={href}
                className="text-sm font-medium text-middle-purple hover:text-jacarta"
              >
                Learn more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
