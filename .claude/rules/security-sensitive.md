# Security-Sensitive Rules

Apply these rules whenever working on contact forms, API routes, email delivery, environment variables, deployment configuration, or other security-sensitive functionality in the Fiysam corporate website.

## Secrets and Environment Variables

Never hardcode secrets, credentials, API keys, SMTP passwords, or private tokens in source code.

The contact/email system uses environment variables including:

```text
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASSWORD
CONTACT_EMAIL
```

Keep these values server-side.

Never expose:

```text
SMTP_PASSWORD
SMTP_USER
SMTP_HOST
```

or other server-only credentials through client-side code.

Do not prefix server-only secrets with `NEXT_PUBLIC_`.

## Contact API

The contact API is:

```text
POST /api/contact
```

Implementation:

```text
app/api/contact/route.ts
```

It sends email through:

```text
lib/email.ts
```

When modifying this flow:

- Validate incoming data.
- Validate email addresses appropriately.
- Do not trust client-side validation alone.
- Do not expose SMTP credentials.
- Do not return sensitive server-side errors to the client.
- Do not log credentials or secret environment-variable values.

## Error Handling

Do not return raw internal exceptions, stack traces, credentials, SMTP configuration, or implementation details to users.

Client-facing errors should contain useful but appropriately limited information.

Server-side logs may contain diagnostic information, but must not contain:

- passwords
- API keys
- authentication tokens
- SMTP credentials
- other secrets

## Input Handling

Treat all data submitted through the contact form as untrusted input.

Server-side validation must remain in place even if the frontend validates the same fields.

Do not assume:

- email format is valid because the browser accepted it
- required fields are present because the UI requires them
- request content comes only from the site's own frontend

## Email Security

When working with Nodemailer or SMTP:

- Keep SMTP credentials server-side.
- Do not construct email headers from untrusted input without appropriate validation.
- Do not allow user input to control arbitrary SMTP configuration.
- Do not expose SMTP errors directly to the client.
- Preserve the existing email-sending architecture unless a change is explicitly required.

## API Security

When modifying an API route:

1. Validate request input.
2. Keep server-only operations on the server.
3. Return appropriate HTTP status codes.
4. Avoid leaking implementation details.
5. Consider abuse and spam scenarios.
6. Do not add sensitive information to response payloads.

The current site has no authentication system, so do not invent authenticated access patterns for the existing public contact API.

## Spam and Abuse

The current contact endpoint does not have documented rate limiting, CAPTCHA, or persistent submission storage.

Do not assume these protections exist.

If changing the contact endpoint for production hardening, explicitly evaluate:

- rate limiting
- spam protection
- request size limits
- abuse prevention
- logging/monitoring

Do not silently claim that these controls already exist.

## Client/Server Boundary

Never move server-only operations into client components.

Client components must not directly access:

- SMTP credentials
- private environment variables
- server-only filesystem APIs
- server-only email functionality

If a UI needs server-side behavior, use an appropriate server-side boundary such as the existing API route.

## Environment Files

Do not commit local environment files containing secrets.

Do not place real credentials in:

- `.env`
- `.env.local`
- source files
- Markdown documentation
- examples
- screenshots
- test fixtures

If an environment variable example is needed, use placeholder values.

## Dependency Changes

Before adding a security-related dependency:

1. Check whether the repository already provides the capability.
2. Check the existing package configuration.
3. Understand why the dependency is needed.
4. Keep the dependency focused on the actual requirement.

Do not add authentication, security middleware, or external services simply because they are common in other applications.

## Security Review Checklist

Before completing a security-sensitive change:

- [ ] No secrets are hardcoded.
- [ ] Server-only environment variables remain server-side.
- [ ] User input is validated on the server.
- [ ] Sensitive errors are not exposed to users.
- [ ] Logs do not contain credentials or tokens.
- [ ] The contact API's public nature is understood.
- [ ] New abuse risks have been considered.
- [ ] Existing security behavior has not been accidentally weakened.
- [ ] New dependencies are justified.
- [ ] No unsupported security controls are claimed to exist.

## Important Repository Context

The current Fiysam site:

- has no authentication system
- has no protected routes
- has one contact API route
- uses Nodemailer for email delivery
- does not currently document rate limiting or CAPTCHA protection
- has no database or persistent contact-submission storage

These are current repository characteristics, not recommendations.

Do not represent a security control as implemented unless the repository actually contains it.

## Core Principle

Security decisions must be based on the actual implementation.

Protect secrets, validate untrusted input on the server, preserve server/client boundaries, avoid information leakage, and explicitly identify missing protections rather than assuming they exist.
