import { useEffect, useState } from "react";

export const ParticlesBg = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const arr = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ${p.delay}s ease-in-out infinite`,
            boxShadow: `0 0 ${p.size * 4}px hsl(186 100% 60% / 0.6)`,
          }}
        />
      ))}
    </div>
  );
};
