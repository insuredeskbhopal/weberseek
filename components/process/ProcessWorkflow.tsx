'use client';

import React from 'react';

export default function ProcessWorkflow() {
  return (
    <section className="section-block" id="process">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">OUR WORKFLOW</span>
          <h2 className="section-title">How We Take Your Project Live</h2>
          <p className="section-desc">Clear milestones, weekly progress demos, and no surprises.</p>
        </div>

        <div className="process-vertical-list">

          {[
            {
              phase: '01', title: 'Scope & Strategy', img: '/images/process/process_01_strategy.jpg', alt: 'Scope and Strategy Consultation',
              desc: 'We review your project goals, define clear deliverables, and map out an exact sprint plan with fixed timelines so you know exactly what will be built and when.',
              deliverables: ['Requirements Architecture', 'Fixed Scope & Timeline', 'Technical Specification'],
            },
            {
              phase: '02', title: 'Interactive UI/UX Design', img: '/images/process/process_02_design.jpg', alt: 'Interactive UI UX Design Session',
              desc: 'We build clickable Figma prototypes so you can click through every screen, test user journeys, and refine the design flow before coding starts.',
              deliverables: ['Clickable Figma Prototypes', 'High-Fidelity UI/UX Design', 'Design System & Components'],
            },
            {
              phase: '03', title: 'Sprint-Based Development', img: '/images/process/process_03_development.jpg', alt: 'Sprint-Based Software Engineering',
              desc: 'We build in structured weekly sprints with live staging links so you can test features as they are engineered and see real progress every week.',
              deliverables: ['Weekly Sprint Releases', 'Live Cloud Staging Access', 'Production Clean Codebase'],
            },
            {
              phase: '04', title: 'Testing & Speed Tuning', img: '/images/process/process_04_testing.jpg', alt: 'Cross-Device Quality Assurance Testing',
              desc: 'Thorough cross-device testing across iOS, Android, and desktop browsers, along with security checks, load speed optimization, and edge caching.',
              deliverables: ['Cross-Device & Mobile QA', 'Sub-0.5s Page Speed Tuning', 'Security & Auth Hardening'],
            },
            {
              phase: '05', title: 'Launch & 30-Day Support', img: '/images/process/process_05_launch.jpg', alt: 'Successful Live Product Launch',
              desc: 'We manage production domain rollout, cloud setup, and App Store submission, plus provide 30 days of complimentary post-launch bug fixing and support.',
              deliverables: ['Zero-Downtime Live Rollout', 'Cloud & App Store Setup', '30-Day Post-Launch Warranty'],
            },
          ].map(({ phase, title, img, alt, desc, deliverables }) => (
            <div key={phase} className="process-vertical-card glass-panel parallax-big-card">
              <div className="process-content-side">
                <div className="process-step-header">
                  <span className="process-step-pill">PHASE {phase}</span>
                  <span className="process-step-num">{phase}</span>
                </div>
                <h3 className="process-step-title">{title}</h3>
                <p className="process-step-desc">{desc}</p>
                <div className="process-deliverables">
                  {deliverables.map(d => <span key={d} className="deliverable-item">✓ {d}</span>)}
                </div>
              </div>
              <div className="process-frame-side">
                <div className="process-image-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={alt} className="process-frame-img" loading="lazy" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
