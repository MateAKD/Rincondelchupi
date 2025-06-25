import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { useCart, DeliveryMethod } from "./CartProvider";
import { Button } from "@/components/ui/button";
import { Truck, Store, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getProducts } from "@/data/products";

// Product categories
const categories = [
  "Todos",
  "Combos",
  "Aperitivos",
  "Cervezas Lata",
  "Cervezas Vidrio",
  "Gin",
  "Latas/Gaseosas",
  "Licores",
  "Ron",
  "Tequilas",
  "Vinos",
  "Vodka",
  "Whisky"
];

const products = getProducts();


const StoreContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || "Todos";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { deliveryMethod, setDeliveryMethod } = useCart();
  const [sortOrder, setSortOrder] = useState<string>("az");

  useEffect(() => {
    const categoryFromUrl = queryParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [location.search]);

  const sortedProducts = [...products]
    .filter(product => {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesSearch = searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.price - b.price;
      } else if (sortOrder === "price-desc") {
        return b.price - a.price;
      } else if (sortOrder === "az") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "za") {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <>
      <div className="mb-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-golden/20 p-4 flex flex-col md:flex-row md:items-center gap-4">
          <p className="text-golden font-medium flex items-center gap-2">
            <ArrowRight className="h-4 w-4" /> Selecciona método de entrega:
          </p>
          <div className="flex gap-3">
            <Button
              variant={deliveryMethod === 'delivery' ? 'default' : 'outline'}
              onClick={() => setDeliveryMethod('delivery')}
              className={`flex items-center gap-2 ${
                deliveryMethod === 'delivery' 
                  ? 'bg-golden text-black hover:bg-golden/90' 
                  : 'border-golden/50 text-black hover:bg-golden/10 opacity-50'
              }`}
              size="sm"
            >
              <Truck className="h-4 w-4" /> Delivery
            </Button>
            <Button
              variant={deliveryMethod === 'pickup' ? 'default' : 'outline'}
              onClick={() => setDeliveryMethod('pickup')}
              className={`flex items-center gap-2 ${
                deliveryMethod === 'pickup' 
                  ? 'bg-golden text-black hover:bg-golden/90' 
                  : 'border-golden/50 text-black hover:bg-golden/10 opacity-50'
              }`}
              size="sm"
            >
              <Store className="h-4 w-4" /> Retiro en local
            </Button>

          </div>
          <p className="text-xs text-golden/80 mt-2">*Entrega máximo 48hs</p>
          {deliveryMethod === 'delivery' && (
            <p className="text-xs text-golden/80 mt-2">*Compra mínima para delivery $40.000</p>
          )}
        </div>
      </div>

      <div className="mb-8 flex flex-col md:flex-row items-center gap-4">
        <Tabs defaultValue={initialCategory} className="w-full">
          <div className="overflow-x-auto pb-2 mb-4">
            <TabsList className="bg-black/20 border border-golden/20 justify-start">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="whitespace-nowrap data-[state=active]:bg-golden data-[state=active]:text-black text-golden/80 hover:text-golden transition-colors duration-200 px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/20 border-golden/30 text-white placeholder-gray-400 focus:border-golden"
          />
          <Search className="h-5 w-5 text-golden" />
        </div>

        <Select onValueChange={setSortOrder} defaultValue="az">
          <SelectTrigger className="w-full md:w-[180px] bg-black/20 border-golden/30 text-white">
            <SelectValue placeholder="Ordenar por..." />
          </SelectTrigger>
          <SelectContent className="bg-black/80 border-golden/30 text-white">
            <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="az">Nombre: A-Z</SelectItem>
            <SelectItem value="za">Nombre: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No se encontraron productos para esta categoría o búsqueda.</p>
        )}
      </div>
    </>
  );
};

export default StoreContent;
