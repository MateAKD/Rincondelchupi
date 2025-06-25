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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndexContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5491121840875", "_blank");
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
        <CombosSection handleWhatsAppClick={handleWhatsAppClick} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.6 }} viewport={{ once: true }}>
        <ProductsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.8 }} viewport={{ once: true, margin: "-100px" }}>
        <LocationSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.0 }} viewport={{ once: true, margin: "-100px" }}>
        <AboutSection />
      </motion.div>
      <Footer />
    </div>
  );
};

const Index = () => <IndexContent />;

export default Index;
