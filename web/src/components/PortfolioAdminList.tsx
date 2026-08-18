"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PortfolioItem, PortfolioType } from "@/data/mockPortfolio";

interface PortfolioAdminListProps {
  initialItems: PortfolioItem[];
  type: PortfolioType;
}

export default function PortfolioAdminList({ initialItems, type }: PortfolioAdminListProps) {
  const router = useRouter();
  const [items, setItems] = useState<PortfolioItem[]>(initialItems);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que quieres eliminar esta foto? Esta acción no se puede deshacer.")) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/portfolio?id=${id}&type=${type}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setItems(items.filter((p) => p.id !== id));
        router.refresh();
      } else {
        alert("Error al eliminar");
      }
    } catch (e) {
      alert("Error de red");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-headline-md text-[24px] text-on-surface">Fotos Actuales</h2>
        <Link
          href={`/admin/portfolio/${type}/nuevo`}
          className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-md font-semibold hover:bg-secondary-fixed transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
        >
          <span className="material-symbols-outlined">add</span>
          Añadir Nueva
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="bg-surface-container-lowest p-12 rounded-xl text-center border border-dashed border-surface-container-high">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">photo_library</span>
          <p className="font-body-lg text-on-surface-variant">No hay fotos en esta sección.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-surface-container-lowest rounded-xl border border-surface-container-low overflow-hidden shadow-sm flex flex-col group">
              <div className="aspect-[3/4] relative overflow-hidden bg-surface-container-low">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="font-label-md font-bold text-[16px] text-primary mb-2 line-clamp-2">{item.title}</h3>
                
                <div className="mt-auto pt-4 flex gap-2 border-t border-surface-container-low">
                  <Link
                    href={`/admin/portfolio/${type}/${item.id}/editar`}
                    className="flex-1 bg-surface-container-low text-primary py-2 rounded-lg flex justify-center items-center hover:bg-surface-container-high transition-colors text-sm"
                    title="Editar"
                  >
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deletingId === item.id}
                    className="flex-1 bg-error-container text-on-error-container py-2 rounded-lg flex justify-center items-center hover:bg-error hover:text-on-error transition-colors text-sm disabled:opacity-50"
                    title="Borrar"
                  >
                    {deletingId === item.id ? (
                      <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                    ) : (
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
