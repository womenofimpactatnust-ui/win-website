import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function NewsletterArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/newsletter"
        className="inline-flex items-center gap-1 text-sm font-medium text-old-lavender hover:text-jacarta"
      >
        <ArrowLeft className="size-4" />
        Back to Newsletter
      </Link>

      <h1 className="mt-6 font-heading text-3xl font-semibold text-jacarta sm:text-4xl">
        Article: {slug}
      </h1>
      <p className="mt-6 text-jacarta/75">
        This is a placeholder for a newsletter article page. Once Supabase is
        connected, this will render the published article body (rich text) for the
        given slug.
      </p>
    </main>
  );
}
