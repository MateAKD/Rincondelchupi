import { Link } from "react-router-dom";

const combos = [
  {
    id: "combo1",
    name: "Combo Absolut + 5 Speed",
    price: 25000,
    image: "/lovable-uploads/Combos/ABSOLUT + 5 SPEED.png",
  },
  {
    id: "combo2",
    name: "Combo Aconcagua + 2 Tonicas",
    price: 20000,
    image: "/lovable-uploads/Combos/ACONCAGUA + 2 TONICAS.png",
  },
  {
    id: "combo3",
    name: "Combo Aperol + Cinzano To Spritz",
    price: 22000,
    image: "/lovable-uploads/Combos/APEROL + CINZANO_TO_SPRITZ.png",
  },
  {
    id: "combo4",
    name: "Combo Beefeater + 2 Schweppes",
    price: 23000,
    image: "/lovable-uploads/Combos/BEEFEATER + 2 SCHWEPPS.png",
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
    image: "/lovable-uploads/Combos/FERNET + 2 COCAS.png",
  },
  {
    id: "combo7",
    name: "Combo Gordons + 2 Schweppes",
    price: 22000,
    image: "/lovable-uploads/Combos/GORDONS + 2 SCHWEPS.png",
  },
  {
    id: "combo8",
    name: "Combo Malibu + 2 Cepita",
    price: 24000,
    image: "/lovable-uploads/Combos/MALIBU + 2 CEPITA.png",
  },
  {
    id: "combo9",
    name: "Combo Skyy + 5 Speed",
    price: 24000,
    image: "/lovable-uploads/Combos/SKYY + 5 SPEED.png",
  },
  {
    id: "combo10",
    name: "Combo Smirnoff + 2 Cepitas",
    price: 22000,
    image: "/lovable-uploads/Combos/SMIRNOFF + 2 CEPITAS.png",
  },
  {
    id: "combo11",
    name: "Combo Smirnoff + 5 Speed",
    price: 24000,
    image: "/lovable-uploads/Combos/SMIRNOF + 5 SPEED.png",
  },
];

export default function CombosSection() {
  // Format price to display with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Combos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {combos.map((combo) => (
            <Link to="/tienda?category=combos" key={combo.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{combo.name}</h3>
                  <p className="text-gray-600 font-bold">${formatPrice(combo.price)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 