import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@aether.studio" },
];

export const Footer = () => {
  return (
    <footer id="footer" className="relative pt-32 pb-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden neon-border"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 07 — CONNECT</div>
            <h2 className="font-display text-4xl md:text-7xl font-semibold leading-[0.95] mb-10 max-w-3xl">
              Let's build something <span className="gradient-text">extraordinary.</span>
            </h2>

            <a
              href="mailto:hello@aether.studio"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-500 group"
            >
              hello@aether.studio
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </a>

            <div className="flex flex-wrap items-center gap-3 mt-12">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-3 rounded-2xl glass glass-hover"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{s.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-10 px-2">
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} AETHER · ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            CRAFTED WITH MOTION & CODE
          </div>
        </div>
      </div>
    </footer>
  );
};
