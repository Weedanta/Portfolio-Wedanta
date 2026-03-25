'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

const TRAIL_MAX = 12;
const TRAIL_INTERVAL = 40;

const GLOW_LAYERS = [
  {
    size: 700,
    offsetX: 0,
    offsetY: 0,
    blur: 20,
    speed: '0.08s linear',
    opacityKey: 'primary',
  },
  {
    size: 500,
    offsetX: 80,
    offsetY: -60,
    blur: 30,
    speed: '0.15s ease-out',
    opacityKey: 'secondary',
  },
  {
    size: 400,
    offsetX: -100,
    offsetY: 80,
    blur: 25,
    speed: '0.22s ease-out',
    opacityKey: 'accent',
  },
] as const;

const COLORS = {
  dark: {
    primary: 'rgba(255,255,255,0.12)',
    secondary: 'rgba(255,255,255,0.08)',
    accent: 'rgba(255,255,255,0.06)',
    trail: 'rgba(255,255,255,0.15)',
  },
  light: {
    primary: 'rgba(0,0,0,0.06)',
    secondary: 'rgba(0,0,0,0.04)',
    accent: 'rgba(0,0,0,0.03)',
    trail: 'rgba(0,0,0,0.06)',
  },
};

export const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const { resolvedTheme } = useTheme();
  const trailIdRef = useRef(0);
  const animationRef = useRef<number>();
  const lastTrailTime = useRef(0);

  const updateTrail = useCallback(() => {
    setTrail((prev) =>
      prev
        .map((dot) => ({
          ...dot,
          opacity: dot.opacity * 0.92,
          scale: dot.scale * 0.97,
        }))
        .filter((dot) => dot.opacity > 0.01)
    );
    animationRef.current = requestAnimationFrame(updateTrail);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateTrail);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [updateTrail]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const now = Date.now();
      if (now - lastTrailTime.current > TRAIL_INTERVAL) {
        lastTrailTime.current = now;
        trailIdRef.current += 1;
        setTrail((prev) => [
          ...prev.slice(-TRAIL_MAX),
          {
            id: trailIdRef.current,
            x: e.clientX,
            y: e.clientY,
            opacity: 0.6,
            scale: 1,
          },
        ]);
      }
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [isVisible]);

  const palette = COLORS[resolvedTheme === 'dark' ? 'dark' : 'light'];

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      {GLOW_LAYERS.map(
        ({ size, offsetX, offsetY, blur, speed, opacityKey }) => (
          <div
            key={opacityKey}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: position.x + offsetX,
              top: position.y + offsetY,
              width: size,
              height: size,
              background: `radial-gradient(circle, ${palette[opacityKey]} 0%, transparent 70%)`,
              filter: `blur(${blur}px)`,
              transition: `left ${speed}, top ${speed}`,
            }}
          />
        )
      )}

      {trail.map((dot) => (
        <div
          key={dot.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: 80 * dot.scale,
            height: 80 * dot.scale,
            background: `radial-gradient(circle, ${palette.trail} 0%, transparent 70%)`,
            opacity: dot.opacity,
            filter: 'blur(12px)',
          }}
        />
      ))}
    </div>
  );
};
