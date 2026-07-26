import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
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
    <html lang="cs" className={montserrat.variable}>
      <body className="bg-paper font-body text-ink antialiased">{children}</body>
    </html>
  );
}
