'use client';

import React from 'react';

export default function ServicesSection() {
  return (
    <section className="section-block" id="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">WHAT WE BUILD</span>
          <h2 className="section-title">Modern Software Built to Last</h2>
          <p className="section-desc">From clean marketing sites to full-stack web apps, we handle design, coding, and deployment from start to finish.</p>
        </div>

        <div className="services-grid">

          {/* Card 1: Wide Feature Web Card */}
          <div className="service-card engineered-card feature-card-wide">
            <div className="card-visual-hud preview-browser-frame">
              <div className="hud-top-bar">
                <div className="hud-window-dots"><span></span><span></span><span></span></div>
                <div className="hud-url-pill">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>ektarealestate.in/villas</span>
                </div>
                <span className="hud-badge green">LIVE APP</span>
              </div>
              <div className="hud-preview-content real-ui-viewport">
                <div className="real-ui-search-bar">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <span>Find Luxury Villas in Gurgaon...</span>
                </div>
                <div className="real-ui-listing-row">
                  <div className="real-ui-card-item">
                    <div className="real-ui-thumb villa-thumb"><span className="thumb-badge">Featured</span></div>
                    <div className="real-ui-meta"><span className="real-ui-price">₹1.85 Cr</span><span className="real-ui-sub">4 BHK Villa • Sector 62</span></div>
                  </div>
                  <div className="real-ui-card-item">
                    <div className="real-ui-thumb penthouse-thumb"><span className="thumb-badge">New</span></div>
                    <div className="real-ui-meta"><span className="real-ui-price">₹2.40 Cr</span><span className="real-ui-sub">Sky Penthouse • Golf Course</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content-wrap">
              <div className="card-meta-tag">CUSTOM WEB</div>
              <h3 className="service-name">Custom Websites &amp; Web Apps</h3>
              <p className="service-description">Fast, responsive websites and full-stack web platforms built with Next.js and TypeScript. Designed to look sharp on every screen and load in a fraction of a second.</p>
              <div className="service-chips-grid">
                <span className="tech-chip">Next.js &amp; React</span>
                <span className="tech-chip">&lt;0.4s Fast Load</span>
                <span className="tech-chip">Google SEO Ready</span>
              </div>
              <div className="card-footer-row">
                <span className="turnaround-tag">Single Page from ₹2,999 • E-Com from ₹13,999</span>
                <a href="#contact" className="card-action-btn">
                  <span>View Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Tall Mobile App Card */}
          <div className="service-card engineered-card feature-card-tall">
            <div className="card-visual-hud preview-mobile-frame">
              <div className="hud-top-bar mobile-top-bar">
                <div className="mobile-clock">09:41</div>
                <div className="hud-island-pill">
                  <span className="island-dot active"></span>
                  <span>Otogent Mobile</span>
                </div>
                <div className="mobile-status-icons">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                  <span className="hud-badge cyan">iOS • Android</span>
                </div>
              </div>
              <div className="hud-preview-content real-mobile-ui">
                <div className="mobile-lead-card">
                  <div className="mobile-lead-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="mobile-lead-info"><strong>New Client Lead: Rahul Sharma</strong><span>Budget ₹2 Cr • Ready for inspection</span></div>
                  <span className="mobile-lead-status">Instant</span>
                </div>
                <div className="mobile-tab-bar">
                  <span className="tab-item active"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>Home</span>
                  <span className="tab-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>Leads</span>
                  <span className="tab-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>Chat</span>
                </div>
              </div>
            </div>
            <div className="card-content-wrap">
              <div className="card-meta-tag">IOS &amp; ANDROID</div>
              <h3 className="service-name">Mobile Apps (iOS &amp; Android)</h3>
              <p className="service-description">Cross-platform mobile apps built with Flutter and React Native. Smooth 60fps animations, offline storage, and hassle-free App Store submission.</p>
              <div className="service-chips-grid">
                <span className="tech-chip">iOS &amp; Android</span>
                <span className="tech-chip">Offline-First Sync</span>
                <span className="tech-chip">App Store Launch</span>
              </div>
              <div className="card-footer-row">
                <span className="turnaround-tag">Business Apps from ₹11,999</span>
                <a href="#contact" className="card-action-btn"><span>View Details</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
              </div>
            </div>
          </div>

          {/* Card 3: Tall SaaS Backend Card */}
          <div className="service-card engineered-card feature-card-tall">
            <div className="card-visual-hud preview-saas-frame">
              <div className="hud-top-bar">
                <div className="hud-saas-title">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
                  <span>Executive Admin Portal</span>
                </div>
                <span className="hud-badge green">POSTGRES 16</span>
              </div>
              <div className="hud-preview-content real-saas-ui">
                <div className="saas-metrics-grid">
                  <div className="saas-metric-box"><span className="metric-title">Monthly Revenue</span><div className="metric-value-row"><strong className="text-glow-white">$48,920</strong><span className="metric-trend green">↑ 24.8%</span></div></div>
                  <div className="saas-metric-box"><span className="metric-title">Active Orders</span><div className="metric-value-row"><strong className="text-glow-white">1,420</strong><span className="metric-trend cyan">↑ 14%</span></div></div>
                </div>
                <div className="saas-chart-bars">
                  <div className="chart-bar" style={{height:'40%'}}><span>Mon</span></div>
                  <div className="chart-bar" style={{height:'65%'}}><span>Tue</span></div>
                  <div className="chart-bar" style={{height:'50%'}}><span>Wed</span></div>
                  <div className="chart-bar" style={{height:'85%'}}><span>Thu</span></div>
                  <div className="chart-bar" style={{height:'70%'}}><span>Fri</span></div>
                  <div className="chart-bar active" style={{height:'100%'}}><span>Sat</span></div>
                  <div className="chart-bar" style={{height:'80%'}}><span>Sun</span></div>
                </div>
              </div>
            </div>
            <div className="card-content-wrap">
              <div className="card-meta-tag">BACKEND &amp; SAAS</div>
              <h3 className="service-name">Custom Software &amp; Backends</h3>
              <p className="service-description">Internal dashboards, client portals, automated workflows, and database backends built to handle thousands of operations reliably.</p>
              <div className="service-chips-grid">
                <span className="tech-chip">PostgreSQL &amp; APIs</span>
                <span className="tech-chip">Client Portals</span>
                <span className="tech-chip">Automated Pipelines</span>
              </div>
              <div className="card-footer-row">
                <span className="turnaround-tag">Scoped to Project</span>
                <a href="#contact" className="card-action-btn"><span>View Details</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
              </div>
            </div>
          </div>

          {/* Card 4: Wide Feature AI Agent Card */}
          <div className="service-card engineered-card feature-card-wide">
            <div className="card-visual-hud preview-ai-frame">
              <div className="hud-top-bar">
                <div className="hud-ai-status"><span className="ai-pulse-dot"></span><span>AI Agent • Doc RAG</span></div>
                <span className="hud-badge purple">AUTOMATED</span>
              </div>
              <div className="hud-preview-content real-ai-ui">
                <div className="ai-chat-bubble user"><span>&quot;Summarize clause 4.2 &amp; email approval to client.&quot;</span></div>
                <div className="ai-chat-bubble bot">
                  <div className="bot-header"><span className="bot-badge">Otogent AI</span><span className="bot-citation">📄 Contract_v2.pdf §4.2</span></div>
                  <p>100% IP transferred to client upon sign-off. Zero license fees.</p>
                </div>
                <div className="ai-action-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Approval email sent to client@company.com</span>
                </div>
              </div>
            </div>
            <div className="card-content-wrap">
              <div className="card-meta-tag">AUTOMATION &amp; AI</div>
              <h3 className="service-name">AI &amp; Workflow Automation</h3>
              <p className="service-description">Smart assistants trained on your business documents, customer support triage, and API integrations that save your team dozens of hours each week.</p>
              <div className="service-chips-grid">
                <span className="tech-chip">Document AI (RAG)</span>
                <span className="tech-chip">Smart Auto-Triage</span>
                <span className="tech-chip">Zero License Fees</span>
              </div>
              <div className="card-footer-row">
                <span className="turnaround-tag">1-2 Wks Delivery</span>
                <a href="#contact" className="card-action-btn"><span>View Details</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
