import { getProductById, mockProducts } from "@/data/mockProducts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12 mt-8">
      {/* Breadcrumb */}
      <nav className="mb-8 font-body-md text-on-surface-variant text-[14px]">
        <Link href="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/categoria/${product.category}`}
          className="hover:text-primary transition-colors capitalize"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gallery Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <ProductGallery 
            images={product.images} 
            productName={product.name} 
            isNew={product.isNew} 
            hasSalePrice={!!product.salePrice} 
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4">
          <h1 className="font-headline-lg text-[40px] font-semibold text-primary mb-2 leading-tight">
            {product.name}
          </h1>
          <div className="font-headline-md text-[28px] font-medium mb-8 flex items-center gap-3">
            {product.salePrice ? (
              <>
                <span className="text-on-surface-variant line-through text-[20px] opacity-70">
                  {product.price.toFixed(2)} €
                </span>
                <span className="text-error font-bold">
                  {product.salePrice.toFixed(2)} €
                </span>
              </>
            ) : (
              <span className="text-secondary">
                {product.price.toFixed(2)} €
              </span>
            )}
          </div>

          <div className="mb-8">
            <h3 className="font-label-md text-[16px] text-on-surface-variant font-semibold mb-3 uppercase tracking-wider">
              Talla disponible
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container-low transition-colors font-body-md"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <a 
              href={`https://wa.me/34658271773?text=${encodeURIComponent(`Hola! estoy interesado/a en "${product.name}" de la seccion "${product.category}", me gustaria realizar el pedido.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md text-[16px] font-semibold hover:bg-on-primary-fixed hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Realizar pedido
            </a>
            <p className="text-center font-body-md text-[14px] text-on-surface-variant mt-3">
              Actualmente web escaparate. Pedidos directos a través de WhatsApp.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high">
            <div className="mb-6">
              <h3 className="font-label-md text-[16px] text-primary font-semibold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
                Descripción
              </h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="h-px bg-surface-container-high w-full my-6"></div>

            <div className="mb-6">
              <h3 className="font-label-md text-[16px] text-primary font-semibold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  texture
                </span>
                Composición
              </h3>
              <ul className="list-disc list-inside font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                {product.materials.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </div>

            {product.careGuide && (
              <>
                <div className="h-px bg-surface-container-high w-full my-6"></div>
                <div>
                  <h3 className="font-label-md text-[16px] text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">
                      local_laundry_service
                    </span>
                    Cuidados
                  </h3>
                  <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                    {product.careGuide}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
