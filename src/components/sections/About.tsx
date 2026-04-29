import { motion } from "framer-motion";
import { Suspense } from "react";
import { CursorScene } from "../three/CursorScene";

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 01 — ABOUT</div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-16 max-w-3xl">
            Minimalist. <span className="text-muted-foreground">Curious.</span> <span className="gradient-text">Builder.</span>
          </h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
            <div className="relative h-[280px] rounded-3xl glass overflow-hidden">
              <Suspense fallback={<div className="w-full h-full" />}>
                <CursorScene />
              </Suspense>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-card/90 to-transparent">
                <div className="font-mono text-[10px] tracking-widest text-primary">SYS://AETHER.IDENTITY</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                I design and build digital products that blend purposeful interaction
                with immersive 3D worlds. Driven by typography, motion, and the quiet
                beauty of well-crafted code.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "5+", label: "Years building" },
                  { value: "30+", label: "Shipped projects" },
                  { value: "12", label: "Awards & wins" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-4">
                    <div className="font-display text-3xl font-semibold gradient-text">{stat.value}</div>
                    <div className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
