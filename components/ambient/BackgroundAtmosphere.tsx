'use client';

import React from 'react';

export default function BackgroundAtmosphere() {
  return (
    <>
      {/* Fixed Artwork Background Canvas */}
      <div className="bg-fixed-canvas" id="bgCanvas"></div>

      {/* Deep Cinematic Black Vignette Overlay */}
      <div className="vignette-overlay" id="vignetteOverlay"></div>

      {/* Ambient Celestial Floating Particles Canvas */}
      <canvas id="ambientCanvas" className="ambient-canvas"></canvas>
    </>
  );
}
