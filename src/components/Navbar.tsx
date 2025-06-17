import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: (message?: string) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, handleWhatsAppClick }: NavbarProps) => {
  const location = useLocation();
  const isTiendaPage = location.pathname === '/tienda';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-golden/20">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/lovable-uploads/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <span className="text-golden font-bold text-xl md:text-2xl">Rincón del Chupi</span>
          </Link>
          
          {!isTiendaPage && (
            <button className="md:hidden text-golden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}

          {!isTiendaPage && (
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <button onClick={() => scrollToSection('combos')} className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium">
                Combos
              </button>
              <button onClick={() => scrollToSection('productos')} className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium">
                Otros
              </button>
              <button onClick={() => scrollToSection('location')} className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium">
                Encontranos
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium">
                Nosotros
              </button>
              <button 
                onClick={() => {
                  const message = 'Hola! Me interesan los precios mayoristas. ¿Podés darme más información?';
                  window.open(`https://api.whatsapp.com/send?phone=5491121840875&text=${encodeURIComponent(message)}`, "_blank");
                }} 
                className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium"
              >
                Mayorista
              </button>
              <Link to="/tienda">
                <button className="bg-golden text-black px-5 py-2 rounded-lg hover:bg-golden/90 transition-colors font-semibold text-base ml-2">
                  Tienda
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-golden/20">
            <div className="flex flex-col gap-5">
              <button 
                onClick={() => scrollToSection('combos')} 
                className="text-golden hover:text-white transition-colors text-lg font-medium text-center px-4"
              >
                Combos
              </button>
              <button 
                onClick={() => scrollToSection('productos')} 
                className="text-golden hover:text-white transition-colors text-lg font-medium text-center px-4"
              >
                Otros
              </button>
              <button 
                onClick={() => scrollToSection('location')} 
                className="text-golden hover:text-white transition-colors text-lg font-medium text-center px-4"
              >
                Encontranos
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')} 
                className="text-golden hover:text-white transition-colors text-lg font-medium text-center px-4"
              >
                Nosotros
              </button>
              <button
                onClick={() => {
                  const message = 'Hola! Me interesan los precios mayoristas. ¿Podés darme más información?';
                  window.open(`https://api.whatsapp.com/send?phone=5491121840875&text=${encodeURIComponent(message)}`, "_blank");
                }}
                className="text-golden hover:text-white transition-colors text-lg font-medium text-center px-4"
              >
                Mayorista
              </button>
              <Link to="/tienda" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-golden text-black px-5 py-2 rounded-lg hover:bg-golden/90 transition-colors font-semibold text-base w-full text-center">
                  Tienda
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;