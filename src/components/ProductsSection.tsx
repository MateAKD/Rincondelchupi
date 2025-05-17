import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Whiskys Importados',
    description: 'Disfruta de las mejores marcas, perfectas para un regalo especial o para deleitar a tus invitados.',
    image: '/lovable-uploads/whisky-red-label.png'
  },
  {
    title: 'Cristalería',
    description: 'Elegí copas y vasos que realzan la experiencia de tus bebidas favoritas.',
    image: '/lovable-uploads/vasos-ferchetto.png'
  },
  {
    title: 'Combos Personalizados',
    description: 'Desde la previa con amigos hasta eventos exclusivos, tenemos el combo perfecto para cada ocasión.',
    image: '/lovable-uploads/corona-balde.png'
  }
];

const ProductsSection = () => {
  return (
    <section id="productos" className="relative py-24 bg-black/90">
      <div className="container-custom relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-golden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
        >
          Otros Productos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
            >
              <img src={product.image} alt={product.title} className="h-56 md:h-64 object-contain mb-8" />
              <h3 className="text-3xl font-bold text-golden mb-4">{product.title}</h3>
              <p className="text-gray-300 text-lg max-w-xs mx-auto">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
