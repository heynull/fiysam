# Debug and Test Skill

Use this skill when diagnosing bugs, validating changes, or deciding how to test changes in the Fiysam corporate website.

## Purpose

Debug using the actual repository implementation and validate changes with the tools and scripts that the project currently provides.

Do not assume a testing framework or infrastructure exists unless the repository confirms it.

## Current Testing State

The repository currently does not have an automated testing framework configured.

Do not assume the project has:

- Jest
- Vitest
- Playwright
- Cypress
- React Testing Library

unless they are added to the repository later.

Before introducing a testing dependency, inspect `package.json` and the existing project configuration.

## Step 1: Reproduce the Problem

Before changing code:

1. Identify the affected route or component.
2. Determine the expected behavior.
3. Determine the actual behavior.
4. Reproduce the issue when possible.
5. Record the smallest set of steps that demonstrates the problem.

Do not immediately rewrite the affected component.

## Step 2: Trace the Implementation

Follow the behavior through the application.

For UI problems, generally inspect:

```text
route
  ↓
page/component
  ↓
shared component
  ↓
styles / animation
  ↓
data
```

For contact/API problems, inspect:

```text
form
  ↓
app/api/contact/route.ts
  ↓
validation
  ↓
lib/email.ts
  ↓
SMTP
```

Use the repository as the source of truth.

## Step 3: Check the Browser Console and Terminal

For frontend problems, inspect:

- browser console errors
- browser network requests
- rendered output
- hydration warnings
- client/server component errors
- missing assets
- CSS issues

For development/build problems, inspect:

- terminal output
- TypeScript errors
- Next.js compilation errors
- dependency errors
- environment-variable errors

Do not suppress an error simply to make the application appear to work.

## Step 4: Check TypeScript

The project uses strict TypeScript.

After changes, use the repository's available TypeScript/build validation.

Inspect:

```text
package.json
tsconfig.json
```

before deciding which command to run.

Do not assume a particular package manager or script if it is not present in the repository.

## Step 5: Check the Production Build

For changes that affect:

- routing
- configuration
- dependencies
- server-side code
- API routes
- major components

prefer validating the production build when practical.

Use the project's actual package scripts rather than inventing commands.

## Step 6: Debug Client/Server Boundaries

The project uses the Next.js App Router.

When an error involves:

- hooks
- browser APIs
- event handlers
- Framer Motion
- client state

check whether the component needs:

```tsx
'use client'
```

When a component does not need client-side behavior, do not add `'use client'` merely to silence an error.

Understand the reason for the client/server boundary before changing it.

## Step 7: Debug Styling Problems

For visual bugs:

1. Inspect the component's Tailwind classes.
2. Inspect `app/globals.css`.
3. Check existing theme tokens.
4. Compare the component with nearby working components.
5. Check responsive breakpoints.
6. Check whether a global class is overriding the expected style.

Prefer fixing the existing style pattern over adding increasingly specific overrides.

## Step 8: Debug Animation Problems

Framer Motion is used throughout the site.

When animation breaks:

- inspect the component's client/server boundary
- inspect the motion props
- compare with nearby components
- check whether the element is being conditionally rendered
- check whether layout changes interfere with the animation

Do not replace Framer Motion with another animation library to solve an isolated problem.

## Step 9: Debug API and Contact Form Problems

The current API route is:

```text
app/api/contact/route.ts
```

When debugging contact submissions, inspect:

1. Form submission.
2. Request payload.
3. API validation.
4. Response status.
5. `lib/email.ts`.
6. SMTP environment variables.
7. Server-side errors.

Expected environment variables include:

```text
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASSWORD
CONTACT_EMAIL
```

Never print secret values while debugging.

If logging is necessary, log safe metadata rather than credentials or tokens.

## Step 10: Validate the Fix

After making a fix, validate the behavior that originally failed.

Do not stop at "the code looks correct."

At minimum, when practical:

- run the relevant development/build validation
- inspect the affected route
- reproduce the original scenario
- check the browser console
- check for TypeScript/compilation errors

For responsive UI changes, inspect both mobile and desktop layouts.

## When No Automated Test Exists

Because the current repository has no automated test suite, use layered validation:

```text
Static inspection
      ↓
TypeScript / build validation
      ↓
Local development
      ↓
Browser verification
      ↓
Original bug reproduction
```

If a regression is likely to recur, recommend adding an appropriate automated test rather than pretending an existing test suite covers it.

## Avoid Blind Fixes

Do not:

- rewrite large components without evidence
- suppress TypeScript errors with `any`
- add `eslint-disable` merely to silence warnings
- remove functionality to hide a bug
- catch errors without handling them
- add dependencies without checking whether an existing solution exists
- change unrelated components during a focused bug fix

## Debugging Report Format

When explaining a bug, use a concise structure:

### Problem

What is actually failing.

### Root Cause

The specific implementation detail causing the failure.

### Fix

The smallest appropriate change.

### Validation

How the fix was verified.

If the root cause is uncertain, say so instead of presenting a hypothesis as fact.

## Core Principle

Debug from evidence.

Trace the actual implementation, reproduce the problem, make the smallest appropriate change, and verify that the original failure is resolved.
