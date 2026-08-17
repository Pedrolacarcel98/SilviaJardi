
export default function SemanaSantaPage() {
  return (
    <main className="flex-grow w-full flex flex-col items-center">
      {/* Hero Semana Santa (Tonos Nazareno y Oscuros) */}
      <section className="w-full relative h-[600px] flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" 
             style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMukH77ApYRP9qLiGrNcDdsgSnKtjmDvK7_PMUEtTO0JksVAk5HXa-6Z1iGUlcEiZWiL3h6sLCDd0tQdNGFQ3h6uy8taxhkOVjC-SUBkSJVFV1BYwBOvv2Nc3IRpZB1XutKW4oE-N3jVBUJO8MMWsBsK9WcRnJvYzF1cLv0FdUDmphVehjdobQwzXKe4dy1lg5kItUAKMzb3ajG6GA5wYEMs_9NmykSsbUvEbKECX03GJfdYNtcOSV')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-headline-xl text-[48px] md:text-[64px] text-purple-200 mb-6 drop-shadow-md tracking-wide">
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
      <section className="w-full max-w-[1000px] mx-auto px-6 py-24 text-center">
        <div className="mb-16">
          <span className="material-symbols-outlined text-purple-900 text-[48px] mb-4">
            church
          </span>
          <h2 className="font-headline-lg text-[36px] font-semibold text-stone-800 mb-6">
            Confección Cofrade
          </h2>
          <p className="font-body-lg text-[18px] text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Nos encargamos de toda la indumentaria necesaria para la estación de penitencia. Desde la túnica y la capa, hasta el antifaz y el capirote, utilizando los tejidos reglamentarios de cada hermandad (ruán, sarga, merino o terciopelo).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h3 className="font-headline-md text-[24px] text-purple-900 mb-4">A Medida</h3>
            <p className="font-body-md text-stone-600">
              Corte y confección adaptada a cada hermano, desde los más pequeños hasta adultos, asegurando prestancia y comodidad.
            </p>
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h3 className="font-headline-md text-[24px] text-purple-900 mb-4">Telas Oficiales</h3>
            <p className="font-body-md text-stone-600">
              Trabajamos con proveedores especializados para garantizar los colores y texturas exigidos por las reglas de tu corporación.
            </p>
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h3 className="font-headline-md text-[24px] text-purple-900 mb-4">Complementos</h3>
            <p className="font-body-md text-stone-600">
              Elaboración de cíngulos, espartos, escudos bordados y ajuste de capirotes a medida.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
