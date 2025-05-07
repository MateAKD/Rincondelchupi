
import React, { useRef, useEffect, useState } from 'react';
import Vimeo from '@vimeo/player';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  handleWhatsAppClick: () => void;
}

const HeroSection = ({
  handleWhatsAppClick
}: HeroSectionProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

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

      player.ready().then(() => {
        setVideoLoaded(true);
      });
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen mt-[56px] flex items-center justify-center text-white overflow-hidden"
    >
      <div 
        ref={videoRef} 
        className="absolute inset-0 w-full h-full" 
        style={{
          filter: 'brightness(0.5)',
          objectFit: 'cover',
          objectPosition: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Video is loaded here by Vimeo player */}
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-golden animate-fade-up drop-shadow-xl">
            Rincón del Chupi
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-up drop-shadow-lg" style={{
            animationDelay: '0.2s'
          }}>
            Las mejores bebidas premium, al mejor precio
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
            <button 
              onClick={handleWhatsAppClick} 
              className="bg-golden text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-golden/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              ¡Pedí ya!
            </button>
            <button 
              onClick={() => document.getElementById('combos')?.scrollIntoView({behavior: 'smooth'})} 
              className="bg-black/50 backdrop-blur-sm border border-golden/30 text-golden px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black/70 hover:border-golden transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver combos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
