'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from 'lucide-react';
import styles from './ShowcaseCoverflow.module.css';

interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  category: string;
}

const projects: ProjectItem[] = [
  {
    id: 0,
    title: 'Otogent',
    subtitle: 'AI Multi-Agent Automation Platform',
    url: 'https://otogent.com',
    category: 'SaaS Platform',
  },
  {
    id: 1,
    title: 'Ekta Real Estate',
    subtitle: 'Property Discovery & Residential Listings',
    url: 'https://ektarealestate.in',
    category: 'Real Estate Portal',
  },
  {
    id: 2,
    title: 'RR Solutions',
    subtitle: 'E-Commerce & Digital Storefront',
    url: 'https://rrsolutions.store',
    category: 'E-Commerce Store',
  },
  {
    id: 3,
    title: 'Bima Headquarter',
    subtitle: 'Insurance Consultancy & Advisory',
    url: 'https://bimaheadquarter.com',
    category: 'Financial Services',
  },
  {
    id: 4,
    title: 'Otogent Pro',
    subtitle: 'Enterprise AI & Workflow Engine',
    url: 'https://otogent.com',
    category: 'Cloud Software',
  },
  {
    id: 5,
    title: 'Ekta Commercial',
    subtitle: 'Commercial Spaces & Prime Leasing',
    url: 'https://ektarealestate.in',
    category: 'Business Listings',
  },
];

export default function ShowcaseCoverflow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = projects.length;

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeProject = projects[currentIndex];

  return (
    <section className="section-block" id="showcase">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">OUR WORK</span>
          <h2 className="section-title">Websites We've Built</h2>
          <p className="section-desc">A few live web applications and client platforms designed and engineered by our team.</p>
        </div>

        {/* 3D Coverflow Container */}
        <div 
          className={styles.showcaseWrapper} 
          role="region" 
          aria-label="Websites portfolio carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.showcaseViewport}>
            <div className={styles.showcaseTrack}>
              {projects.map((item, idx) => {
                let offset = idx - currentIndex;
                if (offset > count / 2) offset -= count;
                if (offset < -count / 2) offset += count;

                const distance = Math.abs(offset);
                const rotate = offset * -28; // Deep 3D angle matching Metrics Coverflow
                const translateZ = -distance * 160; // Deep 3D perspective
                const translateX = offset * 280; // Proportional 3D fan spacing
                const opacity = Math.max(0.18, 1 - distance * 0.32);
                const zIndex = 50 - Math.round(distance * 10);
                const isCenter = distance === 0;
                const host = new URL(item.url).hostname;

                return (
                  <div
                    key={item.id}
                    className={`${styles.showcaseCard} ${isCenter ? styles.activeCard : ''}`}
                    style={{
                      transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${rotate}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <div className={styles.browserWindow}>
                      {/* Browser Chrome Header */}
                      <div className={styles.browserChrome}>
                        <div className={styles.browserDots}>
                          <span className={styles.dotRed} />
                          <span className={styles.dotYellow} />
                          <span className={styles.dotGreen} />
                        </div>
                        <div className={styles.browserUrlBar}>
                          <Lock size={10} />
                          <span>{host}</span>
                        </div>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.browserOpenBtn}
                          title="Open live site in new tab"
                          aria-label="Open in new tab"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={12} />
                        </a>
                      </div>

                      {/* Screen Viewport */}
                      <div className={styles.screenWrap}>
                        <iframe
                          src={item.url}
                          title={item.title}
                          className={styles.liveIframe}
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Chevrons */}
          <button 
            type="button" 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev} 
            aria-label="Previous project"
          >
            <ChevronLeft size={22} />
          </button>
          <button 
            type="button" 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext} 
            aria-label="Next project"
          >
            <ChevronRight size={22} />
          </button>

          {/* Active Project Caption */}
          <div className={styles.captionArea}>
            <h3 className={styles.captionTitle}>{activeProject.title}</h3>
            <p className={styles.captionSub}>{activeProject.subtitle}</p>
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.captionLink}
            >
              <span>Visit Live Website</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
