import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
      setProgress(p);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={done ? { opacity: 0, pointerEvents: "none" } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-10"
      >
        <div className="w-20 h-20 border border-primary/30 rounded-2xl rotate-45 animate-pulse-glow" />
        <div className="absolute inset-0 w-20 h-20 border border-accent/40 rounded-2xl -rotate-12 animate-pulse" />
      </motion.div>
      <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">LOADING EXPERIENCE</div>
      <div className="w-64 h-[2px] bg-secondary overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="font-mono text-xs text-primary mt-3">{Math.floor(progress)}%</div>
    </motion.div>
  );
};
