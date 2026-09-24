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
  title: "Bioecy | Fisioterapia, rehabilitación, nutrición y dermatofuncional",
  description:
    "Clínica Bioecy: rehabilitación física con electroterapia, láser, infrarrojo y ondas de choque BTL. Nutrición funcional, dermatofuncional y terapia de suelo pélvico para todas las edades.",
  applicationName: "Bioecy",
  appleWebApp: {
    title: "Bioecy",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var nav = performance.getEntriesByType("navigation")[0];
  if (!nav || nav.type !== "reload") return;
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  function top() { scrollTo(0, 0); }
  top();
  addEventListener("load", top);
})();`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsappFloat />
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
