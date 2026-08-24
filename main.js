/**
 * WEBERSEEK - Next-Gen Interactive Engine
 * 1. Canvas Text Particle Disintegration Engine (Driven by Scroll)
 * 2. Seamless Two-Stage Screen Cross-Fade Controller
 * 3. Ambient Celestial Particles
 * 4. Business Solutions Scale Tabs
 * 5. Interactive Project Cost Estimator Calculator
 * 6. Mobile Navigation & Contact Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const introScreen = document.getElementById('introScreen');
  const scrollCue = document.getElementById('scrollCue');
  const siteHeader = document.getElementById('siteHeader');
  const detailsScreen = document.getElementById('detailsScreen');
  const disintegrateCanvas = document.getElementById('disintegrateCanvas');
  const introGlowAura = document.getElementById('introGlowAura');

  // =========================================================================
  // 1. TEXT PARTICLE DISINTEGRATION ENGINE
  // =========================================================================
  let dCtx = null;
  let dWidth = 0;
  let dHeight = 0;
  let dScale = 1;
  let particles = [];
  let currentScrollProgress = 0;
  let animationFrameId = null;
  let isMouseHovering = false;
  let mousePos = { x: -9999, y: -9999 };

  const PALETTE = [
    'rgba(255, 255, 255,',     // Pure White
    'rgba(241, 245, 249,',     // Slate 100
    'rgba(226, 232, 240,',     // Slate 200
    'rgba(203, 213, 225,',     // Slate 300
    'rgba(148, 163, 184,'      // Slate 400
  ];

  function initDisintegrationEngine() {
    if (!disintegrateCanvas) return;
    dCtx = disintegrateCanvas.getContext('2d');
    dScale = window.devicePixelRatio || 1;

    resizeDisintegrateCanvas();
    generateTextParticles();

    // Global and canvas pointer interaction for seamless responsiveness
    function onPointerMove(clientX, clientY) {
      const rect = disintegrateCanvas.getBoundingClientRect();
      mousePos.x = clientX - rect.left;
      mousePos.y = clientY - rect.top;
      isMouseHovering = true;
    }

    window.addEventListener('mousemove', (e) => {
      onPointerMove(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      onPointerMove(e.clientX, e.clientY);
    }, { passive: true });

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

    if (!animationFrameId) {
      renderDisintegrateLoop();
    }
  }

  function resizeDisintegrateCanvas() {
    if (!disintegrateCanvas || !dCtx) return;
    dWidth = window.innerWidth;
    dHeight = window.innerHeight;

    disintegrateCanvas.width = Math.floor(dWidth * dScale);
    disintegrateCanvas.height = Math.floor(dHeight * dScale);
    disintegrateCanvas.style.width = `${dWidth}px`;
    disintegrateCanvas.style.height = `${dHeight}px`;
    dCtx.setTransform(dScale, 0, 0, dScale, 0, 0);
  }

  function generateTextParticles() {
    if (!dCtx || dWidth === 0 || dHeight === 0) return;

    // Use 1:1 CSS coordinates on the offscreen canvas to prevent double scaling
    const offscreen = document.createElement('canvas');
    offscreen.width = dWidth;
    offscreen.height = dHeight;
    const offCtx = offscreen.getContext('2d');

    // Sizing and tracking for grand Anurati title
    const fontSize = Math.min(Math.max(dWidth * 0.10, 44), 135);
    const tracking = fontSize * 0.22; // Spacing between Anurati letters

    offCtx.font = `${fontSize}px "Anurati", sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';

    const text = 'WEBERSEEK';
    const centerX = dWidth / 2;
    const centerY = dHeight * 0.48; // Centered vertically in the hero view

    // Draw text with manual tracking for cross-browser letter-spacing
    const letters = text.split('');
    let totalWidth = 0;
    const letterWidths = letters.map(char => {
      const w = offCtx.measureText(char).width;
      totalWidth += w;
      return w;
    });
    totalWidth += tracking * (letters.length - 1);

    const startX = centerX - (totalWidth / 2);

    // High-tech continuous spectrum gradient across the entire title
    const fullGrad = offCtx.createLinearGradient(
      startX, centerY - fontSize * 0.5,
      startX + totalWidth, centerY + fontSize * 0.5
    );
    fullGrad.addColorStop(0.00, '#ffffff'); // Diamond specular highlight
    fullGrad.addColorStop(0.18, '#38bdf8'); // High-tech Sky Cyan
    fullGrad.addColorStop(0.38, '#60a5fa'); // Electric Sapphire
    fullGrad.addColorStop(0.60, '#818cf8'); // Quantum Indigo
    fullGrad.addColorStop(0.82, '#a855f7'); // Cyber Violet
    fullGrad.addColorStop(1.00, '#22d3ee'); // Radiant Cyan Edge

    offCtx.fillStyle = fullGrad;

    let drawX = startX;
    letters.forEach((char, idx) => {
      const charW = letterWidths[idx];
      const posX = drawX + (charW / 2);
      offCtx.fillText(char, posX, centerY);
      drawX += charW + tracking;
    });

    // Sample pixels directly at CSS pixel positions
    const imgData = offCtx.getImageData(0, 0, dWidth, dHeight);
    const data = imgData.data;
    particles = [];

    // Step size for dense, crisp particle matrix
    const step = 2;
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

          // Full 360-degree explosive dispersion with strong upward celestial draft
          const angleFromCenter = Math.atan2(posY - centerY, posX - centerX);
          const scatterAngle = angleFromCenter + (Math.random() - 0.5) * 1.2;
          const scatterSpeed = Math.random() * 26 + 10;
          const upwardBoost = -Math.random() * 18 - 8;

          // Wave delay based on horizontal position (sweep from left to right)
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
            delay: delay,
            targetAlpha: alpha / 255,
            // Fluid spring physics displacement
            mx: 0,
            my: 0,
            mvx: 0,
            mvy: 0
          });
        }
      }
    }
  }

  let time = 0;

  function renderDisintegrateLoop() {
    time += 0.02;
    dCtx.clearRect(0, 0, dWidth, dHeight);

    const progress = currentScrollProgress;

    // Only render when intro is at least slightly visible
    if (progress < 0.98 && particles.length > 0) {
      const len = particles.length;
      const maxDist = 115;
      const springK = 0.09;
      const damping = 0.84;

      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // 1. Interactive Fluid Mouse Repulsion Physics (at rest or near-rest)
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

        // Spring physics returning particles smoothly back to origin
        p.mvx += -p.mx * springK;
        p.mvy += -p.my * springK;
        p.mvx *= damping;
        p.mvy *= damping;
        p.mx += p.mvx;
        p.my += p.mvy;

        if (Math.abs(p.mx) < 0.005 && Math.abs(p.mvx) < 0.005) { p.mx = 0; p.mvx = 0; }
        if (Math.abs(p.my) < 0.005 && Math.abs(p.mvy) < 0.005) { p.my = 0; p.mvy = 0; }

        // 2. Disintegration Particle Physics on Scroll (Phase 1: 0.0 -> 0.46)
        if (progress === 0) {
          // Resting state: draw particle at origin + fluid mouse displacement
          dCtx.fillStyle = `${p.color} ${p.alpha})`;
          dCtx.fillRect(p.ox + p.mx, p.oy + p.my, p.size, p.size);
        } else {
          // Local progress for wave disintegration (finishes by progress = 0.42)
          const pProgress = Math.min(Math.max((progress - p.delay * 0.15) / 0.38, 0), 1);

          if (pProgress > 0) {
            // Full-screen dispersion range
            const easeDist = Math.pow(pProgress, 1.1) * (Math.max(dWidth, dHeight) * 0.95 + 300);
            
            // Grand cosmic swirling turbulence
            const swirlX = Math.sin(time * 2.8 + p.curlAngle) * (p.curlRadius * 2.8 + 50) * pProgress;
            const swirlY = Math.cos(time * 2.4 + p.curlAngle) * (p.curlRadius * 2.8 + 50) * pProgress - (Math.pow(pProgress, 1.05) * (dHeight * 0.65 + 180));

            p.x = p.ox + p.mx * (1 - pProgress) + p.vx * (pProgress * 12) + Math.cos(p.curlAngle) * (easeDist * 0.5) + swirlX;
            p.y = p.oy + p.my * (1 - pProgress) + p.vy * (pProgress * 12) + Math.sin(p.curlAngle) * (easeDist * 0.5) + swirlY;

            // Fade completely before new screen appears
            const curAlpha = Math.max(0, p.targetAlpha * (1 - Math.min(1, pProgress / 0.85)));
            const curSize = Math.max(0.4, p.size * (1 - pProgress * 0.4));

            if (curAlpha > 0.01) {
              dCtx.fillStyle = `${p.color} ${curAlpha.toFixed(3)})`;
              dCtx.beginPath();
              dCtx.arc(p.x, p.y, curSize, 0, Math.PI * 2);
              dCtx.fill();
            }
          } else {
            // Particle hasn't disintegrated yet
            dCtx.fillStyle = `${p.color} ${p.alpha})`;
            dCtx.fillRect(p.ox + p.mx, p.oy + p.my, p.size, p.size);
          }
        }
      }
    }

    animationFrameId = requestAnimationFrame(renderDisintegrateLoop);
  }

  // Window resize handler for the canvas
  window.addEventListener('resize', () => {
    resizeDisintegrateCanvas();
    generateTextParticles();
  });

  // =========================================================================
  // =========================================================================
  // 2. SCROLL CONTROLLER & SEQUENTIAL SCREEN TRANSITION
  // =========================================================================
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const transitionDistance = Math.max(window.innerHeight, 500);

    // Normalized progress from 0.0 (Screen 1) to 1.0 (Screen 2)
    const progress = Math.min(Math.max(scrollY / transitionDistance, 0), 1);
    currentScrollProgress = progress;

    const bgScale = 1 + (scrollY * 0.00006);
    root.style.setProperty('--bg-scale', Math.min(bgScale, 1.06).toFixed(4));
    root.style.setProperty('--scroll-vignette', (1 - progress).toFixed(3));

    // --- PHASE 1: SCREEN 1 DISINTEGRATES & FADES OUT (0.0 -> 0.7) ---
    const introProgress = Math.min(1, progress / 0.65);
    const introOpacity = Math.max(0, 1 - introProgress);

    if (introScreen) {
      introScreen.style.opacity = introOpacity.toFixed(3);
      introScreen.style.transform = `scale(${(1 - introProgress * 0.06).toFixed(3)})`;
      introScreen.style.visibility = introOpacity <= 0.001 ? 'hidden' : 'visible';
    }

    if (introGlowAura) {
      introGlowAura.style.opacity = Math.max(0, 1 - (introProgress * 1.5)).toFixed(3);
    }

    // Scroll Cue Fade
    if (scrollCue) {
      const cueOpacity = Math.max(0, 1 - (progress * 3.5));
      scrollCue.style.opacity = cueOpacity.toFixed(3);
      scrollCue.style.pointerEvents = cueOpacity > 0.1 ? 'auto' : 'none';
    }

    // --- PHASE 2: DETAILS SCREEN & HEADER ---
    if (detailsScreen) {
      if (progress > 0.05) {
        detailsScreen.classList.add('visible');
      } else {
        detailsScreen.classList.remove('visible');
      }
    }

    if (siteHeader) {
      const headerProgress = Math.min(1, Math.max(0, (progress - 0.2) / 0.6));
      siteHeader.style.opacity = headerProgress.toFixed(3);
      siteHeader.style.transform = `translate3d(0, ${((1 - headerProgress) * -18).toFixed(1)}px, 0)`;
      siteHeader.style.visibility = headerProgress <= 0.001 ? 'hidden' : 'visible';

      if (headerProgress > 0.05) {
        siteHeader.classList.add('visible');
      } else {
        siteHeader.classList.remove('visible');
      }

      if (scrollY > transitionDistance * 0.45 || scrollY > 100) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }

      // Dynamic Reading Progress Beam along navbar
      const scrollProgress = document.getElementById('navScrollProgress');
      if (scrollProgress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
        scrollProgress.style.width = `${scrollPct.toFixed(1)}%`;
      }

      // Active Section Highlighter on Nav Links
      const sectionIds = ['services', 'showcase', 'solutions', 'estimator', 'tech-stack', 'process', 'contact'];
      let activeSection = '';
      for (const sId of sectionIds) {
        const el = document.getElementById(sId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 120) {
            activeSection = sId;
          }
        }
      }
      if (activeSection) {
        document.querySelectorAll('.nav-link').forEach(link => {
          const href = link.getAttribute('href')?.replace('#', '');
          link.classList.toggle('active', href === activeSection);
        });
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Scroll cue click to smoothly transition into Screen 2
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    });
    scrollCue.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    });
  }

  // Mobile Hamburger Nav Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Auto-close drawer when clicking any navigation link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // =========================================================================
  // 3. AMBIENT CELESTIAL FLOATING PARTICLES
  // =========================================================================
  const ambientCanvas = document.getElementById('ambientCanvas');
  if (ambientCanvas) {
    const aCtx = ambientCanvas.getContext('2d');
    let aWidth = ambientCanvas.width = window.innerWidth;
    let aHeight = ambientCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      aWidth = ambientCanvas.width = window.innerWidth;
      aHeight = ambientCanvas.height = window.innerHeight;
    });

    const ambientParticles = [];
    const count = Math.min(Math.floor(window.innerWidth / 28), 45);

    for (let i = 0; i < count; i++) {
      ambientParticles.push({
        x: Math.random() * aWidth,
        y: Math.random() * aHeight,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.35 - 0.1,
        alpha: Math.random() * 0.45 + 0.15,
        color: 'rgba(255, 255, 255,'
      });
    }

    function renderAmbientParticles() {
      aCtx.clearRect(0, 0, aWidth, aHeight);

      ambientParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = aHeight + 10;
          p.x = Math.random() * aWidth;
        }
        if (p.x < -10) p.x = aWidth + 10;
        if (p.x > aWidth + 10) p.x = -10;

        aCtx.beginPath();
        aCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        aCtx.fillStyle = `${p.color} ${p.alpha})`;
        aCtx.fill();
      });

      requestAnimationFrame(renderAmbientParticles);
    }

    renderAmbientParticles();
  }

  // =========================================================================
  // 4. BUSINESS SOLUTIONS SCALE TAB SWITCHER
  // =========================================================================
  const scaleTabBtns = document.querySelectorAll('.scale-tab-btn');
  const scalePanels = document.querySelectorAll('.scale-panel');

  scaleTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetScale = btn.dataset.scale;

      scaleTabBtns.forEach(b => b.classList.remove('active'));
      scalePanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetScale}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // =========================================================================
  // 5. INTERACTIVE COST ESTIMATOR CALCULATOR
  // =========================================================================
  const typePills = document.querySelectorAll('#typePills .pill-btn');
  const scalePills = document.querySelectorAll('#scalePills .pill-btn');
  const featureChecks = document.querySelectorAll('#featureChecks input[type="checkbox"]');
  const estTimelineEl = document.getElementById('estTimeline');
  const estPriceEl = document.getElementById('estPrice');

  let selectedBasePrice = 2999;
  let selectedBaseDays = 3;
  let selectedMultiplier = 1.0;

  function calculateEstimate() {
    let featuresTotal = 0;
    let extraDays = 0;

    featureChecks.forEach(chk => {
      if (chk.checked) {
        featuresTotal += parseInt(chk.value, 10) || 0;
        extraDays += parseInt(chk.dataset.extraDays, 10) || 0;
      }
    });

    const calculatedPrice = Math.round((selectedBasePrice + featuresTotal) * selectedMultiplier);
    const lowRange = Math.round(calculatedPrice);
    const highRange = Math.round(calculatedPrice * 1.25);
    const totalDays = Math.max(3, Math.round((selectedBaseDays + extraDays) * (selectedMultiplier > 1.4 ? 1.3 : 1.0)));

    if (estPriceEl) {
      estPriceEl.textContent = `₹${lowRange.toLocaleString('en-IN')} - ₹${highRange.toLocaleString('en-IN')}`;
    }
    if (estTimelineEl) {
      estTimelineEl.textContent = `~${totalDays} Business Days`;
    }
  }

  typePills.forEach(btn => {
    btn.addEventListener('click', () => {
      typePills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBasePrice = parseInt(btn.dataset.base, 10) || 2999;
      selectedBaseDays = parseInt(btn.dataset.days, 10) || 3;

      // Dynamically switch matching background image
      const selectedType = btn.getAttribute('data-type');
      const bgImages = document.querySelectorAll('.estimator-bg-img');
      bgImages.forEach(img => {
        img.classList.toggle('active', img.getAttribute('data-type') === selectedType);
      });

      calculateEstimate();
    });
  });

  scalePills.forEach(btn => {
    btn.addEventListener('click', () => {
      scalePills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedMultiplier = parseFloat(btn.dataset.multiplier) || 1.0;
      calculateEstimate();
    });
  });

  featureChecks.forEach(chk => {
    chk.addEventListener('change', calculateEstimate);
  });

  calculateEstimate(); // Initial estimation calculation

  // Estimator CTA bridge to Contact Form
  const estimatorCta = document.getElementById('estimatorCta');
  if (estimatorCta) {
    estimatorCta.addEventListener('click', (e) => {
      e.preventDefault();
      const activeTypeBtn = document.querySelector('#typePills .pill-btn.active');
      const activeScaleBtn = document.querySelector('#scalePills .pill-btn.active');
      const typeText = activeTypeBtn ? activeTypeBtn.textContent.trim() : 'Website';
      const scaleText = activeScaleBtn ? activeScaleBtn.textContent.trim() : 'Small Business';
      const priceText = estPriceEl ? estPriceEl.textContent.trim() : '₹2,999';
      const timeText = estTimelineEl ? estTimelineEl.textContent.trim() : '~3-5 Business Days';

      const typeSelect = document.getElementById('projectType');
      if (typeSelect && activeTypeBtn) {
        const typeKey = activeTypeBtn.getAttribute('data-type');
        if (typeKey === 'website') typeSelect.value = 'single_page';
        else if (typeKey === 'ecommerce') typeSelect.value = 'ecommerce';
        else if (typeKey === 'mobile') typeSelect.value = 'mobile_app';
        else if (typeKey === 'software') typeSelect.value = 'custom_software';
        else if (typeKey === 'ai') typeSelect.value = 'ai_automation';
      }

      const detailsInput = document.getElementById('projectDetails');
      if (detailsInput && (!detailsInput.value || detailsInput.value.includes('Calculated Scope:'))) {
        detailsInput.value = `Calculated Scope: ${typeText} (${scaleText}). Estimated Budget: ${priceText}, Timeline: ${timeText}.`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // 6. CONTACT FORM SUBMISSION DIRECT TO WHATSAPP (+91 7024768125)
  // =========================================================================

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const clientName = document.getElementById('clientName')?.value.trim() || 'Client';
      const clientEmail = document.getElementById('clientEmail')?.value.trim() || 'Not specified';
      const companyName = document.getElementById('companyName')?.value.trim() || 'Individual';
      const projectTypeEl = document.getElementById('projectType');
      const projectTypeLabel = projectTypeEl ? projectTypeEl.options[projectTypeEl.selectedIndex].text : 'General Inquiry';
      const projectDetails = document.getElementById('projectDetails')?.value.trim() || 'No additional details specified.';

      const waMessage = 
`🚀 *New Project Request - WeberSeek*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${clientName}
📧 *Email:* ${clientEmail}
🏢 *Company:* ${companyName}
🛠️ *Service Needed:* ${projectTypeLabel}
📝 *Project Details:*
${projectDetails}
━━━━━━━━━━━━━━━━━━━━
Sent via WeberSeek Official Website`;

      const encodedMsg = encodeURIComponent(waMessage);
      const waUrl = `https://wa.me/917024768125?text=${encodedMsg}`;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to WhatsApp...</span>`;
      }

      setTimeout(() => {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = `🎉 Thank you, <strong>${clientName}</strong>! Redirecting to WhatsApp (<strong>+91 7024768125</strong>) to connect with our senior engineers...`;
        
        // Open WhatsApp directly
        window.open(waUrl, '_blank');

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.04 3.67M9.53 7.5C9.35 7.5 9.06 7.57 8.81 7.84C8.56 8.11 7.86 8.77 7.86 10.11C7.86 11.45 8.84 12.74 8.98 12.93C9.11 13.11 10.74 15.63 13.23 16.71C13.82 16.97 14.28 17.12 14.64 17.23C15.23 17.42 15.77 17.39 16.2 17.33C16.68 17.26 17.67 16.73 17.88 16.14C18.09 15.55 18.09 15.04 18.03 14.94C17.96 14.83 17.8 14.77 17.55 14.65C17.31 14.53 16.1 13.93 15.87 13.85C15.65 13.77 15.48 13.73 15.32 13.97C15.16 14.22 14.69 14.77 14.54 14.94C14.4 15.11 14.25 15.13 14.01 15.01C13.76 14.89 12.98 14.63 12.05 13.8C11.32 13.15 10.83 12.35 10.69 12.1C10.54 11.86 10.67 11.72 10.8 11.6C10.91 11.49 11.05 11.31 11.18 11.16C11.3 11.01 11.35 10.9 11.43 10.74C11.51 10.57 11.47 10.43 11.41 10.31C11.35 10.18 10.86 8.99 10.66 8.5C10.46 8.03 10.26 8.09 10.11 8.08C9.97 8.08 9.8 8.08 9.63 8.08L9.53 7.5Z"/></svg>
            <span>Send Request on WhatsApp</span>
          `;
        }
      }, 500);
    });
  }

  // =========================================================================
  // 7. UNIVERSAL SCROLL REVEAL & EDITORIAL TEXT REVEAL ENGINE
  // =========================================================================
  function initScrollAndTextReveal() {
    // 1. Text Reveal: Split Words on headings across the site
    const textRevealTargets = document.querySelectorAll(
      '.section-title, .scale-info h3, .summary-header h4, ' +
      '.service-card h3, .step-card h3, .tech-category-card h3, ' +
      '.estimator-header h3, .contact-card h3, .contact-headline, ' +
      '.footer-branding h3, .footer-links-col h4, .coverflow-caption-title'
    );
    
    textRevealTargets.forEach(titleEl => {
      if (titleEl.querySelector('.reveal-word') || titleEl.id === 'disintegrateHero') return;
      
      const text = titleEl.innerText.trim();
      if (!text) return;
      
      const words = text.split(/\s+/);
      titleEl.innerHTML = '';
      
      words.forEach((word, idx) => {
        const span = document.createElement('span');
        span.className = 'reveal-word';
        span.style.setProperty('--word-idx', idx);
        span.textContent = word;
        titleEl.appendChild(span);
        if (idx < words.length - 1) {
          titleEl.appendChild(document.createTextNode(' '));
        }
      });
    });

    // 2. Set item-stagger indices for lists, chips and badges
    document.querySelectorAll('.scale-perks').forEach(list => {
      list.querySelectorAll('.perk-item').forEach((item, idx) => {
        item.style.setProperty('--item-idx', idx);
      });
    });

    document.querySelectorAll('.tech-tags-list').forEach(list => {
      list.querySelectorAll('.tech-stack-tag').forEach((item, idx) => {
        item.style.setProperty('--item-idx', idx);
      });
    });

    document.querySelectorAll('.contact-details-list').forEach(list => {
      list.querySelectorAll('.contact-detail-item').forEach((item, idx) => {
        item.style.setProperty('--item-idx', idx);
      });
    });

    document.querySelectorAll('.footer-links-col ul').forEach(list => {
      list.querySelectorAll('li').forEach((item, idx) => {
        item.style.setProperty('--item-idx', idx);
      });
    });

    document.querySelectorAll('.hero-stats-row').forEach(row => {
      row.querySelectorAll('.hero-stat-card').forEach((card, idx) => {
        card.style.setProperty('--item-idx', idx);
      });
    });

    // 3. IntersectionObserver for smooth staggered viewport reveals
    const revealElements = document.querySelectorAll(
      '.section-block, .section-header, .hero-section, .hero-content, .hero-stats, ' +
      '.coverflow-carousel-wrapper, .service-card, .tech-category-card, .step-card, ' +
      '.scale-content-box, .scale-panel, .estimator-grid, .contact-grid, .contact-card, ' +
      '.footer-content, .footer-bottom'
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
    document.querySelectorAll('section').forEach(sec => revealObserver.observe(sec));

    // 4. Initial hero check (immediately reveal elements visible in initial viewport)
    setTimeout(() => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    }, 60);
  }

  // =========================================================================
  // 8. BUTTERY SMOOTH LERP PARALLAX ENGINE (BIG CARDS ONLY)
  // =========================================================================
  let lerpTargetScrollY = window.scrollY;
  let lerpCurrentScrollY = window.scrollY;
  let parallaxActive = false;

  function runSmoothParallaxLoop() {
    // Smooth linear interpolation (momentum damping)
    lerpCurrentScrollY += (lerpTargetScrollY - lerpCurrentScrollY) * 0.08;

    const bigCards = document.querySelectorAll('.parallax-big-card');
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    bigCards.forEach(card => {
      const rect = card.getBoundingClientRect();

      // Only calculate if visible in viewport
      if (rect.top < viewportHeight + 40 && rect.bottom > -40) {
        const cardCenter = rect.top + (rect.height / 2);
        const progress = Math.max(-1, Math.min(1, (viewportCenter - cardCenter) / (viewportHeight / 2)));

        // Gentle, subtle, float translation (clamped to +-12px) - zero jitter, zero stacking!
        const translateY = (progress * 12).toFixed(2);
        card.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    });

    // Continue loop until motion settles
    if (Math.abs(lerpTargetScrollY - lerpCurrentScrollY) > 0.1) {
      requestAnimationFrame(runSmoothParallaxLoop);
    } else {
      parallaxActive = false;
    }
  }

  window.addEventListener('scroll', () => {
    lerpTargetScrollY = window.scrollY;
    if (!parallaxActive) {
      parallaxActive = true;
      requestAnimationFrame(runSmoothParallaxLoop);
    }
  }, { passive: true });

  // =========================================================================
  // 9. 3D SOLAR SYSTEM ORBIT & SCROLL ENGINE
  // =========================================================================
  function initSolarSystemOrbit() {
    const solarWrapper = document.getElementById('solarSystemWrapper');
    const plane = document.getElementById('solarPlane');
    const planets = document.querySelectorAll('.planet-node');
    if (!solarWrapper || !plane || planets.length === 0) return;

    const ringRadii = {
      '1': 140, // 280px diameter
      '2': 250, // 500px diameter
      '3': 360  // 720px diameter
    };

    let baseAutoAngle = 0;
    let isHovered = false;

    // Slow auto drift on hover
    solarWrapper.addEventListener('mouseenter', () => { isHovered = true; });
    solarWrapper.addEventListener('mouseleave', () => { isHovered = false; });

    function renderPlanets() {
      if (!isHovered) {
        baseAutoAngle += 0.22;
      }

      const scrollOffset = window.scrollY * 0.12;

      planets.forEach(planet => {
        const ring = planet.getAttribute('data-ring') || '1';
        const initialAngle = parseFloat(planet.getAttribute('data-angle') || '0');
        const speed = parseFloat(planet.getAttribute('data-speed') || '1');
        const radius = ringRadii[ring] || 250;

        // Current orbital angle in degrees
        const currentAngle = (initialAngle + (baseAutoAngle + scrollOffset) * speed) % 360;
        const rad = (currentAngle * Math.PI) / 180;

        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        // Counter-rotate to billboard upright to viewer in 3D
        planet.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0) rotateZ(14deg) rotateX(-64deg)`;

        // Foreground vs background depth layering
        const zIndex = Math.round(50 + y * 0.2);
        planet.style.zIndex = String(zIndex);
      });

      requestAnimationFrame(renderPlanets);
    }

    requestAnimationFrame(renderPlanets);
  }

  // =========================================================================
  // 6A. 3D COVERFLOW STARTUP METRICS CAROUSEL ENGINE
  // =========================================================================
  function initMetricsCoverflow() {
    const root = document.getElementById('metricsCoverflow');
    const frame = document.getElementById('metricsFrame');
    const track = document.getElementById('metricsTrack');
    const cardNodes = Array.from(root?.querySelectorAll('.coverflow-card') || []);
    const prevBtn = document.getElementById('metricsPrev');
    const nextBtn = document.getElementById('metricsNext');
    const paginationContainer = document.getElementById('metricsPagination');

    if (!root || !frame || cardNodes.length === 0) return;

    const count = cardNodes.length; // 6 cards
    const rotate = 45;
    const depth = 0.54;
    const falloff = 0.52;
    const fade = 0.08;
    const gap = -0.52;
    const loop = true;

    let pos = 0;
    let target = 0;
    let width = 0;
    let rafId = null;
    let drag = null;
    let activeMetricIdx = -1;

    function getActiveIdx(p) {
      return ((Math.round(p) % count) + count) % count;
    }

    function updateDots(p) {
      const idx = getActiveIdx(p);
      if (idx === activeMetricIdx) return;
      activeMetricIdx = idx;

      if (paginationContainer) {
        const dots = paginationContainer.querySelectorAll('.coverflow-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }
    }

    function paint() {
      if (!width) return;
      const pitch = width * (1 + gap);

      cardNodes.forEach((card, index) => {
        let offset = index - pos;
        if (loop) {
          offset = ((offset % count) + count) % count;
          if (offset > count / 2) offset -= count;
        }

        const distance = Math.abs(offset);
        const ramp = Math.pow(distance, falloff);
        const tilt = Math.min(rotate * ramp, 80) * Math.sign(offset);

        card.style.transform =
          `translateX(calc(-50% + ${(offset * pitch).toFixed(2)}px)) ` +
          `translateZ(${(-depth * width * ramp).toFixed(2)}px) rotateY(${(-tilt).toFixed(2)}deg)`;

        const edge = loop ? Math.min(1, Math.max(0, (count / 2 - distance) * 2.5)) : 1;
        card.style.opacity = String(Math.max(0.15, 1 - fade * distance) * edge);
        card.style.zIndex = String(100 - Math.round(distance * 2));
      });

      updateDots(pos);
    }

    function settle(toTarget) {
      if (rafId !== null) cancelAnimationFrame(rafId);
      target = toTarget;

      function step() {
        const delta = target - pos;
        if (Math.abs(delta) < 0.001) {
          pos = target;
          paint();
          rafId = null;
          return;
        }
        pos += delta * 0.16;
        paint();
        rafId = requestAnimationFrame(step);
      }

      rafId = requestAnimationFrame(step);
    }

    function advance(delta) {
      settle(Math.round(pos + delta));
    }

    function onPointerDown(e) {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      if (rafId !== null) cancelAnimationFrame(rafId);
      drag = {
        startX: e.clientX,
        startPos: pos,
        dragged: false
      };
      frame.setPointerCapture?.(e.pointerId);
    }

    function onPointerMove(e) {
      if (!drag) return;
      const deltaX = e.clientX - drag.startX;
      if (Math.abs(deltaX) > 4) drag.dragged = true;
      const pitch = width * (1 + gap) || 1;
      pos = drag.startPos - (deltaX / pitch);
      paint();
    }

    function onPointerUp(e) {
      if (!drag) return;
      const wasDragged = drag.dragged;
      drag = null;
      frame.releasePointerCapture?.(e.pointerId);
      if (wasDragged) {
        settle(Math.round(pos));
      }
    }

    // Build pagination dots
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = `coverflow-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to metric ${i + 1}`);
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const currentIdx = getActiveIdx(pos);
          let delta = i - currentIdx;
          if (Math.abs(delta) > count / 2) {
            delta = delta > 0 ? delta - count : delta + count;
          }
          settle(Math.round(pos + delta));
        });
        paginationContainer.appendChild(dot);
      }
    }

    // Card click event to navigate
    cardNodes.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        if (drag && drag.dragged) return;
        const currentIdx = getActiveIdx(pos);
        let delta = index - currentIdx;
        if (Math.abs(delta) > count / 2) {
          delta = delta > 0 ? delta - count : delta + count;
        }
        settle(Math.round(pos + delta));
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        advance(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        advance(1);
      });
    }

    frame.addEventListener('pointerdown', onPointerDown);
    frame.addEventListener('pointermove', onPointerMove);
    frame.addEventListener('pointerup', onPointerUp);
    frame.addEventListener('pointercancel', onPointerUp);

    function measure() {
      const firstCard = cardNodes[0];
      if (firstCard) {
        width = firstCard.offsetWidth || 340;
      }
      paint();
    }

    window.addEventListener('resize', measure);
    setTimeout(measure, 60);
    measure();
  }

  // =========================================================================
  // 6B. 3D COVERFLOW SHOWCASE ENGINE (INFINITE CONTINUOUS LOOP)
  // =========================================================================
  function initShowcaseCoverflow() {
    const root = document.getElementById('showcaseCoverflow');
    const frame = document.getElementById('showcaseViewport');
    const track = document.getElementById('showcaseTrack');
    const cardNodes = Array.from(root?.querySelectorAll('.coverflow-card') || []);
    const prevBtn = document.getElementById('showcasePrev');
    const nextBtn = document.getElementById('showcaseNext');
    const paginationContainer = document.getElementById('showcasePagination');
    const titleEl = document.getElementById('showcaseTitle');
    const subEl = document.getElementById('showcaseSubtitle');

    if (!root || !frame || cardNodes.length === 0) return;

    const count = cardNodes.length; // 8 cards (endless ring)
    const rotate = 46;
    const depth = 0.56;
    const perspective = 2.8;
    const falloff = 0.54;
    const fade = 0.08;
    const gap = -0.54; // Overlapping Coverflow fan
    const loop = true;

    const uniqueSites = [
      { title: "Otogent", subtitle: "AI Multi-Agent Automation Platform" },
      { title: "Ekta Real Estate", subtitle: "Property Discovery & Residential Listings" },
      { title: "RR Solutions", subtitle: "E-Commerce & Digital Storefront" },
      { title: "Bima Headquarter", subtitle: "Insurance Consultancy & Advisory" }
    ];

    let pos = 0;
    let target = 0;
    let width = 0;
    let rafId = null;
    let drag = null;
    let activeSiteIdx = -1;

    function getSiteIdx(p) {
      return ((Math.round(p) % 4) + 4) % 4;
    }

    function updateCaption(p) {
      const siteIdx = getSiteIdx(p);
      if (siteIdx === activeSiteIdx) return;
      activeSiteIdx = siteIdx;

      const info = uniqueSites[siteIdx];
      if (info) {
        if (titleEl) titleEl.textContent = info.title;
        if (subEl) subEl.textContent = info.subtitle;
      }

      if (paginationContainer) {
        const dots = paginationContainer.querySelectorAll('.coverflow-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === siteIdx));
      }
    }

    function paint() {
      if (!width) return;
      const pitch = width * (1 + gap);

      cardNodes.forEach((card, index) => {
        let offset = index - pos;
        if (loop) {
          offset = ((offset % count) + count) % count;
          if (offset > count / 2) offset -= count;
        }

        const distance = Math.abs(offset);
        const ramp = Math.pow(distance, falloff);
        const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

        card.style.transform =
          `translateX(calc(-50% + ${(offset * pitch).toFixed(2)}px)) ` +
          `translateZ(${(-depth * width * ramp).toFixed(2)}px) rotateY(${(-tilt).toFixed(2)}deg)`;

        // Only the rear-most wrap-around card fades out at the far horizon
        const edge = loop ? Math.min(1, Math.max(0, (count / 2 - distance) * 2.5)) : 1;
        card.style.opacity = String(Math.max(0.12, 1 - fade * distance) * edge);
        card.style.zIndex = String(100 - Math.round(distance * 2));
      });

      updateCaption(pos);
    }

    function settle(toTarget) {
      if (rafId !== null) cancelAnimationFrame(rafId);
      target = toTarget;

      function step() {
        const remaining = target - pos;
        if (Math.abs(remaining) < 0.0004) {
          pos = target;
          paint();
          rafId = null;
          return;
        }
        pos += remaining * 0.18;
        paint();
        rafId = requestAnimationFrame(step);
      }
      rafId = requestAnimationFrame(step);
    }

    function nudge(by) {
      settle(Math.round(target) + by);
    }

    // Build 4 site pagination dots
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
      uniqueSites.forEach((_, siteIdx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `coverflow-dot ${siteIdx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to project ${siteIdx + 1}`);
        dot.addEventListener('click', () => {
          const curSiteIdx = getSiteIdx(pos);
          let delta = siteIdx - curSiteIdx;
          if (delta > 2) delta -= 4;
          if (delta < -2) delta += 4;
          settle(Math.round(pos) + delta);
        });
        paginationContainer.appendChild(dot);
      });
    }

    // Direct card click snaps to center
    cardNodes.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        let offset = index - pos;
        if (loop) {
          offset = ((offset % count) + count) % count;
          if (offset > count / 2) offset -= count;
        }
        if (Math.abs(offset) > 0.3) {
          e.preventDefault();
          settle(Math.round(pos + offset));
        }
      });
    });

    // Pointer Drag handlers
    function onPointerDown(e) {
      if (e.target.closest('a') || e.target.closest('button')) return;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      target = pos;
      drag = {
        x: clientX,
        pos: pos,
        v: 0,
        t: performance.now()
      };
    }

    function onPointerMove(e) {
      if (!drag) return;
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      const pitch = width * (1 + gap);
      if (!pitch) return;

      const now = performance.now();
      const previous = pos;
      pos = drag.pos - (clientX - drag.x) / pitch;
      drag.v = ((pos - previous) / Math.max(now - drag.t, 1)) * 1000;
      drag.t = now;

      paint();
    }

    function endDrag() {
      if (!drag) return;
      const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
      const finalTarget = Math.round(pos + carried);
      drag = null;
      settle(finalTarget);
    }

    frame.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    // Keyboard navigation
    frame.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nudge(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nudge(1);
      }
    });

    if (prevBtn) prevBtn.addEventListener('click', () => nudge(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => nudge(1));

    // Measure card width & dynamic perspective
    function measure() {
      const card = cardNodes[0];
      if (!card) return;
      width = card.offsetWidth;
      frame.style.perspective = `${width * perspective}px`;
      paint();
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    window.addEventListener('resize', measure);
  }

  // Initialize coverflow, scroll animations, big card parallax, solar system & showcase
  initScrollAndTextReveal();
  runSmoothParallaxLoop();
  initSolarSystemOrbit();
  initMetricsCoverflow();
  initShowcaseCoverflow();

  // Initialize disintegration engine after Anurati font is fully loaded
  if (document.fonts && document.fonts.load) {
    document.fonts.load('80px "Anurati"').then(() => {
      initDisintegrationEngine();
      handleScroll();
    }).catch(() => {
      initDisintegrationEngine();
      handleScroll();
    });
  } else {
    initDisintegrationEngine();
    handleScroll();
  }
});
