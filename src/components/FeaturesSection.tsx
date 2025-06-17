import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const features = [
  {
    title: "Atención Personalizada",
    description: "Servicio exclusivo para cada cliente",
    emojiLeft: '&#128100;',
    emojiRight: '✨',
    action: 'whatsapp-personalizada'
  },
  {
    title: "Combos Exclusivos",
    description: "Las mejores ofertas para vos",
    emojiLeft: '🎁',
    emojiRight: '🔥',
    action: 'navigate-combos'
  },
  {
    title: "Delivery Zona Norte",
    description: "Llegamos a toda la zona norte",
    emojiLeft: '🚚',
    emojiRight: '⚡',
    action: 'navigate-delivery'
  },
  {
    title: "Bebidas Frías",
    description: "Compra tu combo con hielo",
    emojiLeft: '❄',
    emojiRight: '🧊',
    action: 'whatsapp-hielo'
  },
  {
    title: "Precios Mayoristas",
    description: "Descuentos especiales para grandes volúmenes",
    emojiLeft: '💰',
    emojiRight: '💸',
    action: 'whatsapp-mayoristas'
  }
];

const glowColors = [
  'rgba(255, 221, 77, 0.35)',
  'rgba(255, 99, 132, 0.25)',
  'rgba(255, 193, 7, 0.25)',
  'rgba(0, 123, 255, 0.25)',
  'rgba(0, 255, 0, 0.25)'
];

const FeaturesSection = () => {
  const navigate = useNavigate();
  const whatsappPhoneNumber = "+5491121840875"; // Usar el número de WhatsApp centralizado

  const handleCardClick = (action: string) => {
    let message = "";
    switch (action) {
      case 'navigate-delivery':
        navigate('/tienda?deliveryMethod=delivery');
        break;
      case 'whatsapp-hielo':
        message = encodeURIComponent("¡Hola! Quiero comprar hielo para mi bebida 🧊");
        window.open(`https://wa.me/${whatsappPhoneNumber}?text=${message}`, "_blank");
        break;
      case 'whatsapp-mayoristas':
        message = encodeURIComponent("Hola! Me interesan los precios mayoristas. ¿Podés darme más información?");
        window.open(`https://wa.me/${whatsappPhoneNumber}?text=${message}`, "_blank");
        break;
      case 'whatsapp-personalizada':
        message = encodeURIComponent("¡Hola! Necesito asistencia personalizada.");
        window.open(`https://wa.me/${whatsappPhoneNumber}?text=${message}`, "_blank");
        break;
      case 'navigate-combos':
        navigate('/tienda?category=Combos');
        break;
      default:
        break;
    }
  };

  return (
    <section className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="w-full max-w-none relative z-10 p-0 m-0">
        <div className="container flex justify-center py-1 bg-black/80 mb-6">
          <Link to="/tienda">
            <Button className="bg-golden hover:bg-golden/90 text-black font-semibold px-5 py-2 rounded-lg text-base">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Ir a la Tienda
            </Button>
          </Link>
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden"
        >
          ¿POR QUÉ ELEGIRNOS?
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.1}
          spaceBetween={32}
          centeredSlides
          loop
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          className="w-full max-w-none px-0 swiper-overflow-visible"
          breakpoints={{
            640: { slidesPerView: 1.1, spaceBetween: 8 },
            1024: { slidesPerView: 2.1, spaceBetween: 32 },
          }}
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <div className="relative w-full h-full flex items-center justify-center">
                  {isActive && (
                    <div
                      className="absolute inset-0 z-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at center, ${glowColors[idx]} 0%, transparent 80%)`,
                        filter: 'blur(32px)',
                        borderRadius: 'inherit',
                        opacity: 1,
                      }}
                    />
                  )}
                  <div 
                    className="feature-card w-full max-w-3xl mx-auto rounded-2xl border border-golden px-6 py-10 md:px-10 md:py-16 text-center shadow-2xl relative flex flex-col items-center justify-center min-h-[260px] aspect-[1.6/1] transition-all duration-500 cursor-pointer"
                    style={{
                      boxShadow: isActive ? `0 0 120px 0 ${glowColors[idx]}` : '0 0 40px 0 #000',
                      zIndex: 1,
                      transform: isActive ? 'scale(1.08)' : 'scale(0.92)',
                      background: isActive ? `linear-gradient(to bottom, ${glowColors[idx]}, rgba(0,0,0,0.9))` : 'rgba(0,0,0,0.9)',
                    }}
                    onClick={() => handleCardClick(feature.action)}
                  >
                    <h3 className="text-2xl md:text-4xl font-bold text-golden mb-6 relative z-10 flex items-center justify-center flex-col">
                      <span className="flex items-center">
                        <span dangerouslySetInnerHTML={{ __html: feature.emojiLeft }} className="mr-1" />
                        <span>{feature.title.split(' ')[0]}</span>
                        <span dangerouslySetInnerHTML={{ __html: feature.emojiRight }} className="ml-1" />
                      </span>
                      {feature.title.split(' ').slice(1).join(' ') && (
                        <span className="ml-2">
                          {feature.title.split(' ').slice(1).join(' ')}
                        </span>
                      )}
                    </h3>
                    <p className="text-base md:text-xl font-medium relative z-10 text-golden break-words px-2 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .feature-card {
          opacity: 1;
          background-clip: padding-box;
          transition: box-shadow 0.3s, transform 0.3s, opacity 0.3s;
        }
        .swiper-slide-prev .feature-card,
        .swiper-slide-next .feature-card {
          opacity: 0.6;
          filter: grayscale(0.3) brightness(0.8);
          transform: scale(0.92);
        }
        .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) .feature-card {
          opacity: 0.2;
          filter: grayscale(1) brightness(0.5);
          transform: scale(0.85);
        }
        .swiper {
          background: transparent !important;
          overflow: visible !important;
        }
        .swiper-overflow-visible {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
