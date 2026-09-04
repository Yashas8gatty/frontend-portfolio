import React from 'react';

export const VercelStrobe = () => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] pointer-events-none z-0 overflow-hidden select-none flex flex-col items-center">
      
      {/* Continuous Sweeping Light Pyramid Ray Beam */}
      <div 
        className="absolute -top-10 left-1/2 w-[900px] h-[600px] origin-top animate-vercel-beam opacity-100"
        style={{
          background: 'conic-gradient(from 155deg at 50% 0%, rgba(255, 255, 255, 0.22) 0deg, rgba(255, 255, 255, 0.06) 25deg, transparent 50deg, transparent 310deg, rgba(255, 255, 255, 0.06) 335deg, rgba(255, 255, 255, 0.22) 360deg)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)'
        }}
      />

      {/* Continuous Pulsing Ambient White Spotlight Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_70%)] blur-2xl animate-vercel-strobe opacity-100" />

      {/* Top Center Light Emitter Point Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),transparent)] blur-[1px] animate-pulse" />

      {/* Atmospheric Vignette Blend Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_25%,#08090A_90%)]" />

    </div>
  );
};

export default VercelStrobe;
