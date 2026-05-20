# Hurkify Technology Limited Website

Official premium one-page corporate website for Hurkify Technology Limited.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Shadcn UI primitives
- Lucide React icons
- Framer Motion
- React Hook Form + Zod
- Supabase/PostgreSQL
- Sanity CMS scaffolding
- Resend email API route
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in Resend, Supabase, and Sanity values before enabling production submissions.

## Project Structure

```text
frontend/
  app/          Next.js App Router pages and route adapters
  components/   Reusable React and shadcn-style UI components
  sections/     One-page website sections
  public/       Optimized website images and brand assets
  lib/          Frontend-only data and utility helpers

backend/
  contact/      Contact/consultation validation schema
  services/     Resend and Supabase server integrations
  database/     PostgreSQL/Supabase schema
  cms/          Sanity CMS configuration and schemas
```

The frontend app contains a thin `app/api/contact` route so Next.js can expose the endpoint, while the server-side helpers it uses live under `backend/`.
