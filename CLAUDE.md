# CLAUDE.md — Women of Impact at NUST (WIN) Website

This file is the durable context for this project. Read it fully before doing any task.
Every change must stay consistent with the decisions below. If a task conflicts with
this file, stop and ask before proceeding.

---

## 1. Project

Website for **Women of Impact at NUST (WIN)** — a women's society at NUST.
It is not a simple blog. It handles **sensitive personal submissions**, so moderation
and privacy are first-class requirements, not add-ons.

Core sections:
- **Landing** — overlay-hero homepage (see design direction below)
- **Stories** — published biographies / personal stories + a **moderated** submission portal
- **Podcasts** — video episodes streamed via HLS
- **Newsletter** — articles published on the site (email blast may come later)
- **What To Do** — safety resources (e.g. cyberbullying, harassment). Permanent, prominent nav item.
- **About** — society info
- **Admin** — moderation queue + content management

---

## 2. Stack (final — do not change without asking)

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Deployed on Vercel |
| Styling | Tailwind CSS + shadcn/ui | |
| DB + Auth | Supabase (Postgres, Auth, RLS) | Free tier |
| Rich text | Tiptap → stored as JSONB | For newsletter/story bodies |
| Video | Hostinger origin + static HLS (hls.js player) | No YouTube/Bunny for now |
| Deploy | Single Next.js app on Vercel | No separate backend server |

Backend is **not** a separate service. It is a layered folder inside the same app
(`lib/services`, `lib/repositories`, `lib/dto`). One deploy.

---

## 3. Palette (exact — derive all colors from these)

| Token | Name | Hex |
|---|---|---|
| `--jacarta` | Jacarta (deep indigo) | `#3A345B` |
| `--queen-pink` | Queen Pink | `#F3C8DD` |
| `--middle-purple` | Middle Purple | `#D183A9` |
| `--old-lavender` | Old Lavender | `#71557A` |
| `--brown-chocolate` | Brown Chocolate | `#4B1535` |

Usage rules:
- Text: Jacarta (dark) on light backgrounds; cream/white only on dark surfaces.
- **Never white text on Queen Pink** — contrast fails. Use Jacarta or Brown Chocolate.
- Backgrounds: Queen Pink / soft cream. CTAs/buttons: Middle Purple. Footer/deep bands: Brown Chocolate.
- Hero overlay: Jacarta-tinted dark gradient over the photo.

Map these into Tailwind theme tokens and shadcn CSS variables. Do not introduce colors
outside this palette without asking.

---

## 4. Design direction

Reference vibe: soft, warm, rounded. Structure comes from a provided reference mock.

- **Hero is an overlay card, NOT a full-bleed dark hero.** A rounded rectangle card
  with margins, containing a background photo with a dark (Jacarta-tinted) gradient
  overlay on top so white text is readable.
- **Floating pill navbar** near the top of the hero: logo left, nav links center,
  social icons + a primary button right.
- Below hero, on light/cream background, in order:
  `3 feature cards → image + text band → testimonials → gallery grid → CTA band → footer`
- The 3 feature cards map to WIN's core: **Stories · Podcasts · What To Do**.
- CTA band = "Share Your Story" → links to the submission portal.
- Rounded corners everywhere, pill-shaped buttons.

Follow the frontend-design principles: distinctive, not templated. Spend boldness in one
place (the hero), keep the rest quiet and disciplined.

---

## 5. Folder structure

```
app/
  (public)/
    layout.tsx
    page.tsx                 # landing
    stories/page.tsx
    stories/[slug]/page.tsx
    stories/submit/page.tsx  # moderated submission portal
    podcasts/page.tsx
    podcasts/[slug]/page.tsx
    newsletter/page.tsx
    newsletter/[slug]/page.tsx
    what-to-do/page.tsx
    about/page.tsx
  (admin)/
    admin/layout.tsx         # auth gate — admins only
    admin/page.tsx           # dashboard
    admin/stories/page.tsx   # moderation queue
    admin/podcasts/page.tsx
    admin/newsletter/page.tsx
  api/
    webhooks/                # reserved for later
components/
  ui/                        # shadcn components
  layout/                    # navbar, footer
  sections/                  # hero, feature-cards, testimonials, gallery, cta
lib/
  supabase/
    client.ts                # browser client (anon key)
    server.ts                # server client (session-aware)
  services/                  # business logic (framework-agnostic)
  repositories/              # the ONLY place that queries Supabase
  dto/                       # zod schemas for validation
  utils.ts
supabase/
  migrations/                # SQL migrations (schema + RLS)
public/
.env.example
```

---

## 6. Conventions

- **No React component imports `@supabase/supabase-js` directly.** Components → services → repositories → Supabase. Enforce with ESLint `no-restricted-imports`.
- All external input validated with **zod DTOs** before hitting a service.
- Writes from admin use **Server Actions**, not ad-hoc API routes.
- Public pages fetch in **Server Components** with `revalidate`, and call
  `revalidatePath()` on publish.
- TypeScript strict. No `any` unless justified with a comment.
- Commit in small, logical units. Conventional commit messages (`feat:`, `fix:`, `chore:`).

---

## 7. Security guardrails (non-negotiable)

- **RLS is the security boundary**, enabled on every table. Do not rely on UI or route
  checks alone. Public can read only `status = 'approved'` / `published = true` rows.
- **`service_role` key**: server-only, never prefixed `NEXT_PUBLIC_`, never in the client
  bundle. Only used where there is no user session (e.g. webhooks).
- **Story submissions are moderated.** Raw public submissions are never shown live.
  Default `status = 'pending'`; only admins can approve. Anonymous submission is allowed
  (`is_anonymous` flag; author name nullable).
- **What To Do content** must be accurate. Do not invent helpline numbers or resources —
  leave clearly-marked placeholders for the society to fill with verified info.
- Never commit secrets. `.env.example` documents keys; real values stay in Vercel/Supabase.

---

## 8. Loop workflow (how to work on every task)

1. **Plan** — restate the task, list the files you will touch, and the acceptance check.
   Do not write code yet.
2. **Build** — make the smallest change that satisfies the task.
3. **Verify** — run the gate and fix anything that fails:
   ```
   npm run lint
   npm run build
   npx tsc --noEmit
   ```
4. **Self-correct** — if the gate fails, fix and re-run until green. Do not move on with a
   broken build.
5. **Report** — summarize what changed, what you verified, and what is still stubbed.
6. **Commit** — one logical commit with a conventional message.

If anything is ambiguous or conflicts with this file, **stop and ask** rather than guessing.

---

## 9. Current status

- [x] Bootstrap: Next.js + TS + Tailwind + shadcn, folder structure, git init
- [x] Palette wired into Tailwind + shadcn tokens
- [ ] Supabase project + schema + RLS
- [ ] Landing page (overlay hero + sections)
- [ ] Stories: list + submit (moderated) + admin queue
- [ ] Podcasts: HLS player + list + admin
- [ ] Newsletter: article publish + admin
- [ ] What To Do page
- [ ] About page
- [ ] Deploy to Vercel

Keep this checklist updated as tasks complete.
