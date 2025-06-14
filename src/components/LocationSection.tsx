import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  const address = "General José Artigas 3188, V50 s/n, B1617 Gral. Pacheco, Provincia de Buenos Aires";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative py-10 bg-black/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-black/70 to-black/90 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.4 }}
        >
          ENCONTRANOS
        </motion.h2>
        
        <motion.div
          className="flex flex-col gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.3 }}
        >
          {/* Horarios */}
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 text-xl text-gray-300 mb-4">
              <Clock size={32} className="text-golden" />
              <h3 className="font-bold text-2xl text-golden">Horarios</h3>
            </div>
            <p className="text-gray-300 text-center md:text-left">Lunes a Viernes: 10:00 - 20:00</p>
            <p className="text-gray-300 text-center md:text-left">Sábados: 10:00 - 19:00</p>
            <p className="text-gray-300 text-center md:text-left">Domingos: 11:00 - 18:00</p>
          </div>

          {/* Visitanos */}
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 text-xl text-gray-300 mb-4">
              <MapPin size={32} className="text-golden" />
              <h3 className="font-bold text-2xl text-golden">Visitanos</h3>
            </div>
            
            <p className="text-lg text-gray-300 text-center md:text-left">
              Te esperamos en nuestro local en el shopping Lirios del Talar
            </p>
            
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 text-lg text-gray-300 hover:text-golden transition-colors"
            >
              <p className="underline">{address}</p>
            </a>
          </div>

          {/* Mapa */}
          <div className="w-full">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video rounded-xl overflow-hidden shadow-lg border border-golden/20 hover:border-golden transition-all duration-300"
            >
              <iframe 
                src="https://www.google.com/maps?q=Centro+Comercial+Lirios+del+Talar,+General+José+Artigas+3188,+B1617+Gral.+Pacheco,+Provincia+de+Buenos+Aires,+Argentina&hl=es&z=17&output=embed" 
                width="100%" 
                height="350" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
