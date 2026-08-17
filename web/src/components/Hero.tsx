export default function Hero() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 mb-32 relative">
      <div className="rounded-xl overflow-hidden relative h-[614px] min-h-[400px] flex items-center justify-center ambient-glow bg-surface-container-lowest">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-conic-gradient(var(--color-primary) 0% 25%, #ffffff 0% 50%)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-2xl bg-surface-container-lowest/80 backdrop-blur-sm p-16 rounded-xl border border-surface-container-low">
          <h1 className="font-headline-xl text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-primary mb-8">
            Moda infantil hecha a mano
          </h1>
          <p className="font-body-lg text-[18px] leading-[1.7] text-on-surface-variant mb-16">
            Prendas cómodas y delicadas, confeccionadas artesanalmente con tejidos suaves.
          </p>
          <a href="#colecciones" className="inline-block bg-secondary text-on-secondary px-16 py-4 rounded-full font-label-md text-[14px] font-semibold tracking-[0.02em] hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-300 shadow-[0_4px_12px_rgba(12,140,174,0.2)] hover:shadow-[0_6px_16px_rgba(12,140,174,0.3)] hover:-translate-y-0.5">
            Ver colecciones
          </a>
        </div>
      </div>
    </section>
  );
}
