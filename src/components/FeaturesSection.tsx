import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const features = [
  {
    title: "Atención Personalizada",
    description: <><span className="text-purple-400">&#128100;</span> Servicio exclusivo para cada cliente <span className="text-golden">✨</span></>,
    gradient: "from-yellow-400/60 via-black/90 to-black/90"
  },
  {
    title: "Combos Exclusivos",
    description: <><span className="text-golden">🎁</span> Las mejores ofertas para vos <span className="text-orange-400">🔥</span></>,
    gradient: "from-pink-700/60 via-black/90 to-black/90"
  },
  {
    title: "Delivery Zona Norte",
    description: <><span className="text-yellow-400">🚚</span> Llegamos a toda la zona norte <span className="text-orange-400">⚡</span></>,
    gradient: "from-yellow-900/60 via-black/90 to-black/90"
  },
  {
    title: "Bebidas Frías",
    description: <><span className="text-blue-400">❄</span> Compra tu combo con hielo <span className="text-blue-400">🧊</span></>,
    gradient: "from-blue-900/60 via-black/90 to-black/90"
  }
];

const glowColors = [
  'rgba(255, 221, 77, 0.35)',    // Atención Personalizada (amarillo)
  'rgba(255, 99, 132, 0.25)',   // Combos Exclusivos (rosa)
  'rgba(255, 193, 7, 0.25)',    // Delivery Zona Norte (amarillo oscuro)
  'rgba(0, 123, 255, 0.25)',    // Bebidas Frías (azul)
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="w-full max-w-none relative z-10 p-0 m-0">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-golden">
          POR QUÉ ELEGIRNOS
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2.1}
          spaceBetween={32}
          centeredSlides
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
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
                  <div className={`feature-card w-full max-w-3xl mx-auto rounded-2xl border border-golden px-6 py-10 md:px-10 md:py-16 text-center shadow-2xl relative flex flex-col items-center justify-center min-h-[260px] aspect-[1.6/1] transition-all duration-500 bg-gradient-to-t ${feature.gradient}`}
                    style={{
                      boxShadow: isActive ? '0 0 120px 0 #d4af37aa' : '0 0 40px 0 #000',
                      zIndex: 1,
                      transform: isActive ? 'scale(1.08)' : 'scale(0.92)',
                    }}>
                    <h3 className="text-3xl md:text-4xl font-bold text-golden mb-6 relative z-10 flex items-center justify-center gap-2">
                      {feature.title}
                    </h3>
                    <p className="text-golden text-xl font-medium flex items-center justify-center gap-2 relative z-10">
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
