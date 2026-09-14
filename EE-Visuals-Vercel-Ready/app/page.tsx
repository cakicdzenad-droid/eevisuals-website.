"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "de" | "en";
type ProjectKind = "image" | "gallery" | "video";
type ProjectLayout = "feature" | "wide" | "tall" | "square";

type LocalizedProject = {
  category: string;
  title: string;
  description: string;
  location: string;
};

type Project = {
  id: string;
  cover: string;
  gallery?: string[];
  kind: ProjectKind;
  layout: ProjectLayout;
  year: string;
  copy: Record<Language, LocalizedProject>;
};

const INSTAGRAM_URL = "https://www.instagram.com/eande.visuals/";
const YOUTUBE_URL = "https://youtu.be/Wp6_leuJ854";
const YOUTUBE_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/Wp6_leuJ854?autoplay=1&rel=0";
const YOUTUBE_THUMBNAIL_URL =
  "https://i.ytimg.com/vi/Wp6_leuJ854/maxresdefault.jpg";
const BRAND_LOGO = "/assets/brand/eevisuals-logo-instagram.jpg";

const projects: Project[] = [
  {
    id: "golf-vi-gti",
    cover: YOUTUBE_THUMBNAIL_URL,
    kind: "video",
    layout: "feature",
    year: "2026",
    copy: {
      de: {
        category: "Automotive Film",
        title: "Golf VI GTI — Red Instinct",
        description:
          "Ein kurzer Automotive Film über Bewegung, Sound und die zeitlose Präsenz eines roten Golf VI GTI.",
        location: "Augsburg",
      },
      en: {
        category: "Automotive Film",
        title: "Golf VI GTI — Red Instinct",
        description:
          "A short automotive film shaped around motion, sound and the timeless presence of a red Golf VI GTI.",
        location: "Augsburg",
      },
    },
  },
  {
    id: "porsche-circuit-motion",
    cover: "/assets/instagram/porsche-panning-01.jpg",
    kind: "image",
    layout: "tall",
    year: "2026",
    copy: {
      de: {
        category: "Motorsport Photography",
        title: "Porsche — Circuit Motion",
        description:
          "Ein klassischer Porsche im Mitzieher. Die Karosserie bleibt präzise, während die Strecke zu reiner Geschwindigkeit wird.",
        location: "Salzburgring",
      },
      en: {
        category: "Motorsport Photography",
        title: "Porsche — Circuit Motion",
        description:
          "A classic Porsche captured in a pan. The body stays precise while the circuit dissolves into pure speed.",
        location: "Salzburgring",
      },
    },
  },
  {
    id: "toyota-rav4-open-horizon",
    cover: "/assets/toyota-rav4/rav4-three-quarter.jpeg",
    gallery: [
      "/assets/toyota-rav4/rav4-three-quarter.jpeg",
      "/assets/toyota-rav4/rav4-wide.jpeg",
      "/assets/toyota-rav4/rav4-front.jpeg",
      "/assets/instagram/instagram-05-DbDOxllDDqT.jpg",
    ],
    kind: "gallery",
    layout: "wide",
    year: "2026",
    copy: {
      de: {
        category: "SUV Editorial",
        title: "Toyota RAV4 — Open Horizon",
        description:
          "Fahrzeug, Wiese und ein wechselnder Himmel. Eine ruhige Bildserie, die den RAV4 glaubwürdig in seine Umgebung setzt.",
        location: "Bayern",
      },
      en: {
        category: "SUV Editorial",
        title: "Toyota RAV4 — Open Horizon",
        description:
          "Vehicle, meadow and a changing sky. A quiet image series that places the RAV4 naturally inside its environment.",
        location: "Bavaria",
      },
    },
  },
  {
    id: "porsche-geometry",
    cover: "/assets/instagram/instagram-02-Dcnb7JLssy7.jpg",
    kind: "image",
    layout: "square",
    year: "2026",
    copy: {
      de: {
        category: "Automotive Detail",
        title: "Porsche 911 — Geometry",
        description:
          "Von oben wird der 911 zur grafischen Form. Felge, Reflexion und Silhouette erzählen seinen Charakter im Detail.",
        location: "Bayern",
      },
      en: {
        category: "Automotive Detail",
        title: "Porsche 911 — Geometry",
        description:
          "From above, the 911 becomes a graphic form. Wheel, reflection and silhouette reveal its character in detail.",
        location: "Bavaria",
      },
    },
  },
  {
    id: "salzburgring-before-the-corner",
    cover: "/assets/instagram/instagram-03-DciKTSVs7Vu.jpg",
    kind: "image",
    layout: "square",
    year: "2026",
    copy: {
      de: {
        category: "Track Story",
        title: "Before The Corner",
        description:
          "Distanz, Asphalt und eine klare Linie lassen die Strecke atmen, bevor das Fahrzeug den Bildraum durchschneidet.",
        location: "Salzburgring",
      },
      en: {
        category: "Track Story",
        title: "Before The Corner",
        description:
          "Distance, asphalt and a clean line let the circuit breathe before the car cuts through the frame.",
        location: "Salzburgring",
      },
    },
  },
  {
    id: "bmw-speed-study",
    cover: "/assets/instagram/instagram-04-DcMLt2jMUjU.jpg",
    kind: "image",
    layout: "wide",
    year: "2026",
    copy: {
      de: {
        category: "Rolling Shot",
        title: "BMW — Speed Study",
        description:
          "Der Hintergrund löst sich in Bewegung auf, während Fahrzeug und Fahrer im entscheidenden Moment stabil bleiben.",
        location: "Bayern",
      },
      en: {
        category: "Rolling Shot",
        title: "BMW — Speed Study",
        description:
          "The background dissolves into motion while car and driver remain composed at the decisive moment.",
        location: "Bavaria",
      },
    },
  },
  {
    id: "track-pulse",
    cover: "/assets/instagram/instagram-06-DcYCo4_DA5T.jpg",
    kind: "image",
    layout: "wide",
    year: "2026",
    copy: {
      de: {
        category: "Motorsport",
        title: "Track Pulse",
        description:
          "Blau, Rot und Geschwindigkeit setzen einen lauten Akzent in einer Serie, die vom Rhythmus der Strecke lebt.",
        location: "Salzburgring",
      },
      en: {
        category: "Motorsport",
        title: "Track Pulse",
        description:
          "Blue, red and speed create a loud accent in a series driven by the rhythm of the circuit.",
        location: "Salzburgring",
      },
    },
  },
  {
    id: "kia-beyond-the-road",
    cover: "/assets/instagram/instagram-07-DcJe2QKs-jk.jpg",
    kind: "image",
    layout: "tall",
    year: "2026",
    copy: {
      de: {
        category: "Commercial Automotive",
        title: "Kia Sorento — Beyond The Road",
        description:
          "Staub, Stein und direkte Perspektive zeigen ein SUV dort, wo Funktion sichtbar und glaubwürdig wird.",
        location: "Bayern",
      },
      en: {
        category: "Commercial Automotive",
        title: "Kia Sorento — Beyond The Road",
        description:
          "Dust, stone and a direct perspective place the SUV where capability becomes visible and credible.",
        location: "Bavaria",
      },
    },
  },
  {
    id: "eclipse-afterlight",
    cover: "/assets/instagram/instagram-09-Db9NbNgMyw_.jpg",
    kind: "image",
    layout: "tall",
    year: "2026",
    copy: {
      de: {
        category: "Landscape / Astro",
        title: "Afterlight",
        description:
          "Ein schmaler Lichtrest über der Silhouette. Für wenige Minuten wird der Himmel selbst zum Motiv.",
        location: "Augsburg",
      },
      en: {
        category: "Landscape / Astro",
        title: "Afterlight",
        description:
          "A narrow trace of light above the silhouette. For a few minutes, the sky becomes the subject itself.",
        location: "Augsburg",
      },
    },
  },
  {
    id: "winter-portrait",
    cover: "/assets/instagram/instagram-10-Db48n23DLE8.jpg",
    kind: "image",
    layout: "square",
    year: "2026",
    copy: {
      de: {
        category: "Portrait",
        title: "Cold Light Portrait",
        description:
          "Reduzierte Farben, weiches Winterlicht und ein ruhiger Blick machen Nähe ohne Inszenierung spürbar.",
        location: "Augsburg",
      },
      en: {
        category: "Portrait",
        title: "Cold Light Portrait",
        description:
          "Restrained colour, soft winter light and a quiet gaze create closeness without over-staging.",
        location: "Augsburg",
      },
    },
  },
  {
    id: "monument-under-stars",
    cover: "/assets/instagram/instagram-11-Db-KuIAM3lE.jpg",
    kind: "image",
    layout: "wide",
    year: "2026",
    copy: {
      de: {
        category: "Night Photography",
        title: "Under A Wide Sky",
        description:
          "Architektur wird zum stillen Maßstab unter einem Himmel, der größer wirkt als die Landschaft selbst.",
        location: "Bayern",
      },
      en: {
        category: "Night Photography",
        title: "Under A Wide Sky",
        description:
          "Architecture becomes a quiet point of scale beneath a sky that feels larger than the landscape itself.",
        location: "Bavaria",
      },
    },
  },
];

