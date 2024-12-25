```typescript
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function initCanvasAnimation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create points for animation
  const points: Point[] = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2
  }));

  // Animation function
  function animate() {
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw points
    points.forEach(point => {
      // Update position
      point.x += point.vx;
      point.y += point.vy;

      // Bounce off edges
      if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
      if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

      // Draw gradient at point
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, 100
      );
      gradient.addColorStop(0, 'rgba(64, 144, 255, 0.15)'); // Primary blue
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)'); // Secondary purple
      gradient.addColorStop(1, 'rgba(34, 211, 238, 0.15)'); // Accent cyan

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 100, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', resizeCanvas);
  };
}
```