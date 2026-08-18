import { getPortfolioItems } from "@/data/mockPortfolio";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function SemanaSantaPage() {
  const items = getPortfolioItems("semana-santa");

  return (
    <main className="flex-grow w-full flex flex-col items-center">
      {/* Hero Semana Santa (Tonos Nazareno y Oscuros) */}
      <section className="w-full relative h-[600px] flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/fondo-semana-santa.webp')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-great-vibes text-[64px] md:text-[80px] font-normal text-purple-200 mb-6 drop-shadow-md tracking-wide">
            Túnicas de Semana Santa
          </h1>
          <p className="font-body-lg text-[20px] md:text-[24px] text-stone-300 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Tradición, medida y devoción en cada puntada. Confeccionamos la túnica de tu hermandad con el máximo respeto y calidad.
          </p>
          <a
            href="https://wa.me/34658271773"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-purple-900 text-purple-100 px-10 py-4 rounded-full font-label-md text-[16px] font-semibold tracking-wider hover:bg-purple-800 transition-all border border-purple-700/50 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">chat</span>
            Consultar Encargo
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-16 text-center">
        <div className="mb-12">
          <span className="material-symbols-outlined text-purple-900 text-[48px] mb-4">
            church
          </span>
          <h2 className="font-headline-lg text-[36px] font-semibold text-stone-800 mb-4">
            Confección Cofrade
          </h2>
          <p className="font-body-lg text-[18px] text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Nos encargamos de toda la indumentaria necesaria para la estación de penitencia. Desde la túnica y la capa, hasta el antifaz y el capirote, utilizando los tejidos reglamentarios de cada hermandad.
          </p>
        </div>

        {/* Dynamic Gallery */}
        <div className="mt-16">
          <h3 className="font-headline-md text-[28px] text-purple-900 mb-10 border-b-2 border-purple-900/20 pb-4 inline-block">
            Nuestros Trabajos
          </h3>

          {items.length > 0 ? (
            <PortfolioGallery items={items} theme="semana-santa" />
          ) : (
            <p className="font-body-md text-stone-500 py-12 border-2 border-dashed border-stone-300 rounded-xl">
              Próximamente añadiremos fotos de nuestras túnicas.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