const ui = {
  de: {
    nav: ["Projekte", "Profil", "Leistungen", "Kontakt"],
    heroRole: "Photography · Film · Visual Content",
    heroLine: "Visuelle Geschichten für Fahrzeuge, Marken und Menschen.",
    heroCta: "Projekte entdecken",
    scroll: "Scroll to explore",
    projectsEyebrow: "Selected work · 2026",
    projectsTitle: "Ein Portfolio. Keine Ablenkung.",
    projectsIntro:
      "Automotive, Bewegung, Landschaft und Portrait — alle Arbeiten auf einer Seite, als visuelle Projekte statt Social-Media-Feed.",
    openProject: "Projekt öffnen",
    aboutEyebrow: "Profil",
    aboutTitle: "Technische Präzision. Echte Atmosphäre.",
    aboutText:
      "Ich bin Dzenad Cakic, Fotograf und Videograf aus Augsburg. Mein Fokus liegt auf Bildern, die Bewegung fühlbar machen und Marken einen klaren, glaubwürdigen Auftritt geben. Von der ersten Idee bis zum finalen Export begleite ich jedes Projekt persönlich.",
    aboutFacts: ["Augsburg · Bayern", "Deutschlandweit verfügbar", "Deutsch · English · Bosanski"],
    servicesEyebrow: "Leistungen",
    servicesTitle: "Von einem starken Einzelbild bis zur kompletten visuellen Serie.",
    services: [
      ["01", "Automotive Photography", "Editorial, Rolling Shots, Details und Fahrzeugkampagnen."],
      ["02", "Cinematic Film", "Kurze Markenfilme, Reels und bewegte Automotive Stories."],
      ["03", "Commercial Content", "Foto- und Videoassets für Unternehmen, Produkte und Räume."],
      ["04", "Portrait & Events", "Natürliche Portraits und klare visuelle Event-Dokumentation."],
    ],
    contactEyebrow: "Projektanfrage",
    contactTitle: "Lass uns etwas schaffen, das bleibt.",
    contactText:
      "Erzähl mir kurz, was du planst. Ich melde mich persönlich mit einer klaren Idee für den nächsten Schritt.",
    instagram: "Projekt auf Instagram besprechen",
    youtube: "Film auf YouTube ansehen",
    close: "Projekt schließen",
    previous: "Zurück",
    next: "Weiter",
    watch: "Film ansehen",
    image: "Fotografie",
    gallery: "Bildserie",
    backTop: "Nach oben",
    cookie: "Diese Website nutzt derzeit keine optionalen Analyse-Cookies.",
    cookieButton: "Cookie-Info",
  },
  en: {
    nav: ["Projects", "Profile", "Services", "Contact"],
    heroRole: "Photography · Film · Visual Content",
    heroLine: "Visual stories for vehicles, brands and people.",
    heroCta: "Explore the work",
    scroll: "Scroll to explore",
    projectsEyebrow: "Selected work · 2026",
    projectsTitle: "One portfolio. No distraction.",
    projectsIntro:
      "Automotive, movement, landscape and portrait — every piece on one page, presented as visual projects rather than a social feed.",
    openProject: "Open project",
    aboutEyebrow: "Profile",
    aboutTitle: "Technical precision. Real atmosphere.",
    aboutText:
      "I am Dzenad Cakic, a photographer and videographer based in Augsburg. I focus on imagery that makes movement tangible and gives brands a clear, credible presence. I personally guide every project from the first idea to final delivery.",
    aboutFacts: ["Augsburg · Bavaria", "Available across Germany", "German · English · Bosnian"],
    servicesEyebrow: "Services",
    servicesTitle: "From one strong frame to a complete visual series.",
    services: [
      ["01", "Automotive Photography", "Editorial, rolling shots, details and vehicle campaigns."],
      ["02", "Cinematic Film", "Short brand films, reels and automotive stories in motion."],
      ["03", "Commercial Content", "Photo and video assets for businesses, products and spaces."],
      ["04", "Portrait & Events", "Natural portraits and clear visual event coverage."],
    ],
    contactEyebrow: "Project enquiry",
    contactTitle: "Let’s create something that stays.",
    contactText:
      "Tell me briefly what you are planning. I will get back to you personally with a clear idea for the next step.",
    instagram: "Discuss a project on Instagram",
    youtube: "Watch the film on YouTube",
    close: "Close project",
    previous: "Previous",
    next: "Next",
    watch: "Watch film",
    image: "Photography",
    gallery: "Image series",
    backTop: "Back to top",
    cookie: "This website currently uses no optional analytics cookies.",
    cookieButton: "Cookie info",
  },
} as const;

