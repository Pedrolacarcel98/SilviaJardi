import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full mt-32 border-t border-surface-container-high/50">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="flex items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Silvia Jardi" 
            width={150}
            height={40}
            className="h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        </Link>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://wa.me/34658271773"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant font-body-md text-[16px] hover:text-secondary-container transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href="#"
            className="text-on-surface-variant font-body-md text-[16px] hover:text-secondary-container transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant font-body-md text-[16px] hover:text-secondary-container transition-colors"
          >
            Facebook
          </Link>
          <span className="text-on-surface-variant font-body-md text-[16px]">
            Contacto: +34 658 27 17 73
          </span>
        </div>
        <div className="font-body-md text-[16px] text-on-surface-variant text-center md:text-right">
          © 2024 Silvia Jardi. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
