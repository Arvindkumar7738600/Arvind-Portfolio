import { motion } from "framer-motion";
import { useRef, MouseEvent } from "react";

const items = [
  {
    year: "2025",
    degree: "B.Sc Data Science & Applications",
    institution: "IIT MADRAS",
    detail: "Specialization in Data Analysis, Data Science , AI & ML",
  },
  {
    year: "2024",
    degree: "12th Grade Science Stream",
    institution: "Delhi Public School",
    detail: "94.2% — Physics, Chemistry, Math.",
  },
  {
    year: "2018",
    degree: "10th Grade",
    institution: "Delhi Public School",
    detail: "97.4% — Foundation studies.",
  },
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  );
};

const TimelineCard = ({ item }: { item: (typeof items)[number] }) => (
  <TiltCard>
    <div className="relative glass glass-hover rounded-3xl p-6 md:p-8 overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-4 font-display font-bold text-foreground/[0.06] text-7xl md:text-8xl leading-none select-none"
      >
        {item.year}
      </span>
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-primary tracking-wider">{item.year}</span>
          <span className="relative inline-flex w-3 h-3">
            <span className="absolute inset-0 rounded-full border border-primary/70" />
            <span className="absolute inset-[3px] rounded-full bg-primary shadow-glow" />
          </span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">{item.degree}</h3>
        <p className="text-muted-foreground text-sm mb-4">{item.institution}</p>
        <p className="text-foreground/70 text-sm">{item.detail}</p>
      </div>
    </div>
  </TiltCard>
);

export const Education = () => {
  return (
    <section id="education" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 02 — EDUCATION</div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold">
            <span className="text-primary">/</span> Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* center vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                >
                  {/* dot on the line (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-primary/60 animate-ping opacity-40" />
                    <span className="absolute inset-0 rounded-full border border-primary/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-glow" />
                  </div>
                  {/* mobile dot */}
                  <div className="md:hidden absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow" />

                  {isLeft ? (
                    <>
                      <div className="pl-12 md:pl-0 md:pr-8">
                        <TimelineCard item={item} />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="pl-12 md:pl-8">
                        <TimelineCard item={item} />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
