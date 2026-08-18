"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/data/mockProducts";

interface ProductAdminListProps {
  initialProducts: Product[];
  categorySlug: string;
}

export default function ProductAdminList({ initialProducts, categorySlug }: ProductAdminListProps) {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que quieres eliminar este producto? Esta acción no se puede deshacer.")) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProducts(products.filter((p) => p.id !== id));
        router.refresh();
      } else {
        alert("Error al eliminar el producto");
      }
    } catch (e) {
      alert("Error de red al intentar eliminar");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-headline-md text-[24px] text-on-surface">Productos Actuales</h2>
        <Link
          href={`/admin/categoria/${categorySlug}/nuevo`}
          className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-md font-semibold hover:bg-secondary-fixed transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
        >
          <span className="material-symbols-outlined">add</span>
          Añadir Nuevo
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="bg-surface-container-lowest p-12 rounded-xl text-center border border-dashed border-surface-container-high">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">inventory_2</span>
          <p className="font-body-lg text-on-surface-variant">No hay productos en esta categoría.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-surface-container-lowest rounded-xl border border-surface-container-low overflow-hidden shadow-sm flex flex-col group">
              <div className="aspect-video relative overflow-hidden bg-surface-container-low">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                {product.salePrice && (
                  <div className="absolute top-2 left-2 bg-error text-on-error px-2 py-1 rounded-md text-[10px] font-bold">
                    REBAJA
                  </div>
                )}
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="font-label-md font-bold text-[16px] text-primary mb-1 line-clamp-1">{product.name}</h3>
                <div className="flex gap-2 items-center mb-4">
                  {product.salePrice ? (
                    <>
                      <span className="text-on-surface-variant line-through text-[12px]">{product.price.toFixed(2)}€</span>
                      <span className="text-error font-bold text-[14px]">{product.salePrice.toFixed(2)}€</span>
                    </>
                  ) : (
                    <span className="text-on-surface-variant text-[14px]">{product.price.toFixed(2)}€</span>
                  )}
                </div>
                
                <div className="mt-auto pt-4 flex gap-2 border-t border-surface-container-low">
                  <Link
                    href={`/admin/categoria/${categorySlug}/${product.id}/editar`}
                    className="flex-1 bg-surface-container-low text-primary py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-surface-container-high transition-colors text-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    disabled={deletingId === product.id}
                    className="flex-1 bg-error-container text-on-error-container py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-error hover:text-on-error transition-colors text-sm font-medium disabled:opacity-50"
                  >
                    {deletingId === product.id ? (
                      <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                        Borrar
                      </>
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
