/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import VehicleMotion from "../../vehicle-motion";

export const metadata: Metadata = {
  title: "Audi A7 — Quiet Power",
  description:
    "Automotive-Fotostudie eines Audi A7 Sportback quattro von E&E Visuals aus Augsburg.",
  alternates: {
    canonical: "/work/audi-a7",
  },
  openGraph: {
    title: "Audi A7 — Quiet Power · E&E Visuals",
    description:
      "Eine ruhige, hochwertige Automotive-Serie zwischen klarer Form, Details und Abendlicht.",
    images: ["/assets/audi-a7/audi-a7-hero.jpeg"],
  },
};

const copy = {
  de: {
    back: "Zurück zu Arbeiten",
    eyebrow: "Automotive Photography · Augsburg",
    titleTop: "Audi A7",
    titleBottom: "Quiet Power.",
    intro:
      "Eine ruhige Automotive-Serie über klare Linien, technische Details und die souveräne Präsenz des Audi A7 Sportback.",
    motionEyebrow: "Scroll Orbit · 360°",
    motionTitle: "Eine Runde um den A7.",
    motionText:
      "Drei reale Perspektiven verschmelzen beim Scrollen zu einer ruhigen, filmischen Umrundung — von der Front über die Silhouette bis zur Lichtsignatur am Heck.",
    motionCue: "Zum Drehen scrollen",
    meta: [
      ["Fahrzeug", "Audi A7 Sportback quattro"],
      ["Produktion", "E&E Visuals"],
      ["Location", "Augsburg, Bayern"],
      ["Umfang", "Exterior · Details · Interior"],
    ],
    briefLabel: "01 / Aufgabe",
    briefTitle: "Eleganz zeigen, ohne sie zu überzeichnen.",
    briefOne:
      "Der A7 lebt von Proportion, Fläche und Zurückhaltung. Ziel war deshalb keine laute Inszenierung, sondern eine zusammenhängende Bildstrecke, die das Fahrzeug hochwertig und glaubwürdig wirken lässt.",
    briefTwo:
      "Das weiche Abendlicht, der nasse Lack und die offene Umgebung bilden einen ruhigen Gegenpol zu den präzisen Linien des Fahrzeugs. So entsteht eine Serie, die auf einer Website ebenso funktioniert wie in Social Media.",
    portraitLabel: "Frontansicht / Charakter",
    portraitTitle: "Präsenz durch Symmetrie.",
    portraitText:
      "Die tiefe Kameraposition und die zentrale Komposition geben der Front Ruhe und Gewicht. Die Umgebung bleibt sichtbar, ohne vom Fahrzeug abzulenken.",
    rearCaption: "Heckansicht · durchgehende Lichtsignatur",
    detailCaption: "Lichtsignatur / quattro Detail",
    interiorCaption: "Interior · klare Architektur und natürliche Umgebung",
    methodLabel: "02 / Bildsprache",
    methodTitle: "Eine Serie. Drei visuelle Ebenen.",
    method: [
      ["Form", "Weite Perspektiven zeigen Silhouette, Proportion und Haltung des Fahrzeugs."],
      ["Signatur", "Gezielte Details machen Lichtgrafik, Material und quattro-Charakter sichtbar."],
      ["Atmosphäre", "Landschaft, Wolken und Abendlicht geben der Serie einen eigenen Ort und Ton."],
    ],
    outputLabel: "03 / Ergebnis",
    outputTitle: "Sechs Motive, als eine Geschichte gedacht.",
    outputText:
      "Die Auswahl verbindet Hero-Aufnahmen, klare Fahrzeugansichten und Details zu einem flexiblen Set für Portfolio, Website und Social Media.",
    outputFacts: [
      ["Auswahl", "6 bearbeitete Fotografien"],
      ["Formate", "Landscape · Portrait · Detail"],
      ["Einsatz", "Website · Social Media · Portfolio"],
    ],
    ctaLabel: "Automotive Content",
    ctaTitle: "Ihr Fahrzeug verdient mehr als ein schnelles Foto.",
    ctaText:
      "E&E Visuals produziert hochwertige Foto- und Video-Inhalte für Autohäuser, Aufbereiter, Tuning-Betriebe und private Fahrzeugprojekte.",
    cta: "Projekt anfragen",
    next: "Nächstes Projekt in Vorbereitung",
  },
  en: {
    back: "Back to work",
    eyebrow: "Automotive Photography · Augsburg",
    titleTop: "Audi A7",
    titleBottom: "Quiet Power.",
    intro:
      "A calm automotive series built around clean lines, technical details and the confident presence of the Audi A7 Sportback.",
    motionEyebrow: "Scroll orbit · 360°",
    motionTitle: "One turn around the A7.",
    motionText:
      "Three real perspectives blend into a calm cinematic orbit as you scroll — from the front, through the silhouette, to the rear light signature.",
    motionCue: "Scroll to rotate",
    meta: [
      ["Vehicle", "Audi A7 Sportback quattro"],
      ["Production", "E&E Visuals"],
      ["Location", "Augsburg, Bavaria"],
      ["Scope", "Exterior · Details · Interior"],
    ],
    briefLabel: "01 / Brief",
    briefTitle: "Show elegance without overstating it.",
    briefOne:
      "The A7 is defined by proportion, surface and restraint. The goal was not a loud presentation, but a coherent image sequence that makes the car feel premium and credible.",
    briefTwo:
      "Soft evening light, rain-darkened paint and the open setting create a quiet counterpoint to the precise lines of the vehicle. The result is a series designed to work across websites and social media.",
    portraitLabel: "Front view / Character",
    portraitTitle: "Presence through symmetry.",
    portraitText:
      "A low camera position and central composition give the front end calm and visual weight. The setting remains visible without competing with the car.",
    rearCaption: "Rear view · continuous light signature",
    detailCaption: "Light signature / quattro detail",
    interiorCaption: "Interior · clear architecture in a natural setting",
    methodLabel: "02 / Visual language",
    methodTitle: "One series. Three visual layers.",
    method: [
      ["Form", "Wide perspectives reveal the silhouette, proportions and stance of the vehicle."],
      ["Signature", "Focused details make the light graphic, materials and quattro character visible."],
      ["Atmosphere", "Landscape, clouds and evening light give the series its own place and tone."],
    ],
    outputLabel: "03 / Outcome",
    outputTitle: "Six images, conceived as one story.",
    outputText:
      "The selection combines hero frames, clear vehicle views and details into a flexible set for portfolio, website and social media.",
    outputFacts: [
      ["Selection", "6 edited photographs"],
      ["Formats", "Landscape · Portrait · Detail"],
      ["Use", "Website · Social Media · Portfolio"],
    ],
    ctaLabel: "Automotive Content",
    ctaTitle: "Your vehicle deserves more than a quick photo.",
    ctaText:
      "E&E Visuals produces premium photo and video content for dealerships, detailers, tuning businesses and private automotive projects.",
    cta: "Start a project",
    next: "Next project in production",
  },
} as const;

