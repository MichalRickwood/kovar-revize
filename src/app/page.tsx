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
  cable: "M20 9V7a2 2 0 0 0-2-2h-2V3h-2v2h-2v2h2v2a2 2 0 0 0 2 2h2v6a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3h-2V8H9V6H7v2H5v2h2v2h2v-2h2a1 1 0 0 1 1 1v4a3 3 0 0 0 6 0v-6h2V9h-2Z",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm2 16H8v-2h8v2Zm0-4H8v-2h8v2Zm-3-5V3.5L18.5 9H13Z",
  clock: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.2 14.2L11 13V7h1.5v5.3l4.5 2.7-.8 1.2Z",
  shield: "M12 2 4 5v6c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V5l-8-3Zm-1.5 14.5-3.5-3.5 1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4-6.5 6.5Z",
};

const sluzby = [
  {
    icon: icons.plug,
    title: "Revize spotřebičů",
    desc: "Pravidelné kontroly a zkoušky bezpečnosti ručního nářadí a přenosných spotřebičů pro firmy i domácnosti.",
    tag: "ČSN 33 1600 ed. 2",
  },
  {
    icon: icons.cable,
    title: "Elektroinstalace",
    desc: "Výchozí a pravidelné revize elektroinstalací, rozvaděčů a jističů v bytech, domech i provozovnách.",
    tag: "ČSN 33 2000-6 ed. 2",
  },
  {
    icon: icons.bolt,
    title: "Hromosvody (LPS)",
    desc: "Ochrana před bleskem a přepětím — kontrola jímací soustavy, svodů a uzemnění.",
    tag: "ČSN EN 62305",
  },
  {
    icon: icons.doc,
    title: "Revizní zprávy",
    desc: "Vypracování oficiální dokumentace pro úřady, pojišťovny a bezpečnost práce.",
    tag: "Ke každé revizi",
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
  { polozka: "Revize spotřebiče (nářadí, PC, kuchyně)", cena: "od 150 Kč/ks" },
  { polozka: "Bytová jednotka (garsonka – 3+1)", cena: "od 1 900 Kč" },
  { polozka: "Rodinný dům (standardní rozsah)", cena: "od 2 900 Kč" },
  { polozka: "Systém hromosvodů (LPS)", cena: "od 1 500 Kč" },
  { polozka: "Průmyslový objekt / hala", cena: "individuálně" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/30 bg-paper/80 shadow-soft backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold text-primary">
            Revize Kovář
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["#sluzby", "Služby"],
              ["#postup", "Postup"],
              ["#cenik", "Ceník"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-muted transition-colors duration-300 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={TEL_HREF}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-soft transition-transform duration-300 hover:scale-105"
          >
            <Icon d={icons.call} className="h-4 w-4" />
            <span className="hidden sm:inline">{TEL}</span>
            <span className="sm:hidden">Zavolat</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-mesh relative overflow-hidden px-6 pb-24 pt-20 md:pb-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div className="relative z-10 flex flex-col gap-8">
            <h1 className="text-4xl font-light leading-[1.15] tracking-tight text-ink md:text-5xl">
              Revize elektrických zařízení a&nbsp;hromosvodů
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Profesionální kontrola vašich instalací, spotřebičů a hromosvodů
              s důrazem na maximální bezpečnost a dodržení platných norem.
              Spolehlivost a preciznost v každém kroku.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href={TEL_HREF}
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-soft transition-transform duration-300 hover:scale-105"
              >
                Zavolat {TEL}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border-2 border-copper px-8 py-4 text-sm font-semibold tracking-wide text-copper transition-colors duration-300 hover:bg-copper/5"
              >
                Napsat e-mail
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-0 h-80 overflow-hidden rounded-2xl shadow-soft-lg md:h-[440px]">
              <Image
                src="/hero.jpg"
                alt="Měření elektroniky digitálním multimetrem"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="glass-panel absolute -bottom-6 -left-4 z-20 flex items-center gap-3 rounded-xl p-4 shadow-soft md:-left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon d={icons.clock} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  Revizní zpráva
                </span>
                <span className="block text-sm text-muted">do několika dnů</span>
              </span>
            </div>
            <div className="glass-panel absolute -right-2 top-10 z-20 flex items-center gap-3 rounded-xl p-4 shadow-soft md:-right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/10 text-copper">
                <Icon d={icons.pin} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  Česká Třebová
                </span>
                <span className="block text-sm text-muted">a Pardubický kraj</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="scroll-mt-24 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h2 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Odborné služby
            </h2>
            <div className="mt-4 h-px w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sluzby.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-line/20 bg-white p-8 shadow-soft transition-transform duration-300 hover:-translate-y-2"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon d={s.icon} />
                </span>
                <h3 className="mb-2 text-lg font-medium text-ink">{s.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{s.desc}</p>
                <span className="mt-auto inline-block w-fit rounded-full bg-tint px-3 py-1 text-xs font-semibold text-primary-deep">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postup */}
      <section id="postup" className="scroll-mt-24 bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h2 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Jak revize probíhá
            </h2>
            <div className="mt-4 h-px w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {kroky.map((k, i) => (
              <div key={k.title} className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white shadow-soft">
                    {i + 1}
                  </span>
                  {i < kroky.length - 1 && (
                    <span className="hidden h-px flex-1 bg-line/50 md:block" />
                  )}
                </div>
                <h3 className="mb-2 font-medium text-ink">{k.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="scroll-mt-24 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Ceník revizí
            </h2>
            <div className="mt-4 h-px w-24 bg-primary" />
            <p className="mt-7 text-lg leading-relaxed text-muted">
              Ceny jsou orientační a závisí na rozsahu instalace a počtu
              měřených bodů. Přesnou nabídku dostanete předem a zdarma.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-tint p-6">
              <span className="mt-0.5 text-primary">
                <Icon d={icons.shield} />
              </span>
              <p className="text-sm leading-relaxed text-ink">
                Uvedené ceny jsou <strong>konečné</strong> — nejsem plátce DPH.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-line/20 bg-white shadow-soft">
              {cenik.map((c, i) => (
                <div
                  key={c.polozka}
                  className={`flex items-baseline justify-between gap-6 px-7 py-5 transition-colors hover:bg-tint/50 ${
                    i < cenik.length - 1 ? "border-b border-line/20" : ""
                  }`}
                >
                  <span className="font-medium text-ink">{c.polozka}</span>
                  <span className="whitespace-nowrap font-semibold text-primary">
                    {c.cena}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-primary-deep text-white shadow-soft-lg">
          <div className="grid gap-10 p-10 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Domluvme si termín revize
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/80">
                Zavolejte nebo napište — obratem dostanete orientační cenu
                a domluvíme termín, který vám vyhovuje.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={TEL_HREF}
                  className="flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-primary-deep shadow-soft transition-transform duration-300 hover:scale-105"
                >
                  <Icon d={icons.call} className="h-5 w-5" />
                  {TEL}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex w-fit items-center gap-3 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <Icon d={icons.mail} className="h-5 w-5" />
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 text-white/80">
              <div className="flex items-start gap-3">
                <Icon d={icons.pin} className="mt-1 h-5 w-5 text-white" />
                <p>
                  Tomáš Kovář
                  <br />
                  Dvořákova 2173, 560 02 Česká Třebová
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Icon d={icons.doc} className="mt-1 h-5 w-5 text-white" />
                <p>
                  IČO 29765978
                  <br />
                  Fyzická osoba podnikající · nejsem plátce DPH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line/20 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
          <span className="font-semibold text-primary">Revize Kovář</span>
          <span>
            © {new Date().getFullYear()} Tomáš Kovář · IČO 29765978 · Česká Třebová
          </span>
          <span>Bezpečnost na prvním místě.</span>
        </div>
      </footer>

      {/* Mobilní FAB */}
      <a
        href={TEL_HREF}
        aria-label="Zavolat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-soft-lg transition-transform hover:scale-105 md:hidden"
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
