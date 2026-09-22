# Website build checklist

## Before coding

- Identify the audience, offer, primary conversion, and required pages.
- Define the brand palette, type scale, spacing, and image direction.
- Decide whether the site is static, server-rendered, or an application.
- List integrations and keep credentials outside the repository.

## During implementation

- Build mobile-first responsive layouts.
- Use semantic landmarks, labels, keyboard focus states, and meaningful alt text.
- Keep the primary call to action visible without becoming intrusive.
- Optimize images and avoid unnecessary render-blocking dependencies.
- Validate forms server-side and return actionable errors.

## Before release

- Test at 375px, 768px, and 1440px widths.
- Check navigation, forms, 404 behavior, and external links.
- Run an accessibility pass and inspect keyboard navigation.
- Check console and network errors.
- Verify metadata, canonical URL, sitemap, robots policy, and social previews.
- Run a secret scan and confirm client/private data is excluded.
- Perform a deployment dry run before publishing.
