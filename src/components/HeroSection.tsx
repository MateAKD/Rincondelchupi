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
              width: isMobile ? '70%' : '60%',
              height: isMobile ? '70%' : '60%',
              maxWidth: '90%',
              maxHeight: '90%',
              minWidth: '60px',
              minHeight: '60px',
              marginTop: isMobile ? '24px' : 0,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
        {/* Sombra/gradiente negro abajo del Stack */}
        <div className="absolute bottom-0 left-0 w-full h-24 z-30 pointer-events-none select-none" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'}} />
      </div>
    </section>
  );
};

export default HeroSection;
