
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type DeliveryMethod = 'delivery' | 'pickup';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (method: DeliveryMethod) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
  setCartCount: (count: number) => void;
}

const CartProvider = ({ children, setCartCount }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery');
  
  // Calculate total price
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Load cart from localStorage on initial mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    const savedDeliveryMethod = localStorage.getItem('delivery-method');
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart);
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
    
    if (savedDeliveryMethod === 'delivery' || savedDeliveryMethod === 'pickup') {
      setDeliveryMethod(savedDeliveryMethod);
    }
  }, []);

  // Update cart count for parent component
  useEffect(() => {
    setCartCount(items.reduce((count, item) => count + item.quantity, 0));
  }, [items, setCartCount]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(items));
  }, [items]);

  // Save delivery method to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('delivery-method', deliveryMethod);
  }, [deliveryMethod]);

  // Add item to cart or update quantity if already exists
  const addToCart = (item: CartItem) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item exists in cart, update quantity
        const updatedItems = [...prevItems];
        const newQuantity = updatedItems[existingItemIndex].quantity + item.quantity;
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: Math.min(newQuantity, 10) // Cap at 10 units
        };
        return updatedItems;
      } else {
        // New item, add to cart
        return [...prevItems, item];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    // Ensure quantity is between 1 and 10
    const validQuantity = Math.min(Math.max(quantity, 1), 10);
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: validQuantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
      deliveryMethod,
      setDeliveryMethod
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartProvider;
