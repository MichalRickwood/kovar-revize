import Image from "next/image";

const TEL = "+420 734 721 364";
const TEL_HREF = "tel:+420734721364";
const EMAIL = "tomaskovar154@seznam.cz";

function Icon({ d, className }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "h-5 w-5"}
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

const icons = {
  call: "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z",
  mail: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z",
  pin: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  plug: "M16 7V3h-2v4h-4V3H8v4H6v5a5 5 0 0 0 4 4.9V21h4v-4.1A5 5 0 0 0 18 12V7h-2Z",
  bolt: "M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z",
  storm: "M17.92 7.02A7 7 0 0 0 4.07 8.04 5.5 5.5 0 0 0 5.5 18.9h1.87l2.13-3.4H7l4.5-5.5-1 3.5h2.5l-3.72 5.4h1.94L19 13.5h-3l1.92-6.48ZM12.5 22l1.5-4h-2.4l1.9-3H16l-3.5 7Z",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm2 16H8v-2h8v2Zm0-4H8v-2h8v2Zm-3-5V3.5L18.5 9H13Z",
};

const sluzby = [
  {
    icon: icons.plug,
    title: "Revize spotřebičů",
    desc: "Pravidelné kontroly a zkoušky bezpečnosti ručního nářadí a přenosných spotřebičů.",
    tag: "ČSN 33 1600 ed. 2",
  },
  {
    icon: icons.bolt,
    title: "Elektroinstalace",
    desc: "Výchozí i pravidelné revize pevných instalací v objektech, rozvaděčů a jističů.",
    tag: "ČSN 33 2000-6 ed. 2",
  },
  {
    icon: icons.storm,
    title: "Hromosvody (LPS)",
    desc: "Ověření funkčnosti systému ochrany před bleskem a uzemňovacích soustav.",
    tag: "ČSN EN 62305",
  },
  {
    icon: icons.doc,
    title: "Poradenství",
    desc: "Technické konzultace, návrhy řešení závad a pomoc při přípravě dokumentace.",
    tag: "Revizní zprávy",
  },
];

const kroky = [
  {
    title: "Poptávka a termín",
    desc: "Rychlá domluva telefonicky nebo e-mailem dle vašich časových možností.",
  },
  {
    title: "Prohlídka na místě",
    desc: "Osobní kontrola technického stavu a identifikace klíčových bodů.",
  },
  {
    title: "Měření a testování",
    desc: "Odborné zkoušky kalibrovanými měřicími přístroji.",
  },
  {
    title: "Revizní zpráva",
    desc: "Předání oficiálního dokumentu platného pro úřady a pojišťovny.",
  },
];

