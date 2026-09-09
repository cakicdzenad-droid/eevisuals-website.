/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import VehicleMotion from "../../vehicle-motion";

export const metadata: Metadata = {
  title: "Sportbike — Urban Redline",
  description:
    "Kompakte Motorcycle-Fotostudie von E&E Visuals aus Augsburg.",
  alternates: {
    canonical: "/work/sportbike",
  },
  openGraph: {
    title: "Sportbike — Urban Redline · E&E Visuals",
    description:
      "Eine urbane Motorcycle-Studie zwischen markanter Front, rotem Lack und technischem Detail.",
    images: ["/assets/sportbike/sportbike-front.jpeg"],
  },
};

const copy = {
  de: {
    back: "Zurück zu Arbeiten",
    eyebrow: "Motorcycle Editorial · Augsburg",
    titleTop: "Sportbike",
    titleBottom: "Urban Redline.",
    intro:
      "Eine kompakte urbane Studie über Spannung, technische Details und die aggressive Silhouette eines individuellen Sportbikes.",
    motionEyebrow: "Scroll Transition · Redline",
    motionTitle: "Technik trifft Silhouette.",
    motionText:
      "Eine präzise rote Linie zieht beim Scrollen über das Bild und wechselt von der tiefen Heckperspektive zur direkten Frontansicht.",
    motionCue: "Redline bewegen",
    meta: [
      ["Motiv", "Custom Sportbike"],
      ["Produktion", "E&E Visuals"],
      ["Location", "Augsburg, Bayern"],
      ["Umfang", "Exterior · Detail · Editorial"],
    ],
    briefLabel: "01 / Aufgabe",
    briefTitle: "Charakter zeigen, auch wenn der Raum begrenzt ist.",
    briefOne:
      "Die urbane Umgebung war kein neutraler Hintergrund, sondern Teil der Geschichte. Linien, Fassaden und Asphalt rahmen die Maschine ein und verankern sie sichtbar im Alltag.",
    briefTwo:
      "Statt eine große Serie vorzutäuschen, konzentriert sich diese Studie bewusst auf zwei starke Perspektiven: eine klare Frontansicht und einen tiefen Blick entlang von Heck, Antrieb und rotem Bodywork.",
    portraitLabel: "Front / Identität",
    portraitTitle: "Direkt, technisch, kompromisslos.",
    portraitText:
      "Die schräge Frontansicht betont Scheinwerfer, Verkleidung und Haltung. Der ruhige Hintergrund lässt Schwarz, Rot und Metall klar voneinander absetzen.",
    methodLabel: "02 / Bildsprache",
    methodTitle: "Zwei Perspektiven. Ein klarer Charakter.",
    method: [
      ["Silhouette", "Ein niedriger Blickwinkel verdichtet Form und Haltung zu einem starken ersten Eindruck."],
      ["Technik", "Kette, Reifen und Verkleidung machen Material, Gebrauch und Individualität sichtbar."],
      ["Farbe", "Rot, Schwarz und warme Abendtöne halten beide Motive visuell zusammen."],
    ],
    outputLabel: "03 / Ergebnis",
    outputTitle: "Eine kurze Story, die nicht größer tut als sie ist.",
    outputText:
      "Die Auswahl zeigt, wie bereits zwei bewusst unterschiedliche Bilder als Titelmotiv und Detailaufnahme zusammen funktionieren — ideal für Portfolio, Social Media oder den Einstieg in eine größere Fahrzeugserie.",
    outputFacts: [
      ["Auswahl", "2 bearbeitete Fotografien"],
      ["Formate", "Landscape · Portrait"],
      ["Einsatz", "Website · Social Media · Portfolio"],
    ],
    ctaLabel: "Motorcycle Content",
    ctaTitle: "Jede Maschine hat eine eigene visuelle Sprache.",
    ctaText:
      "E&E Visuals produziert charakterstarke Foto- und Video-Inhalte für Motorräder, Werkstätten, Händler und individuelle Umbauten.",
    cta: "Projekt anfragen",
    next: "Drei originale Automotive Case Studies",
  },
  en: {
    back: "Back to work",
    eyebrow: "Motorcycle Editorial · Augsburg",
    titleTop: "Sportbike",
    titleBottom: "Urban Redline.",
    intro:
      "A compact urban study built around tension, technical detail and the aggressive silhouette of an individual sportbike.",
    motionEyebrow: "Scroll transition · Redline",
    motionTitle: "Mechanics meet silhouette.",
    motionText:
      "A precise red line travels across the frame as you scroll, shifting from the low rear perspective to the direct front view.",
    motionCue: "Move the redline",
    meta: [
      ["Subject", "Custom Sportbike"],
      ["Production", "E&E Visuals"],
      ["Location", "Augsburg, Bavaria"],
      ["Scope", "Exterior · Detail · Editorial"],
    ],
    briefLabel: "01 / Brief",
    briefTitle: "Reveal character, even when space is limited.",
    briefOne:
      "The urban setting is not a neutral backdrop but part of the story. Lines, façades and asphalt frame the machine and place it visibly in everyday life.",
    briefTwo:
      "Rather than pretending this is a large series, the study deliberately focuses on two strong perspectives: a direct front view and a low line through the tail, drivetrain and red bodywork.",
    portraitLabel: "Front / Identity",
    portraitTitle: "Direct, technical, uncompromising.",
    portraitText:
      "The angled front view emphasizes the light, fairing and stance. A calm background keeps black, red and metal clearly separated.",
    methodLabel: "02 / Visual language",
    methodTitle: "Two perspectives. One clear character.",
    method: [
      ["Silhouette", "A low viewpoint compresses shape and stance into a strong first impression."],
      ["Mechanics", "Chain, tyre and fairing reveal material, use and individuality."],
      ["Colour", "Red, black and warm evening tones visually connect both frames."],
    ],
    outputLabel: "03 / Outcome",
    outputTitle: "A short story that stays honest about its scale.",
    outputText:
      "The selection shows how two deliberately different images can work together as a hero frame and technical detail — ideal for a portfolio, social media or the beginning of a larger vehicle series.",
    outputFacts: [
      ["Selection", "2 edited photographs"],
      ["Formats", "Landscape · Portrait"],
      ["Use", "Website · Social Media · Portfolio"],
    ],
    ctaLabel: "Motorcycle Content",
    ctaTitle: "Every machine has its own visual language.",
    ctaText:
      "E&E Visuals produces character-led photo and video content for motorcycles, workshops, dealerships and individual builds.",
    cta: "Start a project",
    next: "Three original automotive case studies",
  },
} as const;

