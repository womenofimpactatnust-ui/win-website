import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/podcasts", label: "Podcasts" },
  { href: "/newsletter", label: "Newsletter" },
];

const SUPPORT_LINKS = [
  { href: "/what-to-do", label: "What To Do" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-jacarta text-cream">
      <div className="flex flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:justify-between md:gap-6 md:px-10 lg:px-16">
        <div className="text-left">
          <p className="font-heading text-xl font-semibold">Women of Impact at NUST</p>
          <p className="mt-3 max-w-sm text-sm text-cream/70">
            A community for NUST women to find support, connect with others, and
            grow together.
          </p>
        </div>

        <nav aria-label="Explore" className="text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-cream/80">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Support" className="text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
            Support
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-cream/80">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/10">
        <div className="flex flex-col gap-2 px-6 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} Women of Impact at NUST. All rights reserved.</p>
          <p>NUST, Islamabad</p>
        </div>
      </div>
    </footer>
  );
}
