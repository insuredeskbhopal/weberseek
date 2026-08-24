'use client';

import React, { useRef } from 'react';

const WA_NUMBER = '917024768125';

function buildWaUrl(name: string, email: string, company: string, service: string, details: string) {
  const msg = `🚀 *New Project Request - WeberSeek*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n🏢 *Company:* ${company || 'Individual / Startup'}\n🛠️ *Service:* ${service}\n📝 *Details:*\n${details}\n━━━━━━━━━━━━━━━━━━━━\nSent via WeberSeek Website`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function ContactSection() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim() || '';
    const email = emailRef.current?.value.trim() || '';
    const company = companyRef.current?.value.trim() || '';
    const service = serviceRef.current?.value || 'single_page';
    const details = detailsRef.current?.value.trim() || '';

    const serviceLabel = serviceRef.current?.options[serviceRef.current.selectedIndex]?.text || service;

    if (!name || !email || !details) {
      if (statusRef.current) { statusRef.current.textContent = 'Please fill in all required fields.'; statusRef.current.className = 'form-status error'; }
      return;
    }

    // Save to DB (non-blocking)
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, serviceType: service, details }),
    }).catch(() => {});

    // Redirect to WhatsApp
    window.open(buildWaUrl(name, email, company, serviceLabel, details), '_blank');
  };

  return (
    <section className="section-block" id="contact">
      <div className="section-container">
        <div className="contact-box glass-panel liquid-glass-card parallax-big-card">
          <div className="contact-grid">

            <div className="contact-info">
              <span className="section-pill">START A CONVERSATION</span>
              <h2 className="contact-headline">Have a Project in Mind? Let's Build It.</h2>
              <p>Tell us what you're looking to create, improve, or automate. We'll get back to you with a detailed breakdown, timeline, and quote within 24 hours.</p>

              <div className="contact-points-wrapper">
                <div className="contact-points">

                  <div className="point-row">
                    <div className="point-icon-box cyan">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    </div>
                    <div><strong>Fast 24-Hour Response</strong><p>You'll receive a real response and preliminary estimate within one business day.</p></div>
                  </div>

                  <div className="point-row">
                    <div className="point-icon-box amber">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div><strong>Direct Engineer Access</strong><p>Talk directly with the developers building your software — no non-technical sales reps in between.</p></div>
                  </div>

                  <div className="point-row">
                    <div className="point-icon-box blue">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <div><strong>Milestone-Based Delivery</strong><p>Pay as verifiable milestones are delivered, with full source code handoff.</p></div>
                  </div>

                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="whatsapp-direct-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/></svg>
                    <span>Instant WhatsApp: +91 7024768125</span>
                  </a>
                </div>

                {/* Video Frame */}
                <div className="contact-video-frame liquid-glass-card">
                  <div className="video-crop-container">
                    <video src="/assets/waving hands.webm" autoPlay loop muted playsInline className="contact-webm-video"></video>
                  </div>
                  <div className="video-frame-border"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="clientName">Your Name *</label>
                  <input ref={nameRef} type="text" id="clientName" required placeholder="e.g. Alex Morgan" />
                </div>
                <div className="form-group">
                  <label htmlFor="clientEmail">Email Address *</label>
                  <input ref={emailRef} type="email" id="clientEmail" required placeholder="alex@business.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Business / Company Name</label>
                  <input ref={companyRef} type="text" id="companyName" placeholder="e.g. Apex Retail or My Local Cafe" />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Service Needed</label>
                  <select ref={serviceRef} id="projectType">
                    <option value="single_page">Single Page Website (From ₹2,999)</option>
                    <option value="ecommerce">E-Commerce Website (From ₹13,999)</option>
                    <option value="mobile_app">Business Mobile App (From ₹11,999)</option>
                    <option value="custom_software">Custom Software &amp; Web Portal</option>
                    <option value="ai_automation">AI &amp; Workflow Automation</option>
                    <option value="full_solution">Complete Redesign &amp; Development</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectDetails">What are you looking to build? *</label>
                <textarea ref={detailsRef} id="projectDetails" rows={4} required placeholder="Tell us about what you want to build, any specific features you need, or your target timeline..."></textarea>
              </div>

              <button type="submit" className="btn btn-cta-primary btn-whatsapp w-full" id="submitBtn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/></svg>
                <span>Send Request on WhatsApp</span>
              </button>
              <p className="form-disclaimer">Direct WhatsApp: <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">+91 7024768125</a> (Instant Reply)</p>

              <div className="form-status" id="formStatus" ref={statusRef}></div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
