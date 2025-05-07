
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const categories = [
    {
      title: "Whiskys Importados",
      description: "Las mejores marcas para ocasiones especiales",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cristalería",
      description: "Copas y vasos de la más alta calidad",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Combos Personalizados",
      description: "La combinación perfecta para cada ocasión",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="productos" className="relative py-24 bg-secondary/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-secondary to-secondary animate-pulse duration-1000 opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 relative pb-4 text-golden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-golden">
          DESCUBRÍ NUESTRA SELECCIÓN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <Card key={index} className="group bg-black/40 backdrop-blur-sm border-golden/20 hover:border-golden overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-golden">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <Button className="bg-golden text-black hover:bg-golden/90 w-full">
                  Explorar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
