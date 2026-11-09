# Mosharof Hossain — Developer Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before deployment

1. Keep your final resume PDF at `public/resume/resume.pdf` (the hero download button is wired to this path).
2. Add each project's real live URL and client repository URL in `lib/projects.ts` (`liveUrl` and `repoUrl`). Do not leave placeholder values as fake links.
3. Confirm the project descriptions and technologies match the final deployed versions.
4. The homepage portrait collage uses images from `public/images/`; update the image paths in `app/page.tsx` to change the portraits.

## Deploy to Vercel

Push this folder to a new GitHub repository, import it into Vercel, keep the framework preset as Next.js, and deploy. No environment variables are required for this static portfolio.

## Notes

- Project detail pages are generated at `/projects/socialcare`, `/projects/bazar-dor`, and `/projects/fitlog`.
- Contact details and social links are configured in `app/page.tsx`, `components/Footer.tsx`, and `components/Navbar.tsx`.
- This portfolio does not need Better Auth; public portfolio visitors do not need accounts.
