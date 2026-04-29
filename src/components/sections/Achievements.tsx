import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";

const items = [
  { icon: Trophy, title: "Awwwards SOTD", detail: "Site of the Day — 2024", color: "text-accent" },
  { icon: Medal, title: "CSSDA Winner", detail: "Innovation in 3D Web", color: "text-primary" },
  { icon: Award, title: "Hackathon Champion", detail: "GlobalHack '23 — 1st Place", color: "text-accent" },
  { icon: Star, title: "Open Source 1k★", detail: "Three.js helper library", color: "text-primary" },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 05 — ACHIEVEMENTS</div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold">
            Quiet wins, <span className="gradient-text">loud impact.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group glass glass-hover rounded-3xl p-6 relative overflow-hidden"
              >
                <Icon className={`w-7 h-7 ${item.color} mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} />
                <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
