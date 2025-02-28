
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CombosSection from "../components/CombosSection";
import ProductsSection from "../components/ProductsSection";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const combos = [{
    name: "Superclásico",
    description: "1 Fernet Branca + 2 Coca-Cola de 2,25L",
    price: "17.900",
    image: "/lovable-uploads/11de68c6-d111-4427-b657-b540d9e8efb8.png"
  }, {
    name: "Combo Vodka",
    description: "1 Smirnoff + 5 Speed",
    price: "14.200",
    image: "/lovable-uploads/293974be-a7ee-42c2-b048-2ab207ddb5ff.png"
  }, {
    name: "Premium Mix",
    description: "1 Absolut + 5 Speed",
    price: "25.500",
    image: "/lovable-uploads/7952d15d-d87d-4e31-a5da-85e9fff37df0.png"
  }, {
    name: "Gin Premium",
    description: "1 Beefeater + 2 Schweppes",
    price: "25.000",
    image: "/lovable-uploads/16c95dcd-74b9-4ca9-8589-e7adbb3263f0.png"
  }, {
    name: "Gin Clásico",
    description: "1 Gordon's + 2 Schweppes",
    price: "16.800",
    image: "/lovable-uploads/e88147c2-8f69-4138-bf4d-5f88b4c18df9.png"
  }];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
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
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden/5 via-secondary to-secondary animate-pulse duration-1000 my-0 py-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_50%,transparent_100%)] animate-slide"></div>
      </div>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} handleWhatsAppClick={handleWhatsAppClick} />
      <HeroSection handleWhatsAppClick={handleWhatsAppClick} />
      <FeaturesSection />
      <CombosSection combos={combos} handleWhatsAppClick={handleWhatsAppClick} />
      <ProductsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
