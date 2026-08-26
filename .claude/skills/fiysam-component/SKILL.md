# Fiysam Component Skill

Use this skill when creating, modifying, or reviewing React components and UI sections in the Fiysam corporate website.

## Purpose

Build UI that feels native to the existing Fiysam website.

Do not default to generic Tailwind layouts. First inspect nearby components and reuse the repository's established visual, structural, responsive, and animation patterns.

## Design Language

The current Fiysam site uses a dark energy-sector visual system.

Important existing theme tokens include:

- `amber-energy`
- `obsidian`
- `deep`

Before introducing a new color, check `app/globals.css` for an existing token that should be reused.

The existing interface generally uses:

- dark backgrounds
- amber energy accents
- strong typography
- generous section spacing
- rounded cards and containers
- subtle borders
- responsive grid layouts
- restrained motion
- high-contrast calls to action

Preserve this visual language unless the task explicitly requests a redesign.

## Step 1: Inspect Existing Components

Before creating a new component, inspect at least one or two related components in:

```text
components/
```

Look for patterns in:

- component structure
- imports
- typography
- spacing
- card layouts
- buttons
- responsive breakpoints
- Framer Motion usage
- icons
- section wrappers

Prefer adapting an established pattern over creating a new one.

## Step 2: Follow Existing Section Structure

Major landing sections commonly follow a structure similar to:

```text
Section wrapper
├── section label
├── section title
├── supporting description
└── content grid / cards / visual
```

Existing semantic classes include:

- `.section-label`
- `.section-title`
- `.section-sub`

Reuse these classes when they fit the component.

Do not recreate equivalent classes with slightly different names unless there is a real design requirement.

## Step 3: Typography

Use the typography already established by the application.

The root layout currently loads:

- Syne
- DM Sans

Do not introduce another font unless explicitly requested.

For headings, inspect existing sections to match:

- font family
- font weight
- line height
- letter spacing
- responsive sizing

For body text, follow the existing DM Sans-based styling and established contrast levels.

## Step 4: Buttons and Links

Use the existing button conventions where applicable:

- `.btn-primary`
- `.btn-ghost`

Before creating a new button style, inspect how existing components implement buttons and links.

Interactive elements should have:

- clear hover states
- visible focus states
- appropriate contrast
- accessible text or labels

Do not replace an existing button pattern with an unrelated component-library button unless explicitly requested.

## Step 5: Icons

The project uses:

```text
lucide-react
```

Use Lucide icons when an icon is needed.

Prefer an existing icon that matches the meaning of the UI instead of introducing another icon library.

Icons should support the interface rather than become decorative clutter.

## Step 6: Animation

Framer Motion is already used extensively.

Existing sections commonly use:

```text
whileInView
```

and related Framer Motion animation patterns.

When adding animation:

- follow nearby component patterns
- keep transitions subtle
- avoid excessive movement
- consider reduced-motion accessibility
- do not introduce another animation library

If a component does not need animation, do not add animation simply because Framer Motion is available.

## Step 7: Client Components

Many current sections are client components because they use Framer Motion.

Before adding:

```tsx
'use client'
```

check whether the component actually requires client-side behavior.

Use a client component when the component needs:

- browser APIs
- React client hooks
- interactive state
- event handlers requiring client execution
- Framer Motion behavior that requires the client

Do not add client-side state or effects unnecessarily.

## Step 8: Responsive Design

Every new UI component must work across the site's existing responsive layouts.

Inspect nearby components for the repository's breakpoint and spacing conventions.

When building responsive layouts:

- avoid fixed widths that break on small screens
- allow grids to collapse appropriately
- ensure text remains readable
- ensure buttons remain usable
- check mobile navigation interactions
- avoid horizontal overflow

Do not design desktop-first and assume mobile will automatically work.

## Step 9: Cards and Content Blocks

For cards, inspect existing implementations before deciding:

- border radius
- border color
- background treatment
- padding
- hover behavior
- icon placement
- typography hierarchy

Reuse the visual grammar of existing cards.

Avoid introducing unrelated shadows, gradients, glassmorphism, or decorative effects unless they already exist in the surrounding design or the task explicitly requests them.

## Step 10: Images and Media

Before adding new media behavior:

1. Check whether the repository already has a relevant asset.
2. Check how nearby components handle images.
3. Follow the existing Next.js image conventions.
4. Avoid adding external image dependencies without a reason.

Do not invent image paths.

Verify assets exist before referencing them.

## Step 11: Content vs. Component Logic

Keep presentation logic in components and respect the repository's current content structure.

The project currently stores marketing content directly in components/pages.

Do not introduce a CMS, database, or new content-management abstraction unless explicitly requested.

For service-related changes, remember that content exists in two places:

```text
components/Services.tsx
    ↓
Homepage highlighted services

app/services/page.tsx
    ↓
Full services catalogue
```

Check both when a service change could affect both views.

## Step 12: Accessibility

New components should include appropriate accessibility behavior.

Pay particular attention to:

- semantic HTML
- heading hierarchy
- button vs. link usage
- keyboard interaction
- visible focus states
- meaningful labels
- alt text for meaningful images
- sufficient color contrast
- modal keyboard behavior

Do not rely on visual styling alone to communicate meaning.

## Step 13: Avoid Unnecessary Abstraction

The current site is relatively small.

Do not create:

- generic component factories
- large design-system abstractions
- unnecessary hooks
- configuration layers
- data-management systems

unless the task genuinely requires them.

A simple component that follows existing patterns is preferable to a generalized abstraction that adds complexity.

## Component Creation Checklist

Before considering a new component complete, verify:

- [ ] Existing related components were inspected.
- [ ] Existing Fiysam colors/tokens are reused.
- [ ] Existing typography conventions are followed.
- [ ] Existing button styles are reused where appropriate.
- [ ] Lucide icons are used instead of introducing another icon library.
- [ ] Animation follows existing Framer Motion patterns.
- [ ] Client-side behavior is only used where necessary.
- [ ] The component is responsive.
- [ ] Interactive elements are accessible.
- [ ] Existing content/data sources were checked.
- [ ] No unnecessary dependencies or abstractions were introduced.

## Core Principle

The goal is not merely to produce a technically correct React component.

The goal is to produce a component that looks, behaves, and is structured as though it naturally belongs in the existing Fiysam website.
