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
  salePrice?: number;
  description: string;
  materials: string[];
  careGuide?: string;
  category: CategorySlug;
  images: string[];
  sizes: string[];
  isNew?: boolean;
}

import productsData from './products.json';

export const mockProducts: Product[] = productsData as Product[];

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
