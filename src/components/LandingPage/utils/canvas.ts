import type { Point, MousePosition } from '../types';

export function drawFrame(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  points: Point[],
  mousePos: MousePosition
): void {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  points.forEach(point => {
    // Update position
    point.x += point.vx;
    point.y += point.vy;

    // Bounce off edges
    if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
    if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

    // Calculate distance from mouse
    const dx = mousePos.x - point.x;
    const dy = mousePos.y - point.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 300;

    // Adjust size based on mouse proximity
    const size = distance < maxDist 
      ? point.size * (1 + (maxDist - distance) / maxDist)
      : point.size;

    // Create gradient
    const gradient = ctx.createRadialGradient(
      point.x, point.y, 0,
      point.x, point.y, size
    );

    gradient.addColorStop(0, `hsla(${point.hue}, 70%, 60%, 0.2)`);
    gradient.addColorStop(1, `hsla(${point.hue}, 70%, 60%, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
    ctx.fill();
  });
}