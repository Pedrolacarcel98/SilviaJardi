import { mockProducts, categoryNames, CategorySlug, Product } from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams.q === "string" ? resolvedParams.q : "";
  const query = q.toLowerCase().trim();

  // Filter products
  const matchingProducts = query
    ? mockProducts.filter((product) => {
        const inName = product.name.toLowerCase().includes(query);
        const inDesc = product.description.toLowerCase().includes(query);
        const inMaterials = product.materials.some((m) => m.toLowerCase().includes(query));
        return inName || inDesc || inMaterials;
      })
    : [];

  // Group by category
  const groupedProducts: Record<string, Product[]> = {};
  
  matchingProducts.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  const categoriesFound = Object.keys(groupedProducts) as CategorySlug[];

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 mt-4">
      <div className="mb-8">
        <h1 className="font-headline-lg text-[32px] md:text-[40px] text-primary">
          Resultados de búsqueda
        </h1>
        {query ? (
          <p className="font-body-md text-on-surface-variant mt-2 text-[18px]">
            Has buscado: <span className="font-semibold text-primary">"{q}"</span>
          </p>
        ) : (
          <p className="font-body-md text-on-surface-variant mt-2 text-[18px]">
            Escribe algo en el buscador para ver resultados.
          </p>
        )}
      </div>

      {query && categoriesFound.length === 0 && (
        <div className="bg-surface-container-lowest p-12 rounded-xl text-center border border-dashed border-surface-container-high mt-8">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">
            search_off
          </span>
          <p className="font-body-lg text-on-surface-variant">
            Vaya, no hemos encontrado ningún producto que coincida con tu búsqueda.
          </p>
          <Link href="/" className="inline-block mt-6 text-primary hover:underline font-label-md">
            Volver a la portada
          </Link>
        </div>
      )}

      {categoriesFound.length > 0 && (
        <div className="flex flex-col gap-12 mt-8">
          {categoriesFound.map((category) => (
            <section key={category} className="flex flex-col gap-6">
              <div className="border-b border-surface-container-high pb-4 flex items-center justify-between">
                <h2 className="font-great-vibes text-[40px] text-primary capitalize">
                  {categoryNames[category]}
                </h2>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-[12px]">
                  {groupedProducts[category].length} {groupedProducts[category].length === 1 ? "resultado" : "resultados"}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {groupedProducts[category].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
