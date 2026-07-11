import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  { href: "/stories", label: "Stories" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/what-to-do", label: "What To Do" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 rounded-full bg-white/95 px-4 py-2.5 shadow-lg shadow-jacarta/10 backdrop-blur">
      <Link href="/" className="shrink-0 text-lg font-heading font-semibold text-jacarta">
        WIN
      </Link>

      <ul className="hidden items-center gap-6 text-sm font-medium text-jacarta/80 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-jacarta">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-3 text-jacarta/70 sm:flex">
          <Link href="#" aria-label="Instagram" className="hover:text-jacarta">
            <InstagramIcon className="size-4" />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-jacarta">
            <FacebookIcon className="size-4" />
          </Link>
        </div>
        <Button
          size="sm"
          className="rounded-full"
          nativeButton={false}
          render={<Link href="/stories/submit" />}
        >
          Share Your Story
        </Button>
      </div>
    </nav>
  );
}
