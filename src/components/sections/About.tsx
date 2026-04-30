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
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-16 max-w-6xl">
            Data Scientist. <span className="text-muted-foreground">Developer.</span> <span className="gradient-text">Startup Builder.</span>
          </h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
            <div className="relative h-[280px] rounded-3xl glass overflow-hidden">
              <Suspense fallback={<div className="w-full h-full" />}>
                <CursorScene />
              </Suspense>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-card/90 to-transparent">
                <div className="font-mono text-[10px] tracking-widest text-primary">SYS://ARVIND K.IDENTITY</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Hi, <span className="text-primary">I’m Arvind Kumar — a Data Science student at IIT Madras</span> with a strong interest in building real-world solutions using technology.
                Mujhe web development, Flutter apps, aur data-driven problem solving.

                I enjoy turning ideas into practical products, like my startup project <span className="text-primary">KisanSevaPlus</span>.
                  Currently, I’m working on improving my skills in Data Analysis, Software Development, and building scalable applications.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "1+", label: "Years building" },
                  { value: "5+", label: "Shipped projects" },
                  { value: "2", label: "Awards & wins" },
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
