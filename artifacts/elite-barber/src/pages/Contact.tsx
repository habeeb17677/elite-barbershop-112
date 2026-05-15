import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const ADDRESS = "5635 S Mingo Rd Unit K, Tulsa, OK 74146";
const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function Contact() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
            <span className="text-xs uppercase tracking-widest text-gold">Get In Touch</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold">
              Visit <span className="gradient-gold">The Shop</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Stop by, call ahead, or get directions — we're easy to find.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            <a
              href="tel:+15393672000"
              className="group p-7 rounded-2xl glass hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-gold mb-4 transition-all group-hover:bg-gradient-gold"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <Phone className="w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Call Us</h3>
              <p className="mt-2 text-xl font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>
                +1 539-367-2000
              </p>
            </a>
            <div className="p-7 rounded-2xl glass">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-gold mb-4"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Address</h3>
              <p className="mt-2 text-lg font-semibold leading-snug" style={{ fontFamily: "var(--font-display), serif" }}>
                5635 S Mingo Rd Unit K<br />Tulsa, OK 74146
              </p>
            </div>
            <div className="p-7 rounded-2xl glass">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-gold mb-4"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Business Hours</h3>
              <p className="mt-2 text-lg font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>
                Open Daily<br />8:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden glass shadow-elegant">
            <div className="w-full" style={{ aspectRatio: "21/9" }}>
              <iframe
                title="Elite Barbershop location"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> {ADDRESS}
              </div>
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-all"
                style={{ color: "var(--primary-foreground)" }}
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
