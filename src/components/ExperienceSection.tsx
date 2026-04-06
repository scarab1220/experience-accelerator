import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-cyber-space">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 neon-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Experience</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-gradient-cyber">
          Career Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary glow-cyan" />

                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 md:mt-0 md:text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
