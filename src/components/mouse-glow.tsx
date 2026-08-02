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
    primary: { r: 239, g: 68, b: 68, a: 0.15 }, // Fire Red/Crimson (Red-500)
    secondary: { r: 249, g: 115, b: 22, a: 0.18 }, // Amber/Orange (Orange-500)
    core: { r: 254, g: 240, b: 138, a: 0.4 }, // Bright Fire Yellow (Yellow-200)
    trail: { r: 251, g: 146, b: 60, a: 0.85 }, // Hot Spark (Orange-400)
  },
  light: {
    primary: { r: 254, g: 202, b: 202, a: 0.14 }, // Soft warm red
    secondary: { r: 254, g: 215, b: 170, a: 0.18 }, // Soft warm orange
    core: { r: 254, g: 240, b: 138, a: 0.45 }, // Soft warm yellow
    trail: { r: 249, g: 115, b: 22, a: 0.6 }, // Soft amber spark
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

    // Viewport size is cached here and refreshed on resize only. Reading
    // window.innerWidth/innerHeight inside the rAF loop forces a layout on
    // every frame, which Lighthouse reports as a forced reflow.
    const viewport = { width: 0, height: 0 };

    // Handle high DPI scaling for crisp visuals
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      viewport.width = window.innerWidth;
      viewport.height = window.innerHeight;
      canvas.width = viewport.width * dpr;
      canvas.height = viewport.height * dpr;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
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

      ctx.clearRect(0, 0, viewport.width, viewport.height);

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

        // Introduce a natural fire flicker
        const time = Date.now() * 0.006;
        const flicker =
          1.0 + Math.sin(time) * 0.04 + (Math.random() - 0.5) * 0.03;

        // 1. Draw Large Outer Ambient Glow (Soft Fire Red)
        const primaryRadGrd = ctx.createRadialGradient(
          glow.primaryX,
          glow.primaryY,
          0,
          glow.primaryX,
          glow.primaryY,
          380 * flicker
        );
        primaryRadGrd.addColorStop(
          0,
          toRgbString(colors.primary, colors.primary.a * mouse.globalOpacity)
        );
        primaryRadGrd.addColorStop(
          0.5,
          toRgbString(
            colors.primary,
            colors.primary.a * 0.35 * mouse.globalOpacity
          )
        );
        primaryRadGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = primaryRadGrd;
        ctx.beginPath();
        ctx.arc(glow.primaryX, glow.primaryY, 380 * flicker, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw Secondary Inner Glow (Flame Orange)
        const secondaryRadGrd = ctx.createRadialGradient(
          glow.secondaryX,
          glow.secondaryY,
          0,
          glow.secondaryX,
          glow.secondaryY,
          220 * flicker
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
        ctx.arc(
          glow.secondaryX,
          glow.secondaryY,
          220 * flicker,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // 3. Draw Core Glow (Bright Yellow/Gold Center)
        const coreFlicker =
          1.0 + Math.sin(time * 1.8) * 0.08 + (Math.random() - 0.5) * 0.05;
        const coreRadGrd = ctx.createRadialGradient(
          glow.coreX,
          glow.coreY,
          0,
          glow.coreX,
          glow.coreY,
          75 * coreFlicker
        );
        coreRadGrd.addColorStop(
          0,
          toRgbString(colors.core, colors.core.a * mouse.globalOpacity)
        );
        coreRadGrd.addColorStop(
          0.5,
          toRgbString(colors.core, colors.core.a * 0.3 * mouse.globalOpacity)
        );
        coreRadGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = coreRadGrd;
        ctx.beginPath();
        ctx.arc(glow.coreX, glow.coreY, 75 * coreFlicker, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Update and Draw elegant sparks/embers drifting upwards
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Convection draft: apply upward acceleration and wave sway
        p.vy -= 0.08;
        p.vx += Math.sin(p.y * 0.03 + p.alpha * 10) * 0.08;

        p.vx *= 0.95; // drag/damping
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // Shrink ember size as it cools down
        p.size = Math.max(0.5, p.size - p.decay * 6);

        // Cool down color: yellow/orange -> red -> dark red
        p.color.r = Math.min(255, p.color.r + 2);
        p.color.g = Math.max(10, p.color.g - 3.5);
        p.color.b = Math.max(0, p.color.b - 3);

        p.alpha -= p.decay;

        if (p.alpha <= 0.005 || p.size <= 0.6) {
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
        particleGrd.addColorStop(0.4, toRgbString(p.color, p.color.a * 0.7)); // hot center
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

      // Periodic floating particle trail generation (upward drifting embers)
      const now = Date.now();
      if (now - lastEmitTime.current > 30) {
        lastEmitTime.current = now;
        const count = Math.random() > 0.5 ? 2 : 1;
        const colors = colorsRef.current;

        for (let k = 0; k < count; k++) {
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 16,
            y: e.clientY + (Math.random() - 0.5) * 16,
            vx: (Math.random() - 0.5) * 1.0,
            vy: -Math.random() * 1.5 - 0.5, // initial upward rise
            alpha: Math.random() * 0.6 + 0.4,
            size: Math.random() * 6 + 3, // embers are smaller and sharper
            color:
              Math.random() > 0.35 ? { ...colors.core } : { ...colors.trail },
            decay: Math.random() * 0.015 + 0.008,
          });
        }
      }
    };

    // Elegant tactile burst of particles on click
    const handleMouseClick = (e: MouseEvent) => {
      const colors = colorsRef.current;
      const particleCount = 20; // more sparks on click
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.0, // upward bias
          alpha: 1.0,
          size: Math.random() * 10 + 4,
          color: Math.random() > 0.5 ? { ...colors.core } : { ...colors.trail },
          decay: Math.random() * 0.02 + 0.01,
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
