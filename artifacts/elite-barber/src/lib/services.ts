export const SERVICES = [
  { name: "Haircut", desc: "Classic and modern cuts tailored to you.", price: "From $30" },
  { name: "Fade Cut", desc: "Precision fades — low, mid, high or skin.", price: "From $35" },
  { name: "Buzz Cut", desc: "Clean, even all-over clipper cut.", price: "From $20" },
  { name: "Custom Cut", desc: "Personalized style designed for you.", price: "From $40" },
  { name: "Long Haircut", desc: "Expert layering for longer styles.", price: "From $40" },
  { name: "Military Haircut", desc: "Sharp, regulation-ready cuts.", price: "From $25" },
  { name: "Scissors Cut", desc: "Full scissor work for textured looks.", price: "From $40" },
  { name: "Razor Cut", desc: "Soft, edgy razor finish.", price: "From $35" },
  { name: "Hair Shape-Up", desc: "Crisp lines and clean edges.", price: "From $20" },
  { name: "Beard Trim", desc: "Defined shape and clean lines.", price: "From $20" },
  { name: "Beard Maintenance", desc: "Shape, trim and condition.", price: "From $25" },
  { name: "Shave", desc: "Traditional clean shave.", price: "From $25" },
  { name: "Straight Razor Shave", desc: "Old-school straight razor finish.", price: "From $30" },
  { name: "Hot Towel Shave", desc: "Premium hot towel shave experience.", price: "From $35" },
  { name: "Head Shave", desc: "Smooth, polished head shave.", price: "From $30" },
  { name: "Eyebrow Trimming", desc: "Quick brow tidy-up.", price: "From $10" },
] as const;

export const SERVICE_NAMES = SERVICES.map((s) => s.name);
