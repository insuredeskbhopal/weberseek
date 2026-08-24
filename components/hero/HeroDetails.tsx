'use client';

import React from 'react';

const METRICS_DATA = [
  {
    index: 0,
    value: '50+',
    label: 'Products Launched',
    sub: 'Websites, Apps & Portals',
    image: '/assets/card_products_launched.jpg',
  },
  {
    index: 1,
    value: '100%',
    label: 'Custom Code',
    sub: 'No Generic Templates',
    image: '/assets/card_custom_engineered.jpg',
  },
  {
    index: 2,
    value: '99.9%',
    label: 'Reliable Uptime',
    sub: 'Fast Cloud Hosting',
    image: '/assets/card_uptime_speed.jpg',
  },
  {
    index: 3,
    value: '3x - 10x',
    label: 'Client Growth',
    sub: 'Built to Convert Visitors',
    image: '/assets/card_client_growth.jpg',
  },
  {
    index: 4,
    value: '< 0.4s',
    label: 'Fast Page Load',
    sub: 'Worldwide Edge Delivery',
    image: '/assets/card_global_cdn.jpg',
  },
  {
    index: 5,
    value: '100%',
    label: 'Code Ownership',
    sub: 'You Own Every Line',
    image: '/assets/card_ip_ownership.jpg',
  },
];

export default function HeroDetails() {
  return (
    <section className="hero-details-section" id="hero-details">
      <div className="hero-content">

        {/* Section Eyebrow Badge */}
        <span className="section-pill hero-section-pill">FULL-STACK DIGITAL AGENCY</span>

        {/* Main Headline */}
        <h2 className="hero-main-title">Why Choose WeberSeek</h2>

        {/* Compelling Subheadline */}
        <p className="hero-subheadline">
          We design and build fast <strong>websites</strong>, <strong>iOS &amp; Android apps</strong>, and <strong>custom web software</strong>. Clean code, zero fluff, and direct access to the engineers building your product.
        </p>

        {/* CTAs & Action Area (Liquid Glass Architecture with Peeking Hover GIF) */}
        <div className="hero-cta-group">
          <a href="#contact" className="btn-liquid-glass btn-liquid-primary btn-with-peeker">
            <div className="peeker-character">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/peeking_genzee.gif" alt="Peeking Genzee" draggable={false} />
            </div>
            <div className="liquid-glass-border"></div>
            <div className="liquid-glass-backdrop"></div>
            <div className="btn-content">
              <span>Start Your Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </a>
          <a href="#estimator" className="btn-liquid-glass btn-liquid-secondary">
            <div className="liquid-glass-border"></div>
            <div className="liquid-glass-backdrop"></div>
            <div className="btn-content">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path></svg>
              <span>Project Cost Estimator</span>
            </div>
          </a>
        </div>

        {/* 3D Coverflow Startup Metrics Carousel */}
        <div className="coverflow-carousel-wrapper" id="metricsCoverflow" role="region" aria-roledescription="carousel" aria-label="Metrics Coverflow Carousel">
          <div className="coverflow-frame" id="metricsFrame" tabIndex={0}>
            <div className="coverflow-track" id="metricsTrack">
              {METRICS_DATA.map((card) => (
                <div key={card.index} className="coverflow-card metric-card liquid-glass-card" data-index={card.index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.label} className="coverflow-card-bg" draggable={false} />
                  <div className="card-vignette-overlay"></div>
                  <div className="liquid-glass-border"></div>
                  <div className="metric-card-inner">
                    <div className="metric-value">{card.value}</div>
                    <div className="metric-label">{card.label}</div>
                    <div className="metric-sub">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverflow Navigation Chevrons */}
          <button type="button" className="coverflow-nav-btn prev" id="metricsPrev" aria-label="Previous Slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button type="button" className="coverflow-nav-btn next" id="metricsNext" aria-label="Next Slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          {/* Coverflow Pagination Dots */}
          <div className="coverflow-pagination" id="metricsPagination"></div>
        </div>

      </div>
    </section>
  );
}
