import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "+541121840875"; // Número de WhatsApp actualizado
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola! Quiero hacer un pedido')}`;
  const instagramUrl = "https://www.instagram.com/rincondelchupi_/";
  
  return (
    <footer className="relative bg-black text-white py-15 border-t border-golden/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-black/80 to-black opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2 -mb-5">
            <img src="/lovable-uploads/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-golden font-bold text-2xl">Rincón del Chupi</span>
          </div>
          
          <p className="text-lg text-center max-w-2xl text-gray-300 -mb-2">
            Tu destino premium para las mejores bebidas y accesorios, con asesoramiento personalizado y delivery eficiente.
          </p>
          
          <div className="flex gap-5 mt-0">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-0 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center -mb-3">
              <img src="/lovable-uploads/wpp sin fondo.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-0 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center -mb-3">
              <img src="/lovable-uploads/IG sin fondo.png" alt="Instagram" className="w-10 h-10 object-contain" />
            </a>
          </div>
          
          <p className="text-xs text-gray-500 opacity-70 select-none text-left w-full -mb-7">
            Página hecha por <a href="https://akdmiastudio.framer.website" target="_blank" rel="noopener noreferrer" className="font-semibold">AKDMIA Studio</a>
          </p>
          
          <div className="w-full border-t border-golden/20 mt-1 pt-15 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Rincón del Chupi – Consumir con moderación. Venta solo a mayores de 18 años.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
