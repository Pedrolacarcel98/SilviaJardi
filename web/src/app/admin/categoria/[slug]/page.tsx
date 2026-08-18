import { categoryNames, CategorySlug, getProductsByCategory } from "@/data/mockProducts";
import ProductAdminList from "@/components/ProductAdminList";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(categoryNames).map((slug) => ({
    slug: slug,
  }));
}

export default async function AdminCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Validate category
  if (!categoryNames[slug as CategorySlug]) {
    notFound();
  }

  const categoryName = categoryNames[slug as CategorySlug];
  const categoryProducts = getProductsByCategory(slug as CategorySlug);

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 mt-4">
      <div className="mb-8">
        <Link 
          href="/admin" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Volver a categorías
        </Link>
      </div>
      
      <div className="text-left mb-10 border-b border-surface-container-high pb-6">
        <h1 className="font-great-vibes text-[48px] md:text-[56px] font-normal text-primary">
          Gestión: {categoryName}
        </h1>
        <p className="font-body-md text-on-surface-variant mt-2">
          Desde aquí puedes añadir, editar o eliminar los productos de esta sección.
        </p>
      </div>

      <ProductAdminList initialProducts={categoryProducts} categorySlug={slug} />
    </main>
  );
}
