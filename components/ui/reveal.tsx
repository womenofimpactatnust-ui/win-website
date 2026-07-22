"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right";

const HIDDEN_CLASS: Record<RevealDirection, string> = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-12",
  right: "opacity-0 translate-x-12",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-x-0 translate-y-0 opacity-100" : HIDDEN_CLASS[direction],
        className
      )}
    >
      {children}
    </div>
  );
}
