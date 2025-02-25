
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, handleWhatsAppClick }: NavbarProps) => {
  return (
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
  );
};

export default Navbar;
