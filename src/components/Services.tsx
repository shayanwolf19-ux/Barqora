import { Megaphone, Palette, Target, Code, Search, PenTool } from "lucide-react";

const services = [
  { icon: Code, title: "Web Design & Development", desc: "High-performance websites that convert visitors into loyal customers." },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Strategy, content, and community management that turns followers into customers." },
  { icon: Palette, title: "Branding & Identity", desc: "Logos, visual systems, and brand voice that make you instantly recognisable." },
  { icon: Target, title: "Paid Ads — Google & Meta", desc: "Performance campaigns engineered for ROI, optimised daily by experts." },
  { icon: Search, title: "Search Engine Optimisation", desc: "Rank higher, get found faster with technical and content-led SEO." },
  { icon: PenTool, title: "Content Creation", desc: "Photo, video, and copy crafted to stop scrolls and tell your story." },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">What we do</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4" data-aos="fade-up">
            At Barqora , we help  <span className="text-gradient"> Businesses Grow Online</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <div
              key={s.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="group relative glass glow-border rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-700" />

              <div className="relative">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary shadow-glow mb-6">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
