'use client';

import React from 'react';

export default function ScaleSolutions() {
  return (
    <section className="section-block" id="solutions">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">WHO WE HELP</span>
          <h2 className="section-title">Right-Sized for Your Stage</h2>
          <p className="section-desc">Whether you're running a local business, building a venture-backed startup, or managing an established company.</p>
        </div>

        {/* Scale Switcher Tabs */}
        <div className="scale-tabs" id="scaleTabs">
          <button className="scale-tab-btn active" data-scale="local">
            <span className="tab-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path></svg></span>
            <span>Small &amp; Local Businesses</span>
          </button>
          <button className="scale-tab-btn" data-scale="startup">
            <span className="tab-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg></span>
            <span>Growth Startups &amp; SMEs</span>
          </button>
          <button className="scale-tab-btn" data-scale="enterprise">
            <span className="tab-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg></span>
            <span>Established &amp; Enterprise</span>
          </button>
        </div>

        {/* Scale Tab Content */}
        <div className="scale-content-box glass-panel parallax-big-card" id="scaleContentBox">

          <div className="scale-panel active has-bg-art" id="panel-local">
            <div className="panel-card-bg-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/backgrounds/local_business_bg.webp" alt="Local Storefront Presence" className="panel-card-bg-img" loading="lazy" />
              <div className="panel-card-vignette"></div>
            </div>
            <div className="scale-panel-grid">
              <div className="scale-info">
                <span className="scale-badge">Quick Turnaround &amp; Fixed Pricing</span>
                <h3>Get Found Online and Win More Local Customers</h3>
                <p>We help local stores, clinics, contractors, restaurants, and service businesses get a clean online presence that drives real phone calls, bookings, and customer inquiries.</p>
                <div className="scale-perks">
                  <div className="perk-item">✓ Delivered in 1 to 2 weeks</div>
                  <div className="perk-item">✓ One-tap phone calling, booking &amp; WhatsApp buttons</div>
                  <div className="perk-item">✓ Local Google Maps &amp; SEO setup included</div>
                  <div className="perk-item">✓ Fixed, transparent quote with zero hidden fees</div>
                </div>
                <a href="#contact" className="btn-liquid-glass btn-liquid-primary">
                  <div className="liquid-glass-border"></div><div className="liquid-glass-backdrop"></div>
                  <div className="btn-content"><span>Get a Local Business Quote</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                </a>
              </div>
              <div className="scale-card-preview">
                <div className="preview-mini-hud">
                  <div className="hud-header"><span className="hud-dot red"></span><span className="hud-dot yellow"></span><span className="hud-dot green"></span><span className="hud-title">Local Business Setup</span></div>
                  <div className="hud-body">
                    <div className="hud-stat-row"><span>Customer Inquiries:</span><strong className="text-glow-green">Up to 2.5x Increase</strong></div>
                    <div className="hud-stat-row"><span>Mobile Load Speed:</span><strong className="text-glow-cyan">Under 0.5s</strong></div>
                    <div className="hud-stat-row"><span>Google Maps:</span><strong className="text-glow-yellow">Optimized Local Profile</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scale-panel" id="panel-startup">
            <div className="scale-panel-grid">
              <div className="scale-info">
                <span className="scale-badge">Fast MVP &amp; Investor-Ready</span>
                <h3>Ship Your Product in Weeks, Not Months</h3>
                <p>For founders who need to validate their product and onboard early users quickly. We design clean user flows, write maintainable code, and set up your deployment from day one.</p>
                <div className="scale-perks">
                  <div className="perk-item">✓ Working MVP ready in 3 to 6 weeks</div>
                  <div className="perk-item">✓ Modern React, Flutter, Node.js &amp; Supabase stack</div>
                  <div className="perk-item">✓ User authentication, Stripe payments &amp; analytics</div>
                  <div className="perk-item">✓ Clean codebase ready for your future in-house team</div>
                </div>
                <a href="#contact" className="btn-liquid-glass btn-liquid-primary">
                  <div className="liquid-glass-border"></div><div className="liquid-glass-backdrop"></div>
                  <div className="btn-content"><span>Discuss Your Startup MVP</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                </a>
              </div>
              <div className="scale-card-preview">
                <div className="preview-mini-hud">
                  <div className="hud-header"><span className="hud-dot red"></span><span className="hud-dot yellow"></span><span className="hud-dot green"></span><span className="hud-title">Startup MVP Delivery</span></div>
                  <div className="hud-body">
                    <div className="hud-stat-row"><span>Timeline to Launch:</span><strong className="text-glow-green">Under 30 Days</strong></div>
                    <div className="hud-stat-row"><span>Infrastructure:</span><strong className="text-glow-cyan">Ready for 50k+ Users</strong></div>
                    <div className="hud-stat-row"><span>Tech Stack:</span><strong className="text-glow-yellow">Next.js • Flutter • Supabase</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scale-panel" id="panel-enterprise">
            <div className="scale-panel-grid">
              <div className="scale-info">
                <span className="scale-badge">High Security &amp; Dedicated SLA</span>
                <h3>Custom Enterprise Tools &amp; Modern Cloud Backends</h3>
                <p>For established teams modernizing legacy software, connecting disparate internal tools, or needing dedicated engineering support for large web platforms.</p>
                <div className="scale-perks">
                  <div className="perk-item">✓ Scalable microservices with 99.99% uptime</div>
                  <div className="perk-item">✓ Role-based access control, SSO &amp; encrypted databases</div>
                  <div className="perk-item">✓ Direct integrations with your existing ERP, CRM, or APIs</div>
                  <div className="perk-item">✓ Dedicated support channel with guaranteed response times</div>
                </div>
                <a href="#contact" className="btn-liquid-glass btn-liquid-primary">
                  <div className="liquid-glass-border"></div><div className="liquid-glass-backdrop"></div>
                  <div className="btn-content"><span>Schedule Technical Review</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
                </a>
              </div>
              <div className="scale-card-preview">
                <div className="preview-mini-hud">
                  <div className="hud-header"><span className="hud-dot red"></span><span className="hud-dot yellow"></span><span className="hud-dot green"></span><span className="hud-title">Enterprise Standards</span></div>
                  <div className="hud-body">
                    <div className="hud-stat-row"><span>System Reliability:</span><strong className="text-glow-green">99.99% Uptime</strong></div>
                    <div className="hud-stat-row"><span>Security:</span><strong className="text-glow-cyan">Role-Based Access &amp; SSO</strong></div>
                    <div className="hud-stat-row"><span>Compliance:</span><strong className="text-glow-yellow">GDPR • SOC2 Ready</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
