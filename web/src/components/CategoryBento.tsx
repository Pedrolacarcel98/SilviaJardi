import Link from "next/link";
import Image from "next/image";

export default function CategoryBento() {
  const categories = [
    {
      title: "Canastilla",
      description: "Primera puesta y complementos.",
      image: "/images/categoria-canastilla.jpg",
      href: "/categoria/canastilla",
    },
    {
      title: "Ropa de Bebé",
      description: "Prendas cómodas para el día a día.",
      image: "/images/categoria-bebes.png",
      href: "/categoria/bebes",
    },
    {
      title: "Niños",
      description: "Moda infantil clásica y cómoda.",
      image: "/images/categoria-ninos.jpg",
      href: "/categoria/ninos",
    },
    {
      title: "Muñecos",
      description: "Diseños artesanales de tela.",
      image: "/images/categoria-munecos.jpg",
      href: "/categoria/munecos",
    },
    {
      title: "Complementos",
      description: "Accesorios infantiles.",
      image: "/images/categoria-complementos.jpg",
      href: "/categoria/complementos",
    },
    {
      title: "Trajes de Flamenca",
      description: "Diseño y confección a medida.",
      image: "/images/categoria-flamenca.png",
      href: "/flamenca",
      theme: {
        title: "text-amber-900",
        link: "text-red-700 group-hover:text-red-500",
        border: "hover:border-red-500/30",
        tag: "bg-red-100 text-red-900",
      }
    },
    {
      title: "Semana Santa",
      description: "Túnicas cofrades y complementos.",
      image: "/images/categoria-semanasanta.png",
      href: "/semana-santa",
      theme: {
        title: "text-purple-950",
        link: "text-purple-700 group-hover:text-purple-500",
        border: "hover:border-purple-500/30",
        tag: "bg-purple-100 text-purple-900",
      }
    },
  ];

  return (
    <section id="colecciones" className="w-full max-w-[1200px] mx-auto px-6 mb-32 scroll-mt-32">
      <div className="text-center mb-16">
        <h2 className="font-great-vibes text-[56px] font-normal text-primary">
          Colecciones
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => {
          const defaultTheme = {
            title: "text-primary",
            link: "text-secondary group-hover:text-secondary-fixed-dim",
            border: "hover:border-secondary/30",
            tag: "bg-tertiary-container text-on-tertiary-container",
          };
          const theme = cat.theme || defaultTheme;

          return (
            <Link
              key={index}
              href={cat.href}
              className={`group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden ambient-glow border border-surface-container-low transition-all duration-300 hover:-translate-y-1 ${theme.border}`}
            >
              <div className="aspect-square relative overflow-hidden bg-surface-container-low">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className={`font-great-vibes text-[36px] font-normal mb-1 ${theme.title}`}>
                  {cat.title}
                </h3>
                <p className="font-body-md text-[16px] text-on-surface-variant flex-grow mb-8">
                  {cat.description}
                </p>
                <span className={`font-label-md text-[14px] font-semibold flex items-center gap-1 transition-colors ${theme.link}`}>
                  Ver detalles{" "}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
