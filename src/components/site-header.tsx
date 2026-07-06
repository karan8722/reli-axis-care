import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/reliaxis-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/future", label: "Future Solutions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-x flex h-8 items-center justify-between">
          <span className="hidden sm:inline opacity-80">Serving Pune • Chakan • PCMC — 24×7 Breakdown Support</span>
          <a href="tel:+919999999999" className="inline-flex items-center gap-1.5 font-medium hover:text-secondary transition">
            <Phone className="h-3.5 w-3.5" /> +91 99999 99999
          </a>
        </div>
      </div>
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="ReliAxis Technologies" className="h-12 w-auto" width={160} height={48} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent transition"
              activeProps={{ className: "px-4 py-2 rounded-md text-sm font-semibold text-primary bg-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/book" className="inline-flex items-center rounded-md gradient-orange px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-95 transition">
            Book Service
          </Link>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-accent">
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md gradient-orange px-5 py-2.5 text-sm font-semibold text-secondary-foreground">
              Book Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
