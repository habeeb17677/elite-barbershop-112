import { Link } from "react-router-dom";
import { Award, Sparkles, Heart, Shield, Accessibility, Coffee, Baby, CreditCard } from "lucide-react";
import g3 from "@/assets/gallery-3.jpg";

export default function About() {
  const values = [
    { Icon: Award, title: "Master Craft", text: "Years of training, sharpened daily." },
    { Icon: Sparkles, title: "Premium Experience", text: "Luxury atmosphere, every visit." },
    { Icon: Heart, title: "Customer First", text: "Your comfort is our priority." },
    { Icon: Shield, title: "Hygiene Standards", text: "Sanitized tools, fresh capes." },
  ];
  const amenities = [
    { Icon: Accessibility, label: "Wheelchair Accessible Entrance & Parking" },
    { Icon: Coffee, label: "Complimentary Beverages" },
    { Icon: Baby, label: "Good For Kids" },
    { Icon: CreditCard, label: "NFC Mobile Payment" },
  ];

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="text-xs uppercase tracking-widest text-gold">Our Story</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold">
              About <span className="gradient-gold">Elite Barbershop</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Elite Barbershop, we blend old-school barbering tradition with modern style. Our master barbers take pride in every cut, every shave, every detail — delivering a grooming experience that's as refined as it is relaxing.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From precision fades to traditional hot towel shaves, we treat every client like royalty. Walk in as a guest, leave as family.
            </p>
            <Link
              to="/booking"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-all"
              style={{ color: "var(--primary-foreground)" }}
            >
              Book Your Visit
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img src={g3} alt="Stylish client at Elite Barbershop" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl hidden sm:block">
              <div className="text-3xl font-bold text-gold" style={{ fontFamily: "var(--font-display), serif" }}>5★</div>
              <div className="text-xs text-muted-foreground mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24" style={{ background: "rgba(34,34,42,0.4)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold">What We Stand For</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Our <span className="gradient-gold">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, text }) => (
              <div key={title} className="p-6 rounded-2xl glass text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-gold transition-all group-hover:bg-gradient-gold" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold">Comfort & Convenience</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Amenities <span className="gradient-gold">Included</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {amenities.map(({ Icon, label }) => (
              <div key={label} className="p-6 rounded-2xl glass flex items-center gap-4">
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-gold" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
