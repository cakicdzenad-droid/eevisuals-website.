import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projektvorlage",
  description: "Flexible Case-Study-Vorlage für Projekte von E&E Visuals.",
};

const projects = {
  "midnight-motion": {
    de: ["Midnight Motion", "Automotive Film", "Eine cinematic Fahrzeugstudie über Licht, Form und kontrollierte Bewegung."],
    en: ["Midnight Motion", "Automotive Film", "A cinematic vehicle study shaped by light, form and controlled movement."],
    image: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?auto=format&fit=crop&fm=webp&q=82&w=2200",
  },
  "precision-in-detail": {
    de: ["Precision in Detail", "Product & Detailing", "Eine visuelle Kampagne mit Fokus auf Material, Pflege und präzise Verarbeitung."],
    en: ["Precision in Detail", "Product & Detailing", "A visual campaign focused on material, care and precise craftsmanship."],
    image: "https://images.unsplash.com/photo-1758871993077-e084cc7eca86?auto=format&fit=crop&fm=webp&q=82&w=2200",
  },
  "modern-living": {
    de: ["Modern Living", "Real Estate", "Ruhige Architekturaufnahmen mit glaubwürdiger Raumwirkung und natürlichem Licht."],
    en: ["Modern Living", "Real Estate", "Calm architectural imagery with credible space and natural light."],
    image: "https://images.unsplash.com/photo-1666877769199-bd1110d33a25?auto=format&fit=crop&fm=webp&q=82&w=2200",
  },
  "built-for-the-road": {
    de: ["Built for the Road", "Motorcycle Story", "Eine kompakte Geschichte über Maschine, Fahrer und Atmosphäre."],
    en: ["Built for the Road", "Motorcycle Story", "A focused story about the machine, the rider and the atmosphere."],
    image: "https://images.unsplash.com/photo-1695014192162-e1d282ff5b40?auto=format&fit=crop&fm=webp&q=82&w=2200",
  },
  "coastal-lines": {
    de: ["Coastal Lines", "Travel & Drone Film", "Weite Perspektiven und präzise Bewegungen für Orte und Reisegeschichten."],
    en: ["Coastal Lines", "Travel & Drone Film", "Wide perspectives and precise motion for places and travel stories."],
    image: "https://images.unsplash.com/photo-1560860464-8b8fac09b87c?auto=format&fit=crop&fm=webp&q=82&w=2200",
  },
  "crafted-identity": {
    de: ["Crafted Identity", "Business Portrait", "Authentische Portraits für einen modernen und persönlichen Markenauftritt."],
    en: ["Crafted Identity", "Business Portrait", "Authentic portraits for a modern and personal brand presence."],
    image: "https://images.unsplash.com/photo-1769636929130-56648d6e9c6d?auto=format&fit=crop&fm=webp&q=82&w=2200",
  },
} as const;

type ProjectKey = keyof typeof projects;

export default async function ProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string; lang?: string }>;
}) {
  const params = await searchParams;
  const projectKey = (params.project && params.project in projects
    ? params.project
    : "midnight-motion") as ProjectKey;
  const language = params.lang === "en" ? "en" : "de";
  const project = projects[projectKey];
  const text = project[language];
  const isEnglish = language === "en";

  return (
    <main className="subpage project-page">
      <header className="subpage-header">
        <Link className="subpage-brand" href="/#top">ƎE · E&amp;E Visuals</Link>
        <Link href="/#work">{isEnglish ? "Back to work" : "Zurück zu Arbeiten"} ←</Link>
      </header>
      <section className="project-hero">
        <p>Demo Case Study · 2026</p>
        <h1>{text[0]}</h1>
        <div>
          <span>{text[1]}</span>
          <p>{text[2]}</p>
        </div>
      </section>
      <figure className="project-page__media">
        <img src={project.image} alt={text[1] + " demo visual"} width="2200" height="1467" />
        <figcaption>{isEnglish ? "Demo image — replace before launch" : "Demo-Motiv — vor Veröffentlichung ersetzen"}</figcaption>
      </figure>
      <section className="project-story">
        <p>01 / {isEnglish ? "Challenge" : "Aufgabe"}</p>
        <h2>{isEnglish ? "A clear visual goal, translated into a focused production." : "Ein klares visuelles Ziel, übersetzt in eine fokussierte Produktion."}</h2>
        <div className="project-story__grid">
          <article>
            <span>01</span>
            <h3>{isEnglish ? "Concept" : "Konzept"}</h3>
            <p>{isEnglish ? "Define audience, use, mood and the essential sequence before production starts." : "Zielgruppe, Einsatz, Stimmung und die wesentliche Bildfolge vor der Produktion definieren."}</p>
          </article>
          <article>
            <span>02</span>
            <h3>{isEnglish ? "Production" : "Produktion"}</h3>
            <p>{isEnglish ? "Build the imagery around light, detail and a controlled rhythm on location." : "Die Bildsprache vor Ort um Licht, Detail und einen kontrollierten Rhythmus aufbauen."}</p>
          </article>
          <article>
            <span>03</span>
            <h3>{isEnglish ? "Delivery" : "Ergebnis"}</h3>
            <p>{isEnglish ? "Deliver a coherent asset set prepared for web, campaigns and social formats." : "Ein konsistentes Asset-Set für Website, Kampagne und Social-Formate bereitstellen."}</p>
          </article>
        </div>
      </section>
      <section className="project-next">
        <p>{isEnglish ? "Have a similar project?" : "Ähnliches Projekt geplant?"}</p>
        <Link href="/#contact">{isEnglish ? "Start a project" : "Projekt anfragen"} ↗</Link>
      </section>
    </main>
  );
}
