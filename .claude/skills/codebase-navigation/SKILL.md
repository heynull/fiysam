# Codebase Navigation Skill

Use this skill whenever you need to understand where functionality lives in the Fiysam corporate website before making or reviewing a change.

## Purpose

Help navigate the existing Next.js App Router codebase without inventing paths, components, APIs, or architectural patterns.

Treat the actual repository as the source of truth.

## Step 1: Identify the Route

Start by locating the relevant route under:

```text
app/
```

Current top-level routes include:

- `app/page.tsx` — homepage
- `app/about/page.tsx` — about page
- `app/services/page.tsx` — full services catalogue
- `app/projects/page.tsx` — projects page
- `app/contact/page.tsx` — contact page
- `app/api/contact/route.ts` — contact API endpoint

For a page-related task, inspect the route before searching broadly through the repository.

## Step 2: Trace Shared Components

Most pages compose reusable components from:

```text
components/
```

Inspect the components used by the target route before creating a new component.

Important shared components include:

### Navigation and Layout

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

Do not assume every component is a server component. Many current components use `'use client'` because of Framer Motion animations.

## Step 3: Search for Existing Patterns

Before implementing something new, search the repository for similar functionality.

Look for:

- Existing components with similar UI
- Existing Tailwind class patterns
- Existing Framer Motion variants
- Existing buttons and links
- Existing responsive layouts
- Existing semantic CSS classes
- Existing data structures
- Existing API handling

Prefer extending an existing pattern over creating a parallel implementation.

## Step 4: Check Styling

The primary styling system is:

```text
app/globals.css
```

Inspect this file when a task involves:

- colors
- typography
- spacing
- buttons
- section headings
- shared component classes
- Tailwind theme tokens

Important existing semantic classes include:

- `.btn-primary`
- `.btn-ghost`
- `.section-title`
- `.section-label`
- `.section-sub`

Important theme tokens include:

- `amber-energy`
- `obsidian`
- `deep`

Do not invent replacement color tokens when an existing Fiysam token already serves the purpose.

## Step 5: Trace Content and Data

The application currently stores marketing content directly in components/pages.

Relevant content includes:

- services
- projects
- testimonials
- statistics

Pay special attention to services because the repository intentionally has two representations:

```text
components/Services.tsx
    ↓
Homepage highlighted services

app/services/page.tsx
    ↓
Full services catalogue
```

If a task changes service information, inspect both locations before deciding what needs to change.

## Step 6: Trace API Functionality

The application currently has one API route:

```text
app/api/contact/route.ts
```

The contact flow is:

```text
Contact UI
    ↓
app/api/contact/route.ts
    ↓
validation
    ↓
lib/email.ts
    ↓
Nodemailer / SMTP
```

If a task concerns contact forms, email delivery, or contact submissions, inspect the entire flow rather than modifying only the UI.

## Step 7: Check Configuration Before Changing Infrastructure

Relevant configuration files include:

```text
package.json
next.config.ts
tsconfig.json
postcss.config.mjs
tailwind.config.ts
app/globals.css
```

Before changing build, styling, or framework behavior, inspect the relevant configuration.

The project uses:

```text
next dev --webpack
```

Do not assume the default Next.js Turbopack development setup.

## Step 8: Verify Before Editing

Before making a change, be able to answer:

1. Which route or component owns the behavior?
2. Is there already a component implementing something similar?
3. Is the relevant content defined in more than one place?
4. What styling and animation conventions does the surrounding code use?
5. Does the change affect an API route or server-side functionality?
6. Does the change require updating another route, component, or static asset?

If these questions cannot be answered from the repository, inspect further before editing.

## Step 9: Avoid Invented Architecture

Do not assume the repository contains:

- a database
- a CMS
- authentication
- a state-management library
- an automated testing framework
- a backend service layer
- shared domain types

unless the actual repository confirms it.

The current application is primarily a Next.js marketing site with static content and one server-side contact API.

## Navigation Principle

Use this general investigation path:

```text
Task
  ↓
Relevant route
  ↓
Route components
  ↓
Related shared components
  ↓
Styles / design tokens
  ↓
Data source
  ↓
API / server logic if applicable
  ↓
Related routes or duplicated content
```

The goal is to understand the existing implementation before deciding where a change belongs.
