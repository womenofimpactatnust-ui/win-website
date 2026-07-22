"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.5l-.5 3H11.5v7h-3v-7H6v-3h2.5V9.5A4 4 0 0 1 12.5 5.5H15z" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/what-to-do", label: "What To Do" },
  { href: "/about", label: "About" },
];

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20">
      <nav className="flex items-center justify-between gap-4 rounded-full bg-white/95 px-3 py-2 shadow-lg shadow-jacarta/10 backdrop-blur sm:px-5 sm:py-3">
        <Link
          href="/"
          className="relative size-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-jacarta/10 sm:size-12"
        >
          <Image
            src="/media/logo/WIN-Logooo.png"
            alt="WIN logo"
            fill
            sizes="48px"
            className="object-cover"
          />
        </Link>

        <ul className="hidden items-center gap-1 text-sm font-medium text-jacarta/80 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-full bg-queen-pink px-4 py-1.5 text-jacarta transition-colors"
                      : "rounded-full px-4 py-1.5 transition-colors hover:text-jacarta"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-3 text-jacarta/70 sm:flex">
            <Link
              href="https://www.instagram.com/win_nust/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-jacarta"
            >
              <InstagramIcon className="size-4" />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-jacarta">
              <FacebookIcon className="size-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex size-9 shrink-0 items-center justify-center rounded-full text-jacarta transition-colors hover:bg-jacarta/5 lg:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-3xl bg-white p-4 shadow-xl shadow-jacarta/15">
            <ul className="flex flex-col gap-1 text-sm font-medium text-jacarta/80">
              {NAV_LINKS.map((link) => {
                const active = isActiveLink(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "block rounded-full bg-queen-pink px-3 py-2 text-jacarta"
                          : "block rounded-full px-3 py-2 transition-colors hover:bg-queen-pink/40 hover:text-jacarta"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 flex items-center gap-4 border-t border-jacarta/10 px-3 pt-3 text-jacarta/70">
              <Link href="#" aria-label="Instagram" className="hover:text-jacarta">
                <InstagramIcon className="size-4" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-jacarta">
                <FacebookIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
