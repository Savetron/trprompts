
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: getRandomColor(),
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    function getRandomColor() {
      const colors = ['#9b87f5', '#f87dff', '#7e69ab', '#6e59a5'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each particle
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset if out of bounds
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.x = Math.random() * canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(drawParticles);
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    drawParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b0764_0%,rgba(0,0,0,0)_50%)] animate-pulse" />
      
      {/* Canvas for particle animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60"
      />
      
      {/* Animated blobs */}
      <div className="absolute w-[500px] h-[500px] left-[10%] top-[20%] bg-purple-500/20 rounded-full blur-3xl animate-blob1 -z-10" />
      <div className="absolute w-[600px] h-[600px] right-[5%] top-[10%] bg-blue-500/20 rounded-full blur-3xl animate-blob2 -z-10" />
      <div className="absolute w-[500px] h-[500px] left-[30%] bottom-[5%] bg-pink-500/15 rounded-full blur-3xl animate-blob3 -z-10" />
      <div className="absolute w-[700px] h-[700px] right-[20%] bottom-[10%] bg-purple-700/10 rounded-full blur-3xl animate-blob4 -z-10" />
      
      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent animate-beam1" />
      <div className="absolute top-0 left-2/4 w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-purple-300/30 to-transparent animate-beam2" />
      <div className="absolute top-0 left-3/4 w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-pink-500/30 to-transparent animate-beam3" />
      
      {/* Glowing stars */}
      <div className="stars-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default AnimatedBackground;
