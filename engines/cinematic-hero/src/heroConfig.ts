// ─────────────────────────────────────────────────────────────
// HERO ENGINE — Brand Config
// One component, infinite brands. Drop a new object in BRANDS and
// you've got a new cinematic landing page. This is the HustleOS asset.
// ─────────────────────────────────────────────────────────────

export interface HeroBrand {
  /** Brand name shown in the logo (® is appended automatically) */
  name: string;
  /** Show the registered-trademark superscript after the name */
  registered?: boolean;
  /** Background video URL (mp4). autoplay + loop + muted. */
  videoUrl: string;
  /** Nav links. First one renders as "active". */
  nav: string[];
  /** Big call-to-action label, used in nav and hero */
  cta: string;
  /** Headline. Wrap words in *asterisks* to render them in the muted accent color. */
  headline: string;
  /** Supporting paragraph under the headline */
  subtext: string;
  /** HSL triplets (no hsl() wrapper) so they slot into CSS variables */
  theme: {
    background: string;       // e.g. "201 100% 13%"
    foreground: string;       // e.g. "0 0% 100%"
    mutedForeground: string;  // e.g. "240 4% 66%"
  };
}

// ── PRESETS ──────────────────────────────────────────────────
// Each of these is a client/brand. Swapping between them is the
// whole point: same engine, different identity in ~10 lines.

export const BRANDS: Record<string, HeroBrand> = {
  velorah: {
    name: "Velorah",
    registered: true,
    videoUrl: "",
    nav: ["Home", "Studio", "About", "Journal", "Reach Us"],
    cta: "Begin Journey",
    headline: "Where *dreams* rise *through the silence.*",
    subtext:
      "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.",
    theme: {
      background: "201 100% 13%", // deep navy
      foreground: "0 0% 100%",
      mutedForeground: "240 4% 66%",
    },
  },

  aethera: {
    name: "Aethera",
    registered: true,
    videoUrl: "",
    nav: ["Home", "Studio", "About", "Journal", "Reach Us"],
    cta: "Begin Journey",
    headline: "Beyond *silence,* we build *the eternal.*",
    subtext:
      "Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.",
    theme: {
      background: "0 0% 100%", // white (light variant)
      foreground: "0 0% 0%",
      mutedForeground: "0 0% 44%",
    },
  },

  // EXAMPLE — your own brand plugged straight into the engine.
  // Swap the videoUrl for a real charcoal-pour / water clip and ship.
  blackLemonade: {
    name: "Black Lemonade",
    registered: false,
    videoUrl: "",
    nav: ["Home", "The Ritual", "Science", "Journal", "Pre-Order"],
    cta: "Join the Waitlist",
    headline: "Your *morning ritual,* reclaimed from *the plastic age.*",
    subtext:
      "Activated charcoal lemonade and a daily detox capsule, built for people who read the label. Death to plastics. Start the morning clean.",
    theme: {
      background: "0 0% 4%", // near-black
      foreground: "0 0% 100%",
      mutedForeground: "48 20% 70%", // warm muted gold
    },
  },
};

// Change this one line to switch which brand renders.
export const ACTIVE_BRAND: keyof typeof BRANDS = "velorah";
