"use client";

import { Mail, MapPin, ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/barqora-logo.png";

const services = [
  { label: "Social Media Marketing", href: "#services" },
  { label: "Branding & Identity", href: "#services" },
  { label: "Paid Ads — Google & Meta", href: "#services" },
  { label: "Web Design & Development", href: "#services" },
  { label: "Search Engine Optimisation", href: "#services" },
  { label: "Content Creation", href: "#services" },
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Why Barqora", href: "#why" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Client Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 mt-12 border-t border-border overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* CTA strip */}
        {/* <div className="glass glow-border rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              Ready to make your brand <span className="text-gradient">unmissable?</span>
            </h3>
            <p className="text-muted-foreground mt-2">Let's build a growth engine that compounds month after month.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all font-medium whitespace-nowrap"
          >
            Book a free strategy call <ArrowUpRight className="h-4 w-4" />
          </a>
        </div> */}

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <a href="#home" className="inline-flex items-center mb-5">
              <img src={logo.src} alt="Barqora logo" className="h-12 w-auto object-contain drop-shadow-[0_0_16px_hsl(210_100%_55%/0.5)]" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              A premium digital marketing agency engineering measurable growth for ambitious brands worldwide.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:info.barqora@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" /> info.barqora@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Sines,Nust H-12 Sector Islamabad
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-3 lg:col-start-6">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-5 text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-5 text-foreground">Company</h4>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="col-span-2 lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-5 text-foreground">Stay in the loop</h4>
            <p className="text-sm text-muted-foreground mb-4">Marketing insights, fresh case studies, and growth playbooks — monthly.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@brand.com"
                className="flex-1 min-w-0 h-11 px-4 rounded-xl bg-muted/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="h-11 px-4 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:-translate-y-0.5 transition-transform"
              >
                Join
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Barqora Agency. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card/80 transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            {/* <a href="#" className="hover:text-foreground transition-colors">Cookies</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
