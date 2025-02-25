import React, { useState, useRef, useEffect } from "react";
import { Truck, MapPin, Instagram, Phone, Menu, X, UserCog, Package, ThermometerSnowflake } from "lucide-react";
import Vimeo from "@vimeo/player";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    }
  }, []);

  const combos = [
    {
      name: "Superclásico",
      description: "1 Fernet Branca + 2 Coca-Cola de 2,25L",
      price: "17.900",
      image: "/lovable-uploads/11de68c6-d111-4427-b657-b540d9e8efb8.png"
    },
    {
      name: "Combo Vodka",
      description: "1 Smirnoff + 5 Speed",
      price: "14.200",
      image: "/lovable-uploads/293974be-a7ee-42c2-b048-2ab207ddb5ff.png"
    },
    {
      name: "Premium Mix",
      description: "1 Absolut + 5 Speed",
      price: "25.500",
      image: "/lovable-uploads/7952d15d-d87d-4e31-a5da-85e9fff37df0.png"
    },
    {
      name: "Gin Premium",
      description: "1 Beefeater + 2 Schweppes",
      price: "25.000",
      image: "/lovable-uploads/16c95dcd-74b9-4ca9-8589-e7adbb3263f0.png"
    },
    {
      name: "Gin Clásico",
      description: "1 Gordon's + 2 Schweppes",
      price: "16.800",
      image: "/lovable-uploads/e88147c2-8f69-4138-bf4d-5f88b4c18df9.png"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-secondary to-secondary animate-pulse duration-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_50%,transparent_100%)] animate-slide"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-golden/20">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-4">
              <img src="/lovable-uploads/f13a16c6-b452-42de-a9c1-2449aae035c0.png" alt="Logo" className="w-12 h-12 object-contain" />
              <span className="text-golden font-bold text-xl">Rincón del Chupi</span>
            </button>
            
            <button className="md:hidden text-golden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('combos')} className="text-golden hover:text-white transition-colors">
                Combos
              </button>
              <button onClick={() => scrollToSection('productos')} className="text-golden hover:text-white transition-colors">
                Otros Productos
              </button>
              <button onClick={handleWhatsAppClick} className="bg-golden text-black px-4 py-2 rounded-lg hover:bg-golden/90 transition-colors font-semibold">
                Pedir Ya
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 border-t border-golden/20`}>
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('combos')} className="text-golden hover:text-white transition-colors text-left px-4">
                Combos
              </button>
              <button onClick={() => scrollToSection('productos')} className="text-golden hover:text-white transition-colors text-left px-4">
                Otros Productos
              </button>
              <button onClick={handleWhatsAppClick} className="bg-golden text-black px-4 py-2 mx-4 rounded-lg hover:bg-golden/90 transition-colors font-semibold text-center">
                Pedir Ya
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[50vh] md:h-screen flex items-center justify-center text-white overflow-hidden pt-20">
        <div ref={videoRef} className="absolute inset-0 w-full h-full my-0 py-[81px]">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] mx-0 py-0 my-[158px]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-golden animate-fade-up">
            Rincón del Chupi
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            Las mejores bebidas, al mejor precio
          </p>
          <button onClick={handleWhatsAppClick} className="bg-golden text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-golden/90 transition-all duration-300 animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            ¡Pedí ahora!
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 md:py-20 bg-secondary/90 overflow-hidden my-[7px]">
        <div className="container-custom">
          <div className="relative">
            <div ref={carouselRef} className="flex gap-6 auto-scroll" style={{
            width: 'max-content'
          }}>
              {[...Array(2)].map((_, groupIndex) => <React.Fragment key={groupIndex}>
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
                </React.Fragment>)}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-golden/20 rounded-full">
              <div className="w-16 h-full bg-golden rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Combos Section */}
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

      {/* Products Section */}
      <section id="productos" className="relative py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
            OTROS PRODUCTOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
              <h3 className="text-xl font-bold mb-4 text-golden">Whiskys Importados</h3>
              <p className="text-gray-300">Disfruta de las mejores marcas, perfectas para un regalo especial o para deleitar a tus invitados</p>
            </div>
            <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
              <h3 className="text-xl font-bold mb-4 text-golden">Cristalería</h3>
              <p className="text-gray-300">Elegí copas y vasos que realzan la experiencia de tus bebidas favoritas</p>
            </div>
            <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
              <h3 className="text-xl font-bold mb-4 text-golden">Combos Personalizados</h3>
              <p className="text-gray-300">Desde la previa con amigos hasta eventos exclusivos, tenemos el combo perfecto para cada ocasión</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-20 bg-secondary/90">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
            DÓNDE ENCONTRARNOS
          </h2>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
              <MapPin className="text-golden" />
              <p>General José Artigas 3188, Gral. Pacheco, Provincia de Buenos Aires</p>
            </div>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-golden/20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.186588775371!2d-58.5115!3d-34.5225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMxJzIxLjAiUyA1OMKwMzAnNDEuNCJX!5e0!3m2!1sen!2sar!4v1635441719589!5m2!1sen!2sar" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/95 text-white py-12 border-t border-golden/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BA5C] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <Phone size={24} />
              </a>
              <a href="https://instagram.com/rincondelchupi" target="_blank" rel="noopener noreferrer" className="bg-[#E1306C] hover:bg-[#C13584] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400 text-center border-t md:border-t-0 pt-4 md:pt-0">
              © 2024 Rincón del Chupi – Consumir con moderación. Venta solo a mayores de 18 años.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
