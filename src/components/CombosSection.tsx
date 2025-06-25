import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from './Store/CartProvider';

interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  active?: boolean;
}

interface CombosSectionProps {
  handleWhatsAppClick: () => void;
}

const CombosSection = ({ handleWhatsAppClick }: CombosSectionProps) => {
  const [combos, setCombos] = useState<Combo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await fetch(`http://localhost:3001/productos?_=${new Date().getTime()}`);
        const data = await response.json();
        const activeCombos = data.filter((product: Combo) => product.category === "Combos" && product.active);
        setCombos(activeCombos);
      } catch (error) {
        console.error("Error fetching combos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCombos();
  }, []);

  const handleComboClick = (combo: Combo) => {
    addToCart({
      id: combo.id,
      name: combo.name,
      price: combo.price,
      quantity: 1,
      image: combo.image
    });
    navigate('/tienda?category=Combos');
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <section id="combos" className="relative py-10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-secondary to-secondary animate-pulse duration-1000 opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          NUESTROS COMBOS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading && <div className="animate-pulse">Cargando combos...</div>}
          {!isLoading && combos.length === 0 && <p className="text-center text-gray-400 col-span-full">No se encontraron combos activos.</p>}
          {!isLoading && combos.length > 0 && combos.map((combo, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10"></div>
              <img 
                src={combo.image} 
                alt={combo.name} 
                className="w-full h-full object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <h3 className="text-2xl font-bold mb-3 text-golden">{combo.name}</h3>
                <p className="text-gray-300 mb-6 text-lg">{combo.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-golden text-3xl font-bold">${formatPrice(combo.price)}</p>
                  <button 
                    onClick={() => handleComboClick(combo)}
                    className="bg-golden text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-golden/90 hover:scale-105 active:scale-95"
                  >
                    ¡Lo quiero!
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CombosSection;
