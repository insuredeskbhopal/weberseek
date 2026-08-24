'use client';

import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-title">WEBERSEEK</span>
            <p>Custom websites, mobile apps, and bespoke software solutions built with clean code and reliable performance for growing businesses.</p>
          </div>
          <div className="footer-nav-col">
            <h5>Services</h5>
            <a href="#services">Web Development</a>
            <a href="#services">Mobile Applications</a>
            <a href="#services">Custom Software &amp; Backends</a>
            <a href="#services">AI &amp; Automations</a>
          </div>
          <div className="footer-nav-col">
            <h5>Company</h5>
            <a href="#showcase">Featured Work</a>
            <a href="#solutions">Solutions by Scale</a>
            <a href="#estimator">Cost Estimator</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#process">Our Process</a>
          </div>
          <div className="footer-nav-col">
            <h5>Contact</h5>
            <a href="mailto:hello@weberseek.com">hello@weberseek.com</a>
            <a href="#contact">Start a Project</a>
            <span className="status-indicator-pill"><span className="status-dot"></span>Available for New Projects</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 WEBERSEEK. All rights reserved.</p>
          <a href="#introScreen" className="back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
