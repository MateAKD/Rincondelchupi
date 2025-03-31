
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  const address = "General José Artigas 3188, V50 s/n, B1617 Gral. Pacheco, Provincia de Buenos Aires";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative py-20 bg-secondary/90">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
          DÓNDE ENCONTRARNOS
        </h2>
        <div className="text-center mb-8">
          <a 
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-lg text-gray-300 hover:text-golden transition-colors"
          >
            <MapPin className="text-golden" />
            <p>{address}</p>
          </a>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video rounded-xl overflow-hidden shadow-lg border border-golden/20 hover:border-golden transition-all duration-300"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.2096585160704!2d-58.64614782346521!3d-34.4439827518739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca0e8c3e8ad25%3A0x84caa0bca4b68480!2sLirios%20Shopping%20Center!5e0!3m2!1sen!2sar!4v1713212155082!5m2!1sen!2sar" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
