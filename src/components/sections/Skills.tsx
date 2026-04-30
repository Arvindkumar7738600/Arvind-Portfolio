import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "3D & Motion",
    skills: ["Three.js", "R3F", "GLSL", "Blender", "Lottie"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "PostgreSQL", "Supabase", "REST", "GraphQL"],
  },
  {
    title: "Data Analyst",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "MYSQL", "Power BI", "Tableau", "MS Excel",],
  },
  {
    title: "Design",
    skills: ["Figma", "Canva", "Spline", "After Effects", "Cinema 4D"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 03 — SKILLS</div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold">
            The <span className="gradient-text">tools</span> I think with.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-6 items-start"
            >
              <div>
                <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">/ {String(gi + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl font-semibold mt-1">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: si * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="group relative px-5 py-2.5 rounded-full glass border border-border/60 hover:border-primary/60 cursor-default transition-all duration-300 hover:shadow-glow"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative font-mono text-sm">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
