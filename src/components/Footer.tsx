
import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = "https://www.instagram.com/rincondelchupi_/";
  
  return (
    <footer className="relative bg-black/95 text-white py-12 border-t border-golden/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BA5C] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Phone size={24} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E1306C] hover:bg-[#C13584] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400 text-center border-t md:border-t-0 pt-4 md:pt-0">
            © 2024 Rincón del Chupi – Consumir con moderación. Venta solo a mayores de 18 años.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
