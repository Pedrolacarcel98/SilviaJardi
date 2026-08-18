"use client";

import { useState } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/data/mockPortfolio";

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  theme: "feria" | "semana-santa";
}

export default function PortfolioGallery({ items, theme }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const hoverClass = theme === "feria" ? "group-hover:border-red-700" : "group-hover:border-purple-900";
  const titleColorClass = theme === "feria" ? "text-red-800" : "text-purple-300";
  const bgClass = theme === "feria" ? "bg-amber-50" : "bg-neutral-900";

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div 
            key={item.id}
            className="group cursor-pointer flex flex-col items-center"
            onClick={() => setSelectedItem(item)}
          >
            <div className={`w-full aspect-[3/4] relative rounded-xl overflow-hidden border-2 border-transparent transition-all duration-300 shadow-md group-hover:shadow-xl ${hoverClass} group-hover:-translate-y-1`}>
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className={`mt-4 font-label-md text-[16px] text-center uppercase tracking-widest ${titleColorClass} font-semibold opacity-80 group-hover:opacity-100 transition-opacity`}>
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
          
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                fill 
                className="object-contain" 
              />
            </div>
            <h2 className="font-headline-md text-white text-[24px] tracking-wide mt-2 text-center drop-shadow-md">
              {selectedItem.title}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
