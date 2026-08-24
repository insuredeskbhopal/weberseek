'use client';

import React from 'react';

export default function ShowcaseCoverflow() {
  return (
    <section className="section-block" id="showcase">
      <div className="section-container">
        <div className="section-header">
          <span className="section-pill">OUR WORK</span>
          <h2 className="section-title">Websites We've Built</h2>
          <p className="section-desc">A few live web applications and client platforms designed and engineered by our team.</p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div className="coverflow-carousel-wrapper" id="showcaseCoverflow" role="region" aria-roledescription="carousel" aria-label="Websites portfolio carousel">
          <div className="coverflow-frame-viewport" id="showcaseViewport" tabIndex={0}>
            <div className="coverflow-track" id="showcaseTrack">

              {[
                { index: 0, site: 'https://otogent.com', label: '1 of 8' },
                { index: 1, site: 'https://ektarealestate.in', label: '2 of 8' },
                { index: 2, site: 'https://rrsolutions.store', label: '3 of 8' },
                { index: 3, site: 'https://bimaheadquarter.com', label: '4 of 8' },
                { index: 4, site: 'https://otogent.com', label: '5 of 8' },
                { index: 5, site: 'https://ektarealestate.in', label: '6 of 8' },
                { index: 6, site: 'https://rrsolutions.store', label: '7 of 8' },
                { index: 7, site: 'https://bimaheadquarter.com', label: '8 of 8' },
              ].map(({ index, site, label }) => {
                const host = new URL(site).hostname;
                return (
                  <div key={index} className="coverflow-card" data-index={index} data-site={site} role="group" aria-roledescription="slide" aria-label={label}>
                    <div className="coverflow-browser-window">
                      <div className="coverflow-browser-chrome">
                        <div className="browser-dots">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                        </div>
                        <div className="browser-url-bar">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                          <span>{host}</span>
                        </div>
                        <a href={site} target="_blank" rel="noopener noreferrer" className="browser-open-btn" title="Open in new tab" aria-label="Open in new tab">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      </div>
                      <div className="coverflow-screen-wrap">
                        <iframe
                          src={site}
                          title={host}
                          className="coverflow-live-iframe"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Navigation Chevrons */}
          <button type="button" className="coverflow-nav-btn prev" id="showcasePrev" aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button type="button" className="coverflow-nav-btn next" id="showcaseNext" aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          {/* Caption */}
          <div className="coverflow-caption-area" id="showcaseCaption">
            <h3 className="coverflow-caption-title" id="showcaseTitle">Otogent</h3>
            <p className="coverflow-caption-sub" id="showcaseSubtitle">AI Multi-Agent Automation Platform</p>
          </div>

          {/* Pagination Dots */}
          <div className="coverflow-pagination" id="showcasePagination"></div>
        </div>
      </div>
    </section>
  );
}
