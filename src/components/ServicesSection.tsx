import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Settings, BarChart3, Code2, Camera, Megaphone, Shield } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Technical Project Management",
    desc: "End-to-end delivery of software and digital transformation projects. From requirements gathering to deployment.",
  },
  {
    icon: BarChart3,
    title: "Agile Delivery & KPI Dashboards",
    desc: "Scrum and Kanban implementation, sprint planning, and data-driven reporting with executive dashboards.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Full-stack web and mobile applications using React, Flutter, Node.js, Python, and modern frameworks.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Campaign strategy, social media management, content planning, paid ads, and brand support.",
  },
  {
    icon: Camera,
    title: "Creative Services",
    desc: "Professional photography (product, portrait, event), photo editing, and visual storytelling.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Process improvement, testing coordination, and quality gate management to ensure deliverable excellence.",
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-cyber-space">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 neon-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Services</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gradient-cyber">
          What I Offer
        </h2>
        <p className="text-foreground/60 text-sm mb-16 max-w-xl">
          Flexible engagement models tailored to your project needs — from short-term consulting to long-term project leadership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:glow-cyan"
            >
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
