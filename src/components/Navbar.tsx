import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#footer" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container">
        <nav className={`glass rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? "shadow-elegant" : ""}`}>
          <a href="#hero" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="gradient-text">ARVIND K.</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-secondary/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#footer"
            className="font-mono text-xs px-4 py-2 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition-all hover:shadow-glow"
          >
            Let's talk →
          </a>
        </nav>
      </div>
    </motion.header>
  );
};
