
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
      className="relative h-[50vh] mt-[56px] flex items-start md:items-center justify-center text-white overflow-hidden"
    >
      <div 
        ref={videoRef} 
        className="absolute inset-0 w-full h-full" 
        style={{
          filter: 'blur(10px)',
          objectFit: 'cover',
          objectPosition: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Video is loaded here by Vimeo player */}
      </div>
      
      <div className="absolute inset-0 flex items-start pt-8 md:items-center justify-center">
        <div className="px-4 max-w-[90%] md:max-w-[70%] mx-auto">
          <div className={`p-4 md:p-6 rounded-lg bg-black/40 border border-black/30 shadow-xl backdrop-blur-sm ${isMobile ? 'w-[90%] mx-auto' : ''}`}>
            <h1 className="text-3xl md:text-6xl font-bold mb-3 text-golden animate-fade-up drop-shadow-lg">
              Rincón del Chupi
            </h1>
            <p className="text-sm md:text-2xl text-gray-200 mb-4 animate-fade-up drop-shadow" style={{
              animationDelay: '0.2s'
            }}>
              Las mejores bebidas, al mejor precio
            </p>
            <button 
              onClick={handleWhatsAppClick} 
              className="bg-golden text-black px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-golden/90 transition-all duration-300 animate-fade-up shadow-md" 
              style={{
                animationDelay: '0.4s'
              }}
            >
              ¡Pedí ya!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
