/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import VehicleMotion from "../../vehicle-motion";

export const metadata: Metadata = {
  title: "Toyota RAV4 — Open Horizon",
  description:
    "Editorial Automotive-Fotostudie eines Toyota RAV4 von E&E Visuals aus Augsburg.",
  alternates: {
    canonical: "/work/toyota-rav4",
  },
  openGraph: {
    title: "Toyota RAV4 — Open Horizon · E&E Visuals",
    description:
      "Eine natürliche SUV-Serie zwischen Wiese, Weite und wechselndem Himmel.",
    images: ["/assets/toyota-rav4/rav4-three-quarter.jpeg"],
  },
};

const copy = {
  de: {
    back: "Zurück zu Arbeiten",
    eyebrow: "SUV Editorial · Augsburg",
    titleTop: "Toyota RAV4",
    titleBottom: "Open Horizon.",
    intro:
      "Eine natürliche Automotive-Serie über Präsenz, Alltagstauglichkeit und die ruhige Stärke eines SUV in offener Landschaft.",
    motionEyebrow: "Scroll Scene · Open Horizon",
    motionTitle: "Von Weite zu Präsenz.",
    motionText:
      "Die Landschaft bleibt ruhig, während der RAV4 mit jedem Scroll-Schritt näher rückt — wie drei filmische Einstellungen derselben Fahrt.",
    motionCue: "Durch die Szene scrollen",
    meta: [
      ["Fahrzeug", "Toyota RAV4 Hybrid"],
      ["Produktion", "E&E Visuals"],
      ["Location", "Augsburg, Bayern"],
      ["Umfang", "Exterior · Editorial · Location"],
    ],
    briefLabel: "01 / Aufgabe",
    briefTitle: "Dem Fahrzeug Raum geben, ohne Präsenz zu verlieren.",
    briefOne:
      "Der RAV4 sollte nicht wie ein klassisches Studiofahrzeug wirken. Die offene Wiese und der weite Himmel stellen seine praktische, souveräne Seite in einen glaubwürdigen Kontext.",
    briefTwo:
      "Eine reduzierte Farbwelt, tiefe Perspektiven und klare Symmetrie halten die Serie ruhig. Das Fahrzeug bleibt der Fixpunkt, während Landschaft und Wolken Atmosphäre und Größe erzeugen.",
    portraitLabel: "Perspektive / Haltung",
    portraitTitle: "Ein SUV im natürlichen Kontext.",
    portraitText:
      "Die Dreiviertelansicht zeigt Form, Bodenfreiheit und Proportion. Viel negativer Raum lässt das Motiv hochwertig und editorial wirken.",
    methodLabel: "02 / Bildsprache",
    methodTitle: "Drei Motive. Ein klarer Rhythmus.",
    method: [
      ["Präsenz", "Zentrale und tiefe Blickwinkel geben dem Fahrzeug Ruhe und visuelles Gewicht."],
      ["Umgebung", "Wiese, Horizont und Wolken erzählen Einsatzgefühl, ohne das Motiv zu überladen."],
      ["Distanz", "Der Wechsel von nah zu weit macht die kurze Serie abwechslungsreich und geschlossen."],
    ],
    wideCaption: "Weite Perspektive · Fahrzeug und Landschaft als eine Komposition",
    outputLabel: "03 / Ergebnis",
    outputTitle: "Eine kompakte Serie für Web und Social Media.",
    outputText:
      "Die drei ausgewählten Motive funktionieren einzeln als Hero-Bild und gemeinsam als ruhige Fahrzeuggeschichte — glaubwürdig, klar und flexibel einsetzbar.",
    outputFacts: [
      ["Auswahl", "3 bearbeitete Fotografien"],
      ["Formate", "Portrait · Editorial Crop"],
      ["Einsatz", "Website · Social Media · Portfolio"],
    ],
    ctaLabel: "Automotive Content",
    ctaTitle: "Fahrzeuge brauchen einen passenden Kontext.",
    ctaText:
      "E&E Visuals entwickelt Foto- und Video-Serien für Autohäuser, Aufbereiter, Tuning-Betriebe und private Fahrzeugprojekte.",
    cta: "Projekt anfragen",
    next: "Drei originale Automotive Case Studies",
  },
  en: {
    back: "Back to work",
    eyebrow: "SUV Editorial · Augsburg",
    titleTop: "Toyota RAV4",
    titleBottom: "Open Horizon.",
    intro:
      "A natural automotive series about presence, everyday capability and the quiet strength of an SUV in an open landscape.",
    motionEyebrow: "Scroll scene · Open Horizon",
    motionTitle: "From distance to presence.",
    motionText:
      "The landscape stays calm while the RAV4 moves closer with every scroll step — like three cinematic shots from the same drive.",
    motionCue: "Scroll through the scene",
    meta: [
      ["Vehicle", "Toyota RAV4 Hybrid"],
      ["Production", "E&E Visuals"],
      ["Location", "Augsburg, Bavaria"],
      ["Scope", "Exterior · Editorial · Location"],
    ],
    briefLabel: "01 / Brief",
    briefTitle: "Give the vehicle space without losing presence.",
    briefOne:
      "The RAV4 was not meant to feel like a conventional studio vehicle. Open meadow and a wide sky place its practical, confident character in a credible setting.",
    briefTwo:
      "A restrained palette, low perspectives and clear symmetry keep the series calm. The vehicle remains the anchor while landscape and clouds create atmosphere and scale.",
    portraitLabel: "Perspective / Stance",
    portraitTitle: "An SUV in its natural context.",
    portraitText:
      "The three-quarter view reveals shape, ground clearance and proportion. Generous negative space gives the frame a premium editorial quality.",
    methodLabel: "02 / Visual language",
    methodTitle: "Three frames. One clear rhythm.",
    method: [
      ["Presence", "Central, low viewpoints give the vehicle calm and visual weight."],
      ["Setting", "Meadow, horizon and clouds suggest capability without overloading the frame."],
      ["Distance", "Moving from close to wide makes the short sequence varied yet coherent."],
    ],
    wideCaption: "Wide perspective · vehicle and landscape composed as one",
    outputLabel: "03 / Outcome",
    outputTitle: "A compact series for web and social media.",
    outputText:
      "The three selected frames work individually as hero images and together as a calm vehicle story — credible, clear and flexible in use.",
    outputFacts: [
      ["Selection", "3 edited photographs"],
      ["Formats", "Portrait · Editorial crop"],
      ["Use", "Website · Social Media · Portfolio"],
    ],
    ctaLabel: "Automotive Content",
    ctaTitle: "Every vehicle needs the right context.",
    ctaText:
      "E&E Visuals creates photo and video series for dealerships, detailers, tuning businesses and private automotive projects.",
    cta: "Start a project",
    next: "Three original automotive case studies",
  },
} as const;

