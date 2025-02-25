
import React from 'react';

interface Combo {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CombosSectionProps {
  combos: Combo[];
  handleWhatsAppClick: () => void;
}

const CombosSection = ({ combos, handleWhatsAppClick }: CombosSectionProps) => {
  return (
    <section id="combos" className="relative py-20 bg-secondary/90">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
          NUESTROS COMBOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img src={combo.image} alt={combo.name} className="w-full h-full object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                <h3 className="text-xl font-bold mb-2 text-golden">{combo.name}</h3>
                <p className="text-gray-300 mb-4">{combo.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-golden text-2xl font-bold">${combo.price}</p>
                  <button onClick={handleWhatsAppClick} className="bg-golden text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-golden/90 hover:scale-105 active:scale-95">
                    ¡Lo quiero!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CombosSection;
