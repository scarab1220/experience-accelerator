import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "Dart", "PHP", "C++", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Flutter", "Node.js", "Laravel", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git/GitHub", "VS Code", "Postman", "AWS", "Vercel", "Netlify", "Docker"],
  },
  {
    title: "PM & Data",
    skills: ["Jira", "Trello", "Notion", "Scrum", "Kanban", "Excel", "Data Viz", "KPI Design"],
  },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-[120px] bg-background">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 neon-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Skills</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-gradient-cyber">
          Technical Arsenal
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="rounded-xl border-glow-cyan bg-card p-6">
              <h3 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-foreground/80 hover:bg-primary/10 hover:border-primary/40 transition-colors"
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
