
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <div className="rounded-lg border bg-white shadow-sm p-4 flex flex-col h-full transition-all duration-300 hover:shadow-md">
      {product.image && (
        <div className="mb-4 aspect-square overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        )}
        <p className="mt-2 font-bold text-primary text-xl">${formatPrice(product.price)}</p>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Cantidad:</span>
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-2 h-8" 
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-2 h-8" 
              onClick={incrementQuantity}
              disabled={quantity >= 10}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90" 
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
