export type CategorySlug =
  | "canastilla"
  | "bebes"
  | "ninos"
  | "munecos"
  | "complementos";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  materials: string[];
  careGuide?: string;
  category: CategorySlug;
  images: string[];
  sizes: string[];
  isNew?: boolean;
}

export const mockProducts: Product[] = [
  // CANASTILLA
  {
    id: "c1",
    name: "Set Canastilla Primera Puesta",
    price: 45.0,
    description:
      "El conjunto perfecto para los primeros días del bebé en el hospital o en casa. Incluye jubón, polaina, gorrito y manoplas tejidas a mano con mucha delicadeza.",
    materials: ["100% Algodón Orgánico", "Lana merino suave (opcional)"],
    careGuide: "Lavar a mano en agua fría. No usar secadora.",
    category: "canastilla",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2g0nzKs8L_dQ6axt1I2jnqXYCWzB2tortIHUctNKuNjIrfiwSSdttOgfqzMwcsxOVXRys6OF0nphHubhtrTuL19Y4SuQRJceVw2PLtjHYfaPgOn1zrajHyI01v17Qh5jot360FwWwOTrR35Hj0jqlMOQmgy7WOqjrQCpGPzh0Nk2nKL-LNECJrhGvTVCkvt3Mf493vQicUIPB2DdFFyPuOelAjnOYzd9Sz7R7o5uB_uQbW_IPXjDa",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsFY1WvM_ixSLkBrAI6_HVW6sBVSrin3NSWoFMEWWg1s3sdNIeG_Y8diIs41xzWP7mrKZrRvXjmeUXVnhZRadZTh4el3NPwtsGo3YeGJviW58R5vI0RAUaWo6xyf29ZaMD1dua876yXbyJCBph39RG46c3qKSB799LOXhkjc3P_I9Xg-DBzLmME7sdX3QRSJ66ctIJikLfV9_xGQ677rYwt3Zz9-PNhAI7E7b4TMyg5PT1gJf6GMOW",
    ],
    sizes: ["Talla Única (0 meses)"],
    isNew: true,
  },
  {
    id: "c2",
    name: "Manta Arrullo de Punto",
    price: 32.5,
    description:
      "Manta de punto muy suave, ideal para arropar al recién nacido. Perfecta para el capazo o la cuna.",
    materials: ["100% Algodón Peinado"],
    careGuide: "Lavado delicado a 30º. Planchar a baja temperatura.",
    category: "canastilla",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApehwY3lI1HKZ63udABIdglSo4Rn4kCd46Jw3VwvHl6pESYZQ1psPN6W5yValf7aFbXtRlODOjHY3LAf-9L1ZVLKwtW7jtAReayYSZYbkekzQ34saQoEJqyAaFytyfIe9Y6ZJ3D41guPP7CMomHnwXtPGMXt4Qgh2M22T3trfoJW7SLoNumchIcmpI8zMk5fpO7Qo7idKzf5dqEWvdby8Oizsx6M2jcdmGBryIqDPBJS1mAgAvl8zM",
    ],
    sizes: ["80x80 cm"],
  },

  // BEBES (Meses)
  {
    id: "b1",
    name: "Pelele de Punto Celeste",
    price: 38.0,
    description:
      "Pelele de punto clásico con detalles en el cuello. Abertura en la espalda y entrepierna para facilitar el cambio de pañal.",
    materials: ["100% Dralón (Hipoalergénico)"],
    careGuide: "Lavado a máquina a 30º. Secar en plano.",
    category: "bebes",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsFY1WvM_ixSLkBrAI6_HVW6sBVSrin3NSWoFMEWWg1s3sdNIeG_Y8diIs41xzWP7mrKZrRvXjmeUXVnhZRadZTh4el3NPwtsGo3YeGJviW58R5vI0RAUaWo6xyf29ZaMD1dua876yXbyJCBph39RG46c3qKSB799LOXhkjc3P_I9Xg-DBzLmME7sdX3QRSJ66ctIJikLfV9_xGQ677rYwt3Zz9-PNhAI7E7b4TMyg5PT1gJf6GMOW",
    ],
    sizes: ["0-3 meses", "3-6 meses", "6-9 meses", "9-12 meses"],
    isNew: false,
  },
  {
    id: "b2",
    name: "Conjunto Ranita y Blusa Blanca",
    price: 42.0,
    description:
      "Elegante conjunto de dos piezas. Ranita estampada con forro interior y blusa blanca de batista con cuello volante.",
    materials: ["100% Algodón Batista"],
    category: "bebes",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2g0nzKs8L_dQ6axt1I2jnqXYCWzB2tortIHUctNKuNjIrfiwSSdttOgfqzMwcsxOVXRys6OF0nphHubhtrTuL19Y4SuQRJceVw2PLtjHYfaPgOn1zrajHyI01v17Qh5jot360FwWwOTrR35Hj0jqlMOQmgy7WOqjrQCpGPzh0Nk2nKL-LNECJrhGvTVCkvt3Mf493vQicUIPB2DdFFyPuOelAjnOYzd9Sz7R7o5uB_uQbW_IPXjDa",
    ],
    sizes: ["3-6 meses", "6-12 meses", "12-18 meses", "18-24 meses"],
  },

  // NIÑOS (Años)
  {
    id: "n1",
    name: "Jersey Tricot Clásico",
    price: 35.0,
    description:
      "Jersey de punto con diseño de ochos. Muy cómodo y abrigado para las tardes de invierno.",
    materials: ["50% Algodón", "50% Acrílico"],
    category: "ninos",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApehwY3lI1HKZ63udABIdglSo4Rn4kCd46Jw3VwvHl6pESYZQ1psPN6W5yValf7aFbXtRlODOjHY3LAf-9L1ZVLKwtW7jtAReayYSZYbkekzQ34saQoEJqyAaFytyfIe9Y6ZJ3D41guPP7CMomHnwXtPGMXt4Qgh2M22T3trfoJW7SLoNumchIcmpI8zMk5fpO7Qo7idKzf5dqEWvdby8Oizsx6M2jcdmGBryIqDPBJS1mAgAvl8zM",
    ],
    sizes: ["2 años", "3 años", "4 años", "5 años", "6 años"],
  },

  // MUÑECOS
  {
    id: "m1",
    name: "Muñeca de Trapo 'Silvia'",
    price: 25.0,
    description:
      "Muñeca hecha a mano con mucho cariño. Viste un vestidito turquesa intercambiable. Suave y segura para todas las edades.",
    materials: ["Tela de lino", "Relleno hipoalergénico"],
    category: "munecos",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMukH77ApYRP9qLiGrNcDdsgSnKtjmDvK7_PMUEtTO0JksVAk5HXa-6Z1iGUlcEiZWiL3h6sLCDd0tQdNGFQ3h6uy8taxhkOVjC-SUBkSJVFV1BYwBOvv2Nc3IRpZB1XutKW4oE-N3jVBUJO8MMWsBsK9WcRnJvYzF1cLv0FdUDmphVehjdobQwzXKe4dy1lg5kItUAKMzb3ajG6GA5wYEMs_9NmykSsbUvEbKECX03GJfdYNtcOSV",
    ],
    sizes: ["35 cm de alto"],
    isNew: true,
  },

  // COMPLEMENTOS
  {
    id: "cp1",
    name: "Pack de Muselinas y Mordedor",
    price: 22.0,
    description:
      "Set de regalo esencial. Incluye una muselina de bambú ultra suave y un mordedor de madera natural.",
    materials: ["100% Muselina de Bambú", "Madera de haya natural"],
    category: "complementos",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8oNxYMWIT3O0pfi81FTt7fLH9kMN93DRpMeEZArChkpUoaLikp2MqFb4phy2nAWerj197h6dWd0A-tC9oXJPxxvXT8NlXCg-T-fhCp8a8Xav_FNNeMmTwMdxIQFRawjSZL_5CDzvDd8436UBhSJUN8uENmMzrZh7hhUYh-MyodFp9oAvZlyYVP8uuIwP-J43wrFY1m-v6y3AhGz5-GYKQSilDHffZwlgDrlXgAkO7XYyj4-GpXYUL",
    ],
    sizes: ["Talla Única"],
  },
  {
    id: "cp2",
    name: "Portachupetes y Manta Personalizada",
    price: 28.0,
    description:
      "Conjunto personalizado compuesto por una mantita suave y un portachupetes a juego. Bordamos el nombre del bebé a mano para hacerlo único. Ideal para regalo.",
    materials: ["100% Algodón", "Forro polar suave", "Pinza metálica sin níquel"],
    category: "complementos",
    images: [
      "/bolsitos.png",
    ],
    sizes: ["Talla Única"],
    isNew: true,
  },
];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return mockProducts.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

export const categoryNames: Record<CategorySlug, string> = {
  canastilla: "Canastilla",
  bebes: "Bebés",
  ninos: "Niños",
  munecos: "Muñecos",
  complementos: "Complementos",
};
