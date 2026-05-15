import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Calendar, Loader2 } from "lucide-react";
import { SERVICE_NAMES } from "@/lib/services";

const SERVICE_ID = "service_ey8z0ot";
const TEMPLATE_ID = "template_r84lf7q";
const PUBLIC_KEY = "tpbXsl2M-KUtJ5aUk";

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    full_name: "", phone: "", service: "", date: "", time: "", notes: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.full_name.trim() || !form.phone.trim() || !form.service || !form.date || !form.time) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[\d\s+()-]{7,}$/.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          full_name: form.full_name,
          phone: form.phone,
          service: form.service,
          date: form.date,
          time: form.time,
          notes: form.notes || "—",
          to_business: "Elite Barbershop",
        },
        { publicKey: PUBLIC_KEY }
      );
      setSuccess(true);
      setForm({ full_name: "", phone: "", service: "", date: "", time: "", notes: "" });
    } catch (err) {
      console.error(err);
      setError("Unable to send booking request. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all text-foreground placeholder-muted-foreground";
  const inputStyle = {
    background: "var(--input)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-xs uppercase tracking-widest text-gold">Reserve Your Chair</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Book An <span className="gradient-gold">Appointment</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Tell us when you'd like to come in — we'll confirm shortly.</p>
        </div>

        {success ? (
          <div className="glass rounded-3xl p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Request Sent!</h2>
            <p className="text-muted-foreground mb-6">
              Your appointment request has been sent successfully. We'll contact you shortly to confirm.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-all"
              style={{ color: "var(--primary-foreground)" }}
            >
              Book Another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-10 space-y-5">
            {error && (
              <div className="px-4 py-3 rounded-lg text-sm" style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.full_name}
                  onChange={update("full_name")}
                  className={inputCls}
                  style={inputStyle}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputCls}
                  style={inputStyle}
                  placeholder="+1 555 123 4567"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                Service *
              </label>
              <select
                required
                value={form.service}
                onChange={update("service")}
                className={inputCls}
                style={inputStyle}
              >
                <option value="">Select a service…</option>
                {SERVICE_NAMES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={update("date")}
                  className={inputCls}
                  style={inputStyle}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={update("time")}
                  className={inputCls}
                  style={inputStyle}
                  min="08:00"
                  max="20:00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                Notes
              </label>
              <textarea
                rows={4}
                value={form.notes}
                onChange={update("notes")}
                className={inputCls}
                style={inputStyle}
                placeholder="Anything we should know?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold font-semibold hover:shadow-gold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ color: "var(--primary-foreground)" }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" /> Request Appointment
                </>
              )}
            </button>
            <p className="text-xs text-center text-muted-foreground">
              We're open daily 8AM – 8PM. Walk-ins also welcome.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
