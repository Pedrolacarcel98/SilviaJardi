import { getPortfolioItems } from "@/data/mockPortfolio";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function FlamencaPage() {
  const items = getPortfolioItems("feria");

  return (
    <main className="flex-grow w-full flex flex-col items-center">
      {/* Hero Flamenca (Tonos Albero y Rojo Clavel) */}
      <section className="w-full relative h-[600px] flex items-center justify-center bg-amber-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" 
             style={{ backgroundImage: "url('/images/fondo-flamenca.jpg')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-great-vibes text-[64px] md:text-[80px] text-red-800 mb-4 drop-shadow-sm">
            Trajes de Flamenca
          </h1>
          <p className="font-headline-md text-[24px] md:text-[32px] text-amber-900 font-medium mb-8 leading-tight">
            Hazte tu traje de flamenca a medida y sé la más guapa en la feria
          </p>
          <a 
            href="https://wa.me/34658271773"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-10 py-4 rounded-full font-label-md text-[16px] font-semibold tracking-wider hover:bg-red-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">chat</span>
            Solicitar Información
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-16 text-center">
        <div className="mb-12">
          <span className="material-symbols-outlined text-red-700 text-[48px] mb-4">
            design_services
          </span>
          <h2 className="font-headline-lg text-[36px] font-semibold text-amber-900 mb-4">
            Confección Exclusiva
          </h2>
          <p className="font-body-lg text-[18px] text-amber-800/80 leading-relaxed max-w-2xl mx-auto">
            Cada traje es único. Seleccionamos los mejores tejidos, desde popelines hasta perforados y gasas. Diseñamos el patrón adaptado a tu silueta para garantizar la máxima comodidad sin perder la esencia tradicional.
          </p>
        </div>

        {/* Dynamic Gallery */}
        <div className="mt-16">
          <h3 className="font-headline-md text-[28px] text-red-800 mb-10 border-b-2 border-red-800/20 pb-4 inline-block">
            Nuestros Modelos
          </h3>
          
          {items.length > 0 ? (
            <PortfolioGallery items={items} theme="feria" />
          ) : (
            <p className="font-body-md text-amber-900/60 py-12 border-2 border-dashed border-amber-200 rounded-xl">
              Próximamente añadiremos fotos de nuestros modelos.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
