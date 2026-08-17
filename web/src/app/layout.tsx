import type { Metadata } from "next";
import { Be_Vietnam_Pro, Epilogue, Great_Vibes } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

const epilogue = Epilogue({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Silvia Jardi - Ropa con amor para los más pequeños",
  description: "Diseños exclusivos, tejidos suaves y un toque de dulzura en cada costura. Ropa infantil y canastillas premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${beVietnamPro.variable} ${epilogue.variable} ${greatVibes.variable} antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
