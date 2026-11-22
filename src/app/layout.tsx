import type { Metadata } from "next";
import { DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["700"],
});

const description =
  "CuaderCampo — tu cuaderno de campo, siempre al día. Cuaderno de campo digital y gestión agrícola para agricultores, técnicos y cooperativas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cuadercampo.com"),
  title: "CuaderCampo | Tu cuaderno de campo, siempre al día",
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
    <html lang="es" style={{ background: "#F3F1E7" }} className={`${dmSans.variable} ${dancing.variable}`}>
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
