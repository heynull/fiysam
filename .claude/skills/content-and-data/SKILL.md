# Content and Data Skill

Use this skill when creating, modifying, reviewing, or reorganizing marketing content and content data in the Fiysam corporate website.

## Purpose

Help locate the correct source of truth for Fiysam's services, projects, testimonials, statistics, and other marketing content.

The current application does not use a CMS or database for marketing content. Content is primarily stored directly in React components and pages.

Do not introduce a new content-management architecture unless explicitly requested.

## Current Content Model

The main content categories include:

- Services
- Projects
- Testimonials
- Statistics
- Process information
- Company/about content
- Contact information

Before changing content, identify where that content is currently defined.

## Services

Services are intentionally represented at two levels.

### Homepage Services

```text
components/Services.tsx
```

This component contains the highlighted services presented on the homepage.

### Full Services Catalogue

```text
app/services/page.tsx
```

This page contains the larger services catalogue with:

- service data
- search
- filtering
- modal interactions

These two sources are not currently a shared canonical data module.

### Important Rule

When a task asks to:

- add a service
- remove a service
- rename a service
- change a service description
- change service metadata
- update service imagery or icons

inspect both:

```text
components/Services.tsx
app/services/page.tsx
```

Determine whether the requested change applies to the homepage, the full catalogue, or both.

Do not assume changing one automatically updates the other.

## Projects

Project content is primarily associated with:

```text
components/Projects.tsx
```

The projects page composes the shared projects component:

```text
app/projects/page.tsx
```

Before changing a project:

1. Inspect `components/Projects.tsx`.
2. Check how `/projects` consumes it.
3. Check whether the homepage also displays the same project data.
4. Preserve the existing data shape unless the task requires a change.

Do not create a second project data source unnecessarily.

## Testimonials

Testimonials are currently defined in the component that displays them.

Inspect:

```text
components/Testimonials.tsx
```

before modifying testimonial content or presentation.

Keep testimonial content separate from component behavior unless the repository structure already does otherwise.

## Statistics

Statistics are associated with:

```text
components/StatsBar.tsx
```

When changing numerical claims, verify the existing source and surrounding copy.

Do not invent business metrics, project numbers, capacity figures, customer counts, or other factual claims.

If the requested information is not present in the repository or supplied by the user, flag the missing information rather than fabricating it.

## Company and About Content

The about page is:

```text
app/about/page.tsx
```

It reuses several shared sections, including:

- `WhyUs`
- `StatsBar`
- `Testimonials`
- `CTABand`

Before changing about-page content, determine whether the content belongs to the page itself or is supplied by one of these shared components.

A change to a shared component may affect the homepage and other routes.

## Contact Content

The contact page is:

```text
app/contact/page.tsx
```

The contact functionality also involves:

```text
components/Contact.tsx
app/api/contact/route.ts
lib/email.ts
```

Separate:

- presentation/content changes
- form behavior
- validation
- email delivery

Do not modify server-side email behavior when only copy or presentation needs to change.

## Content Duplication

Some content is intentionally duplicated or represented at different levels.

The clearest example is services:

```text
components/Services.tsx
        ↓
homepage highlighted services

app/services/page.tsx
        ↓
full services catalogue
```

Do not automatically refactor duplicated content into a shared data file.

First determine whether the duplication represents intentionally different presentation tiers.

If a shared data source would genuinely reduce maintenance without changing behavior, propose the refactor before implementing it unless the task explicitly asks for it.

## Content Editing Principles

When editing existing copy:

- Preserve the intended meaning.
- Match the existing tone.
- Avoid unnecessary rewrites.
- Keep terminology consistent across pages.
- Do not invent claims.
- Do not change factual business information without a supplied basis.
- Preserve formatting and responsive behavior.

For marketing copy, prioritize clarity and consistency with the existing Fiysam brand.

## Adding New Content

Before adding new content:

1. Search for related existing content.
2. Identify the component/page that owns the content.
3. Check whether another route displays the same concept.
4. Determine whether the content should appear in one place or multiple places.
5. Follow the existing data shape.

For example, when adding a new service, inspect both service representations before deciding where the new service belongs.

## Content and UI Separation

Do not mix unrelated structural refactors into a content-only task.

If a user asks to change:

```text
"Solar Infrastructure"
```

to:

```text
"Solar Energy Infrastructure"
```

do not simultaneously reorganize the component architecture unless there is a clear reason or the task requests it.

Keep changes focused.

## Source of Truth

For content tasks, use this order of authority:

1. The user's explicit current instruction.
2. Existing repository implementation.
3. Existing project documentation.
4. Other supplied project context.

If two sources disagree, identify the discrepancy rather than silently choosing one.

## Content Review Checklist

Before completing a content-related change:

- [ ] The correct component/page was identified.
- [ ] Related routes were checked.
- [ ] Duplicated content locations were checked.
- [ ] Existing terminology was preserved.
- [ ] No unsupported factual claims were introduced.
- [ ] Data shape remains compatible with the consuming component.
- [ ] Content-only requests did not receive unnecessary architectural changes.
- [ ] Responsive presentation was considered where content length changed.

## Core Principle

Treat content as product data even though it currently lives inside React components.

Know where the content lives, understand whether it is intentionally duplicated, and never fabricate business facts simply to fill a missing field.
