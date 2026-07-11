import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/stories"
        className="inline-flex items-center gap-1 text-sm font-medium text-old-lavender hover:text-jacarta"
      >
        <ArrowLeft className="size-4" />
        Back to Stories
      </Link>

      <Badge variant="secondary" className="mt-6 w-fit">
        Placeholder
      </Badge>
      <h1 className="mt-3 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
        Story: {slug}
      </h1>
      <p className="mt-6 text-jacarta/75">
        This is a placeholder for an individual story page. Once Supabase is
        connected, this will render the approved story body (rich text) for the
        given slug.
      </p>
    </main>
  );
}
