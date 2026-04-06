import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  exp: {
    title: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
  };
  index: number;
  isLeft: boolean;
}

const TimelineItem = ({ exp, index, isLeft }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0) translateY(0)'
          : `translateX(${isLeft ? '-60px' : '60px'}) translateY(20px)`,
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 200}ms`,
      }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="neon-card-hover holo-shimmer rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 group">
          <div className="flex flex-col gap-1 mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:glow-text-cyan transition-all">
              {exp.title}
            </h3>
            <p className="text-sm font-semibold text-primary">{exp.company}</p>
            <div className="flex flex-col text-xs text-muted-foreground">
              <span>{exp.period}</span>
              <span>{exp.location}</span>
            </div>
          </div>
          <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
            {exp.highlights.map((h, j) => (
              <li
                key={j}
                className="flex items-start gap-2 text-sm text-foreground/60"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.5s ease ${index * 200 + 400 + j * 100}ms`,
                }}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline center - hidden on mobile, visible on md+ */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div className="timeline-dot w-4 h-4 rounded-full bg-primary glow-cyan z-10" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const experiences = [
  {
    title: "Project Manager",
    company: "C0MPLÈX1",
    location: "Pensacola, FL, USA",
    period: "Apr 2025 – Present",
    highlights: [
      "Report directly to CEO with executive updates on progress, risks, and KPIs",
      "Implemented agile methodologies improving delivery speed by 25%",
      "Coordinate multi-platform campaigns aligned with client KPIs",
    ],
  },
  {
    title: "Sr. Operations Supervisor",
    company: "Webhelp",
    location: "San Salvador, El Salvador",
    period: "Feb 2023 – Apr 2025",
    highlights: [
      "Led 60+ Tier 3 agents for a high-volume global travel account",
      "Designed KPI dashboards achieving 20% improvement in service accuracy",
      "Developed incentive programs increasing agent productivity",
    ],
  },
  {
    title: "Data Analyst",
    company: "Cognizant Technology Solutions",
    location: "San Salvador, El Salvador",
    period: "Jun 2019 – Dec 2021",
    highlights: [
      "Designed interactive dashboards and predictive models",
      "Created executive-level reports influencing strategic decisions",
      "Served as Chief Analyst and Communications Lead for the Director",
    ],
  },
  {
    title: "Quality Manager",
    company: "Cognizant Technology Solutions",
    location: "San Salvador, El Salvador",
    period: "Feb 2017 – Jun 2019",
    highlights: [
      "Led QA operations for 5 high-profile accounts",
      "Spearheaded Lean Six Sigma practices with measurable performance gains",
      "Introduced audit tools reducing process gaps",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-cyber-space overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 neon-line" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent glow-text-magenta">Experience</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16 cyber-heading">
          <span className="text-gradient-cyber">Career Timeline</span>
        </h2>

        <div className="relative">
          {/* Center timeline line - animated gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full" />
            {/* Animated pulse traveling down the line */}
            <div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full opacity-60"
              style={{ animation: 'timeline-pulse 3s ease-in-out infinite' }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes timeline-pulse {
          0% { top: -5%; }
          100% { top: 105%; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
