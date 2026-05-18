import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg.src} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">Now booking Q3 — limited slots</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up">
            Marketing that <br className="hidden md:block" />
            <span className="text-gradient">moves the needle</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Barqora is a full-service digital marketing agency that turns ad spend into pipeline, followers into buyers, and brands into category leaders.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book a Free Strategy Call <ArrowRight className="ml-1 h-5 w-5" /></a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#portfolio">See Our Work</a>
            </Button>
          </div> */}

          {/* <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground/70 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Trusted by D2C, SaaS & E-commerce brands across 12 countries
          </p>

          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { v: "150+", l: "Brands Scaled" },
              { v: "8x", l: "Avg ROI" },
              { v: "12M+", l: "Reach Generated" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