export default async function ToyotaRav4CaseStudy({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params.lang === "en" ? "en" : "de";
  const t = copy[language];
  const otherLanguage = language === "de" ? "en" : "de";

  return (
    <main className="case-study-page case-study-page--rav4">
      <header className="subpage-header case-study-header">
        <a className="subpage-brand" href="/#top" aria-label="E&E Visuals Startseite">
          ƎE · E&amp;E Visuals
        </a>
        <nav className="case-study-header__nav" aria-label="Case Study Navigation">
          <a href={`/work/toyota-rav4?lang=${otherLanguage}`}>
            {otherLanguage.toUpperCase()}
          </a>
          <a href="/#work">{t.back} ←</a>
        </nav>
      </header>

      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="case-study-hero__topline">
          <p>{t.eyebrow}</p>
          <span>02 / 2026</span>
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
        variant="horizon"
        eyebrow={t.motionEyebrow}
        title={t.motionTitle}
        description={t.motionText}
        cue={t.motionCue}
        frames={[
          {
            src: "/assets/toyota-rav4/rav4-wide.jpeg",
            alt: "Toyota RAV4 in a wide landscape",
            position: "center 54%",
          },
          {
            src: "/assets/toyota-rav4/rav4-three-quarter.jpeg",
            alt: "Toyota RAV4 three-quarter view",
            position: "center 58%",
          },
          {
            src: "/assets/toyota-rav4/rav4-front.jpeg",
            alt: "Toyota RAV4 front view",
            position: "center 60%",
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
            src="/assets/toyota-rav4/rav4-three-quarter.jpeg"
            alt="Toyota RAV4 in Dreiviertelansicht in einer offenen Wiese"
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

      <figure className="case-study-image case-study-image--wide case-study-image--landscape-portrait">
        <img
          src="/assets/toyota-rav4/rav4-wide.jpeg"
          alt="Toyota RAV4 aus großer Distanz zwischen Wiese und dramatischem Himmel"
          loading="lazy"
          width="1024"
          height="1536"
        />
        <figcaption>{t.wideCaption}</figcaption>
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
