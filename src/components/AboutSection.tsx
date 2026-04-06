import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Briefcase, Globe, Users, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Globe, value: "5+", label: "Countries Served" },
  { icon: Users, value: "60+", label: "Team Members Led" },
  { icon: Award, value: "20+", label: "Projects Delivered" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-background">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 neon-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">About</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-gradient-cyber">
          Profile Summary
        </h2>

        <p className="text-foreground/70 text-base leading-relaxed max-w-3xl mb-16">
          Project manager and software developer with experience in web/mobile application
          development, digital marketing campaigns, and professional photography. I create
          technological, visual, and strategic solutions that empower brands and companies.
          Bilingual (English/Spanish) — executive communication for global teams.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border-glow-cyan bg-card p-6 text-center flex flex-col items-center gap-3"
            >
              <stat.icon className="w-6 h-6 text-primary" />
              <span className="text-3xl font-semibold text-gradient-cyber">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
