import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Settings, BarChart3, Code2, Camera, Megaphone, Shield } from "lucide-react";

const services = [
  { icon: Settings, title: "Technical PM", desc: "End-to-end delivery of software and digital transformation projects. From requirements to deployment." },
  { icon: BarChart3, title: "Agile & KPIs", desc: "Scrum/Kanban implementation, sprint planning, and data-driven dashboards for executive reporting." },
  { icon: Code2, title: "Software Dev", desc: "Full-stack web and mobile apps using React, Flutter, Node.js, Python, and modern frameworks." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Campaign strategy, social media management, content planning, paid ads, and brand support." },
  { icon: Camera, title: "Creative Services", desc: "Professional photography (product, portrait, event), photo editing, and visual storytelling." },
  { icon: Shield, title: "Quality Assurance", desc: "Process improvement, testing coordination, and quality gate management for excellence." },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-cyber-space overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2" />

      <div ref={ref} className="max-w-5xl mx-auto fade-in-up relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 neon-line" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent glow-text-magenta">Services</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 cyber-heading">
          <span className="text-gradient-cyber">What I Offer</span>
        </h2>
        <p className="text-foreground/50 text-sm md:text-base mb-16 max-w-xl">
          Flexible engagement models — from short-term consulting to long-term project leadership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group neon-card-hover holo-shimmer rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:glow-text-cyan transition-all">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
