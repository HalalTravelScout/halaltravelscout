import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/hts-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/itineraries", label: "Sample Itineraries" },
  { to: "/about", label: "About" },
  { to: "/media-kit", label: "Media Kit" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/85 backdrop-blur sticky top-0 z-40">
        <div className="container-prose flex items-center justify-between py-4">
          <Link
            to="/"
            aria-label="HalalTravelScout — go to homepage"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img src={logoAsset.url} alt="" aria-hidden="true" className="h-11 w-11 object-contain" width={44} height={44} />
            <span className="wordmark text-xl md:text-2xl leading-none">HalalTravelScout</span>
          </Link>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label={open ? "Close main menu" : "Open main menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-border"
            onClick={() => setOpen((o) => !o)}
          >
            <div aria-hidden="true" className="flex flex-col gap-1">
              <span className="block w-4 h-0.5 bg-foreground" />
              <span className="block w-4 h-0.5 bg-foreground" />
              <span className="block w-4 h-0.5 bg-foreground" />
            </div>
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-border">
            <nav aria-label="Mobile navigation" className="container-prose flex flex-col py-3 gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-foreground"
                  activeProps={{ className: "text-primary font-medium" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border/70 bg-secondary/40">
        <div className="container-prose py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-foreground">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" aria-hidden="true" className="h-10 w-10 object-contain" width={40} height={40} />
            <div>
              <div className="wordmark text-lg leading-none">HalalTravelScout</div>
              <p className="mt-1 text-xs tracking-widest uppercase text-accent">Travel · Discover · Verify</p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <a
              href="https://instagram.com/halaltravelscout"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              @halaltravelscout on Instagram
            </a>
            <p>© {new Date().getFullYear()} HalalTravelScout. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
