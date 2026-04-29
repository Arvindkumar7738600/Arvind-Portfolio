import { motion } from "framer-motion";
import { Suspense } from "react";
import { ArrowDown } from "lucide-react";
import { HeroScene } from "../three/HeroScene";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">AVAILABLE FOR FREELANCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.95] mb-6"
          >
            Hi, I'm <span className="gradient-text">Arvind</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl lg:text-6xl font-normal">
              Creative Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed"
          >
            Crafting immersive digital experiences at the intersection of design,
            code, and three-dimensional motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-7 py-3.5 rounded-2xl glass glass-hover font-medium"
            >
              About me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[420px] lg:h-[560px]"
        >
          <Suspense fallback={<div className="w-full h-full rounded-3xl glass animate-pulse" />}>
            <HeroScene />
          </Suspense>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
            INTERACTIVE · DRAG CURSOR
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
