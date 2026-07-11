"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { PageHero } from "@/components/sections/page-hero";

export default function SubmitStoryPage() {
  const [isAnonymous, setIsAnonymous] = useState(true);

  return (
    <main>
      <PageHero
        eyebrow="Stories"
        title="Submit Your Story"
        description="Share what you've been through, in your own words. Every submission is reviewed by our team before it's published — anonymously if you choose."
      />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <form
          className="flex flex-col gap-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-jacarta/5 sm:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-secondary/50 p-4">
            <div>
              <Label htmlFor="anonymous" className="text-jacarta">
                Submit anonymously
              </Label>
              <p className="mt-1 text-sm text-jacarta/60">
                Your name will not be published or shared with anyone but the
                moderation team.
              </p>
            </div>
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
          </div>

          {!isAnonymous && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Story title</Label>
            <Input id="title" name="title" placeholder="Give your story a title" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="body">Your story</Label>
            <Textarea
              id="body"
              name="body"
              rows={10}
              placeholder="Share as much or as little as you're comfortable with..."
            />
          </div>

          <Button size="lg" className="rounded-full" disabled>
            Submit for Review
          </Button>
          <p className="text-center text-xs text-jacarta/50">
            Submission is not yet connected — this form is a design preview only.
          </p>
        </form>
      </section>
    </main>
  );
}
