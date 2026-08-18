import { getPortfolioItems, PortfolioType } from "@/data/mockPortfolio";
import PortfolioAdminList from "@/components/PortfolioAdminList";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ type: "feria" }, { type: "semana-santa" }];
}

export default async function PortfolioAdminPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  
  if (type !== "feria" && type !== "semana-santa") {
    notFound();
  }

  const items = getPortfolioItems(type as PortfolioType);
  const title = type === "feria" ? "Trajes de Flamenca" : "Túnicas Semana Santa";
  const colorClass = type === "feria" ? "text-red-700" : "text-purple-900";

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 mt-4">
      <div className="mb-8">
        <Link 
          href="/admin" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Volver a inicio
        </Link>
      </div>
      
      <div className="text-left mb-10 border-b border-surface-container-high pb-6">
        <h1 className={`font-great-vibes text-[48px] md:text-[56px] font-normal ${colorClass}`}>
          Gestión: {title}
        </h1>
        <p className="font-body-md text-on-surface-variant mt-2">
          Desde aquí puedes añadir, editar o eliminar las fotos de muestra para esta sección.
        </p>
      </div>

      <PortfolioAdminList initialItems={items} type={type as PortfolioType} />
    </main>
  );
}
