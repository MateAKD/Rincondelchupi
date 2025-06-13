import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { useCart, DeliveryMethod } from "./CartProvider";
import { Button } from "@/components/ui/button";
import { Truck, Store, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from 'react-router-dom';

// Product categories
const categories = [
  "Todos",
  "Combos",
  "Aperitivos",
  "Cervezas",
  "Gin",
  "Latas/Gaseosas",
  "Tequilas",
  "Vinos",
  "Vodka",
  "Whisky"
];

// Product list with their categories
const products = [
  // Combos products
  {
    id: "combo1",
    name: "Combo Absolut + 5 Speed",
    price: 25000,
    image: "/lovable-uploads/Combos/ABSOLUT_+_5_SPEED.png",
    category: "Combos"
  },
  {
    id: "combo2",
    name: "Combo Aconcagua + 2 Tonicas",
    price: 20000,
    image: "/lovable-uploads/Combos/ACONCAGUA_+_2_TONICAS.png",
    category: "Combos"
  },
  {
    id: "combo3",
    name: "Combo Aperol + Cinzano To Spritz",
    price: 0,
    image: "/lovable-uploads/Combos/APEROL_+_CINZANO_TO_SPRITZ.png",
    category: "Combos"
  },
  {
    id: "combo4",
    name: "Combo Beefeater + 2 Schweppes",
    price: 23000,
    image: "/lovable-uploads/Combos/BEEFEATER_+_2_SCHWEPPS.png",
    category: "Combos"
  },
  {
    id: "combo5",
    name: "Combo Chandon + 4 Speed",
    price: 28000,
    image: "/lovable-uploads/Combos/CHANDON_+_4_SPEED.png",
    category: "Combos"
  },
  {
    id: "combo6",
    name: "Combo Fernet + 2 Cocas",
    price: 18000,
    image: "/lovable-uploads/Combos/FERNET_+_2_COCAS.png",
    category: "Combos"
  },
  {
    id: "combo7",
    name: "Combo Gordons + 2 Schweppes",
    price: 22000,
    image: "/lovable-uploads/Combos/GORDONS_+_2_SCHWEPS.png",
    category: "Combos"
  },
  {
    id: "combo8",
    name: "Combo Malibu + 2 Cepita",
    price: 24000,
    image: "/lovable-uploads/Combos/MALIBU_+_2_CEPITA.png",
    category: "Combos"
  },
  {
    id: "combo9",
    name: "Combo Skyy + 5 Speed",
    price: 24000,
    image: "/lovable-uploads/Combos/SKYY_+_5_SPEED.png",
    category: "Combos"
  },
  {
    id: "combo10",
    name: "Combo Smirnoff + 2 Cepitas",
    price: 22000,
    image: "/lovable-uploads/Combos/SMIRNOFF_+_2_CEPITAS.png",
    category: "Combos"
  },
  {
    id: "combo11",
    name: "Combo Smirnoff + 5 Speed",
    price: 24000,
    image: "/lovable-uploads/Combos/SMIRNOF_+_5_SPEED.png",  
    category: "Combos"
  },
  // Cervezas
  {
    id: "cerv1",
    name: "Andes Roja 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Andes roja.png"
  },
  {
    id: "cerv2",
    name: "Brahma 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Brahma.png"
  },
  {
    id: "cerv3",
    name: "Budweiser 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Budweiser.png"
  },
  {
    id: "cerv4",
    name: "Grolsch 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Grolsch.png"
  },
  {
    id: "cerv5",
    name: "Heineken 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Heineken.png"
  },
  {
    id: "cerv6",
    name: "Imperial Golden 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Imperial golden.png"
  },
  {
    id: "cerv7",
    name: "Imperial Lager 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Imperial Lager.png"
  },
  {
    id: "cerv8",
    name: "Stella Artois 473ml",
    price: 0,
    category: "Cervezas",
    image: "/lovable-uploads/Cervezas/Stella.png"
  },
  // Vodka
  {
    id: "vod1",
    name: "Absolut 700ml",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut.png"
  },
  {
    id: "vod2",
    name: "Absolut Apeach",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut peach.png"
  },
  {
    id: "vod3",
    name: "Absolut Elyx 1L",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut elyx.png"
  },
  {
    id: "vod4",
    name: "Absolut Mango",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut mango.png"
  },
  {
    id: "vod5",
    name: "Absolut Pears",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut pears.png"
  },
  {
    id: "vod6",
    name: "Absolut Raspberry",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut raspberry.png"
  },
  {
    id: "vod7",
    name: "Absolut Vainilla",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/abolut vanilia.png"
  },
  {
    id: "vod8",
    name: "Belvedere 700ml",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/belvedere.png"
  },
  {
    id: "vod9",
    name: "Ciroc Red",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/ciroc red.png"
  },
  {
    id: "vod10",
    name: "Ciroc",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/ciroc.png"
  },
  {
    id: "vod11",
    name: "Grey Goose 1L",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/grey goose.png"
  },
  {
    id: "vod12",
    name: "Grey Goose Pera",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/grey goose pera.png"
  },
  {
    id: "vod13",
    name: "Grey Goose Naranja",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/grey goose naranja.png"
  },
  {
    id: "vod14",
    name: "Nuvo",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/nuvo.png"
  },
  {
    id: "vod15",
    name: "Sernova 700ml",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Sernova.png"
  },
  {
    id: "vod16",
    name: "Sernova Caribbean Blend",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Sernova Caribbean.png"
  },
  {
    id: "vod17",
    name: "Sernova Wild Berries",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Sernova wild berries.png"
  },
  {
    id: "vod18",
    name: "Skyy 700ml",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Skyy.png"
  },
  {
    id: "vod19",
    name: "Skyy Blood Orange 750ml",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/skyy blood orange.png"
  },
  {
    id: "vod20",
    name: "Skyy Raspberry",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Skyy raspberry.png"
  },
  {
    id: "vod21",
    name: "Smirnoff 700ml",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff.png"
  },
  {
    id: "vod22",
    name: "Smirnoff Citric Tangerine",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff citric.png"
  },
  {
    id: "vod23",
    name: "Smirnoff Raspberry",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff raspberry.png"
  },
  {
    id: "vod24",
    name: "Smirnoff Watermelon",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff watermelon.png"
  },
  {
    id: "vod25",
    name: "Smirnoff Tamarindo",
    price: 0,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff_tamarindo.png"
  },
  // Gin
  {
    id: "gin1",
    name: "Aconcagua Azul 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Aconcagua_azul.png"
  },
  {
    id: "gin2",
    name: "Aconcagua Blanco 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Aconcagua_blanco_750.png"
  },
  {
    id: "gin3",
    name: "Aconcagua Rosa 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Aconcagua_rosa.png"
  },
  {
    id: "gin4",
    name: "Aconcagua Verde 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Aconcagua_verde.png"
  },
  {
    id: "gin5",
    name: "Beefeater 1L",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Beefeater 1L.png"
  },
  {
    id: "gin6",
    name: "Beefeater Blood Orange 700ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Beefeater blood orange 700.png"
  },
  {
    id: "gin7",
    name: "Beefeater Pink 700ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Beefeater pink 700.png"
  },
  {
    id: "gin8",
    name: "Bombay 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Bombay.png"
  },
  {
    id: "gin9",
    name: "Gordons 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Gordons.png"
  },
  {
    id: "gin10",
    name: "Gordons Pink 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Gordons pink.png"
  },
  {
    id: "gin11",
    name: "Merle London Dry 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Merle london dry 750.png"
  },
  {
    id: "gin12",
    name: "Merle Pink 750ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Merle pink 750.png"
  },
  {
    id: "gin13",
    name: "Tanqueray 700ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Tanqueray 700.png"
  },
  {
    id: "gin14",
    name: "Tanqueray Sevilla 700ml",
    price: 0,
    category: "Gin",
    image: "/lovable-uploads/Gin/Tanqueray_sevilla_700.png"
  },
  // Aperitivos
  {
    id: "ape1",
    name: "Aperol 750ml",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Aperol 750.png"
  },
  {
    id: "ape2",
    name: "Buhero 700ml",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Buhero 700.png"
  },
  {
    id: "ape3",
    name: "Cachaça 700ml",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Cachaca.png"
  },
  {
    id: "ape4",
    name: "Campari 750ml",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Campari 750.png"
  },
  {
    id: "ape5",
    name: "Cynar 750ml",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Cynar.png"
  },
  {
    id: "ape6",
    name: "Fernet 1L",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/fernet 1L.png"
  },
  {
    id: "ape7",
    name: "Fernet 750ml",
    price: 0,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Fernet 750.png"
  },
  // Vinos
  {
    id: "vin1",
    name: "Alamos Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Alamos malbec.png"
  },
  {
    id: "vin2",
    name: "Angelica Zapata Cabernet S",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Angelica zapata cabernet s.png"
  },
  {
    id: "vin3",
    name: "Angelica Zapata Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Angelica zapata malbec.png"
  },
  {
    id: "vin4",
    name: "Cordero Con Piel De Lobo Rose",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Cordero con piel de lobo rose.png"
  },
  {
    id: "vin5",
    name: "Cordero Con Piel De Lobo Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Cordero con piel de lobo malbec.png"
  },
  {
    id: "vin6",
    name: "DV Catena Birth Of Cabernet",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena birth of cabernet.png"
  },
  {
    id: "vin7",
    name: "DV Catena Cabernet Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena cabernet malbec.png"
  },
  {
    id: "vin8",
    name: "DV Catena Chardonay",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena chardonay.png"
  },
  {
    id: "vin9",
    name: "DV Catena Malbec Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena malbec malbec.png"
  },
  {
    id: "vin10",
    name: "DV Catena Malbec Argentino",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena Malbec argentino.png"
  },
  {
    id: "vin11",
    name: "El Enemigo Bonarda",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El enemigo bonarda.png"
  },
  {
    id: "vin12",
    name: "El Enemigo Chardonnay",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El enemigo chardonnay.png"
  },
  {
    id: "vin13",
    name: "El Enemigo Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El enemigo malbec.png"
  },
  {
    id: "vin14",
    name: "El Gran Enemigo Agrelo",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El gran enemigo agrelo.png"
  },
  {
    id: "vin15",
    name: "El Gran Enemigo Chacayes",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El gran enemigo chacayes.png"
  },
  {
    id: "vin16",
    name: "El Gran Enemigo Gualtallary",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El gran enemigo gualtallary.png"
  },
  {
    id: "vin17",
    name: "Escorihuela Pequeñas Producciones Mb",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Escorihuela pequeñas producciones mb.png"
  },
  {
    id: "vin18",
    name: "Escorihuela Pequeñas Producciones Pinot Noir",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Escorihuela pequeñas producciones pinot noir.png"
  },
  {
    id: "vin19",
    name: "Felino Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Felino malbec.png"
  },
  {
    id: "vin20",
    name: "Judas Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Judas malbec.png"
  },
  {
    id: "vin21",
    name: "Kaiken Estate Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Kaiken estate malbec.png"
  },
  {
    id: "vin22",
    name: "Kaiken Estate Cab Suav",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Kaiken estate cab suav.png"
  },
  {
    id: "vin23",
    name: "Las Peredice Reserva Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Las peredice reserva malbec.png"
  },
  {
    id: "vin24",
    name: "Las Perdices Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Las perdices malbec.png"
  },
  {
    id: "vin25",
    name: "Nico By Luca",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Nico by luca.png"
  },
  {
    id: "vin26",
    name: "Luca Beso De Dante",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luca beso de dante.png"
  },
  {
    id: "vin27",
    name: "Luca Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luca malbec.png"
  },
  {
    id: "vin28",
    name: "Luca Chardonnay",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luca chardonnay.png"
  },
  {
    id: "vin29",
    name: "Luigi Bosca De Sangre Red Blend",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luigi bosca de sangre red blend.png"
  },
  {
    id: "vin30",
    name: "Luigi Bosca Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luigi bosca malbec.png"
  },
  {
    id: "vin31",
    name: "Mosquita Muerta Blend De Tintas",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Mosquita muerta blend de tintas.png"
  },
  {
    id: "vin32",
    name: "Nicasia Malbec Red Blend Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Nicasia malbec red blend malbec.png"
  },
  {
    id: "vin33",
    name: "Perro Callejero Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Perro callejero malbec.png"
  },
  {
    id: "vin34",
    name: "Pispi",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Pispi.png"
  },
  {
    id: "vin35",
    name: "Rutini Antologia 38",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini antologia 38.png"
  },
  {
    id: "vin36",
    name: "Rutini Cabernet FRANC Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini cabernet FRANC malbec.png"
  },
  {
    id: "vin37",
    name: "Rutini Cabernet Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini cabernet malbec.png"
  },
  {
    id: "vin38",
    name: "Rutini Sauvignon Blanc",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini sauvignon blanc.png"
  },
  {
    id: "vin39",
    name: "Rutini Rose",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini rose.png"
  },
  {
    id: "vin40",
    name: "Rutini Pinot Noir",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini pinot noir.png"
  },
  {
    id: "vin41",
    name: "Sain Felicien Chardonnay",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Sain felicient chardonnay.png"
  },
  {
    id: "vin42",
    name: "Saint Felicien Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Saint felicient malbec.png"
  },
  {
    id: "vin43",
    name: "Saint Felicien Rose",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Saint felicen rose.png"
  },
  {
    id: "vin44",
    name: "San Pedro Yacochuya Tinto",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/San pedro yacochuya tinto.png"
  },
  {
    id: "vin45",
    name: "San Pedro Yacochuya Torrontes",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/San pedro yacochuya torrontes.png"
  },
  {
    id: "vin46",
    name: "Trumpeter Chardonay",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Trumpeter chardonay.png"
  },
  {
    id: "vin47",
    name: "Trumpeter Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Trumpeter malbec.png"
  },
  {
    id: "vin48",
    name: "Trumpeter Reserva Malbec",
    price: 0,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Trumpeter reserva malbec.png"
  },
  // Whisky
  {
    id: "whis1",
    name: "Chivas Regal 18 años 750ml",
    price: 120000,
    image: "/lovable-uploads/Whisky/Chivas regal 18 años 750.png",
    category: "Whisky"
  },
  {
    id: "whis2",
    name: "Jack Daniels Gentleman 750ml",
    price: 85000,
    image: "/lovable-uploads/Whisky/Jack daniels gentleman.png",
    category: "Whisky"
  },
  {
    id: "whis3",
    name: "Jack Daniels No.7 750ml",
    price: 65000,
    image: "/lovable-uploads/Whisky/Jack daniels no.7 750.png",
    category: "Whisky"
  },
  {
    id: "whis4",
    name: "Jack Daniels Honey 750ml",
    price: 75000,
    image: "/lovable-uploads/Whisky/Jack daniels honey.png",
    category: "Whisky"
  },
  {
    id: "whis5",
    name: "Jameson 700ml",
    price: 55000,
    image: "/lovable-uploads/Whisky/Jameson 700.png",
    category: "Whisky"
  },
  {
    id: "whis6",
    name: "Johnnie Walker 18 años 750ml",
    price: 150000,
    image: "/lovable-uploads/Whisky/JW 18 años.png",
    category: "Whisky"
  },
  {
    id: "whis7",
    name: "Johnnie Walker Black Label 750ml",
    price: 85000,
    image: "/lovable-uploads/Whisky/JW black 750.png",
    category: "Whisky"
  },
  {
    id: "whis8",
    name: "Johnnie Walker Blue Label 750ml",
    price: 250000,
    image: "/lovable-uploads/Whisky/JW blue 750.png",
    category: "Whisky"
  },
  {
    id: "whis9",
    name: "Johnnie Walker Double Black 750ml",
    price: 95000,
    image: "/lovable-uploads/Whisky/JW double black 750.png",
    category: "Whisky"
  },
  {
    id: "whis10",
    name: "Johnnie Walker Gold Reserve 750ml",
    price: 120000,
    image: "/lovable-uploads/Whisky/JW Gold reserve 750.png",
    category: "Whisky"
  },
  {
    id: "whis11",
    name: "Johnnie Walker Green Label 750ml",
    price: 100000,
    image: "/lovable-uploads/Whisky/JW green 750.png",
    category: "Whisky"
  },
  {
    id: "whis12",
    name: "Johnnie Walker Red Label 750ml",
    price: 45000,
    image: "/lovable-uploads/Whisky/JW red 750.png",
    category: "Whisky"
  },
  {
    id: "whis13",
    name: "Macallan 12 Double Cask 750ml",
    price: 180000,
    image: "/lovable-uploads/Whisky/Macallan 12 double black.png",
    category: "Whisky"
  },
  {
    id: "whis14",
    name: "Macallan 12 Triple Cask 750ml",
    price: 190000,
    image: "/lovable-uploads/Whisky/macallan 12 triple cask.png",
    category: "Whisky"
  },
  {
    id: "whis15",
    name: "Old Parr 750ml",
    price: 70000,
    image: "/lovable-uploads/Whisky/Old_parr_750.png",
    category: "Whisky"
  },
  // TEQUILAS
  {
    id: "teq1",
    name: "Jose Cuervo Dorado",
    price: 0,
    category: "Tequilas",
    image: "/lovable-uploads/Tequilas/Jose cuervo dorado.png"
  },
  {
    id: "teq2",
    name: "Jose Cuervo Tradicional",
    price: 0,
    category: "Tequilas",
    image: "/lovable-uploads/Tequilas/Jose cuervo tradicional.png"
  },
  {
    id: "teq3",
    name: "Jose Cuervo Silver",
    price: 0,
    category: "Tequilas",
    image: "/lovable-uploads/Tequilas/Jose_cuervo_silver.png"
  },
  // LATAS/GASEOSAS
  {
    id: "beb1",
    name: "Agua Villavicencio 500ml",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Agua villavicencia 500.png"
  },
  {
    id: "beb2",
    name: "Cepita 1L x6",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Cepita 1L.png"
  },
  {
    id: "beb3",
    name: "Coca 2,25L x8",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Coca 2,25 x8.png"
  },
  {
    id: "beb4",
    name: "Coca Zero 2,25L",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Coca zero 2,25.png"
  },
  {
    id: "beb5",
    name: "Dr Lemon Gin Tonic 473ml x24",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Dr lemon gin tonic 473 X24.png"
  },
  {
    id: "beb6",
    name: "Lata Gordons Gin Tonic",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Lata Gordons gin tonic.png"
  },
  {
    id: "beb7",
    name: "Lata Smirnoff Ice Green",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Lata sminroff ice green.png"
  },
  {
    id: "beb8",
    name: "Lata Smirnoff Ice Red",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Lata sminroff ice red.png"
  },
  {
    id: "beb9",
    name: "Monster Negro 473ml x6",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Monster Negro 473 x6.png"
  },
  {
    id: "beb10",
    name: "Monster Mango 473ml x6",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Monter Mango 473 x6.png"
  },
  {
    id: "beb11",
    name: "Red Bull 250ml x24",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Red bull 250 x24.png"
  },
  {
    id: "beb12",
    name: "Santa Julia Chenin Dulce Lata",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Santa julia chenin dulce lata.png"
  },
  {
    id: "beb13",
    name: "Schweppes 1,5L Tónica x6",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Schweppes 1,5 tonica x6.png"
  },
  {
    id: "beb14",
    name: "Schweppes 1,5L Pomelo x6",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Schweppes 1,5 pomelo x6.png"
  },
  {
    id: "beb15",
    name: "Speed 250ml x24",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Speed 250 x24.png"
  },
  {
    id: "beb16",
    name: "Sprite 1,75L",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Sprite 1,75.png"
  },
  {
    id: "beb17",
    name: "Sprite 2,25L x8",
    price: 0,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Sprite_2,25_x8.png"
  },
];

const StoreContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || "Todos";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { deliveryMethod, setDeliveryMethod } = useCart();

  useEffect(() => {
    const categoryFromUrl = queryParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [location.search]);

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

      if (searchQuery) {
        return matchesSearch;
      } else {
        return matchesCategory;
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="mb-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-golden/20 p-4 flex flex-col md:flex-row md:items-center gap-4">
          <p className="text-golden font-medium flex items-center gap-2">
            <ArrowRight className="h-4 w-4" /> Selecciona método de entrega:
          </p>
          <div className="flex gap-3">
            <Button
              variant={deliveryMethod === 'delivery' ? 'default' : 'outline'}
              onClick={() => setDeliveryMethod('delivery')}
              className={`flex items-center gap-2 ${
                deliveryMethod === 'delivery' 
                  ? 'bg-golden text-black hover:bg-golden/90' 
                  : 'border-golden/50 text-golden/50 hover:bg-golden/10 opacity-50'
              }`}
              size="sm"
            >
              <Truck className="h-4 w-4" /> Delivery
            </Button>
            <Button
              variant={deliveryMethod === 'pickup' ? 'default' : 'outline'}
              onClick={() => setDeliveryMethod('pickup')}
              className={`flex items-center gap-2 ${
                deliveryMethod === 'pickup' 
                  ? 'bg-golden text-black hover:bg-golden/90' 
                  : 'border-golden/50 text-golden/50 hover:bg-golden/10 opacity-50'
              }`}
              size="sm"
            >
              <Store className="h-4 w-4" /> Retiro en local
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-golden/50" />
          </div>
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-black/40 border-golden/20 text-white placeholder:text-gray-400 focus:border-golden/50 focus:ring-golden/20"
          />
        </div>
      </div>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <div className="overflow-x-auto pb-2 mb-4">
          <TabsList className="bg-black/40 border border-golden/20 p-1">
            {categories.map(category => (
              <TabsTrigger 
                key={category}
                value={category}
                className="whitespace-nowrap data-[state=active]:bg-golden data-[state=active]:text-black"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <TabsContent value={activeCategory} className="mt-6 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default StoreContent;
