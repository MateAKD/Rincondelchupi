
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreContent from "../components/Store/StoreContent";
import AgeVerification from "../components/Store/AgeVerification";
import CartProvider from "../components/Store/CartProvider";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cart from "../components/Store/Cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Tienda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Check if user has already verified age in this session
  useEffect(() => {
    const isAgeVerified = localStorage.getItem("age-verified") === "true";
    if (isAgeVerified) {
      setVerified(true);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (!verified) {
    return <AgeVerification onVerify={() => setVerified(true)} />;
  }

  return (
    <CartProvider setCartCount={setCartCount}>
      <div className="min-h-screen bg-white">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrollToSection={scrollToSection} 
          handleWhatsAppClick={handleWhatsAppClick} 
        />
        
        <div className="container-custom pt-28 pb-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Tienda</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="fixed top-20 right-4 z-40 rounded-full w-12 h-12 bg-primary shadow-lg hover:bg-primary/90"
                >
                  <ShoppingCart className="text-white" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-golden text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <Cart />
              </SheetContent>
            </Sheet>
          </div>
          
          <StoreContent />
        </div>
        
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Tienda;
