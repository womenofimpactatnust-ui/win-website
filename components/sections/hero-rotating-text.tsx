"use client";

import { useEffect, useState } from "react";

const PHRASES = ["Our Impact", "Our Voice", "Our Community", "Our Strength"] as const;

const TYPE_SPEED_MS = 70;
const DELETE_SPEED_MS = 40;
const HOLD_MS = 1800;
const PAUSE_BEFORE_TYPE_MS = 300;

export function HeroRotatingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];

    if (phase === "typing") {
      if (text.length < currentPhrase.length) {
        const id = setTimeout(
          () => setText(currentPhrase.slice(0, text.length + 1)),
          TYPE_SPEED_MS
        );
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("holding"), HOLD_MS);
      return () => clearTimeout(id);
    }

    if (phase === "holding") {
      const id = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(id);
    }

    if (text.length > 0) {
      const id = setTimeout(
        () => setText(currentPhrase.slice(0, text.length - 1)),
        DELETE_SPEED_MS
      );
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
      setPhase("typing");
    }, PAUSE_BEFORE_TYPE_MS);
    return () => clearTimeout(id);
  }, [phase, text, phraseIndex]);

  const longestPhrase = PHRASES.reduce((longest, phrase) =>
    phrase.length > longest.length ? phrase : longest
  );

  return (
    <span className="relative inline-grid align-bottom">
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {longestPhrase}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden>
        {text}
        <span className="ml-0.5 inline-block w-[2px] animate-caret-blink bg-white align-[-0.1em]">
          &nbsp;
        </span>
      </span>
      <span className="sr-only">{PHRASES[phraseIndex]}</span>
    </span>
  );
}
