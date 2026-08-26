# Fiysam Energy — Codex Instructions

## Working style

- Inspect the existing implementation before making changes.
- Preserve the existing architecture and established conventions.
- Prefer the smallest appropriate change that solves the task.
- Do not modify unrelated files or features.
- Do not introduce dependencies unless genuinely necessary.
- Reuse existing components, utilities, design tokens, and patterns where appropriate.
- Do not commit or push changes unless explicitly asked.

## Design

- Preserve Fiysam Energy's existing visual identity.
- The corporate site uses a dark, industrial aesthetic with amber/gold energy accents.
- Maintain existing typography, spacing, component patterns, and visual hierarchy unless the task explicitly requests a redesign.
- New UI should feel native to the existing site rather than looking like an unrelated template.
- Responsive behavior is required across mobile, tablet, and desktop.
- Prioritize accessibility, readability, and usable interaction states.

## Before implementation

For non-trivial tasks:

1. Inspect the relevant files and existing implementation.
2. Identify the smallest set of files that need to change.
3. Briefly explain the proposed approach.
4. Ask for clarification if an important design or technical decision is ambiguous.

## After implementation

- Run the relevant lint, type-check, build, or test commands available in the repository.
- Review the final diff for unrelated changes.
- Report:
  - files changed
  - what changed
  - checks performed
  - any remaining concerns

## Safety

- Never expose secrets or environment variables.
- Never modify `.env` files unless explicitly instructed.
- Do not make destructive changes.
- Do not commit or push unless explicitly instructed.