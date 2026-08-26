# CLAUDE.md

## Project Overview

Fiysam is a corporate website for Fiysam, an infrastructure company delivering sustainable power, clean water, and accessible gas infrastructure across Nigeria and West Africa.

This repository contains the Fiysam corporate website. It is not the Fiysam Studio product/software platform.

The site is a Next.js marketing website focused on presenting Fiysam's company, services, projects, process, testimonials, and contact information.

## Tech Stack

- Next.js 16.2.6
- React 19.2.4
- TypeScript 5.9 with strict mode
- Tailwind CSS v4
- Framer Motion 12
- lucide-react
- react-countup
- react-intersection-observer
- Nodemailer
- Vercel

The development server uses webpack explicitly:

```bash
npm run dev
```

The project uses:

```text
next dev --webpack
```

Do not assume Turbopack is being used for local development.

## Application Architecture

This is a Next.js App Router application.

### Routes

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
├── projects/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── api/
    └── contact/
        └── route.ts
```

Top-level pages are generally thin wrappers that compose reusable components from `components/`.

### Route Responsibilities

- `/` — Main corporate homepage.
- `/about` — About/company information.
- `/services` — Full services catalogue with search, filtering, and modal interactions.
- `/projects` — Projects showcase.
- `/contact` — Contact page.
- `/api/contact` — POST endpoint for contact form submissions.

## Shared Components

Shared UI and landing-page sections live in:

```text
components/
```

Important components include:

### Layout and Navigation

- `ClientLayout.tsx`
- `Navigation.tsx`
- `Footer.tsx`
- `BackNavigation.tsx`

### Landing Sections

- `Hero`
- `Ticker`
- `StatsBar`
- `Services`
- `WhyUs`
- `Projects`
- `Process`
- `Testimonials`
- `CTABand`
- `Contact`

Most content sections currently use client components because Framer Motion animations are used extensively.

Do not convert components between client and server components without understanding the effect on their animation and interaction requirements.

## Styling

The project uses Tailwind CSS v4 with CSS-first configuration.

The primary theme tokens are defined in:

```text
app/globals.css
```

The project uses a dark energy-sector visual system with tokens including:

- `amber-energy`
- `obsidian`
- `deep`

Common semantic CSS classes include:

- `.btn-primary`
- `.btn-ghost`
- `.section-title`
- `.section-label`
- `.section-sub`

Prefer existing design tokens and established component classes over introducing duplicate styles.

Use the existing visual language when creating or modifying UI.

## Animation

Framer Motion is used extensively throughout the site.

Existing components commonly use animation patterns such as:

```text
whileInView
```

When creating new animated sections, follow the existing animation patterns instead of introducing a completely different animation system.

Animations should support the content and user experience rather than exist purely for decoration.

## Content and Data

There is currently no database or CMS.

Content such as:

- services
- projects
- testimonials
- statistics

is stored as arrays directly in components/pages.

Do not introduce a database, CMS, or additional data layer unless explicitly requested.

### Services

There are currently two service representations:

```text
components/Services.tsx
    ↓
Homepage highlighted services

app/services/page.tsx
    ↓
Full services catalogue
```

The homepage displays a smaller highlighted set while `/services` contains the full catalogue.

When modifying service information, check both locations where appropriate.

## API and Contact Form

The application currently has one API route:

```text
POST /api/contact
```

The flow is:

```text
Contact form
    ↓
app/api/contact/route.ts
    ↓
validation
    ↓
lib/email.ts
    ↓
Nodemailer / SMTP
```

The contact endpoint validates required fields and email format before sending email.

Expected SMTP-related environment variables include:

```text
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASSWORD
CONTACT_EMAIL
```

Never hardcode or expose these values.

Do not expose server-side environment variables to client components.

## Authentication

There is currently no authentication system.

The website is publicly accessible and does not contain:

- user accounts
- protected routes
- login
- authorization
- authenticated API endpoints

Do not introduce authentication assumptions into unrelated features.

## Testing

There is currently no automated testing framework configured in the repository.

Do not assume that Jest, Vitest, Playwright, Cypress, or another test framework exists.

When making changes, use the validation and development commands actually available in the repository.

If automated testing is introduced later, update this documentation.

## Deployment

The application is designed for deployment on Vercel.

Important deployment-related files/configuration include:

```text
next.config.ts
public/sitemap.xml
public/google0b60cb6cd44aa3a0.html
```

The sitemap is currently maintained as a static file.

When adding or removing routes, consider whether `public/sitemap.xml` also needs to be updated.

## Tailwind Configuration

The repository contains both:

```text
tailwind.config.ts
```

and CSS-first Tailwind v4 configuration in:

```text
app/globals.css
```

The `@theme` configuration in `globals.css` is the primary Tailwind v4 theme definition.

Do not modify or remove the legacy Tailwind configuration without first verifying whether it is still required by the current build setup.

## Component and UI Conventions

When creating new UI:

- Prefer reusable React components when a pattern is likely to be reused.
- Follow existing component structure.
- Use TypeScript.
- Use Tailwind utilities consistently with the existing codebase.
- Reuse existing color tokens.
- Reuse existing typography and spacing conventions.
- Follow the existing responsive design patterns.
- Use Framer Motion when animation is appropriate and consistent with surrounding components.
- Use lucide-react for icons when an icon is needed and an appropriate existing icon does not already exist.
- Avoid introducing unnecessary UI libraries.

Do not replace the existing visual system with generic Tailwind styling.

## Codebase Navigation

Before modifying an unfamiliar feature:

1. Identify the relevant route in `app/`.
2. Identify the shared components involved.
3. Check whether the feature has existing data defined elsewhere.
4. Check related styling in `app/globals.css`.
5. Check whether the feature interacts with an API route or server-side functionality.
6. Inspect nearby components for established patterns before creating a new one.

Prefer extending existing patterns over creating parallel implementations.

## Important Repository Characteristics

The following are intentional characteristics of the current application:

- Static marketing content is stored in components.
- There is no database.
- There is no CMS.
- There is no authentication.
- There is currently no automated testing setup.
- Most animated sections are client components.
- The services page intentionally provides a larger catalogue than the homepage services section.
- The application is primarily a frontend marketing site with a small server-side contact API.

Do not treat these characteristics as problems that automatically require refactoring.

## General Development Principles

When working on this repository:

- Verify existing implementation before making assumptions.
- Keep changes focused on the requested task.
- Prefer simple solutions.
- Avoid premature abstraction.
- Avoid unnecessary refactoring.
- Preserve existing visual and architectural patterns.
- Do not invent APIs, files, components, or dependencies.
- Do not introduce infrastructure that the current product does not need.
- Protect secrets and server-side environment variables.
- Consider responsive behavior for every UI change.
- Consider accessibility for interactive elements.
- Consider performance when introducing client-side JavaScript or animation.

When documentation conflicts with the actual implementation, point out the discrepancy and use the actual implementation as the source of truth.
