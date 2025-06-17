import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartProvider";
import { Trash2, Minus, Plus, ShoppingCart, Truck, Store, X } from "lucide-react";
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

    // Mensaje personalizado para WhatsApp
    let message = `Hola quiero hacer un pedido para ${deliveryMethod === 'delivery' ? 'delivery' : 'retirar en el local'}\n\n`;
    message += 'Mi pedido es:\n';
    items.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `- ${item.quantity}x ${item.name} ($${formatPrice(itemTotal)})\n`;
    });
    message += `\n*Total a pagar: $${formatPrice(total)}*`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    // WhatsApp phone number
    const phoneNumber = "+5491121840875";
    // Open WhatsApp link
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = `Hola! Quiero hacer un pedido:\n\n${items.map(item => `- ${item.name} x${item.quantity}`).join('\n')}\n\nTotal: $${total}`;
    window.open(`https://wa.me/5491121840875?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="h-full flex flex-col text-white relative border-4 border-black rounded-lg">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-golden">Mi Carrito</h3>
        <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
          {deliveryMethod === 'delivery' ? (
            <>
              <Truck className="h-4 w-4 text-golden" /> Entrega a domicilio
            </>
          ) : (
            <>
              <Store className="h-4 w-4 text-golden" /> Retiro en el local
            </>
          )}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center py-10">
          <div className="w-20 h-20 rounded-full bg-golden/10 flex items-center justify-center mb-4">
            <ShoppingCart className="h-10 w-10 text-golden" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-golden">Tu carrito está vacío</h3>
          <p className="text-gray-400 max-w-xs">
            Añade algunos productos para poder completar tu pedido
          </p>
        </div>
      ) : (
        <>
          <div className="flex-grow overflow-y-auto pb-4 scrollbar-hide">
            {items.map(item => {
              const itemTotal = item.price * item.quantity;
              
              return (
                <div key={item.id} className="flex py-4 border-b border-golden/20">
                  {item.image && (
                    <div className="h-16 w-16 rounded overflow-hidden mr-4 bg-black/20 border border-golden/10">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <h4 className="font-medium text-golden">{item.name}</h4>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center border border-golden/20 rounded-md bg-black/20">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="px-2 h-8 text-golden hover:text-white hover:bg-transparent" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="px-2 h-8 text-golden hover:text-white hover:bg-transparent" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= 10}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-2 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium text-primary">${formatPrice(itemTotal)}</p>
                    <p className="text-xs text-gray-400">${formatPrice(item.price)} c/u</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="border-t border-golden/20 pt-4">
            <div className="flex justify-between font-bold text-xl mb-6">
              <span className="text-golden">Total:</span>
              <span className="text-primary">${formatPrice(total)}</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                variant="default"
                className="bg-golden hover:bg-golden/90 text-black font-bold"
                onClick={handleCheckout}
              >
                Finalizar compra
              </Button>
              
              <Button 
                variant="outline"
                onClick={clearCart}
                className="border-golden/30 text-golden hover:bg-golden/10"
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
