const TEL = "+420 734 721 364";
const TEL_HREF = "tel:+420734721364";
const EMAIL = "tomaskovar154@seznam.cz";

const sluzby = [
  {
    num: "01",
    title: "Revize elektrických spotřebičů a nářadí",
    desc: "Pravidelné kontroly a revize přenosných spotřebičů a elektrického ručního nářadí — kanceláře, dílny, provozy. Označení štítkem a evidence termínů dalších revizí.",
    norma: "ČSN 33 1600 ed. 2",
  },
  {
    num: "02",
    title: "Revize elektroinstalací",
    desc: "Výchozí i pravidelné revize elektrických instalací bytů, rodinných domů a provozoven. Měření izolačních odporů, impedance poruchové smyčky a proudových chráničů.",
    norma: "ČSN 33 2000-6 ed. 2",
  },
  {
    num: "03",
    title: "Revize hromosvodů (LPS)",
    desc: "Výchozí a pravidelné revize systémů ochrany před bleskem. Kontrola jímací soustavy a svodů, měření zemního odporu uzemňovací soustavy.",
    norma: "ČSN EN 62305",
  },
  {
    num: "04",
    title: "Revizní zprávy a poradenství",
    desc: "Ke každé revizi kompletní revizní zpráva pro pojišťovnu, úřady i vlastní evidenci. Návrh odstranění zjištěných závad a hlídání termínů příštích revizí.",
    norma: "výstup ke každé revizi",
  },
];

const kroky = [
  {
    title: "Poptávka a termín",
    desc: "Zavoláte nebo napíšete, popíšete rozsah. Obratem dostanete orientační cenu a domluvíme termín.",
  },
  {
    title: "Prohlídka na místě",
    desc: "Vizuální kontrola instalace, spotřebičů nebo hromosvodu podle příslušné normy.",
  },
  {
    title: "Měření",
    desc: "Měření kalibrovanými přístroji v rozsahu, který norma pro daný typ revize předepisuje.",
  },
  {
    title: "Revizní zpráva",
    desc: "Do několika dnů obdržíte revizní zprávu včetně naměřených hodnot a případných doporučení.",
  },
];

const cenik = [
  { polozka: "Revize elektrického spotřebiče", cena: "od 150 Kč / ks" },
  { polozka: "Revize elektroinstalace bytu", cena: "od 1 900 Kč" },
  { polozka: "Revize elektroinstalace rodinného domu", cena: "od 2 900 Kč" },
  { polozka: "Revize hromosvodu", cena: "od 1 500 Kč" },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-ink pb-4">
      <span className="font-mono text-sm text-muted">{index}</span>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Navigace */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center bg-ink">
              <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
                <path d="M18 4 8 18h6l-2 10 12-15h-7z" fill="#ffd400" />
              </svg>
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
              Revize Kovář
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#sluzby" className="text-muted transition hover:text-ink">Služby</a>
            <a href="#prubeh" className="text-muted transition hover:text-ink">Průběh</a>
            <a href="#cenik" className="text-muted transition hover:text-ink">Ceník</a>
            <a href="#kontakt" className="text-muted transition hover:text-ink">Kontakt</a>
            <a href={TEL_HREF} className="font-mono text-sm font-medium">
              {TEL}
            </a>
          </nav>
          <a href={TEL_HREF} className="font-mono text-sm font-medium md:hidden">
            {TEL}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pb-20 sm:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Revizní technik · elektro & LPS · Česká Třebová
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
            Revize elektrických zařízení{" "}
            <span className="whitespace-nowrap bg-accent px-2">a hromosvodů</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Spotřebiče, elektroinstalace i ochrana před bleskem — změřeno
            kalibrovanými přístroji, doloženo revizní zprávou. Pro domácnosti,
            firmy i správce budov.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={TEL_HREF}
              className="bg-ink px-7 py-3.5 font-medium text-paper transition hover:bg-black"
            >
              Zavolat {TEL}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="border border-ink px-7 py-3.5 font-medium transition hover:bg-accent"
            >
              Napsat e-mail
            </a>
          </div>

          <dl className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              ["Působnost", "Českotřebovsko a Pardubický kraj"],
              ["Výstup", "Revizní zpráva do několika dnů"],
              ["IČO", "29765978 · nejsem plátce DPH"],
            ].map(([k, v]) => (
              <div key={k} className="bg-paper px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {k}
                </dt>
                <dd className="mt-1.5 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <SectionLabel index="01" title="Služby" />
          <div>
            {sluzby.map((s) => (
              <div
                key={s.num}
                className="grid gap-3 border-b border-line py-7 transition hover:bg-white sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-sm text-muted">{s.num}</span>
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-medium">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.desc}</p>
                </div>
                <span className="h-fit whitespace-nowrap border border-line bg-white px-3 py-1 font-mono text-xs text-muted">
                  {s.norma}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Průběh */}
      <section id="prubeh" className="scroll-mt-20 border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <SectionLabel index="02" title="Jak revize probíhá" />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {kroky.map((k, i) => (
              <div key={k.title} className="border-t-2 border-ink pt-5">
                <span className="font-mono text-sm text-muted">
                  krok {i + 1} / 4
                </span>
                <h3 className="mt-2 font-display text-lg font-medium">{k.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <SectionLabel index="03" title="Orientační ceník" />
          <div className="mt-2 max-w-3xl">
            {cenik.map((c) => (
              <div
                key={c.polozka}
                className="flex items-baseline justify-between gap-6 border-b border-line py-5"
              >
                <span className="font-medium">{c.polozka}</span>
                <span className="whitespace-nowrap font-mono text-sm">{c.cena}</span>
              </div>
            ))}
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Konečná cena závisí na rozsahu — přesnou nabídku dostanete předem
              a zdarma. Nejsem plátce DPH, uvedené ceny jsou konečné.
            </p>
          </div>
        </div>
      </section>

      {/* O mně */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <SectionLabel index="04" title="O mně" />
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-muted">
            <p>
              Jmenuji se Tomáš Kovář a revizím elektrických zařízení a hromosvodů
              se věnuji v České Třebové a okolí. Zakládám si na poctivé práci:
              co změřím, to najdete ve zprávě, a o stavu zařízení se dozvíte
              na rovinu — včetně toho, co odstranit hned a co počká.
            </p>
            <p>
              Termíny držím krátké a revizní zprávu dostanete do několika dnů
              od měření, ne za měsíc.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-20 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            05 · Kontakt
          </p>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-5xl">
            Domluvme si termín revize.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <a
                href={TEL_HREF}
                className="block font-display text-2xl font-medium underline decoration-accent decoration-2 underline-offset-8 transition hover:text-accent sm:text-3xl"
              >
                {TEL}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block font-display text-2xl font-medium underline decoration-accent decoration-2 underline-offset-8 transition hover:text-accent sm:text-3xl"
              >
                {EMAIL}
              </a>
            </div>
            <div className="font-mono text-sm leading-7 text-paper/70">
              Tomáš Kovář
              <br />
              Dvořákova 2173, 560 02 Česká Třebová
              <br />
              IČO 29765978 · fyzická osoba podnikající
              <br />
              Nejsem plátce DPH
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-paper/15 px-5 py-6 font-mono text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Tomáš Kovář · IČO 29765978</span>
          <span>revize-kovar.cz · Česká Třebová</span>
        </div>
      </footer>

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
