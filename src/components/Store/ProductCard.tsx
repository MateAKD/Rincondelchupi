import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import { useToast } from "@/hooks/use-toast";
import { Product } from "../../hooks/useProducts";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const incrementQuantity = () => {
    if (quantity < 12) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Cantidad máxima",
        description: "No puedes agregar más de 12 unidades",
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
        className="w-11/12 mx-auto h-32 sm:h-48 object-contain mb-2 sm:mb-4 mt-2 sm:mt-4 rounded-lg bg-neutral-100/5"
      />
      
      <CardContent className="p-2 sm:p-4">
        <h3 className="font-semibold text-sm sm:text-lg text-golden line-clamp-2 h-10">{product.name}</h3>
        {product.description && (
          <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">{product.description}</p>
        )}
        <p className="mt-1 sm:mt-2 font-bold text-white text-lg sm:text-2xl">${formatPrice(product.price)}</p>
        
        <div className="flex items-center justify-between mt-2 sm:mt-4">
          <span className="text-xs sm:text-sm font-medium text-gray-300">Cantidad:</span>
          <div className="flex items-center border border-golden/30 rounded-md bg-black/20">
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-1 sm:px-2 h-6 sm:h-8 text-golden hover:text-white hover:bg-transparent" 
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <span className="w-6 sm:w-8 text-center text-white text-xs sm:text-sm">{quantity}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-1 sm:px-2 h-6 sm:h-8 text-golden hover:text-white hover:bg-transparent" 
              onClick={incrementQuantity}
              disabled={quantity >= 50}
            >
              <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
        
        <Button 
          className="w-full bg-golden hover:bg-golden/90 text-black font-semibold text-xs sm:text-sm mt-2 sm:mt-4 h-8 sm:h-10" 
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Añadir al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
