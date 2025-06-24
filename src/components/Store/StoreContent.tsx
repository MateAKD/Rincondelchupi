import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { useCart, DeliveryMethod } from "./CartProvider";
import { Button } from "@/components/ui/button";
import { Truck, Store, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Product categories
const categories = [
  "Todos",
  "Combos",
  "Aperitivos",
  "Cervezas Lata",
  "Cervezas Vidrio",
  "Gin",
  "Latas/Gaseosas",
  "Licores",
  "Ron",
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
    name: "Absolut + 5 Speed",
    price: 29650,
    image: "/lovable-uploads/Combos/ABSOLUT_+_5_SPEED.png",
    category: "Combos"
  },
  {
    id: "combo6",
    name: "FERNET + 2 COCAS",
    price: 22400,
    image: "/lovable-uploads/Combos/FERNET_+_2_COCAS.png",
    category: "Combos"
  },
  {
    id: "combo7",
    name: "GORDONS + 2 SCHWEPS",
    price: 19400,
    image: "/lovable-uploads/Combos/GORDONS_+_2_SCHWEPS.png",
    category: "Combos"
  },
  {
    id: "combo8",
    name: "MALIBU + 2 CEPITA",
    price: 20800,
    image: "/lovable-uploads/Combos/MALIBU_+_2_CEPITA.png",
    category: "Combos"
  },
  {
    id: "combo10",
    name: "SMIRNOFF + 2 CEPITAS",
    price: 12600,
    image: "/lovable-uploads/Combos/SMIRNOFF_+_2_CEPITAS.png",
    category: "Combos"
  },
  {
    id: "combo11",
    name: "SMIRNOF + 5 SPEED",
    price: 16850,
    image: "/lovable-uploads/Combos/SMIRNOF_+_5_SPEED.png",  
    category: "Combos"
  },
  // Cerveza Vidrio
  {
    id: "cervid1",
    name: "Brahma 730ml",
    price: 3500,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Brahma 730.png"
  },
  {
    id: "cervid2",
    name: "Blue moon 355ml",
    price: 3000,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Blue moon 355ml.png"
  },
  {
    id: "cervid3",
    name: "Corona porron Pack x6",
    price: 17000,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Corona porron pack x6.png"
  },
  {
    id: "cervid4",
    name: "Corona porron sin alc",
    price: 2700,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Corona porron sin alc.png"
  },
  {
    id: "cervid5",
    name: "Corona 710ml",
    price: 5200,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Corona 710.png"
  },
  {
    id: "cervid6",
    name: "Imperial golden porron 330ml",
    price: 2300,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Imperial golden porron 330ml.png"
  },
  {
    id: "cervid7",
    name: "Patagonia lager del sur",
    price: 5300,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Patagonia lager del sur.png"
  },
  {
    id: "cervid8",
    name: "Patagonia amber 710ml",
    price: 5300,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Patagonia amber 710.png"
  },
  {
    id: "cervid9",
    name: "Patagonia weisse 710ml",
    price: 5300,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Patagonia weisse 710.png"
  },
  {
    id: "cervid10",
    name: "Patagonia 24.7 710ml",
    price: 5300,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Patagonia 24.7 710.png"
  },
  {
    id: "cervid11",
    name: "Patagonia bohemian 710ml",
    price: 5300,
    category: "Cervezas Vidrio",
    image: "/lovable-uploads/Cervezas Vidrio/Patagonia bohemian 710.png"
  },
  // Cervezas Lata
  {
    id: "cerv1",
    name: "Andes Roja 473ml",
    price: 2000,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Andes roja.png"
  },
  {
    id: "cerv2",
    name: "Brahma 473ml",
    price: 1600,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Brahma.png"
  },
  {
    id: "cerv3",
    name: "Budweiser 473ml",
    price: 1600,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Budweiser.png"
  },
  {
    id: "cerv4",
    name: "Grolsch 473ml",
    price: 1890,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Grolsch.png"
  },
  {
    id: "cerv5",
    name: "Heineken 473ml",
    price: 2500,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Heineken.png"
  },
  {
    id: "cerv6",
    name: "Imperial Golden 473ml",
    price: 1900,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Imperial golden.png"
  },
  {
    id: "cerv7",
    name: "Imperial Lager 473ml",
    price: 1900,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Imperial Lager.png"
  },
  {
    id: "cerv8",
    name: "Stella Artois 473ml",
    price: 2300,
    category: "Cervezas Lata",
    image: "/lovable-uploads/Cervezas/Stella.png"
  },
  // Vodka
  {
    id: "vod1",
    name: "Absolut 700ml",
    price: 21400,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut.png"
  },
  {
    id: "vod2",
    name: "Absolut Peach",
    price: 23700,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut peach.png"
  },
  {
    id: "vod3",
    name: "Absolut Elyx 1Lt",
    price: 68000,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut elyx.png"
  },
  {
    id: "vod4",
    name: "Absolut Mango",
    price: 23700,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut mango.png"
  },
  {
    id: "vod5",
    name: "Absolut Pears",
    price: 23700,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut pears.png"
  },
  {
    id: "vod6",
    name: "Absolut Raspberry",
    price: 23700,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/absolut raspberry.png"
  },
  {
    id: "vod7",
    name: "Absolut Vainilla",
    price: 23700,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/abolut vanilia.png"
  },
  {
    id: "vod8",
    name: "Belvedere 1.7Lt",
    price: 160800,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/belvedere.png"
  },
  {
    id: "vod9",
    name: "Ciroc Red",
    price: 60800,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/ciroc red.png"
  },
  {
    id: "vod10",
    name: "Ciroc",
    price: 59300,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/ciroc.png"
  },
  {
    id: "vod11",
    name: "Grey Goose 1Lt",
    price: 89300,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/grey goose.png"
  },
  {
    id: "vod12",
    name: "Grey Goose Pera",
    price: 89300,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/grey goose pera.png"
  },
  {
    id: "vod13",
    name: "Grey Goose Naranja",
    price: 89300,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/grey goose naranja.png"
  },
  {
    id: "vod14",
    name: "Nuvo",
    price: 80800,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/nuvo.png"
  },
  {
    id: "vod15",
    name: "Sernova 700ml",
    price: 8000,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Sernova.png"
  },
  {
    id: "vod16",
    name: "Sernova Caribbean Blend",
    price: 9900,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Sernova Caribbean.png"
  },
  {
    id: "vod17",
    name: "Sernova Wild Berries",
    price: 9900,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Sernova wild berries.png"
  },
  {
    id: "vod18",
    name: "Skyy 700ml",
    price: 10500,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Skyy.png"
  },
  {
    id: "vod19",
    name: "Skyy Blood Orange 750ml",
    price: 11800,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/skyy blood orange.png"
  },
  {
    id: "vod20",
    name: "Skyy Raspberry",
    price: 11800,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Skyy raspberry.png"
  },
  {
    id: "vod21",
    name: "Smirnoff 700ml",
    price: 8600,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff.png"
  },
  {
    id: "vod22",
    name: "Smirnoff Citric Tangerine",
    price: 9400,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff citric.png"
  },
  {
    id: "vod23",
    name: "Smirnoff Raspberry",
    price: 9400,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff raspberry.png"
  },
  {
    id: "vod24",
    name: "Smirnoff Watermelon",
    price: 9400,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff watermelon.png"
  },
  {
    id: "vod25",
    name: "Smirnoff Tamarindo",
    price: 9400,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff_tamarindo.png"
  },
  {
    id: "vod26",
    name: "Smirnoff Tropical",
    price: 9400,
    category: "Vodka",
    image: "/lovable-uploads/Vodka/Smirnoff Tropical.png"
  },
  // Licores
  {
    id: "lic1",
    name: "Amarula 750ml",
    price: 32500,
    category: "Licores",
    image: "/lovable-uploads/Licores/Amarula 750.png"
  },
  {
    id: "lic2",
    name: "Baileys 750ml",
    price: 29300,
    category: "Licores",
    image: "/lovable-uploads/Licores/Baileys 750.png"
  },
  {
    id: "lic3",
    name: "Jager 700ml",
    price: 33100,
    category: "Licores",
    image: "/lovable-uploads/Licores/Jager 700.png"
  },
  // RON
  {
    id: "ron1",
    name: "Havana 3 años 750",
    price: 17500,
    category: "Ron",
    image: "/lovable-uploads/Ron/Havana 3 años 750.png"
  },
  {
    id: "ron2",
    name: "Havana añejo especial",
    price: 17500,
    category: "Ron",
    image: "/lovable-uploads/Ron/Havana añejo especial.png"
  },
  {
    id: "ron3",
    name: "Havana 7 años",
    price: 40500,
    category: "Ron",
    image: "/lovable-uploads/Ron/Havana 7 años.png"
  },
  {
    id: "ron4",
    name: "Malibu",
    price: 16800,
    category: "Ron",
    image: "/lovable-uploads/Ron/Malibu.png"
  },
  // Gin
  {
    id: "gin_beefeater_700",
    name: "Beefeater 700ml",
    price: 25300,
    category: "Gin",
    image: "/lovable-uploads/Gin/Beefeater 1L.png"
  },
  {
    id: "gin_bombay",
    name: "Bombay",
    price: 31000,
    category: "Gin",
    image: "/lovable-uploads/Gin/Bombay.png"
  },
  {
    id: "gin_gordons",
    name: "Gordons",
    price: 12800,
    category: "Gin",
    image: "/lovable-uploads/Gin/Gordons.png"
  },
  {
    id: "gin_gordons_pink",
    name: "Gordons pink",
    price: 15100,
    category: "Gin",
    image: "/lovable-uploads/Gin/Gordons pink.png"
  },
  {
    id: "gin_spirito_blu",
    name: "Spirito blu",
    price: 18365,
    category: "Gin",
    image: "/lovable-uploads/Gin/Spirito Blu.png"
  },
  {
    id: "gin_tanqueray_700",
    name: "Tanqueray 700ml",
    price: 25200,
    category: "Gin",
    image: "/lovable-uploads/Gin/Tanqueray 700.png"
  },
  {
    id: "gin_tanqueray_sevilla_700",
    name: "Tanqueray sevilla 700ml",
    price: 30700,
    category: "Gin",
    image: "/lovable-uploads/Gin/Tanqueray_sevilla_700.png"
  },
  // Aperitivos
  {
    id: "ape1",
    name: "Aperol 750ml",
    price: 10400,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Aperol 750.png"
  },
  {
    id: "ape2",
    name: "Buhero 700ml",
    price: 8500,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Buhero 700.png"
  },
  {
    id: "ape3",
    name: "Cachaca",
    price: 5500,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Cachaca.png"
  },
  {
    id: "ape4",
    name: "Campari 750ml",
    price: 11200,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Campari 750.png"
  },
  {
    id: "ape5",
    name: "Cynar",
    price: 10300,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Cynar.png"
  },
  {
    id: "ape6",
    name: "Fernet 1Lt",
    price: 18500,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/fernet 1L.png"
  },
  {
    id: "ape7",
    name: "Fernet 750ml",
    price: 14000,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Fernet 750.png"
  },
  {
    id: "ape8",
    name: "Gancia 950ml",
    price: 7800,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Gancia 950.png"
  },
  {
    id: "ape12",
    name: "Gancia hibiscus 750ml",
    price: 6200,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Gancia hibiscus.png"
  },
  {
    id: "ape9",
    name: "Martini rosso 1Lt",
    price: 8700,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Martini rosso.png"
  },
  {
    id: "ape10",
    name: "Martini blanco 1Lt",
    price: 8000,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/martini blanco.png"
  },
  {
    id: "ape11",
    name: "Ramazzotti rosado 700ml",
    price: 9000,
    category: "Aperitivos",
    image: "/lovable-uploads/Aperitivos/Ramazzotti Rosado.png"
  },
  // Vinos
  {
    id: "vin1",
    name: "Alamos malbec",
    price: 5810,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Alamos malbec.png"
  },
  {
    id: "vin2",
    name: "Angelica zapata cabernet s",
    price: 22800,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Angelica zapata cabernet s.png"
  },
  {
    id: "vin3",
    name: "Angelica zapata malbec",
    price: 26600,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Angelica zapata malbec.png"
  },
  {
    id: "vin_cordero_suav_blanc",
    name: "Cordero con piel de lobo suav blanc",
    price: 3925,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Cordero con piel de lobo suav blanc.png"
  },
  {
    id: "vin4",
    name: "Cordero con piel de lobo malbec",
    price: 4650,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Cordero con piel de lobo malbec.png"
  },
  {
    id: "vin6",
    name: "DV Catena cabernet malbec",
    price: 13800,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena cabernet malbec.png"
  },
  {
    id: "vin9",
    name: "DV Catena malbec malbec",
    price: 18970,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena malbec malbec.png"
  },
  {
    id: "vin8",
    name: "DV Catena Malbec argentino",
    price: 66900,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/DV Catena Malbec argentino.png"
  },
  {
    id: "vin10",
    name: "El enemigo bonarda",
    price: 21200,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El enemigo bonarda.png"
  },
  {
    id: "vin11",
    name: "El enemigo chardonnay",
    price: 21200,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El enemigo chardonnay.png"
  },
  {
    id: "vin12",
    name: "El enemigo malbec",
    price: 21200,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El enemigo malbec.png"
  },
  {
    id: "vin13",
    name: "El gran enemigo agrelo",
    price: 45300,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El gran enemigo agrelo.png"
  },
  {
    id: "vin14",
    name: "El gran enemigo chacayes",
    price: 45300,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El gran enemigo chacayes.png"
  },
  {
    id: "vin15",
    name: "El gran enemigo gualtallary",
    price: 41875,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/El gran enemigo gualtallary.png"
  },
  {
    id: "vin16",
    name: "Escorihuela pequeñas producciones mb",
    price: 26400,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Escorihuela pequeñas producciones mb.png"
  },
  {
    id: "vin17",
    name: "Escorihuela pequeñas producciones pinot noir",
    price: 20625,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Escorihuela pequeñas producciones pinot noir.png"
  },
  {
    id: "vin18",
    name: "Judas malbec",
    price: 58700,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Judas malbec.png"
  },
  {
    id: "vin25",
    name: "Luca malbec",
    price: 28500,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luca malbec.png"
  },
  {
    id: "vin24",
    name: "Luca chardonnay",
    price: 28600,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Luca chardonnay.png"
  },
  {
    id: "vin29",
    name: "Nicasia malbec red blend malbec",
    price: 7700,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Nicasia malbec red blend malbec.png"
  },
  {
    id: "vin31",
    name: "Perro callejero malbec",
    price: 7100,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Perro callejero malbec.png"
  },
  {
    id: "vin32",
    name: "Pispi",
    price: 9100,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Pispi.png"
  },
  {
    id: "vin33",
    name: "Rutini antologia 38",
    price: 54400,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini antologia 38.png"
  },
  {
    id: "vin35",
    name: "Rutini cabernet malbec",
    price: 15800,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini cabernet malbec.png"
  },
  {
    id: "vin38",
    name: "Rutini sauvignon blanc",
    price: 17950,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini sauvignon blanc.png"
  },
  {
    id: "vin37",
    name: "Rutini rose",
    price: 47900,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini rose.png"
  },
  {
    id: "vin36",
    name: "Rutini pinot noir",
    price: 31750,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Rutini pinot noir.png"
  },
  {
    id: "vin39",
    name: "Sain felicient chardonnay",
    price: 8970,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Sain felicient chardonnay.png"
  },
  {
    id: "vin41",
    name: "Saint felicient malbec",
    price: 8970,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Saint felicient malbec.png"
  },
  {
    id: "vin40",
    name: "Saint felicen rose",
    price: 42600,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Saint felicen rose.png"
  },
  {
    id: "vin42",
    name: "San pedro yacochuya tinto",
    price: 22650,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/San pedro yacochuya tinto.png"
  },
  {
    id: "vin46",
    name: "Trumpeter reserva malbec",
    price: 12205,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Trumpeter reserva malbec.png"
  },
  {
    id: "vin45",
    name: "Trumpeter malbec",
    price: 8800,
    category: "Vinos",
    image: "/lovable-uploads/Vinos/Trumpeter malbec.png"
  },
  // Whiskey
  {
    id: "whis1",
    name: "Chivas Regal 18 años 750ml",
    price: 160300,
    image: "/lovable-uploads/Whisky/Chivas regal 18 años 750.png",
    category: "Whisky"
  },
  {
    id: "whis3",
    name: "Jack Daniels No.7 750ml",
    price: 46600,
    image: "/lovable-uploads/Whisky/Jack daniels no.7 750.png",
    category: "Whisky"
  },
  {
    id: "whis4",
    name: "Jack Daniels Honey 750ml",
    price: 46911,
    image: "/lovable-uploads/Whisky/Jack daniels honey.png",
    category: "Whisky"
  },
  {
    id: "whis5",
    name: "Jameson 700ml",
    price: 30150,
    image: "/lovable-uploads/Whisky/Jameson 700.png",
    category: "Whisky"
  },
  {
    id: "whis7",
    name: "Johnnie Walker Black Label 750ml",
    price: 46000,
    image: "/lovable-uploads/Whisky/JW black 750.png",
    category: "Whisky"
  },
  {
    id: "whis8",
    name: "Johnnie Walker Blue Label 750ml",
    price: 390000,
    image: "/lovable-uploads/Whisky/JW blue 750.png",
    category: "Whisky"
  },
  {
    id: "whis9",
    name: "Johnnie Walker Double Black 750ml",
    price: 52800,
    image: "/lovable-uploads/Whisky/JW double black 750.png",
    category: "Whisky"
  },
  {
    id: "whis10",
    name: "Johnnie Walker Gold Reserve 750ml",
    price: 94100,
    image: "/lovable-uploads/Whisky/JW Gold reserve 750.png",
    category: "Whisky"
  },
  {
    id: "whis12",
    name: "Johnnie Walker Red Label 750ml",
    price: 28100,
    image: "/lovable-uploads/Whisky/JW red 750.png",
    category: "Whisky"
  },
  {
    id: "whis14",
    name: "Macallan 12 Triple Cask 750ml",
    price: 234500,
    image: "/lovable-uploads/Whisky/macallan 12 triple cask.png",
    category: "Whisky"
  },
  {
    id: "whis15",
    name: "Old Parr 750ml",
    price: 49900,
    image: "/lovable-uploads/Whisky/Old_parr_750.png",
    category: "Whisky"
  },
  // Nuevos productos de Whisky
  {
    id: "whis16",
    name: "The Chita",
    price: 205900,
    category: "Whisky",
    image: "/lovable-uploads/Whisky/The chita.png"
  },
  {
    id: "whis17",
    name: "Hibiki",
    price: 323600,
    category: "Whisky",
    image: "/lovable-uploads/Whisky/Hibiki.png"
  },
  // TEQUILAS
  {
    id: "teq1",
    name: "Jose Cuervo Dorado",
    price: 43100,
    category: "Tequilas",
    image: "/lovable-uploads/Tequilas/Jose cuervo dorado.png"
  },
  {
    id: "teq2",
    name: "Jose Cuervo Tradicional",
    price: 56900,
    category: "Tequilas",
    image: "/lovable-uploads/Tequilas/Jose cuervo tradicional.png"
  },
  {
    id: "teq3",
    name: "Jose Cuervo Silver",
    price: 43100,
    category: "Tequilas",
    image: "/lovable-uploads/Tequilas/Jose_cuervo_silver.png"
  },
  // LATAS/GASEOSAS
  {
    id: "beb1",
    name: "Agua Villavicencio 500ml",
    price: 1000,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Agua villavicencia 500.png"
  },
  {
    id: "beb2",
    name: "Cepita 1L",
    price: 2000,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Cepita 1L.png"
  },
  {
    id: "beb3",
    name: "Coca 2,25L",
    price: 4200,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Coca 2,25 x8.png"
  },
  {
    id: "beb4",
    name: "Coca Zero 2,25L",
    price: 4200,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Coca zero 2,25.png"
  },
  {
    id: "beb5",
    name: "Dr Lemon Gin Tonic 473ml",
    price: 2200,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Dr lemon gin tonic 473 X24.png"
  },
  {
    id: "beb6",
    name: "Lata Gordons Gin Tonic",
    price: 3500,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Lata Gordons gin tonic.png"
  },
  {
    id: "beb7",
    name: "Lata Smirnoff Ice Green",
    price: 3100,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Lata sminroff ice green.png"
  },
  {
    id: "beb8",
    name: "Lata Smirnoff Ice Red",
    price: 3100,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Lata sminroff ice red.png"
  },
  {
    id: "beb9",
    name: "Monster Negro 473ml",
    price: 2600,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Monster Negro 473 x6.png"
  },
  {
    id: "beb10",
    name: "Monster Mango 473ml",
    price: 2600,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Monter Mango 473 x6.png"
  },
  {
    id: "beb11",
    name: "Red Bull 250ml",
    price: 2000,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Red bull 250 x24.png"
  },
  {
    id: "beb12",
    name: "Santa Julia Chenin Dulce Lata",
    price: 2700,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Santa julia chenin dulce lata.png"
  },
  {
    id: "beb13",
    name: "Schweppes 1,5L Tónica",
    price: 3300,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Schweppes 1,5 tonica x6.png"
  },
  {
    id: "beb14",
    name: "Schweppes 1,5L Pomelo",
    price: 3300,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Schweppes 1,5 pomelo x6.png"
  },
  {
    id: "beb15",
    name: "Speed 250ml",
    price: 1650,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Speed 250 x24.png"
  },
  {
    id: "beb16",
    name: "Sprite 2,25L",
    price: 4200,
    category: "Latas/Gaseosas",
    image: "/lovable-uploads/Latas y Gaseosas/Sprite 2,25.png"
  },
];

const StoreContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || "Todos";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { deliveryMethod, setDeliveryMethod } = useCart();
  const [sortOrder, setSortOrder] = useState<string>("az");

  useEffect(() => {
    const categoryFromUrl = queryParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [location.search]);

  const sortedProducts = [...products]
    .filter(product => {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesSearch = searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.price - b.price;
      } else if (sortOrder === "price-desc") {
        return b.price - a.price;
      } else if (sortOrder === "az") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "za") {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });

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
                  : 'border-golden/50 text-black hover:bg-golden/10 opacity-50'
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
                  : 'border-golden/50 text-black hover:bg-golden/10 opacity-50'
              }`}
              size="sm"
            >
              <Store className="h-4 w-4" /> Retiro en local
            </Button>

          </div>
          <p className="text-xs text-golden/80 mt-2">*Entrega máximo 48hs</p>
          {deliveryMethod === 'delivery' && (
            <p className="text-xs text-golden/80 mt-2">*Compra mínima para delivery $40.000</p>
          )}
        </div>
      </div>

      <div className="mb-8 flex flex-col md:flex-row items-center gap-4">
        <Tabs defaultValue={initialCategory} className="w-full">
          <div className="overflow-x-auto pb-2 mb-4">
            <TabsList className="bg-black/20 border border-golden/20 justify-start">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="whitespace-nowrap data-[state=active]:bg-golden data-[state=active]:text-black text-golden/80 hover:text-golden transition-colors duration-200 px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/20 border-golden/30 text-white placeholder-gray-400 focus:border-golden"
          />
          <Search className="h-5 w-5 text-golden" />
        </div>

        <Select onValueChange={setSortOrder} defaultValue="az">
          <SelectTrigger className="w-full md:w-[180px] bg-black/20 border-golden/30 text-white">
            <SelectValue placeholder="Ordenar por..." />
          </SelectTrigger>
          <SelectContent className="bg-black/80 border-golden/30 text-white">
            <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="az">Nombre: A-Z</SelectItem>
            <SelectItem value="za">Nombre: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No se encontraron productos para esta categoría o búsqueda.</p>
        )}
      </div>
    </>
  );
};

export default StoreContent;
