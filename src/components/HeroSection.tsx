import ParticleCanvas from "./ParticleCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-[200px] md:pt-[280px] pb-[102px] px-6">
        <div className="flex flex-col items-center gap-10 max-w-3xl text-center">
          {/* Badge */}
          <div className="rounded-full bg-foreground/10 border border-foreground/20 px-4 py-2 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-foreground/60">
              Available for Remote Work —
            </span>
            <span className="text-xs font-medium text-foreground">
              Project Leadership & Consulting
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-[56px] font-medium leading-[1.28] max-w-[613px] text-gradient-hero">
            Software & Projects at the Speed of Experience
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] font-normal text-foreground/70 max-w-[680px] leading-relaxed">
            Delivering complex projects on time with Agile execution and KPI-driven delivery.
            5+ years leading cross-functional teams across the Americas — bridging technology,
            strategy, and creative solutions.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative rounded-full border border-foreground/20 p-[1px]"
          >
            <div className="btn-glow-streak rounded-full bg-foreground px-[29px] py-[11px] text-sm font-medium text-background">
              Get in Touch
            </div>
          </button>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 neon-line z-20" />
    </section>
  );
};

export default HeroSection;
