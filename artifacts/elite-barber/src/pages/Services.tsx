import { Link } from "react-router-dom";
import { Scissors, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <span className="text-xs uppercase tracking-widest text-gold">The Menu</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Our <span className="gradient-gold">Services</span></h1>
          <p className="mt-4 text-muted-foreground">
            From classic cuts to traditional shaves — every service crafted with precision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="group p-6 rounded-2xl glass hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gold transition-all group-hover:bg-gradient-gold"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <Scissors className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gold font-semibold">{s.price}</span>
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display), serif" }}>{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              <Link
                to="/booking"
                className="mt-4 text-sm text-muted-foreground hover:text-gold inline-flex items-center gap-1 transition-colors"
              >
                Book this service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10">
          * Prices are starting estimates — final pricing confirmed in-shop.
        </p>
      </div>
    </section>
  );
}
