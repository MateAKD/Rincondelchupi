import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CombosSection from "../components/CombosSection";
import ProductsSection from "../components/ProductsSection";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import CartProvider, { useCart } from '../components/Store/CartProvider';

const combos = [
  {
    id: "combo1",
    name: "Superclásico",
    description: "1 Fernet Branca + 2 Coca-Cola de 2,25L",
    price: "17.900",
    image: "/lovable-uploads/11de68c6-d111-4427-b657-b540d9e8efb8.png"
  }, {
    id: "combo2",
    name: "Combo Vodka",
    description: "1 Smirnoff + 5 Speed",
    price: "14.200",
    image: "/lovable-uploads/293974be-a7ee-42c2-b048-2ab207ddb5ff.png"
  }, {
    id: "combo3",
    name: "Premium Mix",
    description: "1 Absolut + 5 Speed",
    price: "25.500",
    image: "/lovable-uploads/7952d15d-d87d-4e31-a5da-85e9fff37df0.png"
  }, {
    id: "combo4",
    name: "Gin Premium",
    description: "1 Beefeater + 2 Schweppes",
    price: "25.000",
    image: "/lovable-uploads/16c95dcd-74b9-4ca9-8589-e7adbb3263f0.png"
  }, {
    id: "combo5",
    name: "Gin Clásico",
    description: "1 Gordon's + 2 Schweppes",
    price: "16.800",
    image: "/lovable-uploads/e88147c2-8f69-4138-bf4d-5f88b4c18df9.png"
  }
];

const IndexContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { addToCart } = useCart();

  const handleWhatsAppClick = () => {
    const message = "Hola! Me gustaría hacer un pedido. ¿Es para delivery o retiro en el local?";
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} handleWhatsAppClick={handleWhatsAppClick} />
      <HeroSection handleWhatsAppClick={handleWhatsAppClick} />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} viewport={{ once: true }}>
        <FeaturesSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }} viewport={{ once: true }}>
        <CombosSection combos={combos} handleWhatsAppClick={handleWhatsAppClick} addToCart={addToCart} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.6 }} viewport={{ once: true }}>
        <ProductsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.8 }} viewport={{ once: true }}>
        <LocationSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.0 }} viewport={{ once: true }}>
        <AboutSection />
      </motion.div>
      <Footer />
    </div>
  );
};

const Index = () => (
  <CartProvider setCartCount={() => {}}>
    <IndexContent />
  </CartProvider>
);

export default Index;
