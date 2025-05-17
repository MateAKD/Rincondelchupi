import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "1141445384"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola! Quiero hacer un pedido')}`;
  const instagramUrl = "https://www.instagram.com/rincondelchupi_/";
  
  return (
    <footer className="relative bg-black text-white py-16 border-t border-golden/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-black/80 to-black opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-golden font-bold text-2xl">Rincón del Chupi</span>
          </div>
          
          <p className="text-lg text-center max-w-2xl text-gray-300">
            Tu destino premium para las mejores bebidas y accesorios, con asesoramiento personalizado y delivery eficiente.
          </p>
          
          <div className="flex gap-6 mt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-0 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
              <img src="/lovable-uploads/wpp sin fondo.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-0 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
              <img src="/lovable-uploads/IG sin fondo.png" alt="Instagram" className="w-10 h-10 object-contain" />
            </a>
          </div>
          
          <div className="w-full border-t border-golden/20 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Rincón del Chupi – Consumir con moderación. Venta solo a mayores de 18 años.
            </p>
          </div>
        </div>
      </div>
      {/* Créditos pequeños */}
      <div className="absolute bottom-2 right-4 text-xs text-gray-500 opacity-70 select-none pointer-events-none">
        Página hecha por <span className="font-semibold">AKDMIA Studio</span>
      </div>
    </footer>
  );
};

export default Footer;
