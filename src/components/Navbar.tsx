import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, handleWhatsAppClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-golden/20">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <span className="text-golden font-bold text-xl md:text-2xl">Rincón del Chupi</span>
          </Link>
          
          <button className="md:hidden text-golden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <button onClick={() => scrollToSection('combos')} className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium">
              Combos
            </button>
            <button onClick={() => scrollToSection('productos')} className="text-golden hover:text-white transition-colors text-base lg:text-lg font-medium">
              Productos
            </button>
            <Link to="/tienda">
              <button className="bg-golden text-black px-5 py-2 rounded-lg hover:bg-golden/90 transition-colors font-semibold text-base ml-2">
                Tienda
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-5 border-t border-golden/20 animate-fade-in`}>
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
              Productos
            </button>
            <Link 
              to="/tienda" 
              className="text-golden hover:text-white transition-colors text-lg font-medium text-center px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
