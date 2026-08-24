'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  curlAngle: number;
  curlRadius: number;
  size: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  delay: number;
  mx: number;
  my: number;
  mvx: number;
  mvy: number;
}

export default function HeroIntroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dScale = window.devicePixelRatio || 1;
    let dWidth = window.innerWidth;
    let dHeight = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number | null = null;
    let isMouseHovering = false;
    let mousePos = { x: -9999, y: -9999 };
    let time = 0;
    let currentProgress = 0;

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      dScale = window.devicePixelRatio || 1;
      dWidth = window.innerWidth;
      dHeight = window.innerHeight;

      canvas.width = Math.floor(dWidth * dScale);
      canvas.height = Math.floor(dHeight * dScale);
      canvas.style.width = `${dWidth}px`;
      canvas.style.height = `${dHeight}px`;
      ctx.setTransform(dScale, 0, 0, dScale, 0, 0);
    }

    function generateParticles() {
      if (!ctx || dWidth === 0 || dHeight === 0) return;

      const offscreen = document.createElement('canvas');
      offscreen.width = dWidth;
      offscreen.height = dHeight;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      const isMobile = dWidth < 768;
      const fontSize = isMobile 
        ? Math.min(Math.max(dWidth * 0.086, 28), 38)
        : Math.min(Math.max(dWidth * 0.10, 44), 135);
      const tracking = isMobile ? fontSize * 0.14 : fontSize * 0.22;

      offCtx.font = `${fontSize}px "Anurati", sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      const text = 'WEBERSEEK';
      const centerX = dWidth / 2;
      const centerY = isMobile ? dHeight * 0.40 : dHeight * 0.48;

      const letters = text.split('');
      let totalWidth = 0;
      const letterWidths = letters.map(char => {
        const w = offCtx.measureText(char).width;
        totalWidth += w;
        return w;
      });
      totalWidth += tracking * (letters.length - 1);

      const startX = centerX - (totalWidth / 2);

      const fullGrad = offCtx.createLinearGradient(
        startX, centerY - fontSize * 0.5,
        startX + totalWidth, centerY + fontSize * 0.5
      );
      fullGrad.addColorStop(0.00, '#ffffff');
      fullGrad.addColorStop(0.18, '#38bdf8');
      fullGrad.addColorStop(0.38, '#60a5fa');
      fullGrad.addColorStop(0.60, '#818cf8');
      fullGrad.addColorStop(0.82, '#a855f7');
      fullGrad.addColorStop(1.00, '#22d3ee');

      offCtx.fillStyle = fullGrad;

      let drawX = startX;
      letters.forEach((char, idx) => {
        const charW = letterWidths[idx];
        const posX = drawX + (charW / 2);
        offCtx.fillText(char, posX, centerY);
        drawX += charW + tracking;
      });

      const imgData = offCtx.getImageData(0, 0, dWidth, dHeight);
      const data = imgData.data;
      particles = [];

      const step = dWidth < 768 ? 3 : 2;
      const minAlpha = 30;

      for (let y = 0; y < dHeight; y += step) {
        for (let x = 0; x < dWidth; x += step) {
          const index = (y * dWidth + x) * 4;
          const alpha = data[index + 3];

          if (alpha > minAlpha) {
            const posX = x;
            const posY = y;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            const angleFromCenter = Math.atan2(posY - centerY, posX - centerX);
            const scatterAngle = angleFromCenter + (Math.random() - 0.5) * 1.2;
            const scatterSpeed = Math.random() * 26 + 10;
            const upwardBoost = -Math.random() * 18 - 8;

            const normalizedX = Math.max(0, Math.min(1, (posX - (centerX - totalWidth / 2)) / totalWidth));
            const delay = normalizedX * 0.35 + (Math.random() * 0.2);

            particles.push({
              ox: posX,
              oy: posY,
              x: posX,
              y: posY,
              vx: Math.cos(scatterAngle) * scatterSpeed,
              vy: Math.sin(scatterAngle) * scatterSpeed + upwardBoost,
              curlAngle: Math.random() * Math.PI * 2,
              curlRadius: Math.random() * 70 + 25,
              size: Math.random() * 1.8 + 1.2,
              color: `rgba(${r}, ${g}, ${b},`,
              alpha: alpha / 255,
              targetAlpha: alpha / 255,
              delay: delay,
              mx: 0,
              my: 0,
              mvx: 0,
              mvy: 0,
            });
          }
        }
      }
    }

    function onPointerMove(clientX: number, clientY: number) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.x = clientX - rect.left;
      mousePos.y = clientY - rect.top;
      isMouseHovering = true;
    }

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const transitionDistance = Math.max(window.innerHeight, 500);
      const prog = Math.min(Math.max(scrollY / transitionDistance, 0), 1);
      currentProgress = prog;
      setScrollProgress(prog);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY), { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      isMouseHovering = false;
      mousePos.x = -9999;
      mousePos.y = -9999;
    });

    window.addEventListener('touchend', () => {
      isMouseHovering = false;
      mousePos.x = -9999;
      mousePos.y = -9999;
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      generateParticles();
    });

    resizeCanvas();
    generateParticles();

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        generateParticles();
      });
    }

    function renderLoop() {
      if (!ctx) return;
      time += 0.02;
      ctx.clearRect(0, 0, dWidth, dHeight);

      const progress = currentProgress;

      if (progress < 0.98 && particles.length > 0) {
        const len = particles.length;
        const maxDist = 115;
        const springK = 0.09;
        const damping = 0.84;

        for (let i = 0; i < len; i++) {
          const p = particles[i];

          if (progress < 0.12 && isMouseHovering) {
            const curX = p.ox + p.mx;
            const curY = p.oy + p.my;
            const dx = curX - mousePos.x;
            const dy = curY - mousePos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist && dist > 0) {
              const norm = 1 - (dist / maxDist);
              const force = norm * norm * 38;
              p.mvx += (dx / dist) * force;
              p.mvy += (dy / dist) * force;
            }
          }

          p.mvx += -p.mx * springK;
          p.mvy += -p.my * springK;
          p.mvx *= damping;
          p.mvy *= damping;
          p.mx += p.mvx;
          p.my += p.mvy;

          if (Math.abs(p.mx) < 0.005 && Math.abs(p.mvx) < 0.005) { p.mx = 0; p.mvx = 0; }
          if (Math.abs(p.my) < 0.005 && Math.abs(p.mvy) < 0.005) { p.my = 0; p.mvy = 0; }

          if (progress === 0) {
            ctx.fillStyle = `${p.color} ${p.alpha})`;
            ctx.fillRect(p.ox + p.mx, p.oy + p.my, p.size, p.size);
          } else {
            const pProgress = Math.min(Math.max((progress - p.delay * 0.15) / 0.38, 0), 1);

            if (pProgress > 0) {
              const easeDist = Math.pow(pProgress, 1.1) * (Math.max(dWidth, dHeight) * 0.95 + 300);
              const swirlX = Math.sin(time * 2.8 + p.curlAngle) * (p.curlRadius * 2.8 + 50) * pProgress;
              const swirlY = Math.cos(time * 2.4 + p.curlAngle) * (p.curlRadius * 2.8 + 50) * pProgress - (Math.pow(pProgress, 1.05) * (dHeight * 0.65 + 180));

              p.x = p.ox + p.mx * (1 - pProgress) + p.vx * (pProgress * 12) + Math.cos(p.curlAngle) * (easeDist * 0.5) + swirlX;
              p.y = p.oy + p.my * (1 - pProgress) + p.vy * (pProgress * 12) + Math.sin(p.curlAngle) * (easeDist * 0.5) + swirlY;

              const curAlpha = Math.max(0, p.targetAlpha * (1 - Math.min(1, pProgress / 0.85)));
              const curSize = Math.max(0.4, p.size * (1 - pProgress * 0.4));

              if (curAlpha > 0.01) {
                ctx.fillStyle = `${p.color} ${curAlpha.toFixed(3)})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, curSize, 0, Math.PI * 2);
                ctx.fill();
              }
            } else {
              ctx.fillStyle = `${p.color} ${p.alpha})`;
              ctx.fillRect(p.ox + p.mx, p.oy + p.my, p.size, p.size);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    }

    renderLoop();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const introOpacity = Math.max(0, 1 - scrollProgress / 0.65);
  const cueOpacity = Math.max(0, 1 - scrollProgress * 3.5);

  const scrollToDetails = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="intro-screen-layer"
      id="introScreen"
      style={{
        opacity: introOpacity,
        transform: `scale(${1 - (1 - introOpacity) * 0.06})`,
        visibility: introOpacity <= 0.001 ? 'hidden' : 'visible',
      }}
      aria-label="Weberseek Intro Stage"
    >
      <div className="intro-content">
        <div className="intro-title-stage">
          <canvas ref={canvasRef} id="disintegrateCanvas" className="disintegrate-canvas" />
          <div 
            className="intro-glow-aura"
            id="introGlowAura"
            style={{ opacity: Math.max(0, 1 - (1 - introOpacity) * 1.5) }} 
          />
          <h1 className="sr-only">WEBERSEEK</h1>
        </div>

        <div 
          className="scroll-cue"
          id="scrollCue"
          onClick={scrollToDetails}
          role="button" 
          tabIndex={0} 
          aria-label="Scroll down to explore"
          style={{
            opacity: cueOpacity,
            pointerEvents: cueOpacity > 0.1 ? 'auto' : 'none',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') scrollToDetails();
          }}
        >
          <span className="scroll-cue-text">SCROLL TO EXPLORE</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <svg 
            className="scroll-arrows"
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
