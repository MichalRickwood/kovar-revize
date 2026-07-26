import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  weight: ["700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

const jetbrains = JetBrains_Mono({
  weight: ["500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revize-kovar.cz"),
  title: "Revize elektro a hromosvodů | Tomáš Kovář, Česká Třebová",
  description:
    "Revize elektrických spotřebičů, elektroinstalací a hromosvodů v České Třebové, Ústí nad Orlicí a okolí. Revizní zpráva do několika dnů. Tel. +420 734 721 364.",
  openGraph: {
    title: "Revize elektro a hromosvodů | Tomáš Kovář",
    description:
      "Revize elektrických spotřebičů, elektroinstalací a hromosvodů v České Třebové a okolí.",
    url: "https://revize-kovar.cz",
    siteName: "Revize Kovář",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1408, height: 699 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper font-body text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
