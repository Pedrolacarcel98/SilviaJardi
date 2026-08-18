import { categoryNames, CategorySlug } from "@/data/mockProducts";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(categoryNames).map((slug) => ({
    slug: slug,
  }));
}

export default async function AdminAddProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  if (!categoryNames[slug as CategorySlug]) {
    notFound();
  }

  const categoryName = categoryNames[slug as CategorySlug];

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 mt-4">
      <div className="mb-8">
        <Link 
          href={`/admin/categoria/${slug}`}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Volver a la lista
        </Link>
      </div>
      
      <div className="text-center mb-10">
        <h1 className="font-great-vibes text-[48px] md:text-[56px] font-normal text-primary">
          Añadir a {categoryName}
        </h1>
        <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl mx-auto">
          Sube un nuevo producto para la sección de {categoryName}. Asegúrate de completar los detalles y añadir fotos de buena calidad.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ProductForm categorySlug={slug} categoryName={categoryName} />
      </div>
    </main>
  );
}
