'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function AiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const nodeCount = 12;
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: canvas.width * 0.2 + Math.random() * canvas.width * 0.6,
      y: canvas.height * 0.2 + Math.random() * canvas.height * 0.6,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const edges: [number, number][] = [
      [0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[2,7],[3,8],[4,9],[5,10],[6,11],[7,9],[8,10],[9,11],
    ];

    let t = 0;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n, i) => {
        n.x += n.vx + Math.sin(t + i) * 0.3;
        n.y += n.vy + Math.cos(t + i * 0.7) * 0.3;
        if (n.x < 20 || n.x > canvas.width - 20) n.vx *= -1;
        if (n.y < 20 || n.y > canvas.height - 20) n.vy *= -1;
      });

      // Edges
      edges.forEach(([a, b]) => {
        if (a >= nodes.length || b >= nodes.length) return;
        const pulse = (Math.sin(t * 2 + a) + 1) / 2;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.strokeStyle = `rgba(124,58,237,${0.15 + pulse * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Nodes
      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 2 + i) + 1) / 2;
        const color = i === 0 ? '192,132,252' : i % 2 === 0 ? '124,58,237' : '6,182,212';
        const r = i === 0 ? 8 : 5;

        // Glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3);
        grad.addColorStop(0, `rgba(${color},${0.4 + pulse * 0.3})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${0.8 + pulse * 0.2})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent pointer-events-none"
      />
    </div>
  );
}
