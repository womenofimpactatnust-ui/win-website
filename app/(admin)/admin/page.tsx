import Link from "next/link";
import { Mic, Newspaper } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const SECTIONS = [
  {
    href: "/admin/podcasts",
    icon: Mic,
    title: "Podcasts",
    description: "Manage podcast episodes.",
  },
  {
    href: "/admin/newsletter",
    icon: Newspaper,
    title: "Newsletter",
    description: "Publish and manage newsletter articles.",
  },
] as const;

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-jacarta">
        Admin Dashboard
      </h1>
      <p className="mt-2 text-jacarta/70">
        Content management for WIN. Authentication is not yet wired up.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SECTIONS.map(({ href, icon: Icon, title, description }) => (
          <Link key={href} href={href}>
            <Card className="border-none bg-white p-2 shadow-sm ring-0 transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-full bg-queen-pink">
                  <Icon className="size-5 text-jacarta" />
                </div>
                <CardTitle className="mt-3 text-xl">{title}</CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
