
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { useCart, DeliveryMethod } from "./CartProvider";
import { Button } from "@/components/ui/button";

// Product categories
const categories = [
  "Todos",
  "Combos",
  "Cervezas",
  "Vodka",
  "Gin",
  "Aperitivos",
  "Vinos",
  "Extras"
];

// Product list with their categories
const products = [
  // Combos products
  {
    id: "combo1",
    name: "Superclásico",
    description: "1 Fernet Branca + 2 Coca-Cola de 2,25L",
    price: 17900,
    category: "Combos",
    image: "/lovable-uploads/11de68c6-d111-4427-b657-b540d9e8efb8.png"
  }, 
  {
    id: "combo2",
    name: "Combo Vodka",
    description: "1 Smirnoff + 5 Speed",
    price: 14200,
    category: "Combos",
    image: "/lovable-uploads/293974be-a7ee-42c2-b048-2ab207ddb5ff.png"
  }, 
  {
    id: "combo3",
    name: "Premium Mix",
    description: "1 Absolut + 5 Speed",
    price: 25500,
    category: "Combos",
    image: "/lovable-uploads/7952d15d-d87d-4e31-a5da-85e9fff37df0.png"
  }, 
  {
    id: "combo4",
    name: "Gin Premium",
    description: "1 Beefeater + 2 Schweppes",
    price: 25000,
    category: "Combos",
    image: "/lovable-uploads/16c95dcd-74b9-4ca9-8589-e7adbb3263f0.png"
  }, 
  {
    id: "combo5",
    name: "Gin Clásico",
    description: "1 Gordon's + 2 Schweppes",
    price: 16800,
    category: "Combos",
    image: "/lovable-uploads/e88147c2-8f69-4138-bf4d-5f88b4c18df9.png"
  },
  // Cervezas
  {
    id: "cerv1",
    name: "Cerveza Corona 473ml",
    price: 3400,
    category: "Cervezas"
  },
  {
    id: "cerv2",
    name: "Cerveza Imperial Golden",
    price: 2100,
    category: "Cervezas"
  },
  {
    id: "cerv3",
    name: "Cerveza Stella",
    price: 2700,
    category: "Cervezas"
  },
  {
    id: "cerv4",
    name: "Corona porrón x6",
    price: 16000,
    category: "Cervezas"
  },
  // Vodka
  {
    id: "vod1",
    name: "Vodka Absolut",
    price: 21000,
    category: "Vodka"
  },
  {
    id: "vod2",
    name: "Vodka Sernova",
    price: 6700,
    category: "Vodka"
  },
  {
    id: "vod3",
    name: "Vodka Skyy",
    price: 9000,
    category: "Vodka"
  },
  {
    id: "vod4",
    name: "Vodka Smirnoff",
    price: 8400,
    category: "Vodka"
  },
  // Gin
  {
    id: "gin1",
    name: "Gin Aconcagua Azul",
    price: 15000,
    category: "Gin"
  },
  {
    id: "gin2",
    name: "Gin Beefeater",
    price: 22300,
    category: "Gin"
  },
  {
    id: "gin3",
    name: "Gin Gordons",
    price: 13200,
    category: "Gin"
  },
  {
    id: "gin4",
    name: "Gin Merle",
    price: 10900,
    category: "Gin"
  },
  // Aperitivos
  {
    id: "ape1",
    name: "Aperol",
    price: 10000,
    category: "Aperitivos"
  },
  {
    id: "ape2",
    name: "Campari",
    price: 12300,
    category: "Aperitivos"
  },
  {
    id: "ape3",
    name: "Fernet 1lts",
    price: 17000,
    category: "Aperitivos"
  },
  {
    id: "ape4",
    name: "Fernet 750ml",
    price: 13400,
    category: "Aperitivos"
  },
  {
    id: "ape5",
    name: "Gancia",
    price: 6200,
    category: "Aperitivos"
  },
  // Extras
  {
    id: "ext1",
    name: "Cepita Naranja",
    price: 2000,
    category: "Extras"
  },
  {
    id: "ext2",
    name: "Coca Cola",
    price: 3500,
    category: "Extras"
  },
  {
    id: "ext3",
    name: "Schweppes Tónica",
    price: 3100,
    category: "Extras"
  },
  // Vinos
  {
    id: "vin1",
    name: "Angelica Zapata Malbec",
    price: 29500,
    category: "Vinos"
  },
  {
    id: "vin2",
    name: "Cordero con Piel del Lobo",
    price: 5000,
    category: "Vinos"
  },
  {
    id: "vin3",
    name: "DV Catena Cabernet Malbec",
    price: 11700,
    category: "Vinos"
  },
  {
    id: "vin4",
    name: "DV Catena Malbec Malbec",
    price: 19700,
    category: "Vinos"
  },
  {
    id: "vin5",
    name: "Nicasia Malbec",
    price: 8100,
    category: "Vinos"
  },
  {
    id: "vin6",
    name: "Rutini Cabernet Malbec",
    price: 15300,
    category: "Vinos"
  },
  {
    id: "vin7",
    name: "Rutini Sauvignon Blanc",
    price: 15800,
    category: "Vinos"
  },
  {
    id: "vin8",
    name: "Santa Julia Dulce",
    price: 7900,
    category: "Vinos"
  }
];

const StoreContent = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const { deliveryMethod, setDeliveryMethod } = useCart();

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center p-1 rounded-lg bg-gray-100 space-x-2">
          <Button
            variant={deliveryMethod === 'delivery' ? 'default' : 'outline'}
            onClick={() => setDeliveryMethod('delivery')}
            className={deliveryMethod === 'delivery' ? 'bg-primary' : ''}
          >
            Delivery
          </Button>
          <Button
            variant={deliveryMethod === 'pickup' ? 'default' : 'outline'}
            onClick={() => setDeliveryMethod('pickup')}
            className={deliveryMethod === 'pickup' ? 'bg-primary' : ''}
          >
            Retiro en local
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="Todos" className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="w-full flex justify-start">
            {categories.map(category => (
              <TabsTrigger 
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <TabsContent value={activeCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default StoreContent;
