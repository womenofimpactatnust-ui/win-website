import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/stories", label: "Stories" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/what-to-do", label: "What To Do" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-brown-chocolate text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-heading font-semibold">Women of Impact at NUST</p>
          <p className="mt-2 max-w-sm text-sm text-cream/70">
            A community for NUST women to share stories, find support, and grow together.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-cream/80 sm:grid-cols-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Women of Impact at NUST. All rights reserved.
      </div>
    </footer>
  );
}
