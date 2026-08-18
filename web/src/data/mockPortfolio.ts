import feriaData from "./feria.json";
import semanaSantaData from "./semana-santa.json";

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
}

export type PortfolioType = "feria" | "semana-santa";

export const getPortfolioItems = (type: PortfolioType): PortfolioItem[] => {
  if (type === "feria") {
    return feriaData as PortfolioItem[];
  }
  if (type === "semana-santa") {
    return semanaSantaData as PortfolioItem[];
  }
  return [];
};

export const getPortfolioItemById = (type: PortfolioType, id: string): PortfolioItem | undefined => {
  const items = getPortfolioItems(type);
  return items.find((item) => item.id === id);
};
