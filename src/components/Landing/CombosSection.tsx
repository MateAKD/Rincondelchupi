import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

interface Combo {
  id: string;
  name: string;
  price: number;
  image: string;
}

const combos: Combo[] = [
  {
    id: "combo1",
    name: "Combo Absolut + 5 Speed",
    price: 25000,
    image: "/lovable-uploads/Combos/ABSOLUT_+_5_SPEED.png",
  },
  {
    id: "combo2",
    name: "Combo Aconcagua + 2 Tonicas",
    price: 20000,
    image: "/lovable-uploads/Combos/ACONCAGUA_+_2_TONICAS.png",
  },
  {
    id: "combo3",
    name: "Combo Aperol + Cinzano To Spritz",
    price: 22000,
    image: "/lovable-uploads/Combos/APEROL_+_CINZANO_TO_SPRITZ.png",
  },
  {
    id: "combo4",
    name: "Combo Beefeater + 2 Schweppes",
    price: 23000,
    image: "/lovable-uploads/Combos/BEEFEATER_+_2_SCHWEPPS.png",
  },
  {
    id: "combo5",
    name: "Combo Chandon + 4 Speed",
    price: 28000,
    image: "/lovable-uploads/Combos/CHANDON_+_4_SPEED.png",
  },
  {
    id: "combo6",
    name: "Combo Fernet + 2 Cocas",
    price: 18000,
    image: "/lovable-uploads/Combos/FERNET_+_2_COCAS.png",
  },
  {
    id: "combo7",
    name: "Combo Gordons + 2 Schweppes",
    price: 22000,
    image: "/lovable-uploads/Combos/GORDONS_+_2_SCHWEPS.png",
  },
  {
    id: "combo8",
    name: "Combo Malibu + 2 Cepita",
    price: 24000,
    image: "/lovable-uploads/Combos/MALIBU_+_2_CEPITA.png",
  },
  {
    id: "combo9",
    name: "Combo Skyy + 5 Speed",
    price: 24000,
    image: "/lovable-uploads/Combos/SKYY_+_5_SPEED.png",
  },
  {
    id: "combo10",
    name: "Combo Smirnoff + 2 Cepitas",
    price: 22000,
    image: "/lovable-uploads/Combos/SMIRNOFF_+_2_CEPITAS.png",
  },
  {
    id: "combo11",
    name: "Combo Smirnoff + 5 Speed",
    price: 24000,
    image: "/lovable-uploads/Combos/SMIRNOF_+_5_SPEED.png",
  },
];

export default function CombosSection() {
  const [isLoading, setIsLoading] = useState(true);

  // Format price to display with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder-image.png"; // Imagen por defecto
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          Nuestros Combos
        </motion.h2>
        <div 
          role="list" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {isLoading && <div className="animate-pulse">...</div>}
          {combos.map((combo, index) => (
            <motion.div
              role="listitem"
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.05 // Reducido el delay entre cada combo
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link 
                to="/tienda?category=combos" 
                className="block"
                aria-label={`Ver ${combo.name} en la tienda`}
              >
                <div className="relative h-48 w-full">
                  <img
                    loading="lazy"
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-contain p-4"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{combo.name}</h3>
                  <p className="text-gray-600 font-bold">${formatPrice(combo.price)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
