import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: 'Whiskys Importados',
    description: 'Disfruta de las mejores marcas, perfectas para un regalo especial o para deleitar a tus invitados.',
    image: '/lovable-uploads/Whiskys importados.png',
    action: 'navigate-whisky'
  },
  {
    title: 'Cristalería',
    description: 'Elegí copas y vasos que realzan la experiencia de tus bebidas favoritas.',
    image: '/lovable-uploads/vasos-ferchetto.png',
    action: 'whatsapp-cristaleria'
  },
  {
    title: 'Personaliza tu combo',
    description: 'Desde la previa con amigos hasta eventos exclusivos, tenemos el combo perfecto para cada ocasión.',
    image: '/lovable-uploads/corona-balde.png',
    action: 'navigate-store'
  }
];

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleProductClick = (action: string) => {
    switch (action) {
      case 'navigate-whisky':
        navigate('/tienda?category=Whisky');
        break;
      case 'whatsapp-cristaleria':
        const whatsappMessage = encodeURIComponent("¡Hola! Quiero más información de la cristalería 🥂");
        window.open(`https://wa.me/5491121840875?text=${whatsappMessage}`, "_blank");
        break;
      case 'navigate-store':
        navigate('/tienda');
        break;
      default:
        break;
    }
  };

  return (
    <section id="productos" className="relative py-10 bg-black/90">
      <div className="container-custom relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-10 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
        >
          OTROS PRODUCTOS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
              onClick={() => handleProductClick(product.action)}
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
