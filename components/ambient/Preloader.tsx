'use client';

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [progress, setProgress] = useState(15);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // 1. Smooth progress ramp
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 80) return prev + Math.floor(Math.random() * 15) + 8;
        return prev;
      });
    }, 60);

    // 2. Preload critical assets
    const img = new Image();
    img.src = '/images/backgrounds/background 2.webp';

    const fontPromise = (document.fonts && document.fonts.ready)
      ? document.fonts.ready
      : Promise.resolve();

    const imgPromise = new Promise((resolve) => {
      if (img.complete) {
        resolve(true);
      } else {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      }
    });

    // When fonts + image are ready or after at most 450ms, mark ready
    const timerPromise = new Promise((resolve) => setTimeout(resolve, 350));

    Promise.all([fontPromise, imgPromise, timerPromise]).then(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setShouldRender(false);
        }, 550);
      }, 100);
    });

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`${styles.preloaderOverlay} ${isLoaded ? styles.loaded : ''}`}
      aria-hidden={isLoaded}
      id="sitePreloader"
    >
      <div className={styles.preloaderContent}>
        <div className={styles.brandGlowOrb} />
        
        <div className={styles.brandLogoWrap}>
          <span className={styles.brandText}>WEBERSEEK</span>
        </div>

        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${Math.min(100, progress)}%` }} 
          />
        </div>

        <div className={styles.loadingStatus}>
          <span>INITIALIZING</span>
          <span className={styles.percentage}>{Math.min(100, progress)}%</span>
        </div>
      </div>
    </div>
  );
}
