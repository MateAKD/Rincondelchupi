
import React from 'react';
import { UserCog, Package, Truck, ThermometerSnowflake } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Package,
      title: "Variedad Premium",
      description: "Las mejores marcas importadas y nacionales para cada ocasión"
    },
    {
      icon: UserCog,
      title: "Atención Personalizada",
      description: "Asesoramiento especializado para encontrar la bebida perfecta"
    },
    {
      icon: Truck,
      title: "Delivery Zona Norte",
      description: "Envíos a todo Zona Norte con la mejor atención y puntualidad"
    },
    {
      icon: ThermometerSnowflake,
      title: "Bebidas Frías",
      description: "Todas nuestras bebidas están siempre en la temperatura ideal"
    }
  ];

  return (
    <section className="py-24 bg-black/90 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-black/70 to-black/90 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden">
          POR QUÉ ELEGIRNOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-golden/20 hover:border-golden transition-all duration-300 flex flex-col items-center text-center gap-6 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-golden/10 flex items-center justify-center transform transition-transform hover:scale-110">
                  <Icon className="w-10 h-10 text-golden" />
                </div>
                <h3 className="text-2xl font-bold text-golden">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
