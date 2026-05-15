import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-barbershop.jpg";

const images = [
  { src: g1, alt: "Precision fade haircut" },
  { src: g3, alt: "Stylish cut result" },
  { src: hero, alt: "Elite Barbershop interior" },
  { src: g2, alt: "Fresh haircut close-up" },
  { src: g4, alt: "Barber at work" },
  { src: g1, alt: "Clean fade" },
  { src: g3, alt: "Client style" },
  { src: g2, alt: "Barbershop atmosphere" },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <span className="text-xs uppercase tracking-widest text-gold">The Work</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Our <span className="gradient-gold">Gallery</span></h1>
          <p className="mt-4 text-muted-foreground">
            A showcase of precision cuts, clean fades, and masterful grooming from the shop floor.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
