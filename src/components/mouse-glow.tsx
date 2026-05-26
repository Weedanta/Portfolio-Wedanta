'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface RGB {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: RGB;
  decay: number;
}

const PALETTE = {
  dark: {
    primary: { r: 99, g: 102, b: 241, a: 0.12 }, // Indigo
    secondary: { r: 244, g: 63, b: 94, a: 0.08 }, // Rose
    core: { r: 253, g: 224, b: 71, a: 0.2 }, // Amber/Gold
    trail: { r: 165, g: 180, b: 252, a: 0.35 }, // Light Indigo
  },
  light: {
    primary: { r: 147, g: 197, b: 253, a: 0.06 }, // Sky Blue
    secondary: { r: 253, g: 164, b: 186, a: 0.04 }, // Pink
    core: { r: 255, g: 255, b: 255, a: 0.5 }, // White
    trail: { r: 147, g: 197, b: 253, a: 0.25 }, // Sky Blue
  },
};

export const MouseGlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  // Track resolved theme inside ref to avoid tearing or unnecessary re-renders in paint loops
  const themeRef = useRef<'dark' | 'light'>('dark');

  // Smooth colors transition tracking
  const colorsRef = useRef({
    primary: { ...PALETTE.dark.primary },
    secondary: { ...PALETTE.dark.secondary },
    core: { ...PALETTE.dark.core },
    trail: { ...PALETTE.dark.trail },
  });

  // Track coordinates and visibility smoothly
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isInitialized: false,
    isVisible: false,
    globalOpacity: 0, // smoothly fade in/out on enter/leave
  });

  // Multi-layered offset coordinate easing
  const glowRef = useRef({
    primaryX: 0,
    primaryY: 0,
    secondaryX: 0,
    secondaryY: 0,
    coreX: 0,
    coreY: 0,
  });

  const particlesRef = useRef<Particle[]>([]);
  const lastEmitTime = useRef(0);

  // Sync current theme with ref
  useEffect(() => {
    themeRef.current = resolvedTheme === 'light' ? 'light' : 'dark';
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let isRunning = true;

    // Handle high DPI scaling for crisp visuals
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color conversion
    const toRgbString = (rgb: RGB, alphaOverride?: number) => {
      const a = alphaOverride !== undefined ? alphaOverride : rgb.a;
      return `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${a})`;
    };

    // Color interpolation
    const interpolateColor = (curr: RGB, target: RGB, rate = 0.08): RGB => {
      return {
        r: curr.r + (target.r - curr.r) * rate,
        g: curr.g + (target.g - curr.g) * rate,
        b: curr.b + (target.b - curr.b) * rate,
        a: curr.a + (target.a - curr.a) * rate,
      };
    };

    // Main animation and paint loop
    const render = () => {
      if (!isRunning) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const glow = glowRef.current;
      const colors = colorsRef.current;
      const targetPalette = PALETTE[themeRef.current];

      // Smoothly morph color channels between themes
      colors.primary = interpolateColor(colors.primary, targetPalette.primary);
      colors.secondary = interpolateColor(
        colors.secondary,
        targetPalette.secondary
      );
      colors.core = interpolateColor(colors.core, targetPalette.core);
      colors.trail = interpolateColor(colors.trail, targetPalette.trail);

      // Smoothly fade global opacity in or out
      const targetOpacity = mouse.isVisible && mouse.isInitialized ? 1 : 0;
      mouse.globalOpacity += (targetOpacity - mouse.globalOpacity) * 0.08;

      if (mouse.isInitialized && mouse.globalOpacity > 0.001) {
        // Multi-tier spring-like easing to create organic fluid tracking
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;

        glow.primaryX += (mouse.targetX - glow.primaryX) * 0.06;
        glow.primaryY += (mouse.targetY - glow.primaryY) * 0.06;

        glow.secondaryX += (mouse.targetX - glow.secondaryX) * 0.04;
        glow.secondaryY += (mouse.targetY - glow.secondaryY) * 0.04;

        glow.coreX += (mouse.targetX - glow.coreX) * 0.18;
        glow.coreY += (mouse.targetY - glow.coreY) * 0.18;

        // 1. Draw Large Outer Ambient Glow (Soft Indigo)
        const primaryRadGrd = ctx.createRadialGradient(
          glow.primaryX,
          glow.primaryY,
          0,
          glow.primaryX,
          glow.primaryY,
          380
        );
        primaryRadGrd.addColorStop(
          0,
          toRgbString(colors.primary, colors.primary.a * mouse.globalOpacity)
        );
        primaryRadGrd.addColorStop(
          0.5,
          toRgbString(
            colors.primary,
            colors.primary.a * 0.3 * mouse.globalOpacity
          )
        );
        primaryRadGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = primaryRadGrd;
        ctx.beginPath();
        ctx.arc(glow.primaryX, glow.primaryY, 380, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw Secondary Inner Glow (Soft Rose)
        const secondaryRadGrd = ctx.createRadialGradient(
          glow.secondaryX,
          glow.secondaryY,
          0,
          glow.secondaryX,
          glow.secondaryY,
          220
        );
        secondaryRadGrd.addColorStop(
          0,
          toRgbString(
            colors.secondary,
            colors.secondary.a * mouse.globalOpacity
          )
        );
        secondaryRadGrd.addColorStop(
          0.6,
          toRgbString(
            colors.secondary,
            colors.secondary.a * 0.25 * mouse.globalOpacity
          )
        );
        secondaryRadGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = secondaryRadGrd;
        ctx.beginPath();
        ctx.arc(glow.secondaryX, glow.secondaryY, 220, 0, Math.PI * 2);
        ctx.fill();

        // 3. Draw Core Glow (Bright Amber/Gold)
        const coreRadGrd = ctx.createRadialGradient(
          glow.coreX,
          glow.coreY,
          0,
          glow.coreX,
          glow.coreY,
          70
        );
        coreRadGrd.addColorStop(
          0,
          toRgbString(colors.core, colors.core.a * mouse.globalOpacity)
        );
        coreRadGrd.addColorStop(
          0.5,
          toRgbString(colors.core, colors.core.a * 0.2 * mouse.globalOpacity)
        );
        coreRadGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = coreRadGrd;
        ctx.beginPath();
        ctx.arc(glow.coreX, glow.coreY, 70, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Update and Draw Elegant Star-Dust Particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95; // drag/damping
        p.vy *= 0.95;
        p.alpha -= p.decay;

        if (p.alpha <= 0.005) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        const particleGrd = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );
        particleGrd.addColorStop(0, toRgbString(p.color, p.color.a));
        particleGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = particleGrd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0; // Reset global alpha for next paint cycle

      animationId = requestAnimationFrame(render);
    };

    render();

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      const glow = glowRef.current;

      if (!mouse.isInitialized) {
        // First move initialization: snap glow coordinates directly to cursor to avoid fly-in jumps
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;

        glow.primaryX = e.clientX;
        glow.primaryY = e.clientY;
        glow.secondaryX = e.clientX;
        glow.secondaryY = e.clientY;
        glow.coreX = e.clientX;
        glow.coreY = e.clientY;

        mouse.isInitialized = true;
      } else {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
      }

      mouse.isVisible = true;

      // Periodic floating particle trail generation
      const now = Date.now();
      if (now - lastEmitTime.current > 35) {
        lastEmitTime.current = now;
        const count = Math.random() > 0.65 ? 2 : 1;
        const colors = colorsRef.current;

        for (let k = 0; k < count; k++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 0.7 + 0.2;
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 8,
            y: e.clientY + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: Math.random() * 0.5 + 0.35,
            size: Math.random() * 12 + 6,
            color: { ...colors.trail },
            decay: Math.random() * 0.012 + 0.008,
          });
        }
      }
    };

    // Elegant tactile burst of particles on click
    const handleMouseClick = (e: MouseEvent) => {
      const colors = colorsRef.current;
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1.2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1.0,
          size: Math.random() * 16 + 8,
          color: Math.random() > 0.5 ? { ...colors.core } : { ...colors.trail },
          decay: Math.random() * 0.024 + 0.016,
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isVisible = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isVisible = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 block"
    />
  );
};
