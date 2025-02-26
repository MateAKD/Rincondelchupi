
import React, { useRef, useEffect } from 'react';
import Vimeo from '@vimeo/player';

interface HeroSectionProps {
  handleWhatsAppClick: () => void;
}

const HeroSection = ({ handleWhatsAppClick }: HeroSectionProps) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Vimeo(videoRef.current, {
        id: 1050812767,
        background: true,
        responsive: true,
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-[60vh] md:h-[70vh] mt-[64px] flex items-start justify-center text-white overflow-hidden">
      <div ref={videoRef} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/95 backdrop-blur-[16px]"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-[85%] md:max-w-[70%] mx-auto mt-12 md:mt-16">
        <div className="p-4 rounded-lg bg-black/30 border border-black/20 shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-3 text-golden animate-fade-up drop-shadow-lg">
            Rincón del Chupi
          </h1>
          <p className="text-sm md:text-2xl text-gray-200 mb-4 animate-fade-up drop-shadow" style={{animationDelay: '0.2s'}}>
            Las mejores bebidas, al mejor precio
          </p>
          <button onClick={handleWhatsAppClick} className="bg-golden text-black px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-golden/90 transition-all duration-300 animate-fade-up shadow-md" style={{animationDelay: '0.4s'}}>
            ¡Pedí ahora!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
