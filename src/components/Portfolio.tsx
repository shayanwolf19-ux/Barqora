import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const items = [
  {
    img: p1.src,
    title: "Gyms and Fitness Brands",
    tag: "Fitness Marketing",
    desc: "Full identity system for a luxury skincare line.",
  },
  {
    img: p2.src,
    title: "Restaurants and Cafes",
    tag: "Food Branding",
    desc: "+340% engagement across Meta in 90 days.",
  },
  {
    img: p3.src,
    title: "Real Estate Businesses",
    tag: "Property Marketing",
    desc: "Conversion-focused redesign for a SaaS leader.",
  },
  {
    img: p4.src,
    title: "Clothing and Fashion Stores",
    tag: "Fashion Branding",
    desc: "8x ROAS scaling Google & Meta campaigns.",
  },
  {
    img: p4.src,
    title: "Dental and Medical Clinics",
    tag: "Healthcare Marketing",
    desc: "8x ROAS scaling Google & Meta campaigns.",
  },
  {
    img: p4.src,
    title: "Local Businesses",
    tag: "Local SEO",
    desc: "8x ROAS scaling Google & Meta campaigns.",
  },
  {
    img: p4.src,
    title: "E-commerce Brands",
    tag: "E-commerce Growth",
    desc: "8x ROAS scaling Google & Meta campaigns.",
  },
  {
    img: p4.src,
    title: "Service-Based Companies",
    tag: "Lead Generation",
    desc: "8x ROAS scaling Google & Meta campaigns.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">Industries We Work With</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight"  data-aos="fade-up">
              Work we're <span className="text-gradient">proud of</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, index) => (
            <div
              key={it.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="group relative overflow-hidden rounded-3xl glow-border glass cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full glass mb-3 text-primary">
                  {it.tag}
                </span>
                <h3 className="font-display text-2xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted-foreground text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
