
export default function FlamencaPage() {
  return (
    <main className="flex-grow w-full flex flex-col items-center">
      {/* Hero Flamenca (Tonos Albero y Rojo Clavel) */}
      <section className="w-full relative h-[600px] flex items-center justify-center bg-amber-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" 
             style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2g0nzKs8L_dQ6axt1I2jnqXYCWzB2tortIHUctNKuNjIrfiwSSdttOgfqzMwcsxOVXRys6OF0nphHubhtrTuL19Y4SuQRJceVw2PLtjHYfaPgOn1zrajHyI01v17Qh5jot360FwWwOTrR35Hj0jqlMOQmgy7WOqjrQCpGPzh0Nk2nKL-LNECJrhGvTVCkvt3Mf493vQicUIPB2DdFFyPuOelAjnOYzd9Sz7R7o5uB_uQbW_IPXjDa')" }}>
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
      <section className="w-full max-w-[1000px] mx-auto px-6 py-24 text-center">
        <div className="mb-16">
          <span className="material-symbols-outlined text-red-700 text-[48px] mb-4">
            design_services
          </span>
          <h2 className="font-headline-lg text-[36px] font-semibold text-amber-900 mb-6">
            Confección Exclusiva
          </h2>
          <p className="font-body-lg text-[18px] text-amber-800/80 leading-relaxed max-w-2xl mx-auto">
            Cada traje es único. Seleccionamos los mejores tejidos, desde popelines hasta perforados y gasas. Diseñamos el patrón adaptado a tu silueta para garantizar la máxima comodidad sin perder la esencia tradicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-amber-100/50 p-8 rounded-2xl border border-amber-200/50">
            <h3 className="font-headline-md text-[24px] text-red-800 mb-4">Toma de Medidas</h3>
            <p className="font-body-md text-amber-900/70">
              Trato personalizado para asegurar que el vestido se ajuste perfectamente a ti.
            </p>
          </div>
          <div className="bg-amber-100/50 p-8 rounded-2xl border border-amber-200/50">
            <h3 className="font-headline-md text-[24px] text-red-800 mb-4">Elección de Telas</h3>
            <p className="font-body-md text-amber-900/70">
              Asesoramiento en la combinación de colores, lunares, encajes y flecos.
            </p>
          </div>
          <div className="bg-amber-100/50 p-8 rounded-2xl border border-amber-200/50">
            <h3 className="font-headline-md text-[24px] text-red-800 mb-4">Pruebas</h3>
            <p className="font-body-md text-amber-900/70">
              Ajustamos cada volante y costura hasta que te sientas espectacular.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
