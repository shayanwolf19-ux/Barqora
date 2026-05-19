"use client";

import { Star, StarHalf } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Sara Khalid",
    rating: 5,
    quote: "Barqora transformed our brand from invisible to iconic. Our DTC sales tripled in six months — the team is genuinely elite.",
  },
  {
    name: "Ahmed Rahman",
    rating: 4.5,
    quote: "The paid media strategy alone paid for itself in the first month. Sharp, accountable, and creative beyond expectations.",
  },
  {
    name: "Lina Patel",
    rating: 5,
    quote: "Working with Barqora feels like an extension of our team. They care about our numbers as much as we do — rare and refreshing.",
  },
  {
    name: "Daniyal Sheikh",
    rating: 4.5,
    quote: "Their SEO work moved us from page 4 to position 2 for our main keyword in under five months. Pure execution.",
  },
  {
    name: "Mariam Yousuf",
    rating: 5,
    quote: "Stunning brand identity and a website that finally matches the quality of our work. Inquiries doubled in week one.",
  },
  {
    name: "Hassan Tariq",
    rating: 4.5,
    quote: "Communication is fast, reporting is honest, and the creative is consistently sharp. Easiest agency decision we've made.",
  },
  {
    name: "Zara Iqbal",
    rating: 5,
    quote: "Our social engagement grew 8x in three months. The content team genuinely understands our voice and audience.",
  },
  {
    name: "Omar Farooq",
    rating: 4.5,
    quote: "ROAS on our paid campaigns jumped from 1.8 to 4.6. They treat our budget like their own — we couldn't ask for more.",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<Star key={i} className="h-4 w-4 fill-primary text-primary" />);
    } else if (i < rating) {
      stars.push(<StarHalf key={i} className="h-4 w-4 fill-primary text-primary" />);
    } else {
      stars.push(<Star key={i} className="h-4 w-4 text-primary/30" />);
    }
  }
  return stars;
};

const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20" >
          <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">
            Client love
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4" data-aos="fade-up">
            Words from <span className="text-gradient">our partners</span>
          </h2>
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((r) => (
              <CarouselItem key={r.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass glow-border rounded-3xl p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-5">{renderStars(r.rating)}</div>
                  <p className="text-foreground/90 leading-relaxed mb-8 flex-1">"{r.quote}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-border">
                    <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center font-display font-semibold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{r.name}</div>
                      {/* <div className="text-sm text-muted-foreground">{r.role}</div> */}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
