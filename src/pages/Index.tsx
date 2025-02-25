
import React from "react";
import { Truck, Snowflake, MapPin, Instagram, Phone } from "lucide-react";

const Index = () => {
  const combos = [
    {
      name: "Superclásico",
      description: "1.5L Mimoff + 5 Speed",
      price: "14.200"
    },
    {
      name: "Fiesta Total",
      description: "Fernet 750ml + 2L Coca-Cola",
      price: "12.500"
    },
    {
      name: "Premium Mix",
      description: "Jack Daniel's + 4 Red Bull",
      price: "32.800"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="container-custom relative z-10 text-center animate-fade-up">
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <img 
              src="/lovable-uploads/f13a16c6-b452-42de-a9c1-2449aae035c0.png"
              alt="Rincón del Chupi Logo"
              className="w-40 h-40 object-contain animate-pulse mb-4"
            />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-golden">
              RINCÓN DEL CHUPI
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-golden font-medium mt-6">
            <Truck className="animate-bounce" />
            <p>Delivery a TODA zona norte</p>
          </div>
          <div className="mt-8 bg-black/80 py-4 px-6 rounded-lg inline-flex items-center gap-2 border border-golden">
            <Snowflake className="text-golden animate-pulse" />
            <p className="text-lg">Bebidas siempre FRÍAS</p>
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section className="py-20 bg-secondary/90">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
            NUESTROS COMBOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {combos.map((combo, index) => (
              <div key={index} className="bg-black/40 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 border border-golden/20 hover:border-golden">
                <h3 className="text-xl font-bold mb-2 text-golden">{combo.name}</h3>
                <p className="text-gray-300 mb-4">{combo.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-golden text-2xl font-bold">${combo.price}</p>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-golden text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-golden/90 hover:scale-105 active:scale-95"
                  >
                    Pedir ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
            OTROS PRODUCTOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
              <h3 className="text-xl font-bold mb-4 text-golden">Whiskys Importados</h3>
              <p className="text-gray-300">Selección premium de las mejores marcas</p>
            </div>
            <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
              <h3 className="text-xl font-bold mb-4 text-golden">Vodkas Premium</h3>
              <p className="text-gray-300">Variedades nacionales e importadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-secondary/90">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
            DÓNDE ENCONTRARNOS
          </h2>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
              <MapPin className="text-golden" />
              <p>Consolidated Argentina RIS, Casa Deberina, Provincia de Buenos Aires</p>
            </div>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-golden/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.186588775371!2d-58.5115!3d-34.5225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMxJzIxLjAiUyA1OMKwMzAnNDEuNCJX!5e0!3m2!1sen!2sar!4v1635441719589!5m2!1sen!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-6">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-whatsapp hover:opacity-80 transition-opacity"
              >
                <Phone size={24} />
              </a>
              <a
                href="https://instagram.com/rincondelchupi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-instagram hover:opacity-80 transition-opacity"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400 text-center">
              © 2024 Rincón del Chupi – Consumir con moderación. Venta solo a mayores de 18 años.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
