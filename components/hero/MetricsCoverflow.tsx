'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './MetricsCoverflow.module.css';

interface MetricItem {
  id: number;
  value: string;
  label: string;
  sub: string;
  image: string;
}

const metrics: MetricItem[] = [
  {
    id: 0,
    value: '50+',
    label: 'Products Launched',
    sub: 'Websites, Apps & Portals',
    image: '/assets/card_products_launched.webp',
  },
  {
    id: 1,
    value: '100%',
    label: 'Custom Code',
    sub: 'No Generic Templates',
    image: '/assets/card_custom_engineered.webp',
  },
  {
    id: 2,
    value: '99.9%',
    label: 'Reliable Uptime',
    sub: 'Fast Cloud Hosting',
    image: '/assets/card_uptime_speed.webp',
  },
  {
    id: 3,
    value: '3x - 10x',
    label: 'Client Growth',
    sub: 'Built to Convert Visitors',
    image: '/assets/card_client_growth.webp',
  },
  {
    id: 4,
    value: '< 0.4s',
    label: 'Fast Page Load',
    sub: 'Worldwide Edge Delivery',
    image: '/assets/card_global_cdn.webp',
  },
  {
    id: 5,
    value: '100%',
    label: 'Code Ownership',
    sub: 'You Own Every Line',
    image: '/assets/card_ip_ownership.webp',
  },
];

export default function MetricsCoverflow() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = metrics.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Only swipe if horizontal motion exceeds vertical motion
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

  return (
    <div 
      className={styles.coverflowWrapper} 
      role="region" 
      aria-label="Startup Metrics Carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        ref={frameRef} 
        className={styles.coverflowFrame}
      >
        <div className={styles.coverflowTrack}>
          {metrics.map((item, idx) => {
            let offset = idx - currentIndex;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const distance = Math.abs(offset);
            const rotate = offset * -28;
            const translateZ = -distance * 140;
            const translateX = offset * 220;
            const opacity = Math.max(0.2, 1 - distance * 0.35);
            const zIndex = 50 - Math.round(distance * 10);
            const isCenter = distance === 0;

            return (
              <div
                key={item.id}
                className={`${styles.coverflowCard} ${isCenter ? styles.activeCard : ''}`}
                style={{
                  transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${rotate}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                onClick={() => setCurrentIndex(idx)}
              >
                <div className={styles.cardBgWrap}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className={styles.cardBg}
                    sizes="(max-width: 768px) 280px, 340px"
                    priority={idx === 0}
                  />
                  <div className={styles.cardVignette} />
                  <div className={styles.glassBorder} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.metricValue}>{item.value}</div>
                  <div className={styles.metricLabel}>{item.label}</div>
                  <div className={styles.metricSub}>{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        type="button" 
        className={`${styles.navBtn} ${styles.prevBtn}`} 
        onClick={handlePrev} 
        aria-label="Previous metric"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        type="button" 
        className={`${styles.navBtn} ${styles.nextBtn}`} 
        onClick={handleNext} 
        aria-label="Next metric"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {metrics.map((_, i) => (
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
  );
}
