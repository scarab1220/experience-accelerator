import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "Dart", "PHP", "C++", "HTML/CSS"] },
  { title: "Frameworks", skills: ["React", "Flutter", "Node.js", "Laravel", "Bootstrap", "Tailwind CSS"] },
  { title: "Tools & Cloud", skills: ["Git/GitHub", "VS Code", "Postman", "AWS", "Vercel", "Netlify", "Docker"] },
  { title: "PM & Data", skills: ["Jira", "Trello", "Notion", "Scrum", "Kanban", "Excel", "Data Viz", "KPI Design"] },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-5xl mx-auto fade-in-up relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 neon-line" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary glow-text-cyan">Skills</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16 cyber-heading">
          <span className="text-gradient-cyber">Technical Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <div key={cat.title} className="neon-card-hover holo-shimmer rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6">
              <h3 className={`text-sm font-bold mb-5 tracking-[0.2em] uppercase ${ci % 2 === 0 ? 'text-primary glow-text-cyan' : 'text-accent glow-text-magenta'}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-foreground/80 hover:bg-primary/15 hover:border-primary/50 hover:glow-text-cyan transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${si * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
