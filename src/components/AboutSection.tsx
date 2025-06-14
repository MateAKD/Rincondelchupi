import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: '¿Quienes somos?',
    answer: 'La solución perfecta para tu previa, eventos y momentos especiales.'
  },
  {
    question: '¿Donde estamos?',
    answer: 'Podes encontrarnos en General José Artigas 3188, Gral. Pacheco, Provincia de Buenos Aires.'
  },
  {
    question: '¿Hacemos envíos?',
    answer: 'Sí, a toda zona norte, y también podes retirar por el local.'
  }
];

const AboutSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="nosotros" className="py-12 bg-black/90">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-300px" }}
          transition={{ duration: 0.4 }}
        >
          SOBRE NOSOTROS
        </motion.h2>
        
        <motion.div
          className="max-w-3xl mx-auto bg-golden rounded-2xl p-6 md:p-12 flex flex-col gap-2 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-250px" }}
          transition={{ duration: 0.3 }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx} 
                className="border-b border-black/30 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <button
                  className="w-full flex items-center gap-3 text-black text-xl md:text-2xl font-semibold py-6 focus:outline-none transition-colors"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-2xl md:text-3xl font-bold transition-transform duration-200">
                    {isOpen ? '×' : '+'}
                  </span>
                  {faq.question}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="text-black text-lg md:text-xl font-medium pl-8 pb-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 