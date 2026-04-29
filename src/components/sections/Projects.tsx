import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nebula UI",
    description: "An immersive component library combining glassmorphism, motion, and WebGL backdrops for modern apps.",
    tech: ["React", "Three.js", "Tailwind"],
    accent: "from-primary/30 to-transparent",
    live: "#",
    github: "#",
  },
  {
    title: "Lumen Studio",
    description: "Realtime 3D portfolio configurator with shader-driven materials and interactive scene editing.",
    tech: ["R3F", "GLSL", "TypeScript"],
    accent: "from-accent/30 to-transparent",
    live: "#",
    github: "#",
  },
  {
    title: "Atlas Maps",
    description: "Vector cartography platform with elegant typography and quiet, performant interactions at scale.",
    tech: ["Next.js", "Mapbox", "PostgreSQL"],
    accent: "from-primary/30 to-accent/20",
    live: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 04 — SELECTED WORK</div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold">
              Projects, <span className="gradient-text">crafted slow.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Each project is an experiment in motion, geometry, and the quiet details that make interfaces feel alive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass glass-hover overflow-hidden p-7 flex flex-col min-h-[380px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="absolute top-7 right-7 flex gap-2">
                {[1, 2, 3].map((d) => (
                  <span key={d} className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:bg-primary transition-colors duration-500" style={{ transitionDelay: `${d * 60}ms` }} />
                ))}
              </div>

              <div className="font-mono text-xs text-primary mb-4">/ {String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-secondary/60 text-muted-foreground border border-border/50">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
              </div>

              {/* particle bursts */}
              <div className="absolute -top-2 -right-2 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(8)].map((_, idx) => (
                  <span
                    key={idx}
                    className="absolute w-1 h-1 rounded-full bg-primary"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${idx * 45}deg) translateX(40px)`,
                      animation: `pulse 2s ${idx * 0.1}s infinite`,
                    }}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
