
import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartProvider";
import { Trash2, Minus, Plus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, total, deliveryMethod } = useCart();
  const { toast } = useToast();

  // Format price to display with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos antes de finalizar la compra",
        variant: "destructive",
      });
      return;
    }

    // Format WhatsApp message
    let message = "¡Hola Rincón del Chupi! Mi pedido es:\n";
    
    items.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `- ${item.quantity}x ${item.name} ($${formatPrice(itemTotal)})\n`;
    });
    
    message += `\n*Total a pagar: $${formatPrice(total)}*\n`;
    message += `\nForma de entrega: ${deliveryMethod === 'delivery' ? 'Delivery' : 'Retiro en el local'}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp phone number - replace with actual number
    const phoneNumber = "1234567890";
    
    // Open WhatsApp link
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Mi Carrito</h3>
        <p className="text-sm text-gray-500">
          {deliveryMethod === 'delivery' ? 'Entrega a domicilio' : 'Retiro en el local'}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center py-10">
          <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Tu carrito está vacío</h3>
          <p className="text-gray-500 max-w-xs">
            Añade algunos productos para poder completar tu pedido
          </p>
        </div>
      ) : (
        <>
          <div className="flex-grow overflow-y-auto pb-4">
            {items.map(item => {
              const itemTotal = item.price * item.quantity;
              
              return (
                <div key={item.id} className="flex py-4 border-b">
                  {item.image && (
                    <div className="h-16 w-16 rounded overflow-hidden mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="px-2 h-8" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="px-2 h-8" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= 10}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-2 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">${formatPrice(itemTotal)}</p>
                    <p className="text-sm text-gray-500">${formatPrice(item.price)} c/u</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-xl mb-6">
              <span>Total:</span>
              <span className="text-primary">${formatPrice(total)}</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                variant="default"
                className="bg-primary hover:bg-primary/90"
                onClick={handleCheckout}
              >
                Finalizar compra
              </Button>
              
              <Button 
                variant="outline"
                onClick={clearCart}
              >
                Vaciar carrito
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
