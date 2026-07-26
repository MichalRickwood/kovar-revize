import Image from "next/image";

const sluzby = [
  {
    title: "Revize elektrických spotřebičů a nářadí",
    desc: "Pravidelné kontroly a revize spotřebičů dle ČSN 33 1600 ed. 2 — od rychlovarné konvice po průmyslovou vrtačku. Štítek, protokol, klid v duši.",
    icon: "🔌",
  },
  {
    title: "Revize elektroinstalací",
    desc: "Výchozí i pravidelné revize elektroinstalací bytů, domů a provozoven. Měření izolačních odporů, impedance smyčky, proudových chráničů.",
    icon: "⚡",
  },
  {
    title: "Revize hromosvodů (LPS)",
    desc: "Kontroly a revize systémů ochrany před bleskem dle ČSN EN 62305. Změřím zemniče, zkontroluju svody a jímače — ať vás blesk nepřekvapí.",
    icon: "🌩️",
  },
  {
    title: "Revizní zprávy a poradenství",
    desc: "Ke každé revizi kompletní revizní zpráva pro pojišťovnu, úřady i klidný spánek. Poradím s odstraněním závad i s termíny dalších revizí.",
    icon: "📋",
  },
];

const kroky = [
  {
    title: "Objednávka",
    desc: "Ozvete se mi a domluvíme termín. Přijedu kamkoli po Českotřebovsku a okolí.",
  },
  {
    title: "Prohlídka",
    desc: "Projdu instalaci, spotřebiče nebo hromosvod. Nic mi neunikne — ani vaše máma.",
  },
  {
    title: "Měření",
    desc: "Profesionálními přístroji změřím vše, co norma žádá. Čísla nelžou.",
  },
  {
    title: "Revizní zpráva",
    desc: "Do pár dnů dostanete kompletní revizní zprávu se štítky a doporučeními.",
  },
];

const cenik = [
  { polozka: "Revize elektrického spotřebiče", cena: "od 150 Kč / ks" },
  { polozka: "Revize elektroinstalace bytu", cena: "od 1 900 Kč" },
  { polozka: "Revize elektroinstalace rodinného domu", cena: "od 2 900 Kč" },
  { polozka: "Revize hromosvodu", cena: "od 1 500 Kč" },
  { polozka: "Ohnutí mámy", cena: "v ceně revize" },
];

export default function Home() {
  return (
    <main>
      {/* Navigace */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-lg">
              ⚡
            </span>
            Revize Kovář
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#sluzby" className="hover:text-accent-dark">Služby</a>
            <a href="#prubeh" className="hover:text-accent-dark">Jak to probíhá</a>
            <a href="#cenik" className="hover:text-accent-dark">Ceník</a>
            <a href="#o-mne" className="hover:text-accent-dark">O mně</a>
            <a
              href="#kontakt"
              className="rounded-md bg-accent px-3 py-1.5 text-white transition hover:bg-accent-dark"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
              Revizní technik · Česká Třebová a okolí
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Udělám vám revizi
              <br />
              <span className="text-accent">a ohnu vám mámu.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-300">
              Revize elektrických spotřebičů, elektroinstalací a hromosvodů.
              Rychle, poctivě a s úsměvem, který vidíte na fotce.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-dark"
              >
                Objednat revizi
              </a>
              <a
                href="#sluzby"
                className="rounded-md border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-accent hover:text-accent"
              >
                Co všechno zrevidují
              </a>
            </div>
          </div>
          <figure className="justify-self-center">
            <Image
              src="/tomas.jpg"
              alt="Tomáš Kovář, revizní technik, při práci s profesionálním měřicím přístrojem"
              width={380}
              height={506}
              priority
              className="rounded-2xl border-4 border-accent shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-400">
              Revizní technik při kalibraci měřicího přístroje (1600 W)
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Služby</h2>
        <p className="mt-2 text-slate-600">
          Kompletní revizní činnost pro domácnosti, firmy i bytová družstva.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {sluzby.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:border-accent hover:shadow-md"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jak to probíhá */}
      <section id="prubeh" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold">Jak revize probíhá</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kroky.map((k, i) => (
              <div key={k.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold">{k.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Orientační ceník</h2>
        <p className="mt-2 text-slate-600">
          Konečná cena vždy podle rozsahu — přesnou nabídku dostanete předem a zdarma.
        </p>
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
          {cenik.map((c, i) => (
            <div
              key={c.polozka}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${
                i % 2 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <span>{c.polozka}</span>
              <span className="whitespace-nowrap font-semibold text-accent-dark">
                {c.cena}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Nejsem plátce DPH — uvedené ceny jsou konečné.
        </p>
      </section>

      {/* O mně */}
      <section id="o-mne" className="scroll-mt-20 bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold">O mně</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-slate-300">
            <p>
              Jmenuji se Tomáš Kovář a elektřina mě přitahuje odmalička — naštěstí
              už jen profesně. Revizím elektrických zařízení a hromosvodů se věnuji
              na Českotřebovsku a v celém Pardubickém kraji.
            </p>
            <p>
              Ke každé zakázce přistupuji poctivě: co změřím, to do zprávy napíšu,
              a co nefunguje, to vám na rovinu řeknu. Žádné vymyšlené závady kvůli
              vícepracím, žádné čekání měsíc na protokol.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Kontakt</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div className="space-y-1 text-slate-700">
            <p className="text-lg font-semibold text-ink">Tomáš Kovář</p>
            <p>Dvořákova 2173</p>
            <p>560 02 Česká Třebová</p>
            <p className="pt-2">IČO: 29765978</p>
            <p>Fyzická osoba podnikající dle živnostenského zákona</p>
            <p>Nejsem plátce DPH</p>
          </div>
          <div className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Telefon a e-mail doplníme, jakmile Tomáš zvedne hlavu od fénu.
            Do té doby funguje osvědčená metoda: zastavte se osobně.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Tomáš Kovář · IČO 29765978 · revize-kovar.cz
        </p>
        <p className="mt-1">Revize elektro a hromosvodů · Česká Třebová</p>
      </footer>
    </main>
  );
}
