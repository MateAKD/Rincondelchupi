
import React, { useRef, useState } from 'react';
import { UserCog, Package, Truck, ThermometerSnowflake } from 'lucide-react';

const FeaturesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const features = [
    {
      icon: UserCog,
      title: "Atención Personalizada",
      description: "👤 Servicio exclusivo para cada cliente ✨"
    },
    {
      icon: Package,
      title: "Combos Exclusivos",
      description: "🎁 Las mejores ofertas para vos 🔥"
    },
    {
      icon: Truck,
      title: "Delivery Zona Norte",
      description: "🚚 Llegamos a toda la zona norte ⚡"
    },
    {
      icon: ThermometerSnowflake,
      title: "Bebidas Frías",
      description: "🥶 Siempre bien frías 🧊"
    }
  ];

  return (
    <section className="relative py-6 md:py-16 bg-secondary/90 overflow-hidden -mt-1">
      <div className="container-custom">
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            {[...Array(2)].map((_, groupIndex) => (
              features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="shrink-0 w-[280px] md:w-80 bg-black/40 rounded-xl p-6 border border-golden/20 hover:border-golden transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1 snap-start"
                  >
                    <div className="w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center transform transition-transform hover:scale-110">
                      <Icon className="w-8 h-8 text-golden" />
                    </div>
                    <h3 className="text-xl font-bold text-golden">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
