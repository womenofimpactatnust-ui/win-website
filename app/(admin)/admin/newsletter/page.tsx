import { Button } from "@/components/ui/button";

export default function AdminNewsletterPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold text-jacarta">
            Newsletter
          </h1>
          <p className="mt-2 text-jacarta/70">
            Publish and manage articles. Not yet wired up.
          </p>
        </div>
        <Button className="rounded-full" disabled>
          New Article
        </Button>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-8 text-center text-sm text-jacarta/60 shadow-sm ring-1 ring-jacarta/5">
        No articles yet.
      </div>
    </main>
  );
}
