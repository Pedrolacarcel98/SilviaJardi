import {
  getProductsByCategory,
  categoryNames,
  CategorySlug,
} from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(categoryNames).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  if (!Object.keys(categoryNames).includes(slug)) {
    notFound();
  }

  const categorySlug = slug as CategorySlug;
  const products = getProductsByCategory(categorySlug);
  const title = categoryNames[categorySlug];

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12 mt-8">
      <div className="text-center mb-16">
        <h1 className="font-great-vibes text-[56px] md:text-[64px] font-normal text-primary">
          {title}
        </h1>
        <div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50"></div>
        <p className="font-body-lg text-[18px] text-on-surface-variant mt-6 max-w-2xl mx-auto">
          Colección de {title.toLowerCase()} confeccionada artesanalmente con
          materiales seleccionados.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface-container-lowest rounded-xl border border-surface-container-low">
          <p className="font-body-lg text-on-surface-variant">
            Próximamente añadiremos nuevos productos a esta categoría.
          </p>
        </div>
      )}
    </main>
  );
}
