const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const RESERVED_SLUGS = new Set([
  "admin",
  "api",
  "assets",
  "functions",
  "img",
]);

export function validateSlug(slug, reserved = RESERVED_SLUGS) {
  if (typeof slug !== "string" || slug.length < 1 || slug.length > 80) {
    return { ok: false, reason: "invalid" };
  }
  if (!SLUG_PATTERN.test(slug)) {
    return { ok: false, reason: "invalid" };
  }
  if (reserved.has(slug)) {
    return { ok: false, reason: "reserved" };
  }
  return { ok: true, slug };
}
