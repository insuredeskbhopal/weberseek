'use client';

import React from 'react';

export default function SiteHeader() {
  return (
    <header className="site-header" id="siteHeader">
      <div className="header-container">
        <a href="#hero-details" className="brand-logo">
          <span className="brand-title">WEBERSEEK</span>
        </a>

        <nav className="nav-links" id="navLinks">
          <a href="#services" className="nav-link">Services</a>
          <a href="#showcase" className="nav-link">Work</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#estimator" className="nav-link">Estimator</a>
          <a href="#tech-stack" className="nav-link">Tech</a>
          <a href="#process" className="nav-link">Process</a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary-glow">
            <span>Start a Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle Navigation" aria-expanded="false" aria-controls="navLinks">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Hairline Scroll Reading Progress Beam */}
        <div className="nav-scroll-progress" id="navScrollProgress"></div>
      </div>
    </header>
  );
}