export default async function SportbikeCaseStudy({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params.lang === "en" ? "en" : "de";
  const t = copy[language];
  const otherLanguage = language === "de" ? "en" : "de";

  return (
    <main className="case-study-page case-study-page--sportbike">
      <header className="subpage-header case-study-header">
        <a className="subpage-brand" href="/#top" aria-label="E&E Visuals Startseite">
          ƎE · E&amp;E Visuals
        </a>
        <nav className="case-study-header__nav" aria-label="Case Study Navigation">
          <a href={`/work/sportbike?lang=${otherLanguage}`}>
            {otherLanguage.toUpperCase()}
          </a>
          <a href="/#work">{t.back} ←</a>
        </nav>
      </header>

      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="case-study-hero__topline">
          <p>{t.eyebrow}</p>
          <span>03 / 2026</span>
        </div>
        <h1 id="case-study-title">
          <span>{t.titleTop}</span>
          <span>{t.titleBottom}</span>
        </h1>
        <div className="case-study-hero__summary">
          <p>{t.intro}</p>
          <dl>
            {t.meta.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <VehicleMotion
        variant="redline"
        eyebrow={t.motionEyebrow}
        title={t.motionTitle}
        description={t.motionText}
        cue={t.motionCue}
        frames={[
          {
            src: "/assets/sportbike/sportbike-rear.jpeg",
            alt: "Sportbike from a low rear perspective",
            position: "center 58%",
          },
          {
            src: "/assets/sportbike/sportbike-front.jpeg",
            alt: "Sportbike front view",
            position: "center 58%",
          },
        ]}
      />

      <section className="case-study-brief">
        <p className="case-study-label">{t.briefLabel}</p>
        <div>
          <h2>{t.briefTitle}</h2>
          <div className="case-study-brief__copy">
            <p>{t.briefOne}</p>
            <p>{t.briefTwo}</p>
          </div>
        </div>
      </section>

      <section className="case-study-portrait-block">
        <figure className="case-study-image case-study-image--portrait">
          <img
            src="/assets/sportbike/sportbike-front.jpeg"
            alt="Schwarzes und rotes Sportmotorrad in einer urbanen Umgebung"
            loading="lazy"
            width="1024"
            height="1536"
          />
        </figure>
        <aside>
          <p className="case-study-label">{t.portraitLabel}</p>
          <h2>{t.portraitTitle}</h2>
          <p>{t.portraitText}</p>
          <span aria-hidden="true">↘</span>
        </aside>
      </section>

      <section className="case-study-method">
        <div className="case-study-method__heading">
          <p className="case-study-label">{t.methodLabel}</p>
          <h2>{t.methodTitle}</h2>
        </div>
        <div className="case-study-method__grid">
          {t.method.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-output">
        <div>
          <p className="case-study-label">{t.outputLabel}</p>
          <h2>{t.outputTitle}</h2>
          <p>{t.outputText}</p>
        </div>
        <dl>
          {t.outputFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-study-cta">
        <p className="case-study-label">{t.ctaLabel}</p>
        <h2>{t.ctaTitle}</h2>
        <div>
          <p>{t.ctaText}</p>
          <a href="/#contact">{t.cta} ↗</a>
        </div>
      </section>

      <footer className="case-study-footer">
        <a href="/#top">ƎE · E&amp;E Visuals</a>
        <span>{t.next}</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
