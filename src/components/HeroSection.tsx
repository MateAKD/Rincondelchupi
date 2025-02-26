
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
    <section id="home" className="relative min-h-[60vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
      <div ref={videoRef} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[4px]"></div>
      </div>
      <div className="relative z-10 text-center px-4 py-8 md:py-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 text-golden animate-fade-up">
          Rincón del Chupi
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
          Las mejores bebidas, al mejor precio
        </p>
        <button onClick={handleWhatsAppClick} className="bg-golden text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-golden/90 transition-all duration-300 animate-fade-up" style={{animationDelay: '0.4s'}}>
          ¡Pedí ahora!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