const cenik = [
  { polozka: "Revize spotřebiče (nářadí, PC, kuchyně)", cena: "150 Kč/ks" },
  { polozka: "Bytová jednotka (garsonka – 3+1)", cena: "1 900 Kč" },
  { polozka: "Rodinný dům (standardní rozsah)", cena: "2 900 Kč" },
  { polozka: "Systém hromosvodů (LPS)", cena: "1 500 Kč" },
  { polozka: "Průmyslový objekt / hala", cena: "individuálně", accent: true },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="border-2 border-ink bg-white p-0.5">
              <Image src="/logo.png" alt="Logo Revize Kovář" width={48} height={48} />
            </span>
            <span className="hidden flex-col lg:flex">
              <span className="font-display text-xl font-black uppercase leading-none tracking-tight text-ink">
                Revize Kovář
              </span>
              <span className="mt-1 font-mono text-[11px] font-bold tracking-widest text-ink">
                ČESKÁ TŘEBOVÁ | IČO 29765978
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {[
              ["#sluzby", "Služby"],
              ["#postup", "Postup"],
              ["#cenik", "Ceník"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={TEL_HREF}
              className="hidden items-center gap-2 font-mono text-sm font-bold text-ink transition-colors hover:text-accent sm:flex"
            >
              <Icon d={icons.call} className="h-4 w-4" />
              {TEL}
            </a>
            <a
              href="#kontakt"
              className="border-2 border-ink bg-accent px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-hard-sm transition-colors hover:bg-ink"
            >
              Poptat revizi
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-4 border-ink bg-tint py-20 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-10">
          <div className="mb-8 inline-block border-2 border-ink bg-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-hard-sm">
            Revizní technik · elektro &amp; hromosvody
          </div>
          <h1 className="mb-6 max-w-5xl font-display text-4xl font-black uppercase leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Revize elektrických zařízení a&nbsp;hromosvodů
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-relaxed text-navy">
            Zajišťuji profesionální revizní služby pro bytové domy, rodinné vily
            i průmyslové objekty v České Třebové a okolí. Důraz na preciznost,
            normy ČSN a dlouhodobou bezpečnost vašich instalací.
          </p>
          <div className="mb-16 flex flex-col gap-5 sm:flex-row">
            <a
              href={TEL_HREF}
              className="flex items-center justify-center gap-3 border-2 border-ink bg-accent px-8 py-3.5 font-bold uppercase tracking-wider text-white shadow-hard transition-transform hover:-translate-y-1"
            >
              <Icon d={icons.call} className="h-5 w-5" />
              Zavolat {TEL}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-3 border-2 border-ink bg-white px-8 py-3.5 font-bold uppercase tracking-wider text-ink shadow-hard transition-colors hover:bg-ink hover:text-white"
            >
              <Icon d={icons.mail} className="h-5 w-5" />
              Napsat e-mail
            </a>
          </div>
          <div className="w-full max-w-5xl border-4 border-ink bg-ink p-2 shadow-hard-xl">
            <Image
              src="/hero.jpg"
              alt="Měření elektroniky digitálním multimetrem v dílně"
              width={1408}
              height={699}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="scroll-mt-24 border-b-4 border-ink bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-10">
          <div className="mb-14 text-center">
            <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-widest text-ink">
              Profesionální služby
            </span>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-ink md:text-5xl">
              Komplexní revizní činnost
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sluzby.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-center border-2 border-ink bg-tint p-8 text-center shadow-hard-lg transition-colors hover:bg-white"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center border-2 border-ink bg-accent text-white shadow-hard-sm">
                  <Icon d={s.icon} className="h-9 w-9" />
                </div>
                <h3 className="mb-3 font-display text-xl font-black uppercase text-ink">
                  {s.title}
                </h3>
                <p className="mb-6 text-sm font-medium leading-relaxed text-navy">
                  {s.desc}
                </p>
                <span className="border-2 border-ink bg-white px-2 py-1 font-mono text-[11px] font-bold uppercase text-ink">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postup */}
      <section id="postup" className="scroll-mt-24 border-b-4 border-ink bg-dark py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-10">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
              Jak probíhá revize?
            </h2>
            <p className="mt-5 text-lg font-medium text-slate-300">
              Transparentní postup od prvního kontaktu po předání zprávy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {kroky.map((k, i) => {
              const last = i === kroky.length - 1;
              return (
                <div key={k.title} className="flex flex-col items-center px-2 text-center">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center border-2 border-ink text-2xl font-black ${
                      last
                        ? "bg-accent text-white shadow-[4px_4px_0_0_#fff]"
                        : "bg-white text-ink shadow-[4px_4px_0_0_#f97316]"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <h4 className={`mb-3 text-lg font-black uppercase ${last ? "text-accent" : "text-white"}`}>
                    {k.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-300">{k.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="scroll-mt-24 border-b-4 border-ink bg-paper py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="mb-7 font-display text-3xl font-black uppercase tracking-tight text-ink md:text-5xl">
              Transparentní ceník služeb
            </h2>
            <p className="mb-8 text-lg font-medium leading-relaxed text-navy">
              Ceny jsou orientační a závisí na rozsahu instalace a počtu
              měřených bodů. Pro přesnou kalkulaci mě neváhejte kontaktovat.
            </p>
            <div className="border-2 border-ink bg-accent p-6 text-white shadow-hard">
              <p className="text-sm font-medium">
                Uvedené ceny jsou <span className="font-black underline decoration-2 underline-offset-4">konečné</span> —
                nejsem plátce DPH.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-x-auto border-4 border-ink bg-white shadow-hard-xl">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="p-5 font-mono text-xs font-bold uppercase tracking-widest">
                      Typ revize
                    </th>
                    <th className="p-5 text-right font-mono text-xs font-bold uppercase tracking-widest">
                      Cena od
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {cenik.map((c, i) => (
                    <tr
                      key={c.polozka}
                      className={`transition-colors hover:bg-tint ${
                        i < cenik.length - 1 ? "border-b-2 border-ink" : ""
                      }`}
                    >
                      <td className="p-5 font-bold uppercase text-ink">{c.polozka}</td>
                      <td
                        className={`whitespace-nowrap p-5 text-right font-mono text-base font-bold ${
                          c.accent ? "text-accent" : "text-ink"
                        }`}
                      >
                        {c.cena}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt / Footer */}
      <footer id="kontakt" className="scroll-mt-24 bg-tint pb-10 pt-20 md:pt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          <div>
            <h3 className="mb-6 font-display text-3xl font-black uppercase tracking-tight text-ink">
              Tomáš Kovář
            </h3>
            <p className="mb-8 max-w-sm text-sm font-medium leading-relaxed text-navy">
              Revize elektrických zařízení a hromosvodů. Působím v Pardubickém
              kraji se zázemím v České Třebové.
            </p>
            <div className="space-y-4 text-sm font-bold text-ink">
              <div className="flex items-center gap-4">
                <Icon d={icons.pin} className="h-5 w-5 text-accent" />
                <span className="font-mono uppercase">
                  Dvořákova 2173, 560 02 Česká Třebová
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Icon d={icons.doc} className="h-5 w-5 text-accent" />
                <span className="font-mono uppercase">IČO 29765978 · neplátce DPH</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 font-mono text-sm font-bold uppercase tracking-widest text-ink">
              Rychlý kontakt
            </h4>
            <div className="space-y-4">
              <a
                href={TEL_HREF}
                className="group flex items-center gap-4 border-2 border-ink bg-white p-4 shadow-hard-sm transition-colors hover:bg-ink"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-accent text-white">
                  <Icon d={icons.call} />
                </span>
                <span className="font-mono text-lg font-bold text-ink group-hover:text-white">
                  {TEL}
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 border-2 border-ink bg-white p-4 shadow-hard-sm transition-colors hover:bg-ink"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-accent text-white">
                  <Icon d={icons.mail} />
                </span>
                <span className="break-all font-mono text-sm font-bold text-ink group-hover:text-white">
                  {EMAIL}
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="mb-8 font-mono text-sm font-bold uppercase tracking-widest text-ink">
              Lokalita působení
            </h4>
            <div className="relative min-h-48 flex-grow border-4 border-ink bg-navy p-1 shadow-hard-lg">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_#1e3a5f_0%,_#0d1c2e_70%)] py-10">
                <Icon d={icons.pin} className="h-12 w-12 text-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                  Pardubický kraj a okolí
                </span>
              </div>
              <div className="absolute bottom-4 left-4 border-2 border-ink bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-hard-sm">
                Česká Třebová
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t-4 border-ink px-4 pt-8 font-mono text-xs font-bold uppercase text-ink md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Tomáš Kovář · revizní technik</p>
          <p>revize-kovar.cz · Česká Třebová</p>
        </div>
      </footer>

      {/* Mobilní FAB */}
      <a
        href={TEL_HREF}
        aria-label="Zavolat"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center border-2 border-ink bg-accent text-white shadow-hard transition-colors hover:bg-ink md:hidden"
      >
        <Icon d={icons.call} className="h-6 w-6" />
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tomáš Kovář — revize elektro a hromosvodů",
            url: "https://revize-kovar.cz",
            telephone: "+420734721364",
            email: EMAIL,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dvořákova 2173",
              addressLocality: "Česká Třebová",
              postalCode: "560 02",
              addressCountry: "CZ",
            },
            areaServed: "Pardubický kraj",
          }),
        }}
      />
    </main>
  );
}
