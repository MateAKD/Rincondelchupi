
import React from 'react';

const ProductsSection = () => {
  return (
    <section id="productos" className="relative py-20 bg-secondary">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-golden">
          OTROS PRODUCTOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
            <h3 className="text-xl font-bold mb-4 text-golden">Whiskys Importados</h3>
            <p className="text-gray-300">Disfruta de las mejores marcas, perfectas para un regalo especial o para deleitar a tus invitados</p>
          </div>
          <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
            <h3 className="text-xl font-bold mb-4 text-golden">Cristalería</h3>
            <p className="text-gray-300">Elegí copas y vasos que realzan la experiencia de tus bebidas favoritas</p>
          </div>
          <div className="bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all border border-golden/20 hover:border-golden p-6">
            <h3 className="text-xl font-bold mb-4 text-golden">Combos Personalizados</h3>
            <p className="text-gray-300">Desde la previa con amigos hasta eventos exclusivos, tenemos el combo perfecto para cada ocasión</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
