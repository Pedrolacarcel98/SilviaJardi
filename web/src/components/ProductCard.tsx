import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/mockProducts";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden ambient-glow border border-surface-container-low hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square relative overflow-hidden bg-surface-container-low">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && !product.salePrice && (
          <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-label-sm text-[12px] shadow-sm font-medium">
            Nuevo
          </div>
        )}
        {product.salePrice && (
          <div className="absolute top-4 right-4 bg-error text-on-error px-4 py-1 rounded-full font-label-sm text-[12px] shadow-sm font-bold">
            Rebajado
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow items-center text-center">
        <h3 className="font-headline-md text-[20px] font-medium text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="font-body-md text-[18px] font-semibold mb-4 flex items-center justify-center gap-2">
          {product.salePrice ? (
            <>
              <span className="text-on-surface-variant line-through text-[16px] opacity-70">
                {product.price.toFixed(2)} €
              </span>
              <span className="text-error font-bold">
                {product.salePrice.toFixed(2)} €
              </span>
            </>
          ) : (
            <span className="text-on-surface-variant">
              {product.price.toFixed(2)} €
            </span>
          )}
        </div>
        <span className="mt-auto text-secondary font-label-md text-[14px] font-semibold group-hover:text-secondary-fixed-dim flex items-center gap-1 transition-colors">
          Ver detalles{" "}
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  );
}
