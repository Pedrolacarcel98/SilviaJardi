import Link from "next/link";
import { categoryNames, CategorySlug } from "@/data/mockProducts";

export default function AdminDashboard() {
  const categories = Object.keys(categoryNames) as CategorySlug[];

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12 mt-8">
      <div className="text-center mb-12">
        <h1 className="font-great-vibes text-[56px] md:text-[64px] font-normal text-primary">
          Gestión de Productos
        </h1>
        <p className="font-body-lg text-[18px] text-on-surface-variant mt-4">
          Selecciona una sección para gestionar su contenido.
        </p>
        <div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((slug) => (
          <Link
            key={slug}
            href={`/admin/categoria/${slug}`}
            className="group flex flex-col justify-center items-center p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-low hover:border-secondary hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <span className="material-symbols-outlined text-[48px] text-secondary mb-4 group-hover:scale-110 transition-transform">
              checkroom
            </span>
            <h2 className="font-great-vibes text-[32px] font-normal text-primary">
              {categoryNames[slug]}
            </h2>
          </Link>
        ))}

        {/* Portfolio Sections */}
        <Link
          href={`/admin/portfolio/feria`}
          className="group flex flex-col justify-center items-center p-8 bg-amber-50 rounded-xl shadow-sm border border-amber-200 hover:border-red-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <span className="material-symbols-outlined text-[48px] text-red-700 mb-4 group-hover:scale-110 transition-transform">
            photo_camera
          </span>
          <h2 className="font-great-vibes text-[32px] font-normal text-amber-900">
            Trajes de Flamenca
          </h2>
        </Link>

        <Link
          href={`/admin/portfolio/semana-santa`}
          className="group flex flex-col justify-center items-center p-8 bg-purple-50 rounded-xl shadow-sm border border-purple-200 hover:border-black hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <span className="material-symbols-outlined text-[48px] text-purple-900 mb-4 group-hover:scale-110 transition-transform">
            photo_camera
          </span>
          <h2 className="font-great-vibes text-[32px] font-normal text-black">
            Túnicas Semana Santa
          </h2>
        </Link>
      </div>
    </main>
  );
}
