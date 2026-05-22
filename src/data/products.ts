export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  badge: 'Best' | 'Tendance' | 'Top' | 'New';
  stars: number;
  reviews: number;
  image: string;
  category: string;
  inPromo: boolean;
  discount?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "ambrosia",
    name: "Ambrosia",
    description: "Parfum d'exception aux notes de bois d'oud, ambre et musque blanc. Une fragrance envoûtante venue d'Orient.",
    price: 3500,
    oldPrice: 4000,
    badge: "Best",
    stars: 5,
    reviews: 128,
    image: "/images/Ambrosia.jpg",
    category: "Parfums",
    inPromo: true,
    discount: 29,
  },
  {
    id: 2,
    slug: "floreal",
    name: "Floréal",
    description: "Huile parfumée à la rose de Damas, patchouli et vanille de Madagascar. Élégance et féminité absolues.",
    price: 3500,
    oldPrice: 4500,
    badge: "Tendance",
    stars: 5,
    reviews: 95,
    image: "/images/Floréal.jpg",
    category: "Huiles",
    inPromo: true,
    discount: 25,
  },
  {
    id: 3,
    slug: "kayali-01",
    name: "Kayali 01",
    description: "Essence rare de cèdre, santal et vétiver. Pour les hommes au goût raffiné.",
    price: 3500,
    oldPrice: 4000,
    badge: "Top",
    stars: 4,
    reviews: 74,
    image: "/images/Kayali 01.jpg",
    category: "Parfums",
    inPromo: true,
    discount: 21,
  },
  {
    id: 4,
    slug: "Ambrelle",
    name: "Ambrelle",
    description: "Huile de jasmin pur de Grasse, bergamote et musc nacré. Légèreté et sensualité.",
    price: 1000,
    oldPrice: 2000,
    badge: "Best",
    stars: 5,
    reviews: 112,
    image: "/images/Huile.jpg",
    category: "Huiles",
    inPromo: true,
    discount: 25,
  },
  {
    id: 5,
    slug: "velvet-kiss",
    name: "Velvet Kiss",
    description: "Parfum profond et mystérieux à l'ambre noir, oud fumé et iris. Un voyage sensoriel envoûtant.",
    price: 2000,
    oldPrice: 3000,
    badge: "Top",
    stars: 5,
    reviews: 88,
    image: "/images/Velvet Kiss.jpg",
    category: "Parfums",
    inPromo: true,
    discount: 25,
  },
  {
    id: 6,
    slug: "one-million",
    name: "One Million",
    description: "Fragrance orientale aux notes de cardamome, rose turque et bois précieux. Luxe absolu.",
    price: 3500,
    oldPrice: 3800,
    badge: "Tendance",
    stars: 4,
    reviews: 67,
    image: "/images/One million.jpg",
    category: "Parfums",
    inPromo: true,
    discount: 26,
  },
  {
  id: 7,
  slug: "Gamme 1",
  name: "Gamme 1",
  description: "Huile précieuse au santal blanc de Mysore, vanille et musc chaud. Enveloppant et doux.",
  price: 14500,
  oldPrice: 16000,
  badge: "Best",
  stars: 5,
  reviews: 103,
  image: "/images/Photos.jpg",
  category: "Gammes",
  inPromo: true,
  discount: 26,
},
  {
  id: 8,
  slug: "Gamme 2",
  name: "Gamme 2",
  description: "Huile précieuse au santal blanc de Mysore, vanille et musc chaud. Enveloppant et doux.",
  price: 9000,
  oldPrice: 12000,
  badge: "Best",
  stars: 5,
  reviews: 103,
  image: "/images/Lot.jpg",
  category: "Gammes",
  inPromo: true,
  discount: 26,
},
  {
  id: 9,
  slug: "Gamme 3",
  name: "Gamme 3",
  description: "Huile précieuse au santal blanc de Mysore, vanille et musc chaud. Enveloppant et doux.",
  price: 7500,
  oldPrice: 9000,
  badge: "Best",
  stars: 5,
  reviews: 103,
  image: "/images/Lot 2.jpg",
  category: "Gammes",
  inPromo: true,
  discount: 26,
},
  {
  id: 10,
  slug: "Gamme 4",
  name: "Gamme 4",
  description: "Huile précieuse au santal blanc de Mysore, vanille et musc chaud. Enveloppant et doux.",
  price: 20000,
  oldPrice: 27000,
  badge: "Best",
  stars: 5,
  reviews: 103,
  image: "/images/Lot TPH.jpg",
  category: "Gammes",
  inPromo: true,
  discount: 26,
},
];

export const BEST_SELLERS = PRODUCTS.filter(
  p => p.badge === "Best" || p.id <= 3
).slice(0, 3);

export const PROMO_PRODUCTS = PRODUCTS.filter(p => p.inPromo);

export const BOUTIQUE_PRODUCTS = PRODUCTS;