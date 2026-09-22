# Site-preview platform architecture

This is a sanitized implementation note for a local-business preview workflow.

## Goals

- Create a preview from a slug and HTML payload.
- Make each preview available for a fixed lifetime, such as 72 hours.
- Show a live expiry banner to the visitor.
- Allow an authenticated operator to extend or delete previews.
- Automatically remove expired objects from object storage.

## Suggested components

- Static site hosting for the public landing page.
- An edge function for preview routing and API endpoints.
- D1 or another relational store for metadata and expiry state.
- R2 or another object store for rendered HTML.
- A scheduled worker for cleanup.
- Secret-manager bindings for operator authentication, email, and payment providers.

## Safety boundaries

- Validate slugs against a strict lowercase, hyphenated pattern.
- Reserve paths used by static files and API/admin routes.
- Require authentication on every operator endpoint.
- Do not put tokens in URLs, source files, or client-side JavaScript.
- Do not store raw payment credentials or card data.
- Return generic errors to visitors and log operational detail privately.
- Use `no-store` for dynamic preview responses unless cache invalidation is explicit.

## Lifecycle

1. The builder generates a self-contained HTML preview.
2. The authenticated API validates the slug and writes metadata plus the HTML object.
3. The public route checks status and expiry, then injects a small countdown banner at response time.
4. The operator can extend or delete a preview through the protected admin surface.
5. The scheduled worker deletes expired objects and marks metadata expired.

## Verification checklist

- Missing or invalid operator credentials return `401`.
- Reserved slugs are rejected.
- Expired previews never return the live HTML.
- Object-storage failures produce a safe `503` response.
- Cleanup is idempotent and continues after an individual row fails.
- No secrets or customer records are present in source control.
