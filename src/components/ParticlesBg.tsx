import { useEffect, useRef } from "react";

export const ParticlesBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type Star = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      tw: number;
      twSpeed: number;
    };

    const COUNT = Math.floor((width * height) / 9000);
    const stars: Star[] = Array.from({ length: Math.max(80, COUNT) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      tw: Math.random() * Math.PI * 2,
      twSpeed: Math.random() * 0.02 + 0.005,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        s.tw += s.twSpeed;

        // wrap around screen
        if (s.x < -2) s.x = width + 2;
        else if (s.x > width + 2) s.x = -2;
        if (s.y < -2) s.y = height + 2;
        else if (s.y > height + 2) s.y = -2;

        const alpha = 0.4 + Math.sin(s.tw) * 0.35;
        const glow = s.r * 4;

        ctx.beginPath();
        ctx.fillStyle = `hsla(186, 100%, 70%, ${alpha})`;
        ctx.shadowColor = "hsla(186, 100%, 60%, 0.9)";
        ctx.shadowBlur = glow;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden
    />
  );
};
