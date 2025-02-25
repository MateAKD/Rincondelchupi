
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
    <section id="home" className="relative min-h-[50vh] md:h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      <div ref={videoRef} className="absolute inset-0 w-full h-full my-0 py-[81px]">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] mx-0 py-0 my-[158px]"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-golden animate-fade-up">
          Rincón del Chupi
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
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
