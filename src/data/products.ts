import bmwM4BlackRedImg from "../components/products/image/bmw-m4-black-red.jpg";
import bmwM4BrownImg from "../components/products/image/bmw-m4-brown.jpg";
import bmwM4OrangeImg from "../components/products/image/bmw-m4-orange.jpg";
import bmwM5WhiteImg from "../components/products/image/bmw-m5-white.jpg";

import audiRs6Img from "../components/products/image/audi-rs6.jpg";
import audiRs7Img from "../components/products/image/audi-rs7.jpg";
import audiSq7Img from "../components/products/image/audi-sq7.jpg";
import audiTtsImg from "../components/products/image/audi-tts.jpg";

import amgGtImg from "../components/products/image/amg-gt.jpg";
import amgGtsImg from "../components/products/image/amg-gts.jpg";
import amgGtrCognacImg from "../components/products/image/amg-gtr-cognac.jpg";
import amgGtrOrangeImg from "../components/products/image/amg-gtr-orange.jpg";


import { Product } from "@/components/products/ProductCard";


export const products: Product[] = [
  // BMW STYLE
  {
    id: "bmw-m4-black-red",
    name: "M4 Style Negro/Rojo",
    category: "Deportiva Oficina",
    price: 99.99,
    originalPrice: 119.99,
    image: bmwM4BlackRedImg,
    badge: "Top ventas",
  },
  {
    id: "bmw-m4-brown",
    name: "M4 Coupe Style Marrón",
    category: "Oficina Premium",
    price: 99.99,
    image: bmwM4BrownImg,
  },
  {
    id: "bmw-m4-orange",
    name: "M4 G82 Style Naranja",
    category: "Gaming / Oficina",
    price: 99.99,
    image: bmwM4OrangeImg,
    badge: "Nuevo",
  },
  {
    id: "bmw-m5-white",
    name: "M5 F90 Style Blanco",
    category: "Oficina Ejecutiva",
    price: 99.99,
    image: bmwM5WhiteImg,
  },

  // AUDI STYLE
  {
    id: "audi-rs6",
    name: "RS6 Style Negro",
    category: "Oficina Deportiva",
    price: 99.99,
    image: audiRs6Img,
  },
  {
    id: "audi-rs7",
    name: "RS7 Style Negro",
    category: "Gaming / Oficina",
    price: 99.99,
    image: audiRs7Img,
  },
  {
    id: "audi-sq7",
    name: "SQ7 Style Negro",
    category: "Oficina Premium",
    price: 99.99,
    image: audiSq7Img,
  },
  {
    id: "audi-tts",
    name: "TTS Style Gris",
    category: "Oficina",
    price: 99.99,
    image: audiTtsImg,
  },

  // MERCEDES STYLE
  {
    id: "amg-gt",
    name: "AMG GT Style Negro",
    category: "Gaming / Oficina",
    price: 99.99,
    image: amgGtImg,
    badge: "Top ventas",
  },
  {
    id: "amg-gts",
    name: "AMG GT-S Style Blanco",
    category: "Oficina Premium",
    price: 99.99,
    image: amgGtsImg,
  },
  {
    id: "amg-gtr-cognac",
    name: "AMG GTR Style Coñac",
    category: "Oficina Ejecutiva",
    price: 99.99,
    image: amgGtrCognacImg,
    badge: "Premium",
  },
  {
    id: "amg-gtr-orange",
    name: "AMG GTR Style Negro/Naranja",
    category: "Gaming",
    price: 99.99,
    image: amgGtrOrangeImg,
  },
];

export const featuredProducts = products.slice(0, 4);

export const categories = [
  { id: "gaming", name: "Gaming", count: 5 },
  { id: "oficina", name: "Oficina", count: 7 },
  { id: "premium", name: "Premium", count: 4 },
];
