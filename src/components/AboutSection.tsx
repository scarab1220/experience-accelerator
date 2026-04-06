import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Briefcase, Globe, Users, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience", color: "text-primary glow-text-cyan" },
  { icon: Globe, value: "5+", label: "Countries Served", color: "text-accent glow-text-magenta" },
  { icon: Users, value: "60+", label: "Team Members Led", color: "text-primary glow-text-cyan" },
  { icon: Award, value: "20+", label: "Projects Delivered", color: "text-accent glow-text-magenta" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-background overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-5xl mx-auto fade-in-up relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 neon-line" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary glow-text-cyan">About</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 cyber-heading">
          <span className="text-gradient-cyber">Who I Am</span>
        </h2>

        <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
          Project manager and software developer with experience in web/mobile application
          development, digital marketing campaigns, and professional photography. I create
          technological, visual, and strategic solutions that empower brands and companies.
          <span className="text-primary/60"> Bilingual (EN/ES)</span> — executive communication for global teams.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="neon-card-hover holo-shimmer rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 text-center flex flex-col items-center gap-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <stat.icon className={`w-7 h-7 ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
              <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
