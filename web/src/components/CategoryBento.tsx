import Link from "next/link";
import Image from "next/image";

export default function CategoryBento() {
  const categories = [
    {
      title: "Canastilla",
      description: "Primera puesta y complementos.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2g0nzKs8L_dQ6axt1I2jnqXYCWzB2tortIHUctNKuNjIrfiwSSdttOgfqzMwcsxOVXRys6OF0nphHubhtrTuL19Y4SuQRJceVw2PLtjHYfaPgOn1zrajHyI01v17Qh5jot360FwWwOTrR35Hj0jqlMOQmgy7WOqjrQCpGPzh0Nk2nKL-LNECJrhGvTVCkvt3Mf493vQicUIPB2DdFFyPuOelAjnOYzd9Sz7R7o5uB_uQbW_IPXjDa",
      isNew: true,
      href: "/categoria/canastilla",
    },
    {
      title: "Ropa de Bebé",
      description: "Prendas cómodas para el día a día.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsFY1WvM_ixSLkBrAI6_HVW6sBVSrin3NSWoFMEWWg1s3sdNIeG_Y8diIs41xzWP7mrKZrRvXjmeUXVnhZRadZTh4el3NPwtsGo3YeGJviW58R5vI0RAUaWo6xyf29ZaMD1dua876yXbyJCBph39RG46c3qKSB799LOXhkjc3P_I9Xg-DBzLmME7sdX3QRSJ66ctIJikLfV9_xGQ677rYwt3Zz9-PNhAI7E7b4TMyg5PT1gJf6GMOW",
      isNew: false,
      href: "/categoria/bebes",
    },
    {
      title: "Muñecos",
      description: "Diseños artesanales de tela.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMukH77ApYRP9qLiGrNcDdsgSnKtjmDvK7_PMUEtTO0JksVAk5HXa-6Z1iGUlcEiZWiL3h6sLCDd0tQdNGFQ3h6uy8taxhkOVjC-SUBkSJVFV1BYwBOvv2Nc3IRpZB1XutKW4oE-N3jVBUJO8MMWsBsK9WcRnJvYzF1cLv0FdUDmphVehjdobQwzXKe4dy1lg5kItUAKMzb3ajG6GA5wYEMs_9NmykSsbUvEbKECX03GJfdYNtcOSV",
      isNew: false,
      href: "/categoria/munecos",
    },
    {
      title: "Complementos",
      description: "Accesorios infantiles.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB8oNxYMWIT3O0pfi81FTt7fLH9kMN93DRpMeEZArChkpUoaLikp2MqFb4phy2nAWerj197h6dWd0A-tC9oXJPxxvXT8NlXCg-T-fhCp8a8Xav_FNNeMmTwMdxIQFRawjSZL_5CDzvDd8436UBhSJUN8uENmMzrZh7hhUYh-MyodFp9oAvZlyYVP8uuIwP-J43wrFY1m-v6y3AhGz5-GYKQSilDHffZwlgDrlXgAkO7XYyj4-GpXYUL",
      isNew: false,
      href: "/categoria/complementos",
    },
    {
      title: "Trajes de Flamenca",
      description: "Diseño y confección a medida.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2g0nzKs8L_dQ6axt1I2jnqXYCWzB2tortIHUctNKuNjIrfiwSSdttOgfqzMwcsxOVXRys6OF0nphHubhtrTuL19Y4SuQRJceVw2PLtjHYfaPgOn1zrajHyI01v17Qh5jot360FwWwOTrR35Hj0jqlMOQmgy7WOqjrQCpGPzh0Nk2nKL-LNECJrhGvTVCkvt3Mf493vQicUIPB2DdFFyPuOelAjnOYzd9Sz7R7o5uB_uQbW_IPXjDa",
      isNew: true,
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMukH77ApYRP9qLiGrNcDdsgSnKtjmDvK7_PMUEtTO0JksVAk5HXa-6Z1iGUlcEiZWiL3h6sLCDd0tQdNGFQ3h6uy8taxhkOVjC-SUBkSJVFV1BYwBOvv2Nc3IRpZB1XutKW4oE-N3jVBUJO8MMWsBsK9WcRnJvYzF1cLv0FdUDmphVehjdobQwzXKe4dy1lg5kItUAKMzb3ajG6GA5wYEMs_9NmykSsbUvEbKECX03GJfdYNtcOSV",
      isNew: false,
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
        <h2 className="font-headline-lg text-[36px] font-semibold text-primary">
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
                {cat.isNew && (
                  <div className={`absolute top-4 right-4 px-4 py-1 rounded-full font-label-sm text-[12px] shadow-sm font-medium ${theme.tag}`}>
                    Nuevo
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className={`font-headline-md text-[24px] font-medium mb-1 ${theme.title}`}>
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
