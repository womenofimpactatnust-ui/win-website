import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PLACEHOLDER_QUEUE = [
  { id: "1", title: "Finding My Voice", submittedBy: "Anonymous", status: "pending" },
  { id: "2", title: "The Support I Needed", submittedBy: "Anonymous", status: "pending" },
] as const;

export default function AdminStoriesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-jacarta">
        Story Moderation Queue
      </h1>
      <p className="mt-2 text-jacarta/70">
        Pending submissions awaiting review. Approve/reject actions are not yet
        wired up — this is a design preview.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {PLACEHOLDER_QUEUE.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-jacarta/5"
          >
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading text-lg font-semibold text-jacarta">
                  {item.title}
                </h2>
                <Badge variant="secondary">{item.status}</Badge>
              </div>
              <p className="mt-1 text-sm text-jacarta/60">
                Submitted by {item.submittedBy}
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" disabled>
                Reject
              </Button>
              <Button size="sm" disabled>
                Approve
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
