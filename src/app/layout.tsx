import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
});

const plex = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body
        className={`${inter.variable} ${grotesk.variable} ${plex.variable} bg-paper font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
