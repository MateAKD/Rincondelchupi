
import React, { useRef } from 'react';
import { UserCog, Package, Truck, ThermometerSnowflake } from 'lucide-react';

const FeaturesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-12 md:py-20 bg-secondary/90 overflow-hidden">
      <div className="container-custom">
        <div className="relative">
          <div ref={carouselRef} className="flex gap-6 auto-scroll" style={{ width: 'max-content' }}>
            {[...Array(2)].map((_, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <div className="shrink-0 w-[280px] md:w-80 bg-black/40 rounded-xl p-6 border border-golden/20 hover:border-golden transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center transform transition-transform hover:scale-110">
                    <UserCog className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-bold text-golden">Atención Personalizada</h3>
                  <p className="text-gray-300">👤 Servicio exclusivo para cada cliente ✨</p>
                </div>

                <div className="shrink-0 w-[280px] md:w-80 bg-black/40 rounded-xl p-6 border border-golden/20 hover:border-golden transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center transform transition-transform hover:scale-110">
                    <Package className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-bold text-golden">Combos Exclusivos</h3>
                  <p className="text-gray-300">🎁 Las mejores ofertas para vos 🔥</p>
                </div>

                <div className="shrink-0 w-[280px] md:w-80 bg-black/40 rounded-xl p-6 border border-golden/20 hover:border-golden transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center transform transition-transform hover:scale-110">
                    <Truck className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-bold text-golden">Delivery Zona Norte</h3>
                  <p className="text-gray-300">🚚 Llegamos a toda la zona norte ⚡</p>
                </div>

                <div className="shrink-0 w-[280px] md:w-80 bg-black/40 rounded-xl p-6 border border-golden/20 hover:border-golden transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center transform transition-transform hover:scale-110">
                    <ThermometerSnowflake className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-bold text-golden">Bebidas Frías</h3>
                  <p className="text-gray-300">🥶 Siempre bien frías 🧊</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-golden/20 rounded-full">
            <div className="w-16 h-full bg-golden rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
