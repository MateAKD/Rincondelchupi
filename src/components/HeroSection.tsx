
import React, { useRef, useEffect } from 'react';
import Vimeo from '@vimeo/player';
interface HeroSectionProps {
  handleWhatsAppClick: () => void;
}
const HeroSection = ({
  handleWhatsAppClick
}: HeroSectionProps) => {
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
  return <section id="home" className="relative h-screen md:h-[70vh] mt-[56px] flex items-center justify-center text-white overflow-hidden">
      <div ref={videoRef} className="absolute inset-0 w-full h-full" style={{ filter: 'blur(16px)' }}>
        
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4 max-w-[90%] md:max-w-[70%] mx-auto">
        <div className="p-4 md:p-6 rounded-lg bg-black/40 border border-black/30 shadow-xl backdrop-blur-sm">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 text-golden animate-fade-up drop-shadow-lg">
            Rincón del Chupi
          </h1>
          <p className="text-sm md:text-2xl text-gray-200 mb-4 animate-fade-up drop-shadow" style={{
          animationDelay: '0.2s'
        }}>
            Las mejores bebidas, al mejor precio
          </p>
          <button onClick={handleWhatsAppClick} className="bg-golden text-black px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-golden/90 transition-all duration-300 animate-fade-up shadow-md" style={{
          animationDelay: '0.4s'
        }}>
            ¡Pedí ya!
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;
