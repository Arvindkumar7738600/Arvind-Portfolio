import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, FileBadge } from "lucide-react";

const certs = [
  { title: "Advanced React Patterns", issuer: "Frontend Masters", year: "2024", color: "from-primary/20 to-transparent" },
  { title: "Three.js Journey", issuer: "Bruno Simon", year: "2024", color: "from-accent/20 to-transparent" },
  { title: "Creative Coding", issuer: "School of Motion", year: "2023", color: "from-primary/20 to-accent/10" },
  { title: "GLSL Shaders", issuer: "The Book of Shaders", year: "2023", color: "from-accent/20 to-primary/10" },
  { title: "Design Systems", issuer: "Interaction Design Foundation", year: "2022", color: "from-primary/20 to-transparent" },
  { title: "WebGL Fundamentals", issuer: "Udacity", year: "2022", color: "from-accent/20 to-transparent" },
];

export const Certificates = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="certificates" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 06 — CERTIFICATES</div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold">
            Always <span className="gradient-text">learning.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.button
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(i)}
              className="group glass glass-hover rounded-3xl p-6 text-left relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <FileBadge className="w-6 h-6 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.issuer}</p>
                <div className="mt-6 font-mono text-[10px] tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW CERTIFICATE →
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass rounded-3xl p-10 neon-border"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${certs[active].color} opacity-40 pointer-events-none`} />
              <div className="relative">
                <FileBadge className="w-12 h-12 text-primary mb-6" />
                <div className="font-mono text-xs text-muted-foreground mb-2">CERTIFICATE OF COMPLETION · {certs[active].year}</div>
                <h3 className="font-display text-3xl font-semibold mb-2">{certs[active].title}</h3>
                <p className="text-muted-foreground mb-8">Issued by {certs[active].issuer}</p>
                <div className="aspect-[4/3] rounded-2xl border border-border/60 grid-bg flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-4xl gradient-text font-semibold mb-2">Aether</div>
                    <div className="font-mono text-xs tracking-widest text-muted-foreground">VERIFIED · {certs[active].issuer.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
