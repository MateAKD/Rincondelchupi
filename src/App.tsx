import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tienda from "./pages/Tienda";
import CartProvider from "./components/Store/CartProvider";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider setCartCount={setCartCount}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