const navTargets = ["projects", "profile", "services", "contact"];

function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="ee-brand-logo">
      <Image
        src={BRAND_LOGO}
        alt="E&E Visuals"
        fill
        sizes="64px"
        priority={priority}
        quality={95}
      />
    </span>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [cookieOpen, setCookieOpen] = useState(false);
  const t = ui[language];

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(window.innerHeight, 1)));
      root.style.setProperty("--ee-hero-progress", progress.toFixed(4));
      root.style.setProperty("--ee-hero-scale", (1.035 + progress * 0.13).toFixed(4));
      root.style.setProperty("--ee-hero-y", `${(progress * 4.5).toFixed(2)}vh`);
      root.style.setProperty("--ee-hero-copy-y", `${(progress * -11).toFixed(2)}vh`);
      root.style.setProperty("--ee-hero-copy-opacity", Math.max(0.12, 1 - progress * 1.1).toFixed(4));
      document.body.classList.toggle("ee-has-scrolled", window.scrollY > 40);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      root.style.removeProperty("--ee-hero-progress");
      root.style.removeProperty("--ee-hero-scale");
      root.style.removeProperty("--ee-hero-y");
      root.style.removeProperty("--ee-hero-copy-y");
      root.style.removeProperty("--ee-hero-copy-opacity");
      document.body.classList.remove("ee-has-scrolled");
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".ee-cursor");
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      cursor.classList.toggle("is-active", Boolean(target.closest("a, button")));
    };
    const leave = () => cursor.classList.remove("is-visible");
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.body.classList.toggle("ee-overlay-open", menuOpen || Boolean(activeProject));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setActiveProject(null);
        setCookieOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("ee-overlay-open");
    };
  }, [activeProject, language, menuOpen]);

  const openProject = (project: Project) => {
    setActiveSlide(0);
    setActiveProject(project);
  };

  const projectCopy = activeProject?.copy[language];
  const slides = activeProject?.gallery ?? (activeProject ? [activeProject.cover] : []);

  return (
    <main className="ee-site">
      <div className="ee-cursor" aria-hidden="true"><span /></div>

      <header className="ee-header">
        <a className="ee-brand" href="#top" aria-label="E&E Visuals home">
          <BrandLogo priority />
          <span>E&amp;E Visuals</span>
        </a>
        <nav className="ee-nav" aria-label="Primary navigation">
          {t.nav.map((label, index) => (
            <a href={`#${navTargets[index]}`} key={navTargets[index]}>{label}</a>
          ))}
        </nav>
        <div className="ee-header-actions">
          <div className="ee-language" aria-label="Language">
            {(["de", "en"] as Language[]).map((item) => (
              <button className={language === item ? "is-active" : ""} key={item} onClick={() => setLanguage(item)} type="button" aria-pressed={language === item}>
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="ee-menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="ee-mobile-menu">
            <span /><span /><small>{menuOpen ? "Close" : "Menu"}</small>
          </button>
        </div>
      </header>

      <aside className={`ee-mobile-menu ${menuOpen ? "is-open" : ""}`} id="ee-mobile-menu" aria-hidden={!menuOpen}>
        <nav>
          {t.nav.map((label, index) => (
            <a href={`#${navTargets[index]}`} key={navTargets[index]} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a>
      </aside>

      <section className="ee-hero" id="top" aria-labelledby="ee-hero-title">
        <div className="ee-hero-media" aria-hidden="true">
          <Image src={YOUTUBE_THUMBNAIL_URL} alt="" fill priority fetchPriority="high" quality={95} sizes="100vw" />
        </div>
        <div className="ee-hero-shade" aria-hidden="true" />
        <div className="ee-hero-copy">
          <p>{t.heroRole}</p>
          <h1 id="ee-hero-title"><span>E&amp;E</span> Visuals</h1>
          <div className="ee-hero-bottom">
            <p>{t.heroLine}</p>
            <a href="#projects">{t.heroCta}<span>↓</span></a>
          </div>
        </div>
        <button className="ee-hero-play" type="button" onClick={() => openProject(projects[0])}>
          <span>Latest film</span><strong>Golf VI GTI</strong><i>▶</i>
        </button>
        <div className="ee-scroll-cue" aria-hidden="true"><span>{t.scroll}</span><i /></div>
      </section>

      <section className="ee-projects" id="projects" aria-labelledby="ee-projects-title">
        <div className="ee-section-head">
          <p>{t.projectsEyebrow}</p>
          <div>
            <h2 id="ee-projects-title">{t.projectsTitle}</h2>
            <p>{t.projectsIntro}</p>
          </div>
        </div>
        <div className="ee-project-grid">
          {projects.map((project, index) => {
            const copy = project.copy[language];
            return (
              <article className={`ee-project ee-project--${project.layout}`} key={project.id}>
                <button type="button" onClick={() => openProject(project)} aria-label={`${t.openProject}: ${copy.title}`}>
                  <figure className="ee-project-media">
                    <Image src={project.cover} alt={`${copy.title} — ${copy.category}`} fill quality={project.id === "golf-vi-gti" ? 95 : undefined} sizes={project.layout === "feature" ? "100vw" : "(max-width: 760px) 100vw, 50vw"} loading={index < 3 ? "eager" : "lazy"} />
                    <span className="ee-project-number">{String(index + 1).padStart(2, "0")}</span>
                    <figcaption>
                      <p>{copy.category}</p><h3>{copy.title}</h3><span>{t.openProject} ↗</span>
                    </figcaption>
                  </figure>
                  <div className="ee-project-meta"><span>{copy.location}</span><span>{project.year}</span></div>
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ee-profile" id="profile" aria-labelledby="ee-profile-title">
        <div className="ee-profile-image">
          <Image src="/assets/instagram/porsche-panning-01.jpg" alt="Klassischer Porsche auf der Rennstrecke" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span>E&amp;E / 01</span>
        </div>
        <div className="ee-profile-copy">
          <p>{t.aboutEyebrow}</p><h2 id="ee-profile-title">{t.aboutTitle}</h2><p>{t.aboutText}</p>
          <ul>{t.aboutFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
        </div>
      </section>

      <section className="ee-services" id="services" aria-labelledby="ee-services-title">
        <div className="ee-section-head ee-section-head--light">
          <p>{t.servicesEyebrow}</p><h2 id="ee-services-title">{t.servicesTitle}</h2>
        </div>
        <div className="ee-service-list">
          {t.services.map((service) => (
            <article key={service[0]}><span>{service[0]}</span><h3>{service[1]}</h3><p>{service[2]}</p><i>↗</i></article>
          ))}
        </div>
      </section>

      <section className="ee-contact" id="contact" aria-labelledby="ee-contact-title">
        <div><p>{t.contactEyebrow}</p><h2 id="ee-contact-title">{t.contactTitle}</h2><p>{t.contactText}</p></div>
        <div className="ee-contact-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><span>{t.instagram}</span><strong>↗</strong></a>
          <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"><span>{t.youtube}</span><strong>↗</strong></a>
        </div>
      </section>

      <footer className="ee-footer">
        <div className="ee-footer-brand"><BrandLogo /><p><strong>E&amp;E Visuals</strong><span>Dzenad Cakic · Augsburg</span></p></div>
        <div className="ee-footer-links">
          <a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a>
          <button type="button" onClick={() => setCookieOpen(true)}>{t.cookieButton}</button>
          <a href="#top">{t.backTop} ↑</a>
        </div>
        <p>© {new Date().getFullYear()} E&amp;E Visuals · Photography / Film / Content</p>
      </footer>

      {activeProject && projectCopy && (
        <div className="ee-project-modal" role="dialog" aria-modal="true" aria-labelledby="ee-modal-title">
          <button className="ee-modal-backdrop" type="button" onClick={() => setActiveProject(null)} aria-label={t.close} />
          <div className="ee-modal-panel">
            <button className="ee-modal-close" type="button" onClick={() => setActiveProject(null)} aria-label={t.close}>×</button>
            <div className="ee-modal-visual">
              {activeProject.kind === "video" ? (
                <iframe src={YOUTUBE_EMBED_URL} title={projectCopy.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              ) : (
                <Image src={slides[activeSlide]} alt={projectCopy.title} fill sizes="(max-width: 900px) 100vw, 72vw" priority />
              )}
              {slides.length > 1 && (
                <div className="ee-modal-controls">
                  <button type="button" onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)}>← {t.previous}</button>
                  <span>{activeSlide + 1} / {slides.length}</span>
                  <button type="button" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}>{t.next} →</button>
                </div>
              )}
            </div>
            <div className="ee-modal-copy">
              <p>{projectCopy.category} · {activeProject.year}</p><h2 id="ee-modal-title">{projectCopy.title}</h2><p>{projectCopy.description}</p>
              <div><span>{projectCopy.location}</span><span>{activeProject.kind === "video" ? t.watch : activeProject.kind === "gallery" ? t.gallery : t.image}</span></div>
              {activeProject.kind === "video" && <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">YouTube ↗</a>}
            </div>
          </div>
        </div>
      )}

      {cookieOpen && <div className="ee-cookie" role="status"><p>{t.cookie}</p><button type="button" onClick={() => setCookieOpen(false)}>×</button></div>}
    </main>
  );
}
