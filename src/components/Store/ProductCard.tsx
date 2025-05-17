import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Cantidad máxima",
        description: "No puedes agregar más de 10 unidades",
      });
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image
    });
    
    toast({
      title: "Producto agregado",
      description: `${quantity}x ${product.name} agregado al carrito`,
    });
    
    setQuantity(1); // Reset quantity after adding to cart
  };

  // Format price to display with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Card className="overflow-hidden border border-golden/30 bg-black/40 backdrop-blur-sm text-white hover:shadow-md hover:shadow-golden/10 transition-all duration-300 group">
      <img
        src={product.image ? product.image : '/lovable-uploads/not-found.png'}
        alt={product.image ? product.name : 'Imagen no disponible'}
        className="w-full h-48 object-contain mb-4 rounded-lg bg-black/10"
      />
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-golden">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-300 mt-1">{product.description}</p>
        )}
        <p className="mt-2 font-bold text-primary text-2xl">${formatPrice(product.price)}</p>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Cantidad:</span>
            <div className="flex items-center border border-golden/30 rounded-md bg-black/20">
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-2 h-8 text-golden hover:text-white hover:bg-transparent" 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center text-white">{quantity}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-2 h-8 text-golden hover:text-white hover:bg-transparent" 
                onClick={incrementQuantity}
                disabled={quantity >= 10}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button 
            className="w-full bg-golden hover:bg-golden/90 text-black font-semibold" 
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Añadir al carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
