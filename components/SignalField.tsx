"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
};

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastTime = 0;
    let nodes: NodePoint[] = [];

    const seedNodes = () => {
      const count = width < 700 ? 30 : width < 1200 ? 52 : 72;
      nodes = Array.from({ length: count }, (_, index) => {
        const angle = (index / count) * Math.PI * 2;
        const ring = 0.2 + ((index * 37) % 100) / 145;
        return {
          x: width * (0.63 + Math.cos(angle * 1.7) * ring * 0.42),
          y: height * (0.5 + Math.sin(angle) * ring * 0.58),
          vx: Math.cos(angle * 2.3) * 0.2,
          vy: Math.sin(angle * 1.9) * 0.2,
          pulse: (index % 13) / 13,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const t = time * 0.00052;
      const delta = lastTime ? Math.min(2, (time - lastTime) / 16.67) : 1;
      lastTime = time;

      const glow = context.createRadialGradient(
        width * 0.72,
        height * 0.48,
        0,
        width * 0.72,
        height * 0.48,
        Math.max(width, height) * 0.42,
      );
      glow.addColorStop(0, "rgba(37, 99, 235, 0.17)");
      glow.addColorStop(0.38, "rgba(37, 99, 235, 0.055)");
      glow.addColorStop(1, "rgba(37, 99, 235, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (!reducedMotion) {
          node.x += (node.vx + Math.sin(t + i) * 0.055) * delta;
          node.y += (node.vy + Math.cos(t * 1.3 + i * 0.7) * 0.055) * delta;

          if (pointer.active) {
            const dx = pointer.x - node.x;
            const dy = pointer.y - node.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 180 && distance > 1) {
              const force = (1 - distance / 180) * 0.42;
              node.x -= (dx / distance) * force;
              node.y -= (dy / distance) * force;
            }
          }

          if (node.x < width * 0.28) node.vx = Math.abs(node.vx);
          if (node.x > width * 1.03) node.vx = -Math.abs(node.vx);
          if (node.y < -20) node.vy = Math.abs(node.vy);
          if (node.y > height + 20) node.vy = -Math.abs(node.vy);
        }

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          const threshold = width < 700 ? 105 : 138;
          if (distance < threshold) {
            const alpha = (1 - distance / threshold) * 0.3;
            context.strokeStyle = `rgba(111, 150, 244, ${alpha})`;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        const wave = 0.55 + Math.sin(t * 7 + node.pulse * Math.PI * 2) * 0.25;
        context.beginPath();
        context.arc(node.x, node.y, i % 11 === 0 ? 2.4 : 1.25, 0, Math.PI * 2);
        context.fillStyle = `rgba(168, 191, 247, ${Math.max(0.18, wave)})`;
        context.fill();

        if (i % 11 === 0) {
          context.beginPath();
          context.arc(node.x, node.y, 11, 0, Math.PI * 2);
          context.strokeStyle = "rgba(37, 99, 235, 0.14)";
          context.lineWidth = 1;
          context.stroke();
        }
      }

      context.strokeStyle = "rgba(111, 150, 244, 0.14)";
      context.lineWidth = 1;
      const centerX = width * 0.72;
      const centerY = height * 0.48;
      [92, 156, 228].forEach((radius, index) => {
        context.setLineDash(index % 2 === 0 ? [2, 9] : [1, 12]);
        context.beginPath();
        context.ellipse(centerX, centerY, radius, radius * 0.68, t * (index + 1) * 0.28, 0, Math.PI * 2);
        context.stroke();
      });
      context.setLineDash([]);

      if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    resize();
    if (reducedMotion) draw(0);
    else animationFrame = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}
