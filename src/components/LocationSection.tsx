import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  const address = "General José Artigas 3188, V50 s/n, B1617 Gral. Pacheco, Provincia de Buenos Aires";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative py-24 bg-black/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-black/70 to-black/90 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
        >
          DÓNDE ENCONTRARNOS
        </motion.h2>
        
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center md:items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex flex-col items-center md:items-start">
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
              
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-semibold text-golden text-center md:text-left">Horarios de Atención</h4>
                <p className="text-gray-300 text-center md:text-left">Lunes a Viernes: 10:00 - 20:00</p>
                <p className="text-gray-300 text-center md:text-left">Sábados: 10:00 - 19:00</p>
                <p className="text-gray-300 text-center md:text-left">Domingos: 11:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
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
