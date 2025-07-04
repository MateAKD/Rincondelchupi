import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreContent from "../components/Store/StoreContent";
import AgeVerification from "../components/Store/AgeVerification";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cart from "../components/Store/Cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartProvider from "../components/Store/CartProvider";

const Tienda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isSaturday, setIsSaturday] = useState(false);

  // Check if user has already verified age in this session
  useEffect(() => {
    const isAgeVerified = localStorage.getItem("age-verified") === "true";
    if (isAgeVerified) {
      setVerified(true);
    }

    const today = new Date();
    // 6 represents Saturday
    if (today.getDay() === 6) {
      setIsSaturday(true);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5491121840875", "_blank");
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

  if (isSaturday) {
    return (
      <div className="min-h-screen bg-black/95 text-white flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-golden mb-4">Tienda Cerrada</h1>
        <p className="text-lg text-gray-300">La tienda online no está disponible los sábados.</p>
        <p className="text-lg text-gray-300">¡Te esperamos de Martes a Viernes!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/95 text-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
        handleWhatsAppClick={handleWhatsAppClick} 
      />
      
      <CartProvider setCartCount={setCartCount}>
        <div className="container-custom pt-20 pb-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-golden flex items-center gap-3">
              <ShoppingCart className="text-golden hidden md:inline" />
              Tienda Online
            </h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="fixed bottom-8 right-8 z-40 rounded-full w-16 h-16 bg-golden text-black shadow-lg hover:bg-golden/90 border-2 border-black"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-black">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent 
                className="bg-black/95 border-l border-golden/20 backdrop-blur-md w-full sm:max-w-md"
                onPointerDownOutside={(e) => e.preventDefault()}
                onInteractOutside={(e) => e.preventDefault()}
                side="right"
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <Cart />
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Welcome section */}
          {/* <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-golden/20 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-golden mb-2">Bienvenido a nuestra Tienda Online</h2>
            <p className="text-gray-300">Encuentra las mejores bebidas al mejor precio. Hacé tu pedido y coordinamos la entrega.</p>
          </div> */}
          
          <StoreContent />
        </div>
      </CartProvider>
      
      <Footer />
    </div>
  );
};

export default Tienda;
