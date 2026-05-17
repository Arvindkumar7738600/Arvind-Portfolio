import { motion } from "framer-motion";
import { Suspense } from "react";
import { HeroScene } from "../three/HeroScene";

const ROLES = ["Data Scientist","Full-Stack Developer", "AI Engineer"];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 3D scene fills the hero */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* radial vignette to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.55) 60%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-primary mb-5 sm:mb-7"
        >
          + WELCOME TO MY UNIVERSE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
           className="font-hero font-bold text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400 tracking-tight filter drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500 hover:scale-105">
  Arvind Kumar

        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase"
        >
          {ROLES.map((r, i) => (
            <span key={r} className="flex items-center gap-5">
              <span
                className={
                  i === 1
                    ? "text-accent"
                    : "text-muted-foreground/70"
                }
              >
                {r}
              </span>
              {i < ROLES.length - 1 && (
                <span className="text-muted-foreground/40">·</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 sm:mt-12 group inline-flex items-center gap-3 px-7 py-3 rounded-full border border-primary/40 font-mono text-[11px] tracking-[0.3em] uppercase text-foreground/90 hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-500"
        >
          Explore Work
          <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground/70">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/70 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
