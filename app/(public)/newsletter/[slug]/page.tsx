import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

const ARTICLE_IMAGES = [
  "/media/events/orientation/Image-1.jpg",
  "/media/events/behenchaara-circle/image-2.jpeg",
  "/media/events/self-defence-workshop/image-1.JPG",
  "/media/events/movie-night/Image-1.jpg",
  "/media/events/womens-day/Image-1.JPG",
  "/media/events/soch-ka-safar/image-6.jpg",
  "/media/events/self-defence-workshop/image-4.jpg",
] as const;

function imageForSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return ARTICLE_IMAGES[hash % ARTICLE_IMAGES.length];
}

export default async function NewsletterArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="pb-20">
      <section>
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id="article-hero-wave" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.94 C0.85,0.99 0.65,0.99 0.5,0.955 C0.35,0.92 0.15,0.92 0,0.965 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="relative isolate flex min-h-[22rem] w-full flex-col overflow-hidden bg-gradient-to-br from-old-lavender via-middle-purple to-jacarta sm:min-h-[24rem]"
          style={{ clipPath: "url(#article-hero-wave)" }}
        >
          <Image
            src={imageForSlug(slug)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-jacarta/60 via-jacarta/55 to-jacarta/60"
            aria-hidden
          />

          <div className="relative flex flex-1 flex-col justify-between gap-16 px-4 pb-16 pt-4 sm:px-6 md:px-10 md:pb-20 md:pt-6">
            <Navbar />

            <div className="max-w-2xl px-2 sm:px-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-queen-pink">
                Newsletter
              </p>
              <h1 className="mt-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/newsletter"
          className="inline-flex items-center gap-1 text-sm font-medium text-old-lavender hover:text-jacarta"
        >
          <ArrowLeft className="size-4" />
          Back to Newsletter
        </Link>

        <p className="mt-8 text-jacarta/75">
          This is a placeholder for a newsletter article page. Once Supabase is
          connected, this will render the published article body (rich text) for
          the given slug.
        </p>
      </div>
    </main>
  );
}
