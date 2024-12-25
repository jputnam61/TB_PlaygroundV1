import { useEffect, useRef } from 'react';
import { useAnimationPoints } from './hooks/useAnimationPoints';
import { drawFrame } from './utils/canvas';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const points = useAnimationPoints();
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      drawFrame(ctx, canvas, points, mouseRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [points]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ 
        filter: 'blur(80px)',
        opacity: 0.8
      }}
    />
  );
}