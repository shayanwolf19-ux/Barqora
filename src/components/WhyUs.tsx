import { Monitor, Share2, Target, Palette, Search, Camera, Rocket } from "lucide-react";

const items = [
  { icon: Monitor, title: "Modern and responsive website designs", desc: "Pixel-perfect websites that load fast, look stunning, and work on every device." },
  { icon: Share2, title: "Creative social media content", desc: "Scroll-stopping posts and reels designed to engage your audience and build community." },
  { icon: Target, title: "Result-focused ad campaigns", desc: "Performance-driven ads that turn clicks into customers, not just impressions." },
  { icon: Palette, title: "Strong branding and visual identity", desc: "Logos, colors, and visuals that make your brand unforgettable and instantly recognizable." },
  { icon: Search, title: "SEO-friendly digital solutions", desc: "Rank higher on Google with technical SEO and content built for organic growth." },
  { icon: Camera, title: "Professional content and visuals", desc: "High-quality photos, videos, and graphics that elevate your brand's presence everywhere." },
  { icon: Rocket, title: "Growth-focused strategy for every brand", desc: "Tailored roadmaps that align marketing, sales, and creative to scale your business." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">Why Barqora</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4" data-aos="fade-up">
            Digital solutions <span className="text-gradient">that grow brands</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <div
              key={it.title}
               data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className={`flex gap-5 glass rounded-3xl p-8 hover:bg-card/80 transition-colors ${
                i === items.length - 1
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-12px)] md:mx-auto"
                  : ""
              }`}
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-2xl bg-gradient-primary shadow-glow">
                  <it.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
