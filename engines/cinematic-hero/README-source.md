# Cinematic Hero Engine — HustleOS Asset

One configurable React component that produces a fullscreen video-background
hero with glassmorphic nav and cinematic typography. Swap a config object,
get a new branded landing page in ~10 lines. Built for reuse across clients.

## Run it
    npm install
    npm run dev      # local preview
    npm run build    # production build -> dist/

## How to spin up a new client (the whole point)

Everything that defines a brand lives in src/heroConfig.ts. To make a new
landing page, add one object to BRANDS:

    myClient: {
      name: "Client Name",
      registered: true,
      videoUrl: "https://your-cdn.example/background.mp4",
      nav: ["Home", "Work", "About", "Contact"],
      cta: "Get Started",
      headline: "Their big *accent-word* headline.",   // *wrap* = muted accent
      subtext: "Supporting paragraph under the headline.",
      theme: {
        background: "201 100% 13%",   // HSL triplet, no hsl() wrapper
        foreground: "0 0% 100%",
        mutedForeground: "240 4% 66%",
      },
    },

Then set ACTIVE_BRAND = "myClient" and you're done. Three presets ship already:
velorah (dark navy), aethera (light), and blackLemonade —
proof the same engine handles totally different identities.

Preset `videoUrl` values are empty on purpose. Point each one at a video you
host yourself. Do not commit account-scoped CDN links or private media.

## The anatomy (your reverse-engineering reference)

Every cinematic hero like this is the same six layers. Name all six and you can
rebuild any one you see in the wild:

1. Fonts - display face (Instrument Serif) + body face (Inter). One characterful
   serif used big, one clean sans for everything else.
2. Color - three variables do 90% of the work: background, foreground
   (headlines/logo), muted-foreground (body + accent words). HSL triplets so
   they drop straight into CSS variables.
3. Video layer - absolute inset-0 object-cover z-0, autoplay/loop/muted/
   playsInline. The video is the entire visual depth; no decorative blobs.
4. Glass - the .liquid-glass class: near-transparent fill + backdrop blur + an
   inset gradient border faked with a masked ::before. That masked border is
   what reads as premium glass instead of a flat translucent box.
5. Motion - one fade-rise keyframe (opacity 0->1, translateY 24px->0), reused
   with three stagger delays (0s / 0.2s / 0.4s) on headline -> subtext -> button.
   One animation, staggered, not five different ones.
6. Layout / z-index - video (z-0) under nav + hero (z-10), hero vertically
   centered. The stacking order IS the structure.

The reverse-engineering move: open any hero you like, inspect it, and read those
six layers off the element - exact fonts, exact hex, exact spacing, exact
animation timing. You're not inventing; you're transcribing. Precision is the
whole skill.

## What's deliberately NOT here
No radial-gradient blobs, no decorative overlays, no second accent color. The
video carries the depth, the type carries the personality, the glass carries the
polish. Restraint is the look.

## Accessibility floor
Keyboard-focusable nav + buttons, prefers-reduced-motion respected, semantic
nav/h1. Ship-ready baseline.
