'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

// Ambient
import BackgroundAtmosphere from '@/components/ambient/BackgroundAtmosphere';
import GlassFilters from '@/components/ambient/GlassFilters';

// Sections
import HeroIntroCanvas from '@/components/hero/HeroIntroCanvas';
import HeroDetails from '@/components/hero/HeroDetails';
import SiteHeader from '@/components/navigation/SiteHeader';
import ServicesSection from '@/components/services/ServicesSection';
import ShowcaseCoverflow from '@/components/showcase/ShowcaseCoverflow';
import ScaleSolutions from '@/components/solutions/ScaleSolutions';
import ProjectEstimator from '@/components/estimator/ProjectEstimator';
import SolarOrbit from '@/components/tech/SolarOrbit';
import ProcessWorkflow from '@/components/process/ProcessWorkflow';
import ContactSection from '@/components/contact/ContactSection';
import SiteFooter from '@/components/footer/SiteFooter';

export default function WeberseekMain() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).initWeberseekApp) {
      (window as any).initWeberseekApp();
    }
  }, []);

  return (
    <>
      <BackgroundAtmosphere />
      <HeroIntroCanvas />
      <SiteHeader />

      <main className="details-screen-layer" id="detailsScreen">
        <HeroDetails />
        <ServicesSection />
        <ShowcaseCoverflow />
        <ScaleSolutions />
        <ProjectEstimator />
        <SolarOrbit />
        <ProcessWorkflow />
        <ContactSection />
        <SiteFooter />
      </main>

      <GlassFilters />

      <Script
        src="/main.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).initWeberseekApp) {
            (window as any).initWeberseekApp();
          }
        }}
      />
    </>
  );
}