export default async function AudiA7CaseStudy({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params.lang === "en" ? "en" : "de";
  const t = copy[language];
  const otherLanguage = language === "de" ? "en" : "de";

  return (
    <main className="case-study-page">
      <header className="subpage-header case-study-header">
        <a className="subpage-brand" href="/#top" aria-label="E&E Visuals Startseite">
          ƎE · E&amp;E Visuals
        </a>
        <nav className="case-study-header__nav" aria-label="Case Study Navigation">
          <a href={`/work/audi-a7?lang=${otherLanguage}`}>
            {otherLanguage.toUpperCase()}
          </a>
          <a href="/#work">{t.back} ←</a>
        </nav>
      </header>

      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="case-study-hero__topline">
          <p>{t.eyebrow}</p>
          <span>01 / 2026</span>
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
        variant="orbit"
        eyebrow={t.motionEyebrow}
        title={t.motionTitle}
        description={t.motionText}
        cue={t.motionCue}
        frames={[
          {
            src: "/assets/audi-a7/audi-a7-front.jpeg",
            alt: "Audi A7 front view",
            position: "center 58%",
          },
          {
            src: "/assets/audi-a7/audi-a7-hero.jpeg",
            alt: "Audi A7 three-quarter rear view",
            position: "center 54%",
          },
          {
            src: "/assets/audi-a7/audi-a7-rear.jpeg",
            alt: "Audi A7 rear view",
            position: "center 54%",
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
            src="/assets/audi-a7/audi-a7-front.jpeg"
            alt="Zentrale Frontansicht eines grauen Audi A7 Sportback"
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

      <figure className="case-study-image case-study-image--wide">
        <img
          src="/assets/audi-a7/audi-a7-rear.jpeg"
          alt="Heckansicht des Audi A7 Sportback mit leuchtendem LED-Lichtband"
          loading="lazy"
          width="1536"
          height="1024"
        />
        <figcaption>{t.rearCaption}</figcaption>
      </figure>

      <section className="case-study-detail-grid" aria-label={t.detailCaption}>
        <figure className="case-study-image">
          <img
            src="/assets/audi-a7/audi-a7-taillight.jpeg"
            alt="Detailaufnahme der roten LED-Rückleuchte des Audi A7"
            loading="lazy"
            width="1536"
            height="1024"
          />
        </figure>
        <figure className="case-study-image">
          <img
            src="/assets/audi-a7/audi-a7-quattro.jpeg"
            alt="Nahaufnahme des quattro-Schriftzugs am Audi A7"
            loading="lazy"
            width="1536"
            height="1024"
          />
        </figure>
        <p>{t.detailCaption}</p>
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

      <figure className="case-study-image case-study-image--interior">
        <img
          src="/assets/audi-a7/audi-a7-interior.jpeg"
          alt="Moderner Innenraum des Audi A7 mit Blick auf Wasser und Abendhimmel"
          loading="lazy"
          width="1536"
          height="1024"
        />
        <figcaption>{t.interiorCaption}</figcaption>
      </figure>

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
