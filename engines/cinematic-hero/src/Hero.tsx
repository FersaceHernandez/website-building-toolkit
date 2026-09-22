import { useEffect } from "react";
import type { HeroBrand } from "./heroConfig";

// Splits a headline on *asterisks* and renders the wrapped words in the
// muted accent color. e.g. "Where *dreams* rise" -> "dreams" is muted.
function Headline({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="not-italic text-muted-foreground">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Hero({ brand }: { brand: HeroBrand }) {
  // Push the brand's theme into CSS variables at runtime so the same
  // component can be any palette. This is the swappable-identity core.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background", brand.theme.background);
    root.style.setProperty("--foreground", brand.theme.foreground);
    root.style.setProperty("--muted-foreground", brand.theme.mutedForeground);
  }, [brand]);

  const displayFont = { fontFamily: "'Instrument Serif', serif" };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video layer. Empty videoUrl keeps the layout; supply a hosted mp4 in heroConfig. */}
      {brand.videoUrl ? (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={brand.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : null}

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div
          className="text-3xl tracking-tight text-foreground"
          style={displayFont}
        >
          {brand.name}
          {brand.registered && <sup className="text-xs">®</sup>}
        </div>

        <div className="hidden md:flex items-center gap-8">
          {brand.nav.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-sm transition-colors hover:text-foreground ${
                i === 0 ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground">
          {brand.cta}
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl text-foreground"
          style={{ ...displayFont, lineHeight: 0.95, letterSpacing: "-2.46px" }}
        >
          <Headline text={brand.headline} />
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          {brand.subtext}
        </p>

        <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12">
          {brand.cta}
        </button>
      </section>
    </div>
  );
}
