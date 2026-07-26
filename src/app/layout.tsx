import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revize-kovar.cz"),
  title: "Tomáš Kovář — revize elektro a hromosvodů | Česká Třebová",
  description:
    "Revize elektrických spotřebičů, elektroinstalací a hromosvodů v České Třebové a okolí. Udělám vám revizi a ohnu vám mámu.",
  openGraph: {
    title: "Tomáš Kovář — revize elektro a hromosvodů",
    description:
      "Revize elektrických spotřebičů, elektroinstalací a hromosvodů v České Třebové a okolí.",
    url: "https://revize-kovar.cz",
    siteName: "Revize Kovář",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/tomas.jpg", width: 1180, height: 1572 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
