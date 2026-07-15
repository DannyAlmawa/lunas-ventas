import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Allura } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "LUNA · Programa online de 12 semanas",
  description:
    "LUNA es un programa para mujeres que quieren dejar de sentirse agotadas, recuperar motivación y vivir en coherencia con su energía.",
  openGraph: {
    title: "LUNA · Programa online de 12 semanas",
    description:
      "Un programa para mujeres que quieren sostener la constancia y vivir en coherencia con su energía a través del Método CALMA.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
