import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const canvasRef = useRef(null);
  const meshCanvasRef = useRef(null);
  
  const stages = ['RAW', 'BRONZE', 'SILVER', 'GOLD'];

  // Cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animated Gradient Mesh Background
  useEffect(() => {
    const canvas = meshCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    function drawMesh() {
      time += 0.005;
      
      // Create gradient
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 200,
        canvas.height * 0.3 + Math.cos(time) * 150,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.6
      );
      gradient1.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
      gradient1.addColorStop(1, 'transparent');

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.8) * 200,
        canvas.height * 0.6 + Math.sin(time * 0.8) * 150,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.5
      );
      gradient2.addColorStop(0, 'rgba(0, 212, 255, 0.4)');
      gradient2.addColorStop(1, 'transparent');

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 1.2) * 150,
        canvas.height * 0.8 + Math.cos(time * 1.2) * 100,
        0,
        canvas.width * 0.5,
        canvas.height * 0.8,
        canvas.width * 0.4
      );
      gradient3.addColorStop(0, 'rgba(236, 72, 153, 0.3)');
      gradient3.addColorStop(1, 'transparent');

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(drawMesh);
    }

    drawMesh();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3D Grid + Flowing Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    
    // Grid lines
    const gridLines = [];
    const gridSize = 50;
    const perspective = 600;

    class Particle {
      constructor() {
        this.reset();
        this.color = ['#00d4ff', '#a855f7', '#ec4899', '#fbbf24'][Math.floor(Math.random() * 4)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.vz = -2;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        if (this.z < 1 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
          this.z = 1000;
        }
      }

      draw() {
        const scale = perspective / (perspective + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = this.size * scale;

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20 * scale;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Create grid
    for (let i = -10; i <= 10; i++) {
      gridLines.push({
        x1: i * gridSize,
        y1: -500,
        x2: i * gridSize,
        y2: 500
      });
      gridLines.push({
        x1: -500,
        y1: i * gridSize,
        x2: 500,
        y2: i * gridSize
      });
    }

    let gridZ = 0;

    function drawGrid() {
      gridZ += 2;
      if (gridZ > gridSize) gridZ = 0;

      gridLines.forEach(line => {
        const z = 300 + gridZ;
        const scale = perspective / (perspective + z);
        
        const x1 = (line.x1) * scale + canvas.width / 2;
        const y1 = (line.y1) * scale + canvas.height - 100;
        const x2 = (line.x2) * scale + canvas.width / 2;
        const y2 = (line.y2) * scale + canvas.height - 100;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * scale})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - distance / 150) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-2026-ultimate">
      <canvas ref={meshCanvasRef} className="mesh-canvas"></canvas>
      <canvas ref={canvasRef} className="particle-grid-canvas"></canvas>
      
      <div className="hero-2026-content">
        {/* Pipeline Stages */}
        <motion.div 
          className="pipeline-stages-2026"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              className={`stage-badge-2026 ${index === currentStage ? 'active' : ''} ${index < currentStage ? 'completed' : ''}`}
              animate={{
                scale: index === currentStage ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="stage-glow"></div>
              <span>{stage}</span>
              {index < stages.length - 1 && <div className="stage-arrow">→</div>}
            </motion.div>
          ))}
        </motion.div>

        {/* Video Circle */}
        <motion.div 
          className="video-2026-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="holographic-rings">
            <div className="holo-ring ring-1"></div>
            <div className="holo-ring ring-2"></div>
            <div className="holo-ring ring-3"></div>
            <div className="holo-ring ring-4"></div>
          </div>
          
          <div className="video-content-2026">
            <motion.div 
              className="play-button-2026"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="play-glow"></div>
              <span>▶</span>
            </motion.div>
          </div>

          <motion.div 
            className="stream-init-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            INITIALIZE_STREAM()
          </motion.div>
        </motion.div>

        {/* Stats + Title */}
        <motion.div 
          className="hero-info-2026"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="live-stats-2026">
            <div className="stat-box-2026">
              <div className="stat-number-2026">1.2M</div>
              <div className="stat-label-2026">records/sec</div>
            </div>
            <div className="stat-box-2026">
              <div className="stat-number-2026">99.9%</div>
              <div className="stat-label-2026">uptime</div>
            </div>
            <div className="stat-box-2026">
              <div className="stat-number-2026">&lt;30ms</div>
              <div className="stat-label-2026">latency</div>
            </div>
          </div>

          <h1 className="hero-title-2026">
            <span className="name-glow">Dileep Anagandula</span>
            <span className="role-glow">Real-Time Data Engineer</span>
          </h1>

          <p className="hero-tagline-2026">
            Building pipelines that process <span className="highlight-2026">millions of records</span> per second in production
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-2026"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;