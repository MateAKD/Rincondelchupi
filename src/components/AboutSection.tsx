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
    <section className="py-24 bg-black/90">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-golden">Sobre nosotros</h2>
        <div className="max-w-3xl mx-auto bg-golden rounded-2xl p-6 md:p-12 flex flex-col gap-2 shadow-lg">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-golden/30 last:border-b-0">
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="text-white text-lg md:text-xl font-medium pl-8 pb-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 