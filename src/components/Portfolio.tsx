"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import p1 from "@/assets/barqoragym.png";
import p2 from "@/assets/rest.jpeg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";


type PortfolioItem = {
  img: string;
  title: string;
  tag: string;
  video?: string; // optional — only items with a video are playable
};

const items: PortfolioItem[] = [
  {
    img: p1.src,
    title: "Gyms and Fitness Brands",
    tag: "Fitness Marketing",
    video: "/barqora.mp4", // 👈 put your file in /public/videos/
  },
  {
    img: p2.src,
    title: "Restaurants and Cafes",
    tag: "Food Branding",
  },
  {
    img: p3.src,
    title: "Real Estate Businesses",
    tag: "Property Marketing",
  },
  {
    img: p4.src,
    title: "Clothing and Fashion Stores",
    tag: "Fashion Branding",
  },
  {
    img: p4.src,
    title: "Dental and Medical Clinics",
    tag: "Healthcare Marketing",
  },
  {
    img: p4.src,
    title: "Local Businesses",
    tag: "Local SEO",
  },
  {
    img: p4.src,
    title: "E-commerce Brands",
    tag: "E-commerce Growth",
  },
  {
    img: p4.src,
    title: "Service-Based Companies",
    tag: "Lead Generation",
  },
];

const PREVIEW_COUNT = 2; // how many cards show on the main page

const PortfolioCard = ({
  it,
  index,
  animate = true,
  onPlay,
}: {
  it: PortfolioItem;
  index: number;
  animate?: boolean;
  onPlay?: () => void;
}) => {
  const hasVideo = Boolean(it.video);

  return (
    <div
      data-aos={animate ? (index % 2 === 0 ? "fade-right" : "fade-left") : undefined}
      onClick={hasVideo ? onPlay : undefined}
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

        {/* Play overlay — only shown when the item has a video */}
        {/* {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            </div>
          </div>
        )} */}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full glass mb-3 text-primary">
          {it.tag}
        </span>
        <h3 className="font-display text-2xl font-semibold mb-2">{it.title}</h3>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const previewItems = items.slice(0, PREVIEW_COUNT);

  // Close on Escape + lock page scroll while the player is open
  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setActiveVideo(null);
  };

  return (
    <>
      <section id="portfolio" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span
                className="text-sm font-medium text-blue-300 uppercase tracking-widest"
                data-aos="fade-up"
              >
                Industries We Work With
              </span>
              <h2
                className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight"
                data-aos="fade-up"
              >
                Work we're <span className="text-gradient">proud of</span>
              </h2>
            </div>
          </div>

          {/* Preview grid — first PREVIEW_COUNT items */}
          <div className="grid md:grid-cols-2 gap-6">
            {previewItems.map((it, index) => (
              <PortfolioCard
                key={it.title}
                it={it}
                index={index}
                onPlay={() => it.video && setActiveVideo(it.video)}
              />
            ))}
          </div>

          {/* See More — navigates to /projects */}
          {items.length > PREVIEW_COUNT && (
            <div className="flex justify-center mt-12" data-aos="fade-up">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full glass glow-border text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(var(--primary-rgb),0.35)]"
              >
                <span>See All Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Video player modal ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-8"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-11 w-11 items-center justify-center rounded-full glass glow-border text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl glow-border bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;