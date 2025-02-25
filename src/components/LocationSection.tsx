
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="relative py-20 bg-secondary/90">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
          DÓNDE ENCONTRARNOS
        </h2>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <MapPin className="text-golden" />
            <p>General José Artigas 3188, Gral. Pacheco, Provincia de Buenos Aires</p>
          </div>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-golden/20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.186588775371!2d-58.5115!3d-34.5225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMxJzIxLjAiUyA1OMKwMzAnNDEuNCJX!5e0!3m2!1sen!2sar!4v1635441719589!5m2!1sen!2sar" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
