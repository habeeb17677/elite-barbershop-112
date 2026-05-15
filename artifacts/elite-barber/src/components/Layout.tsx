import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book" },
  { to: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-elegant" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center font-bold text-sm" style={{ color: "var(--primary-foreground)" }}>
              E
            </div>
            <span className="text-lg md:text-xl tracking-wide font-semibold" style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}>
              Elite <span className="text-gold">Barbershop</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${isActive(l.to) ? "text-gold" : "text-muted-foreground hover:text-gold"}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-gold transition-all group-hover:w-full" />
              </Link>
            ))}
            <a
              href="tel:+15393672000"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-shadow text-sm"
              style={{ color: "var(--primary-foreground)" }}
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </nav>

          <button
            className="lg:hidden"
            style={{ color: "var(--foreground)" }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden glass border-t animate-fade-in" style={{ borderColor: "var(--border)" }}>
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-3 rounded-lg transition-colors uppercase tracking-widest text-sm ${isActive(l.to) ? "text-gold bg-secondary" : "text-foreground hover:bg-secondary hover:text-gold"}`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+15393672000"
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold font-semibold"
                style={{ color: "var(--primary-foreground)" }}
              >
                <Phone className="w-4 h-4" /> +1 539-367-2000
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <footer className="border-t mt-20" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center font-bold text-sm" style={{ color: "var(--primary-foreground)" }}>
                E
              </div>
              <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>
                Elite <span className="text-gold">Barbershop</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium grooming experience. Where tradition meets modern style.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:scale-110 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Visit</h4>
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>5635 S Mingo Rd Unit K<br />Tulsa, OK 74146</span>
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Contact</h4>
            <a
              href="tel:+15393672000"
              className="text-sm text-muted-foreground flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" /> +1 539-367-2000
            </a>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Hours</h4>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" /> Open Daily 8AM – 8PM
            </p>
          </div>
        </div>
        <div className="border-t py-5 text-center text-xs text-muted-foreground" style={{ borderColor: "var(--border)" }}>
          © {new Date().getFullYear()} Elite Barbershop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
