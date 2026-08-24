'use client';

import React from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Smartphone, 
  Zap, 
  Bot, 
  Store, 
  Rocket, 
  Building2,
  Palette,
  LayoutDashboard,
  CreditCard,
  MessageSquareCode,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function ProjectEstimator() {
  return (
    <section className="section-block" id="estimator">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">PROJECT CALCULATOR</span>
          <h2 className="section-title">Estimate Your Project Scope &amp; Timeline</h2>
          <p className="section-desc">Pick the options that match what you want to build for an instant ballpark cost and schedule.</p>
        </div>

        <div className="estimator-box glass-panel parallax-big-card" id="estimatorBox">
          {/* Dynamic Project Type Background Artwork with Soft Cinematic Dark Vignette */}
          <div className="estimator-bg-layer" id="estimatorBgLayer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estimator/estimator_bg_website.jpg" alt="Single Page Website" className="estimator-bg-img active" data-type="website" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estimator/estimator_bg_website.jpg" alt="E-Commerce Storefront" className="estimator-bg-img" data-type="ecommerce" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estimator/estimator_bg_mobile.jpg" alt="Business Mobile App" className="estimator-bg-img" data-type="mobile" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estimator/estimator_bg_software.jpg" alt="Custom Cloud Software" className="estimator-bg-img" data-type="software" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estimator/estimator_bg_ai.jpg" alt="AI Neural Orchestration" className="estimator-bg-img" data-type="ai" loading="lazy" />
            <div className="estimator-vignette"></div>
          </div>

          <div className="estimator-grid">

            {/* Left Column: Interactive Configurator */}
            <div className="estimator-configurator">

              {/* Step 1: Project Type */}
              <div className="estimator-step">
                <div className="step-header-row">
                  <span className="step-badge">STEP 01</span>
                  <label className="step-label">Select Project Type</label>
                </div>
                <div className="option-pills" id="typePills">
                  <button type="button" className="pill-btn active" data-type="website" data-base="2999" data-days="3">
                    <Globe size={16} />
                    <span>Single Page Website (From ₹2,999)</span>
                  </button>
                  <button type="button" className="pill-btn" data-type="ecommerce" data-base="13999" data-days="10">
                    <ShoppingBag size={16} />
                    <span>E-Commerce Website (From ₹13,999)</span>
                  </button>
                  <button type="button" className="pill-btn" data-type="mobile" data-base="11999" data-days="14">
                    <Smartphone size={16} />
                    <span>Business Mobile App (From ₹11,999)</span>
                  </button>
                  <button type="button" className="pill-btn" data-type="software" data-base="16999" data-days="20">
                    <Zap size={16} />
                    <span>Custom Software &amp; Portal</span>
                  </button>
                  <button type="button" className="pill-btn" data-type="ai" data-base="7999" data-days="7">
                    <Bot size={16} />
                    <span>AI Integration &amp; Automation</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Business Scale */}
              <div className="estimator-step">
                <div className="step-header-row">
                  <span className="step-badge">STEP 02</span>
                  <label className="step-label">Select Business Scale</label>
                </div>
                <div className="option-pills" id="scalePills">
                  <button type="button" className="pill-btn active" data-multiplier="1.0" data-name="Local / Small Business">
                    <Store size={16} />
                    <span>Local / Small Business</span>
                  </button>
                  <button type="button" className="pill-btn" data-multiplier="1.3" data-name="Growing Startup / Brand">
                    <Rocket size={16} />
                    <span>Growing Startup / Brand</span>
                  </button>
                  <button type="button" className="pill-btn" data-multiplier="1.8" data-name="Enterprise / High Volume">
                    <Building2 size={16} />
                    <span>Enterprise / High Volume</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Add-on Capabilities */}
              <div className="estimator-step">
                <div className="step-header-row">
                  <span className="step-badge">STEP 03</span>
                  <label className="step-label">Add-on Features &amp; Integrations</label>
                </div>
                <div className="feature-checkboxes" id="featureChecks">
                  <label className="check-card">
                    <input type="checkbox" value="1500" data-extra-days="2" />
                    <span className="check-box-custom"></span>
                    <div className="check-card-content">
                      <div className="check-card-header">
                        <Palette size={15} className="check-card-icon text-cyan" />
                        <span className="check-label">Custom UI/UX &amp; Motion Design</span>
                      </div>
                      <span className="check-card-price">+₹1,500 • ~2 Days</span>
                    </div>
                  </label>

                  <label className="check-card">
                    <input type="checkbox" value="2500" data-extra-days="3" />
                    <span className="check-box-custom"></span>
                    <div className="check-card-content">
                      <div className="check-card-header">
                        <LayoutDashboard size={15} className="check-card-icon text-blue" />
                        <span className="check-label">CMS &amp; Admin Management Portal</span>
                      </div>
                      <span className="check-card-price">+₹2,500 • ~3 Days</span>
                    </div>
                  </label>

                  <label className="check-card">
                    <input type="checkbox" value="2000" data-extra-days="2" />
                    <span className="check-box-custom"></span>
                    <div className="check-card-content">
                      <div className="check-card-header">
                        <CreditCard size={15} className="check-card-icon text-emerald" />
                        <span className="check-label">Online Payments, UPI &amp; Invoicing</span>
                      </div>
                      <span className="check-card-price">+₹2,000 • ~2 Days</span>
                    </div>
                  </label>

                  <label className="check-card">
                    <input type="checkbox" value="2500" data-extra-days="3" />
                    <span className="check-box-custom"></span>
                    <div className="check-card-content">
                      <div className="check-card-header">
                        <MessageSquareCode size={15} className="check-card-icon text-purple" />
                        <span className="check-label">WhatsApp Chatbot &amp; Automation</span>
                      </div>
                      <span className="check-card-price">+₹2,500 • ~3 Days</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Live Summary Card */}
            <div className="estimator-summary-card">
              <div className="summary-header">
                <span className="summary-badge">ESTIMATED PROJECTION</span>
                <h4>WeberSeek Scope &amp; Budget</h4>
                <p>Instant tailored scope projection based on your selection.</p>
              </div>

              <div className="summary-metrics">
                <div className="summary-metric">
                  <div className="sum-metric-label-group">
                    <Clock size={16} className="text-cyan" />
                    <span className="sum-label">Estimated Timeline</span>
                  </div>
                  <strong className="sum-value" id="estTimeline">~3-5 Business Days</strong>
                </div>

                <div className="summary-metric price-block">
                  <div className="sum-metric-label-group">
                    <span className="sum-label">Estimated Budget Guide</span>
                  </div>
                  <strong className="sum-value price-highlight" id="estPrice">₹2,999 - ₹3,750</strong>
                </div>
              </div>

              <div className="summary-inclusions">
                <div className="inclusion-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>100% Full Source Code &amp; IP Ownership Handover</span>
                </div>
                <div className="inclusion-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Mobile-First Responsive Design &amp; Speed Optimized</span>
                </div>
                <div className="inclusion-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>30 Days Post-Launch Warranty &amp; Support Included</span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary-glow w-full btn-estimator-quote" id="estimatorCta">
                <span>Get Instant WhatsApp Quote for This Scope</span>
                <ArrowRight size={16} />
              </a>

              <p className="summary-note">* Preliminary estimate. Final quote confirmed with an engineer within 24 hours.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
