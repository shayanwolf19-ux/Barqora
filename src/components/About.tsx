import circle from "@/assets/circle.gif";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-blue-300 uppercase tracking-widest" data-aos="fade-up">About Barqora</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight"  data-aos="fade-up">
              A growth partner <br /> built for the <span className="text-gradient">digital era</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6"  data-aos="fade-up">
              Barqora is a creative digital agency built to help modern businesses grow online through powerful websites, smart marketing, strong branding, and engaging content.

              We work with businesses that want to build a professional online presence, attract more customers, and convert visitors into real leads and sales. From website design and social media growth to paid advertising, SEO, branding, and creative content production, Barqora provides complete digital solutions under one roof.
            </p>
            <p className="text-muted-foreground leading-relaxed"  data-aos="fade-up">
              Our goal is simple: to make your brand look better, reach the right audience, and grow faster in the digital world.
            </p>
          </div>

          <div
            className="relative w-full min-h-[600px] hidden lg:block"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 70% at center, black 35%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at center, black 35%, transparent 80%)",
            }}
          >
            {/* GIF - scaled up to break beyond the column */}
            <img
              src={circle.src}
              alt=""
              className="absolute inset-0 w-full h-full object-contain mix-blend-screen scale-125"
              style={{ filter: "brightness(1.2) contrast(1.4) saturate(0.4)" }}
            />

            {/* Black-gray mix overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(60,60,75,0.35) 0%, rgba(0,0,0,0.65) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
