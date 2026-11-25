# Esther Osuoha — Portfolio

Personal portfolio for Esther Osuoha, full stack engineer and UI/UX product designer based in Lagos, Nigeria.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4. No UI libraries, no animation libraries: the visuals, project mockups and motion are hand-written.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Structure

```
app/          layout, page, global styles, metadata, favicon
components/   page sections and interactive pieces
lib/data.ts   all site content: projects, timeline, toolkit, links
public/       photo, avatar, OG image, CV PDF
```

Most copy lives in `lib/data.ts`, so content edits rarely need touching a component.

## Notes

- Fonts: Instrument Serif (display), Inter (body), JetBrains Mono (labels), loaded through `next/font`.
- Colors and design tokens are CSS variables in `app/globals.css`.
- Motion respects `prefers-reduced-motion`.
