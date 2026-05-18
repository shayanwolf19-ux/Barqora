import p1 from "@/assets/barqoragym.png";
import p2 from "@/assets/rest.jpeg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import Link from "next/link";

const items = [
  { img: p1.src, title: "Gyms and Fitness Brands", tag: "Fitness Marketing",  },
  { img: p2.src, title: "Restaurants and Cafes", tag: "Food Branding",},
  { img: p3.src, title: "Real Estate Businesses", tag: "Property Marketing",},
  { img: p4.src, title: "Clothing and Fashion Stores", tag: "Fashion Branding",  },
  { img: p4.src, title: "Dental and Medical Clinics", tag: "Healthcare Marketing", },
  { img: p4.src, title: "Local Businesses", tag: "Local SEO",  },
  { img: p4.src, title: "E-commerce Brands", tag: "E-commerce Growth",  },
  { img: p4.src, title: "Service-Based Companies", tag: "Lead Generation",  },
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen py-32 relative">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-sm font-medium text-blue-300 uppercase tracking-widest">
              All Industries
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
          </div>

          {/* Back button */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-border text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
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
}