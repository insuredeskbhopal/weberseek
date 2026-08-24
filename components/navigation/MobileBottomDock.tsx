'use client';

import React, { useEffect, useState } from 'react';
import { Home, Layers, Calculator, MessageSquare, PhoneCall } from 'lucide-react';
import styles from './MobileBottomDock.module.css';

export default function MobileBottomDock() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const h = window.innerHeight;

      if (scrollY < h * 0.8) {
        setActiveTab('home');
      } else if (scrollY >= h * 0.8 && scrollY < h * 2.2) {
        setActiveTab('services');
      } else if (scrollY >= h * 2.2 && scrollY < h * 3.8) {
        setActiveTab('estimator');
      } else {
        setActiveTab('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.bottomDockWrapper} aria-label="Mobile Navigation App Dock">
      <nav className={styles.bottomDock}>
        <button
          type="button"
          className={`${styles.dockItem} ${activeTab === 'home' ? styles.active : ''}`}
          onClick={() => scrollTo('hero-details')}
          aria-label="Home / About"
        >
          <Home className={styles.dockIcon} />
          <span className={styles.dockLabel}>Home</span>
        </button>

        <button
          type="button"
          className={`${styles.dockItem} ${activeTab === 'services' ? styles.active : ''}`}
          onClick={() => scrollTo('services')}
          aria-label="Services & Pricing"
        >
          <Layers className={styles.dockIcon} />
          <span className={styles.dockLabel}>Services</span>
        </button>

        <button
          type="button"
          className={`${styles.dockItem} ${activeTab === 'estimator' ? styles.active : ''}`}
          onClick={() => scrollTo('estimator')}
          aria-label="Cost Estimator"
        >
          <Calculator className={styles.dockIcon} />
          <span className={styles.dockLabel}>Estimator</span>
        </button>

        <a
          href="https://wa.me/917024768125?text=Hello%20WeberSeek,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.dockItem} ${styles.dockItemHighlight}`}
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className={styles.dockIcon} />
          <span className={styles.dockLabel}>WhatsApp</span>
        </a>
      </nav>
    </div>
  );
}
