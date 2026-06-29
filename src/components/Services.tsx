import {
  Globe,
  Palette,
  MonitorSmartphone,
  Briefcase,
  LineChart,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Digital Marketing",
    desc: "Performance marketing, SEO, social media management, email marketing, lead generation, and growth strategies that deliver measurable results.",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    desc: "Brand identity, logo design, graphic design, creative content, video editing, and motion graphics that make your brand unforgettable.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    desc: "Custom websites, WordPress development, e-commerce solutions, UI/UX design, and high-performance web experiences.",
  },
  {
    icon: Briefcase,
    title: "Business Automation",
    desc: "ERP (Odoo), CRM, HRM, workflow automation, and digital transformation solutions that streamline your business.",
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    desc: "Technology consulting, startup growth strategies, digital innovation, and data-driven decision making for sustainable growth.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    desc: "Internship programs, professional training, workforce development, and skills enhancement for future-ready teams.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span
            className="text-sm font-medium text-blue-300 uppercase tracking-widest"
            data-aos="fade-up"
          >
            What we do
          </span>

          <h2
            className="font-display text-4xl md:text-6xl font-bold mt-4"
            data-aos="fade-up"
          >
            At Barqora, we help{" "}
            <span className="text-gradient">Businesses Grow Online</span>
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

                <h3 className="font-display text-xl font-semibold mb-3">
                  {s.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;