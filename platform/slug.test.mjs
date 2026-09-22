import assert from "node:assert/strict";
import test from "node:test";
import { validateSlug } from "./slug.mjs";

test("accepts a lowercase hyphenated slug", () => {
  assert.deepEqual(validateSlug("north-side-roofing"), {
    ok: true,
    slug: "north-side-roofing",
  });
});

test("rejects empty, uppercase, and punctuated slugs", () => {
  assert.equal(validateSlug("").ok, false);
  assert.equal(validateSlug("North Side").reason, "invalid");
  assert.equal(validateSlug("roofing/admin").reason, "invalid");
  assert.equal(validateSlug("-roofing").reason, "invalid");
});

test("rejects reserved paths", () => {
  assert.equal(validateSlug("admin").reason, "reserved");
  assert.equal(validateSlug("api").reason, "reserved");
});
