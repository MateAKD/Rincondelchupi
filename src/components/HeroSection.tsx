import React, { useRef, useEffect, useState } from 'react';
import Vimeo from '@vimeo/player';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  handleWhatsAppClick: () => void;
}

const HeroSection = ({
  handleWhatsAppClick
}: HeroSectionProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
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

  useEffect(() => {
    if (videoLoaded) {
      const timeout = setTimeout(() => setLogoVisible(true), 2000);
      return () => clearTimeout(timeout);
    } else {
      setLogoVisible(false);
    }
  }, [videoLoaded]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-white overflow-hidden bg-black">
      {/* Stack principal con aspect ratio */}
      <div className={`relative w-full aspect-[16/9] max-w-full overflow-hidden ${isMobile ? 'pt-16' : ''}`}>
        {/* Video de fondo */}
        <div ref={videoRef} className="absolute inset-0 w-full h-full z-0" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        {/* Overlay oscuro profesional */}
        <div className="absolute inset-0 w-full h-full bg-black/70 z-10" />
        {/* Logo centrado y responsivo dentro del Stack */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none select-none">
          <motion.img
            src="/lovable-uploads/logo.png"
            alt="Logo Background"
            className="object-contain opacity-10"
            style={{
              height: '90%',
              width: 'auto',
              maxHeight: '90%',
              maxWidth: '100%',
              minWidth: '60px',
              minHeight: '60px',
              marginTop: '4rem',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={logoVisible ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
        {/* Sombra/gradiente negro abajo del Stack */}
        <div className="absolute bottom-0 left-0 w-full h-24 z-30 pointer-events-none select-none" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'}} />
      </div>
    </section>
  );
};

export default HeroSection;
