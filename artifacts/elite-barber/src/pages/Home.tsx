import { Link } from "react-router-dom";
import { Phone, Calendar, Clock, Star, Scissors, ArrowRight, Award, Users } from "lucide-react";
import { SERVICES } from "@/lib/services";
import heroImg from "@/assets/hero-barbershop.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export default function Home() {
  const featured = SERVICES.slice(0, 6);
  const reviews = [
    { name: "Marcus T.", text: "Best fade I've ever had. The atmosphere is unmatched.", rating: 5 },
    { name: "James R.", text: "Old-school straight razor shave done right. Highly recommend.", rating: 5 },
    { name: "Daniel K.", text: "Walked in, got treated like a king. Coming back every time.", rating: 5 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Elite Barbershop interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--background) 0%, rgba(26,26,31,0.8) 60%, rgba(26,26,31,0.4) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 50%, rgba(26,26,31,0.4) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-gold">Open Today 8AM – 8PM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}>
              Crafted Cuts.<br />
              <span className="gradient-gold">Timeless Style.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              Tulsa's premier destination for precision haircuts, traditional shaves and master grooming. Where every detail is intentional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-all hover:scale-105"
                style={{ color: "var(--primary-foreground)" }}
              >
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a
                href="tel:+15393672000"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass font-semibold transition-all"
                style={{ color: "var(--foreground)" }}
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "16+", l: "Services" },
                { v: "5★", l: "Rated" },
                { v: "Daily", l: "8AM–8PM" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-gold" style={{ fontFamily: "var(--font-display), serif" }}>{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-8 border-y" style={{ background: "rgba(34,34,42,0.4)", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {[
            { Icon: Clock, title: "Open Daily", text: "8:00 AM – 8:00 PM" },
            { Icon: Scissors, title: "Walk-Ins Welcome", text: "No appointment needed" },
            { Icon: Award, title: "Master Barbers", text: "Expert craftsmanship" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>{title}</div>
                <div className="text-sm text-muted-foreground">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold">Our Craft</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Featured <span className="gradient-gold">Services</span></h2>
            <p className="mt-4 text-muted-foreground">Precision grooming services delivered by master barbers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((s) => (
              <div key={s.name} className="group p-6 rounded-2xl glass hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-gold mb-4 transition-all group-hover:bg-gradient-gold" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Scissors className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gold font-semibold">{s.price}</span>
                  <Link to="/booking" className="text-sm text-muted-foreground hover:text-gold inline-flex items-center gap-1 transition-colors">
                    Book <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28" style={{ background: "rgba(34,34,42,0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold">Showcase</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">From The <span className="gradient-gold">Chair</span></h2>
            </div>
            <Link to="/gallery" className="text-gold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[g1, g2, g3, g4].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl group">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold">Word On The Street</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Client <span className="gradient-gold">Reviews</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="p-7 rounded-2xl glass">
                <div className="flex gap-1 text-gold mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="italic" style={{ color: "rgba(244,240,232,0.9)" }}>"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-semibold" style={{ color: "var(--primary-foreground)" }}>
                    {r.name[0]}
                  </div>
                  <div className="text-sm font-semibold">{r.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-gold opacity-5" />
            <div className="relative">
              <Users className="w-12 h-12 text-gold mx-auto mb-5" />
              <h2 className="text-3xl md:text-5xl font-bold">Ready For Your <span className="gradient-gold">Best Cut?</span></h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Book online in minutes or stop by — walk-ins always welcome.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-all"
                  style={{ color: "var(--primary-foreground)" }}
                >
                  <Calendar className="w-5 h-5" /> Book Appointment
                </Link>
                <a
                  href="tel:+15393672000"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" /> +1 539-367-2000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
