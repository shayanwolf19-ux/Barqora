# Barqora — Next.js

This is the Next.js (App Router) version of the Barqora growth engine site. UI, colors, spacing, typography, layout, animations, and content are identical to the original React + Vite version.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
.
├── public/                    # Static files served at /
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind + theme tokens (was src/index.css)
│   │   ├── layout.tsx         # Root layout (replaces index.html + main.tsx)
│   │   ├── page.tsx           # Home page (was src/pages/Index.tsx)
│   │   ├── not-found.tsx      # 404 page (was src/pages/NotFound.tsx)
│   │   └── providers.tsx      # QueryClient + Toaster + Tooltip providers
│   ├── assets/                # Images & GIF (unchanged)
│   ├── components/
│   │   ├── ui/                # shadcn/ui — every file has "use client"
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyUs.tsx
│   ├── hooks/                 # use-mobile, use-toast
│   └── lib/                   # utils (cn)
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Available scripts

- `npm run dev` — Start dev server at http://localhost:3000
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## What changed vs. the Vite version

Only framework-level changes — no UI changes.

1. **Entry points:** `index.html` + `src/main.tsx` + `src/App.tsx` were merged into `src/app/layout.tsx` + `src/app/providers.tsx`.
2. **Routing:** `react-router-dom` removed. Next.js uses file-based routing (`app/page.tsx`, `app/not-found.tsx`).
3. **Client components:** Components that use `useState`, `useEffect`, `useRef`, browser APIs, or Radix UI got `"use client";` at the top.
4. **Asset imports:** Imported images return a `StaticImageData` object in Next.js. `<img src={imported}>` was updated to `<img src={imported.src}>`. UI is identical.
5. **CSS:** `src/index.css` content moved to `src/app/globals.css`. Duplicate `@import` line removed.
6. **Tailwind content paths:** Updated to include `./src/app/**/*.{ts,tsx}`.
7. **Configs:** `vite.config.ts` replaced by `next.config.js`. `vite-env.d.ts` replaced by `next-env.d.ts`.

The visual output is byte-for-byte the same as the Vite version.
