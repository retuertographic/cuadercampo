import type { Metadata } from "next";
import { Archivo, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const description =
  "CuaderCampo: cuaderno de campo digital y software de gestión agrícola para agricultores, técnicos y cooperativas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cuadercampo.com"),
  title: "CuaderCampo | Cuaderno de campo digital y agricultura inteligente",
  description,
  applicationName: "CuaderCampo",
  openGraph: {
    type: "website",
    url: "https://cuadercampo.com",
    siteName: "CuaderCampo",
    title: "CuaderCampo | Cuaderno de campo digital",
    description,
    locale: "es_ES",
    images: [{ url: "/sites/cuadercampo/sliders/video_cover2.jpg", width: 1920, height: 1080 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${roboto.variable} ${poppins.variable}`}>
      <head>
        {/* Material Icons: UI glyphs (menu, play, volume...). */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
