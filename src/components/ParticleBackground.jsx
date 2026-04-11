import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const MAX_PARTICLES = 100;
const CONNECTION_DISTANCE = 150;
const MOUSE_RADIUS = 200;
const SPAWN_INTERVAL = 300;

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: -1000, y: -1000 };
    const particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    function spawnParticle() {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.6 + 0.3,
        radius: Math.random() * 2 + 1.5,
      });

      // Remove oldest if too many
      if (particles.length > MAX_PARTICLES) {
        particles.shift();
      }
    }

    function drawLine(x1, y1, x2, y2, alpha) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(108, 99, 255, ${alpha})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Move — always falling down
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion — one-time 5px nudge away from cursor
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < 30 && mDist > 0 && !p.nudged) {
          p.x += (mdx / mDist) * 5;
          p.y += (mdy / mDist) * 5;
          p.nudged = true;
        }

        if (mDist >= 30) {
          p.nudged = false;
        }

        // Remove if off screen (bottom or sides)
        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          particles.splice(i, 1);
          continue;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(108, 99, 255, 0.6)';
        ctx.fill();

        // Connect to nearby particles
        for (let j = i - 1; j >= 0; j--) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35;
            drawLine(p.x, p.y, p2.x, p2.y, alpha);
          }
        }

        // Connect to mouse with brighter lines
        if (mDist < MOUSE_RADIUS) {
          const alpha = (1 - mDist / MOUSE_RADIUS) * 0.6;
          drawLine(p.x, p.y, mouse.x, mouse.y, alpha);
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    // Spawn particles continuously
    const spawnTimer = setInterval(spawnParticle, SPAWN_INTERVAL);

    // Initial batch at random positions so page isn't empty on load
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.6 + 0.3,
        radius: Math.random() * 2 + 1.5,
      });
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(spawnTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
}

export default ParticleBackground;
