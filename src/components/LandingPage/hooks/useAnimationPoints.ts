import { useMemo } from 'react';
import { Point } from '../types';

export function useAnimationPoints(count = 30): Point[] {
  return useMemo(() => 
    Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20, // Even smaller size range
      vx: (Math.random() - 0.5) * 0.15, // Even slower movement
      vy: (Math.random() - 0.5) * 0.15,
      // Deep blues and purples (230-270)
      hue: Math.random() * 40 + 230
    })), 
  [count]);
}