"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infantilOpen, setInfantilOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const infantilLinks = [
    { href: "/categoria/canastilla", label: "Canastilla" },
    { href: "/categoria/bebes", label: "Bebé" },
    { href: "/categoria/ninos", label: "Niños" },
    { href: "/categoria/munecos", label: "Muñecos" },
    { href: "/categoria/complementos", label: "Complementos" },
  ];

  return (
    <nav
      className={`bg-surface w-full top-0 sticky z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-5 md:py-8 flex justify-between items-center relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2 -ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>

        <Link
          href="/"
          className="mx-auto md:mx-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center justify-center"
        >
          {/* Usamos next/image para optimización */}
          <Image 
            src="/logo.png" 
            alt="Silvia Jardi" 
            width={200}
            height={64}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {/* Dropdown Ropa Infantil */}
          <div className="relative group">
            <button className="text-on-surface-variant font-body-md text-[16px] hover:text-primary transition-colors duration-200 flex items-center gap-1">
              Ropa Infantil
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-surface-container-low opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              {infantilLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-on-surface-variant font-body-md text-[14px] hover:bg-surface-container-low hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            href="/flamenca"
            className="text-on-surface-variant font-body-md text-[16px] hover:text-primary transition-colors duration-200"
          >
            Trajes de Flamenca
          </Link>
          <Link
            href="/semana-santa"
            className="text-on-surface-variant font-body-md text-[16px] hover:text-primary transition-colors duration-200"
          >
            Túnicas Semana Santa
          </Link>
        </div>

        <div className="flex gap-2 md:gap-4 text-primary">
          <button
            aria-label="Search"
            className="hover:text-secondary-container transition-colors duration-200 p-2 rounded-full hover:bg-surface-container-low hidden sm:block"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              search
            </span>
          </button>
          <button
            aria-label="Favorite"
            className="hover:text-secondary-container transition-colors duration-200 p-2 rounded-full hover:bg-surface-container-low"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-surface-container shadow-lg flex flex-col py-4 px-6 gap-4">
          <div className="border-b border-surface-container-low pb-2">
            <button
              onClick={() => setInfantilOpen(!infantilOpen)}
              className="w-full flex justify-between items-center text-on-surface-variant font-body-md text-[18px] py-2 hover:text-primary transition-colors duration-200"
            >
              Ropa Infantil
              <span className="material-symbols-outlined">
                {infantilOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            {infantilOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-3 border-l-2 border-surface-container-high ml-2 mb-2">
                {infantilLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-on-surface-variant font-body-md text-[16px] hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/flamenca"
            onClick={() => setMenuOpen(false)}
            className="text-on-surface-variant font-body-md text-[18px] py-2 border-b border-surface-container-low last:border-0 hover:text-primary transition-colors duration-200"
          >
            Trajes de Flamenca
          </Link>
          <Link
            href="/semana-santa"
            onClick={() => setMenuOpen(false)}
            className="text-on-surface-variant font-body-md text-[18px] py-2 border-b border-surface-container-low last:border-0 hover:text-primary transition-colors duration-200"
          >
            Túnicas Semana Santa
          </Link>
        </div>
      )}
    </nav>
  );
}
