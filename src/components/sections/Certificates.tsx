import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, FileBadge, ExternalLink } from "lucide-react";

const certs = [
  { 
    title: "Python for Data Science", 
    issuer: "Cognitive Class", 
    year: "Issued Oct 2025", 
    color: "from-primary/20 to-transparent",
    fileUrl: "/certificate/1770091044089.jpeg" // ←  file ka path  (PDF ya Image)
  },
  { 
    title: "Gemini Certified Educator", 
    issuer: "Google", 
    year: "Issued Oct 2025", 
    color: "from-accent/20 to-transparent",
    fileUrl: "/certificate/1770090902323.jpeg"
  },
  { 
    title: "Foundation level in Data science", 
    issuer: "Indian Institute of Technology, Madras", 
    year: "Issued Dec 2025", 
    color: "from-primary/20 to-accent/10",
    fileUrl: "/certificate/e6aec137af14b734e2c4423f329bc478598d7372f43efe7359edae12188e0da5-2.pdf"
  },
  { 
    title: "Droidrun DecSprint 2026", 
    issuer: "Indian Institute of Technology, Patna", 
    year: "Issued jan 2026", 
    color: "from-accent/20 to-transparent",
    fileUrl: "/certificate/b9b2dbb5-ce3a-4975-8e23-153f0a7da48b.jpg"
  },
  { 
    title: "Microsoft Excel with A.I Masterclass", 
    issuer: "SkillCourse", 
    year: "Issued Feb 2026", 
    color: "from-accent/20 to-primary/10",
    fileUrl: "/certificate/Certificate_SC-94C7B5DDC7.png"
  },
  { 
    title: "Python Coding Challenge 4.0", 
    issuer: "IITM Paradox'25", 
    year: "Issued July 2025", 
    color: "from-primary/20 to-transparent",
    fileUrl: "/certificate/PRDX.IIT Madras.pdf"
  },
  { 
    title: "Python Coder", 
    issuer: "Kaggle", 
    year: "Issued Nov 2025", 
    color: "from-accent/20 to-transparent",
    fileUrl: "/certificate/Python Coder.png"
  },
  { 
    title: "Google Developer Ranchi", 
    issuer: "Google", 
    year: "Issued Jan 2026", 
    color: "from-accent/20 to-transparent",
    fileUrl: "/certificate/Certificate_SC-94C7B5DDC7.png"
  },
  { 
    title: "Chess Championship", 
    issuer: "IITM Paradox'25", 
    year: "Issued July 2025", 
    color: "from-accent/20 to-transparent",
    fileUrl: "/certificate/PRDX.IIT Madras.pdf"
  },
];

export const Certificates = () => {
  const [active, setActive] = useState<number | null>(null);

  // Helper function to check if the file is a PDF
  const isPdf = (url?: string) => url?.toLowerCase().endsWith(".pdf");

  return (
    <section id="certificates" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">/ 06 — CERTIFICATES</div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold">
            Always <span className="text-white">learning.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.button
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(i)}
              className="group glass glass-hover rounded-3xl p-6 text-left relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <FileBadge className="w-6 h-6 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.issuer}</p>
                <div className="mt-6 font-mono text-[10px] tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  VIEW CERTIFICATE <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass rounded-3xl p-6 md:p-8 neon-border max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${certs[active].color} opacity-20 pointer-events-none`} />
              
              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <FileBadge className="w-10 h-10 text-primary shrink-0" />
                  <div>
                    <div className="font-mono text-xs text-muted-foreground mb-1">CERTIFICATE OF COMPLETION · {certs[active].year}</div>
                    <h3 className="font-display text-2xl font-semibold mb-1">{certs[active].title}</h3>
                    <p className="text-muted-foreground text-sm">Issued by {certs[active].issuer}</p>
                  </div>
                </div>

                {/* Certificate Preview Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-border/60 overflow-hidden bg-black/20">
                  {certs[active].fileUrl ? (
                    isPdf(certs[active].fileUrl) ? (
                      // Agar PDF hai toh Iframe use hoga
                      <iframe
                        src={`${certs[active].fileUrl}#toolbar=0`}
                        className="w-full h-full rounded-2xl"
                        title={certs[active].title}
                      />
                    ) : (
                      // Agar Image (.jpg, .png etc) hai toh img tag use hoga
                      <img
                        src={certs[active].fileUrl}
                        alt={certs[active].title}
                        className="w-full h-full object-contain rounded-2xl"
                      />
                    )
                  ) : (
                    // Fallback agar koi file link na ho
                    <div className="w-full h-full grid-bg flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="font-display text-4xl gradient-text font-semibold mb-2">Arvind k.</div>
                        <div className="font-mono text-xs tracking-widest text-muted-foreground">VERIFIED · {certs[active].issuer.toUpperCase()}</div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* External Open Link */}
                {certs[active].fileUrl && (
                  <div className="mt-4 text-right">
                    <a 
                      href={certs[active].fileUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:underline"
                    >
                      Open in new tab <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};