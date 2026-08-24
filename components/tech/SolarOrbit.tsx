'use client';

import React from 'react';
import { 
  Code2, 
  Layers, 
  Smartphone, 
  Sparkles, 
  Server, 
  Bot, 
  Database, 
  Zap, 
  Cloud, 
  Box, 
  Workflow, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const TECH_CATEGORIES = [
  {
    step: '01',
    category: 'Frontend & Mobile',
    badgeColor: 'cyan',
    desc: 'High-performance user interfaces and native mobile apps built for sub-second speeds.',
    items: [
      {
        name: 'React & Next.js 14',
        role: 'App Router, Server Components & SEO',
        icon: Layers,
        color: 'text-cyan',
        tag: 'Web & SSR'
      },
      {
        name: 'TypeScript',
        role: 'Type Safety & Robust Architecture',
        icon: Code2,
        color: 'text-blue',
        tag: 'Strict Typing'
      },
      {
        name: 'Flutter & Native',
        role: 'Cross-Platform iOS & Android Apps',
        icon: Smartphone,
        color: 'text-cyan',
        tag: 'Mobile'
      },
      {
        name: 'Modern CSS & Motion',
        role: 'Fluid GSAP Animations & Glassmorphism',
        icon: Sparkles,
        color: 'text-indigo',
        tag: 'UI/UX'
      },
    ]
  },
  {
    step: '02',
    category: 'Backend & AI Engine',
    badgeColor: 'emerald',
    desc: 'Scalable APIs, intelligent automations, and resilient database architectures.',
    items: [
      {
        name: 'Node.js & Express',
        role: 'High-Concurrency Event-Driven APIs',
        icon: Server,
        color: 'text-emerald',
        tag: 'Microservices'
      },
      {
        name: 'Python & FastAPI',
        role: 'AI Automations, Agents & LLM Pipelines',
        icon: Bot,
        color: 'text-amber',
        tag: 'AI / ML'
      },
      {
        name: 'PostgreSQL & Prisma',
        role: 'ACID Relational Data & Supabase Cloud',
        icon: Database,
        color: 'text-purple',
        tag: 'Database'
      },
      {
        name: 'Redis & Caching',
        role: 'Sub-Millisecond Latency & Session Store',
        icon: Zap,
        color: 'text-pink',
        tag: 'Speed'
      },
    ]
  },
  {
    step: '03',
    category: 'Cloud & Infrastructure',
    badgeColor: 'blue',
    desc: 'Enterprise-grade hosting, automated pipelines, and ironclad edge security.',
    items: [
      {
        name: 'AWS & Google Cloud',
        role: 'Global Multi-Region Edge Infrastructure',
        icon: Cloud,
        color: 'text-orange',
        tag: 'Hosting'
      },
      {
        name: 'Docker & Containers',
        role: 'Deterministic, Isolated Environments',
        icon: Box,
        color: 'text-cyan',
        tag: 'DevOps'
      },
      {
        name: 'CI/CD Pipelines',
        role: 'Automated Testing & Zero-Downtime Deploy',
        icon: Workflow,
        color: 'text-blue',
        tag: 'Automation'
      },
      {
        name: 'Edge CDN & SSL',
        role: 'Global DDoS Shield & Sub-0.4s Delivery',
        icon: ShieldCheck,
        color: 'text-emerald',
        tag: 'Security'
      },
    ]
  }
];

export default function SolarOrbit() {
  return (
    <section className="section-block" id="tech-stack">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">ENGINEERED FOR SCALE</span>
          <h2 className="section-title">Technologies We Rely On Every Day</h2>
          <p className="section-desc">We build with mature, industry-standard frameworks and cloud architectures that deliver blazing speed for users and effortless maintainability for your team.</p>
        </div>

        {/* Modern Bento Tech Matrix Grid */}
        <div className="tech-matrix-grid">
          {TECH_CATEGORIES.map((cat, catIdx) => (
            <div key={catIdx} className="tech-category-card glass-panel parallax-big-card">
              <div className="tech-category-header">
                <div className="tech-cat-badge-row">
                  <span className={`tech-step-pill pill-${cat.badgeColor}`}>{cat.step}</span>
                  <span className="tech-cat-subtitle">{cat.category}</span>
                </div>
                <p className="tech-cat-desc">{cat.desc}</p>
              </div>

              <div className="tech-items-stack">
                {cat.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIdx} className="tech-item-row">
                      <div className={`tech-item-icon-box icon-${cat.badgeColor}`}>
                        <Icon size={20} className={item.color} />
                      </div>
                      <div className="tech-item-info">
                        <div className="tech-item-title-row">
                          <strong className="tech-item-name">{item.name}</strong>
                          <span className="tech-tag-badge">{item.tag}</span>
                        </div>
                        <span className="tech-item-role">{item.role}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="tech-bottom-banner">
          <div className="tech-assurance-pill">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>Zero proprietary lock-in. Full source code ownership, clean documentation, and modern standard tooling.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
