import { PortfolioType } from "@/data/mockPortfolio";
import PortfolioForm from "@/components/PortfolioForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ type: "feria" }, { type: "semana-santa" }];
}

export default async function PortfolioAddPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  
  if (type !== "feria" && type !== "semana-santa") {
    notFound();
  }

  const title = type === "feria" ? "Traje de Flamenca" : "Túnica de Semana Santa";
  const colorClass = type === "feria" ? "text-red-700" : "text-purple-900";

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 mt-4">
      <div className="mb-8">
        <Link 
          href={`/admin/portfolio/${type}`}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Volver a la lista
        </Link>
      </div>
      
      <div className="text-center mb-10">
        <h1 className={`font-great-vibes text-[48px] md:text-[56px] font-normal ${colorClass}`}>
          Añadir {title}
        </h1>
        <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl mx-auto">
          Sube una nueva foto de muestra para esta sección.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <PortfolioForm type={type as PortfolioType} />
      </div>
    </main>
  );
}
