import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { WhatsappFloat } from "@/components/whatsapp-float";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Bioecy | Fisioterapia, rehabilitación, nutrición y psicología",
  description:
    "Clínica Bioecy: rehabilitación física con electroterapia, láser, infrarrojo y ondas de choque. Nutrición funcional, psicología y terapia de suelo pélvico para todas las edades.",
  icons: {
    icon: "/images/logo-bioecy.png",
    apple: "/images/logo-bioecy.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0B4DA2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${quicksand.variable} ${nunito.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        <WhatsappFloat />
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
