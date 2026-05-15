import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Booking from "@/pages/Booking";
import Contact from "@/pages/Contact";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found.</p>
        <a href="/" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold font-semibold" style={{ color: "var(--primary-foreground)" }}>
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
