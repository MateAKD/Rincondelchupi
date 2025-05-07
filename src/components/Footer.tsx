
import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = "https://www.instagram.com/rincondelchupi_/";
  
  return (
    <footer className="relative bg-black text-white py-16 border-t border-golden/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-black/80 to-black opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/f13a16c6-b452-42de-a9c1-2449aae035c0.png" alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-golden font-bold text-2xl">Rincón del Chupi</span>
          </div>
          
          <p className="text-lg text-center max-w-2xl text-gray-300">
            Tu destino premium para las mejores bebidas y accesorios, con asesoramiento personalizado y delivery eficiente.
          </p>
          
          <div className="flex gap-6 mt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <Phone size={28} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E1306C] hover:bg-[#C13584] text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <Instagram size={28} />
            </a>
          </div>
          
          <div className="w-full border-t border-golden/20 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Rincón del Chupi – Consumir con moderación. Venta solo a mayores de 18 años.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
