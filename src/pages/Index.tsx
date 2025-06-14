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

const combos = [
  {
    id: "comboAconcaguaTonicas",
    name: "ACONCAGUA + 2 TONICAS",
    description: "1 Aconcagua + 2 Tónicas",
    price: "0.000",
    image: "/lovable-uploads/Combos/ACONCAGUA_+_2_TONICAS.png"
  },
  {
    id: "comboAbsolutSpeed",
    name: "ABSOLUT + 5 SPEED",
    description: "1 Absolut + 5 Speed",
    price: "0.000",
    image: "/lovable-uploads/Combos/ABSOLUT_+_5_SPEED.png"
  },
  {
    id: "comboAperolCinzano",
    name: "APEROL + CINZANO TO SPRITZ",
    description: "1 Aperol + Cinzano to Spritz",
    price: "0.000",
    image: "/lovable-uploads/Combos/APEROL_+_CINZANO_TO_SPRITZ.png"
  },
  {
    id: "comboBeefeaterSchweppes",
    name: "BEEFEATER + 2 SCHWEPPS",
    description: "1 Beefeater + 2 Schweppes",
    price: "0.000",
    image: "/lovable-uploads/Combos/BEEFEATER_+_2_SCHWEPPS.png"
  },
  {
    id: "comboChandonSpeed",
    name: "CHANDON + 4 SPEED",
    description: "1 Chandon + 4 Speed",
    price: "0.000",
    image: "/lovable-uploads/Combos/CHANDON_+_4_SPEED.png"
  },
  {
    id: "comboFernetCocas",
    name: "FERNET + 2 COCAS",
    description: "1 Fernet + 2 Coca-Colas",
    price: "0.000",
    image: "/lovable-uploads/Combos/FERNET_+_2_COCAS.png"
  },
  {
    id: "comboGordonsSchweppes",
    name: "GORDONS + 2 SCHWEPS",
    description: "1 Gordon's + 2 Schweppes",
    price: "0.000",
    image: "/lovable-uploads/Combos/GORDONS_+_2_SCHWEPS.png"
  },
  {
    id: "comboMalibuCepita",
    name: "MALIBU + 2 CEPITA",
    description: "1 Malibú + 2 Cepita",
    price: "0.000",
    image: "/lovable-uploads/Combos/MALIBU_+_2_CEPITA.png"
  },
  {
    id: "comboSkyySpeed",
    name: "SKYY + 5 SPEED",
    description: "1 Skyy + 5 Speed",
    price: "0.000",
    image: "/lovable-uploads/Combos/SKYY_+_5_SPEED.png"
  },
  {
    id: "comboSmirnoffSpeed",
    name: "SMIRNOF + 5 SPEED",
    description: "1 Smirnoff + 5 Speed",
    price: "0.000",
    image: "/lovable-uploads/Combos/SMIRNOF_+_5_SPEED.png"
  },
  {
    id: "comboSmirnoffCepitas",
    name: "SMIRNOFF + 2 CEPITAS",
    description: "1 Smirnoff + 2 Cepitas",
    price: "0.000",
    image: "/lovable-uploads/Combos/SMIRNOFF_+_2_CEPITAS.png"
  }
];

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
        <CombosSection combos={combos} handleWhatsAppClick={handleWhatsAppClick} />
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
