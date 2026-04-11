import ParticleCanvas from "./ParticleCanvas";
import RotatingText from "./RotatingText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background scanlines">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/80 via-transparent to-background" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-[200px] md:pt-[260px] pb-[102px] px-6">
        <div className="flex flex-col items-center gap-10 max-w-4xl text-center">
          {/* Badge */}
          <div className="rounded-full bg-foreground/10 border border-foreground/20 px-4 py-2 flex items-center gap-2 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-foreground/60">
              Available for Remote Work —
            </span>
            <span className="text-xs font-medium text-foreground">
              USA / LATAM / Global
            </span>
          </div>

          {/* Heading with rotating text */}
          <div className="space-y-2">
            <h1
              className="glitch-heading text-4xl md:text-[60px] lg:text-[72px] font-semibold leading-[1.1] text-gradient-hero"
              data-text="Oscar Abarca"
            >
              Oscar Abarca
            </h1>
            <div className="h-[1.2em] text-2xl md:text-[36px] lg:text-[42px] font-medium leading-[1.2]">
              <RotatingText />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[15px] md:text-base font-normal text-foreground/60 max-w-[680px] leading-relaxed">
            Technical Project Manager & Software Developer delivering complex projects
            on time with Agile execution and KPI-driven delivery. 5+ years leading
            cross-functional teams across the Americas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative rounded-full border border-primary/40 p-[1px] glow-cyan"
            >
              <div className="btn-glow-streak rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground group-hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] transition-shadow">
                Get in Touch
              </div>
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative rounded-full border border-foreground/20 p-[1px]"
            >
              <div className="btn-glow-streak rounded-full bg-background/80 backdrop-blur-sm px-8 py-3 text-sm font-medium text-foreground group-hover:border-primary/40 transition-colors">
                View Services →
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 neon-line z-20" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/20 z-20 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-accent/20 z-20 hidden md:block" />
    </section>
  );
};

export default HeroSection;
