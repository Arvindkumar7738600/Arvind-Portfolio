import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile.png";

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
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
            / 01 — ABOUT
          </div>
          <h2 className="font-display text-4xl md:text-4.5xl font-semibold mb-16 max-w-3xl">
            Data Scientist 
            <span className="text-white font-sans"> | Web Developer</span>{" "}
            <span className="text-white font-sans">| Start-up Builder.</span>
          </h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-3xl glass overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10 pointer-events-none" />
              <img
                src={profilePhoto}
                alt="Profile portrait"
                className="w-full  object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/30 rounded-3xl z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-card/95 to-transparent z-20">
                <div className="font-mono text-[10px] tracking-widest text-primary">
                  SYS://ARVIND K.IDENTITY
                </div>
              </div>
            </div>

            <div className="space-y-0">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                <span className="font-semibold text-cyan-300">
                  Hi, I'm Arvind Kumar
                </span>
                — a Data Science student at{" "}
                <span className="font-bold text-cyan-300">IIT Madras</span> with
                a passion for architecting intelligent, high-performance digital
                products. I bridge the gap between data-driven insights and
                clean code, specializing in modern web ecosystems, scalable
                backends, and intuitive mobile applications. I thrive on turning
                complex problems into functional, beautiful software—whether
                it’s empowering agricultural communities through my startup
                project,
                <span className="font-bold text-green-400"> KisanSevaPlus</span>
                , or building seamless user experiences. Currently, I am focused
                on mastering advanced Data Analysis, refining software
                architecture, and launching systems that scale.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "1+", label: "Years building" },
                  { value: "3+", label: "Shipped projects" },
                  { value: "1", label: "Awards & wins" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-4">
                    <div className="font-display text-3xl font-semibold gradient-text">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1 uppercase">
                      {stat.label}
                    </div>
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
