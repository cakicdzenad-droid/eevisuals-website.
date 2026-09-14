"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Language = "de" | "en";

const YOUTUBE_VIDEO_URL = "https://youtu.be/Wp6_leuJ854";
const YOUTUBE_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/Wp6_leuJ854?autoplay=1&rel=0";
const YOUTUBE_THUMBNAIL_URL =
  "https://i.ytimg.com/vi/Wp6_leuJ854/maxresdefault.jpg";

type ProjectMedia = {
  id: string;
  image: string;
  year: string;
  location: string;
  isDemo: boolean;
  caseStudyHref?: string;
};

type InstagramStory = {
  image: string;
  href: string;
  layout: "portrait" | "wide" | "square";
  copy: Record<Language, {
    meta: string;
    title: string;
    text: string;
    alt: string;
  }>;
};

const projectMedia: ProjectMedia[] = [
  {
    id: "audi-a7-quiet-power",
    image: "/assets/audi-a7/audi-a7-hero.jpeg",
    year: "2026",
    location: "Augsburg",
    isDemo: false,
    caseStudyHref: "/work/audi-a7",
  },
  {
    id: "toyota-rav4-open-horizon",
    image: "/assets/toyota-rav4/rav4-three-quarter.jpeg",
    year: "2026",
    location: "Augsburg",
    isDemo: false,
    caseStudyHref: "/work/toyota-rav4",
  },
  {
    id: "sportbike-urban-redline",
    image: "/assets/sportbike/sportbike-front.jpeg",
    year: "2026",
    location: "Augsburg",
    isDemo: false,
    caseStudyHref: "/work/sportbike",
  },
];

const instagramStories: InstagramStory[] = [
  {
    image: "/assets/instagram/instagram-01-DckmBQesYbq.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DckmBQesYbq/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Porsche · Motorsport",
        title: "Geschwindigkeit ohne Farbe.",
        text: "Ein klassischer Porsche im Mitzieher — die Bewegung bleibt spürbar, obwohl ein einziger Moment eingefroren ist.",
        alt: "Klassischer Porsche als Schwarz-Weiß-Panningaufnahme auf der Rennstrecke",
      },
      en: {
        meta: "Porsche · Motorsport",
        title: "Speed without colour.",
        text: "A classic Porsche captured in a pan — motion stays tangible inside a single frozen moment.",
        alt: "Classic Porsche in a black-and-white panning shot on the racetrack",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-02-Dcnb7JLssy7.jpg",
    href: "https://www.instagram.com/eande.visuals/p/Dcnb7JLssy7/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Porsche 911 · Detail",
        title: "Linien, Lack, Legende.",
        text: "Von oben wird der 911 zur grafischen Form — Felge, Reflexion und Silhouette erzählen den Charakter im Detail.",
        alt: "Schwarzer klassischer Porsche 911 von oben fotografiert",
      },
      en: {
        meta: "Porsche 911 · Detail",
        title: "Lines, paint, legend.",
        text: "From above, the 911 becomes a graphic form — wheel, reflection and silhouette reveal its character.",
        alt: "Black classic Porsche 911 photographed from above",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-03-DciKTSVs7Vu.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DciKTSVs7Vu/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Salzburgring · Track",
        title: "Der Moment vor der Kurve.",
        text: "Distanz, Asphalt und eine klare Linie lassen die Rennstrecke atmen, bevor das Fahrzeug den Bildraum durchschneidet.",
        alt: "Klassischer Rennwagen auf dem Salzburgring in Schwarz-Weiß",
      },
      en: {
        meta: "Salzburgring · Track",
        title: "The moment before the corner.",
        text: "Distance, asphalt and a clean line let the circuit breathe before the car cuts through the frame.",
        alt: "Classic race car at the Salzburgring in black and white",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-04-DcMLt2jMUjU.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DcMLt2jMUjU/",
    layout: "square",
    copy: {
      de: {
        meta: "BMW · Panning",
        title: "Präzision bei Tempo.",
        text: "Der Hintergrund löst sich in Bewegung auf, während Karosserie und Fahrer im entscheidenden Augenblick stabil bleiben.",
        alt: "Schwarzer BMW als dynamische Panningaufnahme auf der Straße",
      },
      en: {
        meta: "BMW · Panning",
        title: "Precision at speed.",
        text: "The background dissolves into motion while bodywork and driver stay composed at the decisive instant.",
        alt: "Black BMW in a dynamic panning shot on the road",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-05-DbDOxllDDqT.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DbDOxllDDqT/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Toyota RAV4 · Landscape",
        title: "Offene Horizonte.",
        text: "Kein Parkplatz, kein künstlicher Glanz — nur Fahrzeug, Wiese und ein Himmel, der die ganze Szene trägt.",
        alt: "Toyota RAV4 in einer hohen Wiese unter dramatischem Himmel",
      },
      en: {
        meta: "Toyota RAV4 · Landscape",
        title: "Open horizons.",
        text: "No parking lot and no artificial gloss — only the vehicle, the meadow and a sky carrying the scene.",
        alt: "Toyota RAV4 in tall grass beneath a dramatic sky",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-06-DcYCo4_DA5T.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DcYCo4_DA5T/",
    layout: "wide",
    copy: {
      de: {
        meta: "Motorsport · Bewegung",
        title: "Farbe in Bewegung.",
        text: "Blau, Rot und Geschwindigkeit setzen einen lauten Akzent in einer Serie, die ganz vom Rhythmus der Strecke lebt.",
        alt: "Blauer Rennwagen mit roten Felgen in einer Panningaufnahme",
      },
      en: {
        meta: "Motorsport · Motion",
        title: "Colour in motion.",
        text: "Blue, red and speed create a loud accent in a series driven entirely by the rhythm of the circuit.",
        alt: "Blue race car with red wheels in a panning shot",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-07-DcJe2QKs-jk.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DcJe2QKs-jk/",
    layout: "wide",
    copy: {
      de: {
        meta: "Kia Sorento · Off-road",
        title: "Abseits der Straße.",
        text: "Staub, Stein und direkte Frontperspektive zeigen ein SUV dort, wo Funktion sichtbar und glaubwürdig wird.",
        alt: "Kia Sorento fährt frontal über eine staubige Off-road-Strecke",
      },
      en: {
        meta: "Kia Sorento · Off-road",
        title: "Beyond the road.",
        text: "Dust, stone and a direct front angle place the SUV where capability becomes visible and credible.",
        alt: "Kia Sorento driving head-on across a dusty off-road track",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-08-Da-DK1PjIK8.jpg",
    href: "https://www.instagram.com/eande.visuals/p/Da-DK1PjIK8/",
    layout: "wide",
    copy: {
      de: {
        meta: "Audi A7 · Interior",
        title: "Ruhe im Innenraum.",
        text: "Offene Tür, klare Flächen und weiches Licht machen aus Technik einen ruhigen, einladenden Raum.",
        alt: "Hochwertiger Innenraum eines Audi A7 mit geöffneter Fahrertür",
      },
      en: {
        meta: "Audi A7 · Interior",
        title: "Stillness inside.",
        text: "An open door, clean surfaces and soft light turn technology into a calm, inviting space.",
        alt: "Premium Audi A7 interior viewed through the open driver door",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-09-Db9NbNgMyw_.jpg",
    href: "https://www.instagram.com/eande.visuals/p/Db9NbNgMyw_/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Eclipse · Augsburg",
        title: "Wenn das Licht verstummt.",
        text: "Ein kurzer Augenblick zwischen Sonnenuntergang und Schatten — beobachtet, gewartet und im richtigen Moment festgehalten.",
        alt: "Roter Sonnenuntergang mit Silhouetten und Kondensstreifen am Himmel",
      },
      en: {
        meta: "Eclipse · Augsburg",
        title: "When the light falls silent.",
        text: "A brief instant between sunset and shadow — observed, anticipated and captured at exactly the right moment.",
        alt: "Red sunset with silhouettes and aircraft trails in the sky",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-10-Db48n23DLE8.jpg",
    href: "https://www.instagram.com/eande.visuals/p/Db48n23DLE8/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Portrait · Winter",
        title: "Nähe im kalten Licht.",
        text: "Zwischen Schal, Bergluft und zurückhaltenden Farben bleibt der Blick der wärmste Punkt des Bildes.",
        alt: "Winterportrait einer Frau mit Mütze und Schal vor einer Berglandschaft",
      },
      en: {
        meta: "Portrait · Winter",
        title: "Closeness in cold light.",
        text: "Between scarf, mountain air and restrained colour, the eyes remain the warmest point in the frame.",
        alt: "Winter portrait of a woman in a hat and scarf before a mountain landscape",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-11-Db-KuIAM3lE.jpg",
    href: "https://www.instagram.com/eande.visuals/p/Db-KuIAM3lE/",
    layout: "portrait",
    copy: {
      de: {
        meta: "Nightscape · Monument",
        title: "Unter einem weiten Himmel.",
        text: "Das Monument bleibt still, während Sterne und Zeit über ihm eine zweite, kaum sichtbare Bewegung zeichnen.",
        alt: "Monument und Bäume unter einem klaren Sternenhimmel bei Nacht",
      },
      en: {
        meta: "Nightscape · Monument",
        title: "Beneath an open sky.",
        text: "The monument stays still while stars and time draw a second, barely visible movement above it.",
        alt: "Monument and trees beneath a clear starry night sky",
      },
    },
  },
  {
    image: "/assets/instagram/instagram-12-DbBcZiDM2OM.jpg",
    href: "https://www.instagram.com/eande.visuals/p/DbBcZiDM2OM/",
    layout: "wide",
    copy: {
      de: {
        meta: "Audi A7 · Editorial",
        title: "Quiet Power.",
        text: "Der A7 steht zwischen Straße und offenem Himmel — elegant, kontrolliert und ohne unnötige Inszenierung.",
        alt: "Silberner Audi A7 auf einer ruhigen Straße unter bewölktem Himmel",
      },
      en: {
        meta: "Audi A7 · Editorial",
        title: "Quiet Power.",
        text: "The A7 sits between road and open sky — elegant, controlled and free from unnecessary staging.",
        alt: "Silver Audi A7 on a quiet road beneath a cloudy sky",
      },
    },
  },
];

const copy = {
  de: {
    nav: ["Arbeiten", "Leistungen", "Über mich", "Kontakt"],
    hero: {
      title: "Bilder, die verkaufen. Filme, die bleiben.",
      description:
        "Fotografie und cinematic Content für Fahrzeuge, Produkte, Unternehmen und Menschen. Aus Augsburg — verfügbar in ganz Deutschland.",
      primary: "Projekt anfragen",
      secondary: "Arbeiten ansehen",
      location: "Augsburg, Deutschland",
      focus: "Automotive · Produkt · Unternehmen · Immobilien · Events",
      scroll: "Ausgewählte Arbeiten",
      demo: "Latest Film · Volkswagen Golf VI GTI",
    },
    work: {
      eyebrow: "Ausgewählte Arbeiten",
      title: "Ausgewählte Arbeiten. Eine klare Bildsprache.",
      intro:
        "Drei originale Automotive-Studien — von ruhiger Eleganz über offene Landschaft bis zur urbanen Sportbike-Ästhetik.",
      view: "Case Study ansehen",
      demo: "Demo",
      original: "Original",
    },
    projects: [
      {
        title: "Audi A7 — Quiet Power",
        category: "Automotive Photography",
        description:
          "Der Audi A7 Sportback zwischen klarer Form, nasser Oberfläche und ruhigem Abendlicht — als konsistente Serie für Web und Social Media.",
      },
      {
        title: "Toyota RAV4 — Open Horizon",
        category: "SUV Editorial",
        description:
          "Ein silberner RAV4 zwischen Wiese, Weite und wechselndem Himmel — natürlich inszeniert und klar auf das Fahrzeug fokussiert.",
      },
      {
        title: "Sportbike — Urban Redline",
        category: "Motorcycle Editorial",
        description:
          "Zwei gegensätzliche Perspektiven verbinden markante Front, technische Details und roten Lack zu einer kompakten urbanen Story.",
      },
    ],
    showreel: {
      eyebrow: "Latest Film",
      title: "Volkswagen Golf VI GTI.",
      description:
        "Ein cinematic Automotive Film über Charakter, Bewegung und die zeitlose Präsenz des Golf VI GTI.",
      play: "Film ansehen",
      duration: "YouTube",
      modalTitle: "Volkswagen Golf VI GTI",
      modalText:
        "Cinematic Automotive Film von E&E Visuals · Augsburg, Deutschland.",
      youtubeLink: "Auf YouTube ansehen",
      close: "Film schließen",
    },
    journal: {
      eyebrow: "Instagram Journal",
      title: "Zwölf Bilder. Zwölf kurze Geschichten.",
      intro:
        "Veröffentlichte Arbeiten zwischen Rennstrecke, Straße, Landschaft und Portrait — als visuelles Journal statt klassischem Social-Media-Grid.",
      open: "Original auf Instagram",
      follow: "Mehr Arbeiten auf Instagram",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Content, der professionell aussieht und ein Ziel erfüllt.",
      items: [
        ["Automotive Photography", "Fahrzeuge mit Form, Charakter und hochwertiger Lichtführung inszeniert."],
        ["Cinematic Video Production", "Kurze, präzise Filme für Kampagnen, Websites und Markenauftritte."],
        ["Commercial Content", "Konsistente Foto- und Videoassets für Unternehmen, Produkte und Dienstleistungen."],
        ["Real Estate Media", "Helle, glaubwürdige Raumdarstellung für Vermarktung und Dokumentation."],
        ["Portraits", "Business- und Lifestyle-Portraits mit natürlicher Wirkung und klarer Bildsprache."],
        ["Social Media Content", "Vertikale Clips und Bildserien, die für mobile Aufmerksamkeit produziert sind."],
        ["Drone Content", "Luftaufnahmen und Bewegungsbilder, wo Einsatz und Flug rechtlich möglich sind."],
      ],
    },
    about: {
      eyebrow: "Über mich",
      title: "Hinter der Kamera. Über das Bild hinaus.",
      textOne:
        "Ich bin Dzenad Cakic, Fotograf und Videograf aus Augsburg. Mich interessieren Fahrzeuge, Bewegung, Details, Licht und die Atmosphäre, die aus einem guten Motiv eine starke Geschichte macht.",
      textTwo:
        "Ich verbinde Fotografie und Film, damit Marken, Unternehmen und private Kunden professioneller auftreten. Jedes Projekt begleite ich persönlich — von der ersten Idee bis zur finalen Auswahl.",
      facts: [
        ["Basis", "Augsburg, Bayern"],
        ["Einsatzgebiet", "Deutschlandweit nach Absprache"],
        ["Sprachen", "Deutsch · Englisch · Bosnisch"],
        ["Fokus", "Foto · Film · Social Content"],
      ],
      portrait: "Portrait von Dzenad ergänzen",
    },
    process: {
      eyebrow: "Ablauf",
      title: "Einfach zusammenarbeiten. Klar zum Ergebnis.",
      items: [
        ["Brief", "Ziel, Zielgruppe, Umfang und Einsatz der Inhalte gemeinsam klären."],
        ["Konzept", "Bildsprache, Motive, Location und Ablauf in einem kompakten Plan festhalten."],
        ["Produktion", "Konzentriertes Shooting mit direkter Abstimmung und Blick für Details."],
        ["Delivery", "Sorgfältige Auswahl, Bearbeitung und Übergabe in den passenden Formaten."],
      ],
    },
    testimonials: {
      eyebrow: "Kundenstimmen",
      title: "Echte Aussagen statt erfundener Referenzen.",
      text:
        "Dieser Bereich bleibt bewusst ohne Zitate, bis verifizierte Kundenstimmen vorliegen.",
      label: "Platzhalter · vor Veröffentlichung ersetzen oder ausblenden",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Ein Projekt im Kopf? Machen wir etwas daraus, das man sehen will.",
      intro:
        "Erzähl mir kurz, was du planst. Du erhältst eine persönliche Rückmeldung mit den nächsten sinnvollen Schritten.",
      instagram: "Auf Instagram schreiben",
      location: "Augsburg · Projekte bis 300 km und weiter nach Absprache",
      emailLabel: "E-Mail",
      emailPlaceholder: "E-Mail-Adresse vor Veröffentlichung ergänzen",
      form: {
        name: "Name",
        company: "Unternehmen",
        email: "E-Mail",
        phone: "Telefon, optional",
        type: "Projektart",
        date: "Wunschtermin",
        budget: "Budgetrahmen",
        message: "Nachricht",
        consent:
          "Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. Datenschutzhinweise beachten.",
        submit: "Anfrage vorbereiten",
        success:
          "Danke — der Prototyp hat deine Angaben lokal geprüft. Vor Veröffentlichung muss noch ein Formular-Backend verbunden werden.",
        choose: "Bitte auswählen",
        types: ["Automotive", "Produkt / Commercial", "Unternehmen", "Immobilien", "Portrait", "Event", "Sonstiges"],
        budgets: ["Unter 300 €", "300–750 €", "750–1.500 €", "1.500 € und mehr", "Noch offen"],
      },
    },
    footer: {
      line: "Photography, Film and Visual Content",
      rights: "Alle Rechte vorbehalten.",
      legal: ["Impressum", "Datenschutz", "Cookie-Einstellungen"],
      cookie:
        "Dieser Prototyp setzt keine optionalen Cookies ein. Vor der Veröffentlichung muss das je nach eingebundenen Diensten erneut geprüft werden.",
      youtube: "YouTube",
    },
    common: {
      instagram: "Instagram",
      menu: "Menü öffnen",
      close: "Menü schließen",
      backTop: "Nach oben",
    },
  },
  en: {
    nav: ["Work", "Services", "About", "Contact"],
    hero: {
      title: "Images that sell. Films that stay.",
      description:
        "Photography and cinematic content for cars, products, businesses and people. Based in Augsburg — available across Germany.",
      primary: "Start a project",
      secondary: "View selected work",
      location: "Augsburg, Germany",
      focus: "Automotive · Product · Business · Real Estate · Events",
      scroll: "Selected work",
      demo: "Latest Film · Volkswagen Golf VI GTI",
    },
    work: {
      eyebrow: "Selected work",
      title: "Selected work. One clear visual language.",
      intro:
        "Three original automotive studies — from quiet elegance and open landscapes to an urban sportbike aesthetic.",
      view: "View case study",
      demo: "Demo",
      original: "Original",
    },
    projects: [
      {
        title: "Audi A7 — Quiet Power",
        category: "Automotive Photography",
        description:
          "The Audi A7 Sportback shaped by clean lines, rain-darkened surfaces and quiet evening light — built as a coherent set for web and social.",
      },
      {
        title: "Toyota RAV4 — Open Horizon",
        category: "SUV Editorial",
        description:
          "A silver RAV4 set against meadow, distance and a changing sky — naturally staged with a clear focus on the vehicle.",
      },
      {
        title: "Sportbike — Urban Redline",
        category: "Motorcycle Editorial",
        description:
          "Two contrasting perspectives combine a sharp front, technical detail and red bodywork into a compact urban story.",
      },
    ],
    showreel: {
      eyebrow: "Latest Film",
      title: "Volkswagen Golf VI GTI.",
      description:
        "A cinematic automotive film shaped around character, movement and the timeless presence of the Golf VI GTI.",
      play: "Watch film",
      duration: "YouTube",
      modalTitle: "Volkswagen Golf VI GTI",
      modalText:
        "A cinematic automotive film by E&E Visuals · Augsburg, Germany.",
      youtubeLink: "Watch on YouTube",
      close: "Close film",
    },
    journal: {
      eyebrow: "Instagram Journal",
      title: "Twelve images. Twelve short stories.",
      intro:
        "Published work shaped by racetracks, roads, landscapes and portraits — presented as a visual journal instead of a conventional social grid.",
      open: "View original on Instagram",
      follow: "More work on Instagram",
    },
    services: {
      eyebrow: "Services",
      title: "Content that looks professional and serves a purpose.",
      items: [
        ["Automotive Photography", "Vehicles presented with shape, character and premium lighting."],
        ["Cinematic Video Production", "Focused films for campaigns, websites and brand communication."],
        ["Commercial Content", "Consistent photo and video assets for businesses, products and services."],
        ["Real Estate Media", "Bright, credible spaces created for marketing and documentation."],
        ["Portraits", "Business and lifestyle portraits with a natural feel and clear visual language."],
        ["Social Media Content", "Vertical clips and image series produced for mobile attention."],
        ["Drone Content", "Aerial perspectives and motion where the location and law allow."],
      ],
    },
    about: {
      eyebrow: "About",
      title: "Behind the lens. Beyond the image.",
      textOne:
        "I am Dzenad Cakic, a photographer and videographer based in Augsburg. I am drawn to cars, movement, detail, light and the atmosphere that turns a good subject into a strong story.",
      textTwo:
        "I combine photography and film to help brands, businesses and private clients present themselves professionally. I stay personally involved from the first idea to the final delivery.",
      facts: [
        ["Based in", "Augsburg, Bavaria"],
        ["Available", "Across Germany by arrangement"],
        ["Languages", "German · English · Bosnian"],
        ["Focus", "Photo · Film · Social Content"],
      ],
      portrait: "Add portrait of Dzenad",
    },
    process: {
      eyebrow: "Process",
      title: "Easy to work with. Clear in delivery.",
      items: [
        ["Brief", "Align on the goal, audience, scope and intended use of the content."],
        ["Concept", "Shape the visual language, key shots, location and schedule into one plan."],
        ["Production", "A focused shoot with direct collaboration and attention to detail."],
        ["Delivery", "Careful selection, editing and delivery in the formats you actually need."],
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Real feedback instead of invented references.",
      text:
        "This area intentionally stays quote-free until verified client feedback is available.",
      label: "Placeholder · replace or hide before launch",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind? Let’s create something worth seeing.",
      intro:
        "Tell me briefly what you are planning. You will receive a personal response with the most useful next steps.",
      instagram: "Message on Instagram",
      location: "Augsburg · projects within 300 km and beyond by arrangement",
      emailLabel: "Email",
      emailPlaceholder: "Add email address before launch",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone, optional",
        type: "Type of project",
        date: "Preferred date",
        budget: "Budget range",
        message: "Message",
        consent:
          "I agree that my details may be used to process this enquiry. Please review the privacy notice.",
        submit: "Prepare enquiry",
        success:
          "Thank you — the prototype validated your details locally. A form backend still needs to be connected before launch.",
        choose: "Please choose",
        types: ["Automotive", "Product / Commercial", "Business", "Real Estate", "Portrait", "Event", "Other"],
        budgets: ["Under €300", "€300–750", "€750–1,500", "€1,500 and more", "Not decided yet"],
      },
    },
    footer: {
      line: "Photography, Film and Visual Content",
      rights: "All rights reserved.",
      legal: ["Legal notice", "Privacy", "Cookie settings"],
      cookie:
        "This prototype does not use optional cookies. Reassess this before launch when external services are connected.",
      youtube: "YouTube",
    },
    common: {
      instagram: "Instagram",
      menu: "Open menu",
      close: "Close menu",
      backTop: "Back to top",
    },
  },
} as const;

function LogoMark() {
  return (
    <span className="logo-mark" aria-label="E and E Visuals">
      <span className="logo-mark__mirrored">E</span>
      <span>E</span>
    </span>
  );
}

export default function Home() {
  const heroScrollRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<Language>("de");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [cookieNotice, setCookieNotice] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setShowreelOpen(false);
        setCookieNotice(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.documentElement.lang = language;
    document.body.classList.toggle("menu-is-open", menuOpen || showreelOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-is-open");
    };
  }, [language, menuOpen, showreelOpen]);

  useEffect(() => {
    const heroScroll = heroScrollRef.current;
    if (!heroScroll) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const range = (value: number, start: number, end: number) =>
      clamp((value - start) / (end - start));

    const updateHero = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        heroScroll.classList.remove("is-film-focus");
        heroScroll.style.setProperty("--hero-progress", "0");
        heroScroll.style.setProperty("--hero-scale", "1");
        heroScroll.style.setProperty("--hero-media-x", "0%");
        heroScroll.style.setProperty("--hero-media-y", "0%");
        heroScroll.style.setProperty("--hero-copy-opacity", "1");
        heroScroll.style.setProperty("--hero-copy-blur", "0px");
        heroScroll.style.setProperty("--hero-copy-shift", "0px");
        heroScroll.style.setProperty("--hero-shade-opacity", "1");
        heroScroll.style.setProperty("--hero-grid-opacity", "0.7");
        heroScroll.style.setProperty("--hero-grid-x", "0px");
        heroScroll.style.setProperty("--hero-footer-opacity", "1");
        heroScroll.style.setProperty("--hero-project-opacity", "0");
        heroScroll.style.setProperty("--hero-project-shift", "48px");
        heroScroll.style.setProperty("--hero-frame-opacity", "0");
        heroScroll.style.setProperty("--hero-frame-scale", "1.14");
        heroScroll.style.setProperty("--hero-index-progress", "0.15");
        return;
      }

      const bounds = heroScroll.getBoundingClientRect();
      const distance = Math.max(1, heroScroll.offsetHeight - window.innerHeight);
      const rawProgress = clamp(-bounds.top / distance);
      const progress = rawProgress * rawProgress * (3 - 2 * rawProgress);
      const copyExit = range(rawProgress, 0.12, 0.48);
      const projectEnter = range(rawProgress, 0.42, 0.76);
      const frameEnter = range(rawProgress, 0.28, 0.68);
      const footerExit = range(rawProgress, 0.08, 0.38);

      heroScroll.classList.toggle("is-film-focus", rawProgress > 0.42);

      heroScroll.style.setProperty("--hero-progress", progress.toFixed(4));
      heroScroll.style.setProperty("--hero-scale", (1 + progress * 0.08).toFixed(4));
      heroScroll.style.setProperty("--hero-media-x", `${(-progress * 2.2).toFixed(3)}%`);
      heroScroll.style.setProperty("--hero-media-y", `${(progress * 1.1).toFixed(3)}%`);
      heroScroll.style.setProperty("--hero-copy-opacity", (1 - copyExit).toFixed(4));
      heroScroll.style.setProperty("--hero-copy-blur", `${(copyExit * 6).toFixed(2)}px`);
      heroScroll.style.setProperty("--hero-copy-shift", `${(-copyExit * 42).toFixed(2)}px`);
      heroScroll.style.setProperty(
        "--hero-shade-opacity",
        (1 - progress * 0.72).toFixed(4),
      );
      heroScroll.style.setProperty("--hero-grid-opacity", (0.7 - progress * 0.55).toFixed(4));
      heroScroll.style.setProperty("--hero-grid-x", `${(-progress * 36).toFixed(2)}px`);
      heroScroll.style.setProperty("--hero-footer-opacity", (1 - footerExit).toFixed(4));
      heroScroll.style.setProperty("--hero-project-opacity", projectEnter.toFixed(4));
      heroScroll.style.setProperty(
        "--hero-project-shift",
        `${((1 - projectEnter) * 48).toFixed(2)}px`,
      );
      heroScroll.style.setProperty("--hero-frame-opacity", (frameEnter * 0.78).toFixed(4));
      heroScroll.style.setProperty("--hero-frame-scale", (1.14 - frameEnter * 0.14).toFixed(4));
      heroScroll.style.setProperty("--hero-index-progress", (0.15 + rawProgress * 0.85).toFixed(4));
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateHero);
    };

    updateHero();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, []);

  const navTargets = ["work", "services", "about", "contact"];

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="E&E Visuals home">
          <LogoMark />
          <span className="brand__name">E&amp;E Visuals</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map((label, index) => (
            <a href={"#" + navTargets[index]} key={navTargets[index]}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-meta">
          <span className="location-indicator">
            <i aria-hidden="true" /> {t.hero.location}
          </span>
          <a
            className="instagram-link"
            href="https://www.instagram.com/eande.visuals/"
            target="_blank"
            rel="noreferrer"
          >
            {t.common.instagram}
          </a>
          <div className="language-switcher" aria-label="Language">
            {(["de", "en"] as Language[]).map((item) => (
              <button
                className={language === item ? "is-active" : ""}
                type="button"
                key={item}
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.common.close : t.common.menu}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={"mobile-menu " + (menuOpen ? "is-open" : "")}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {t.nav.map((label, index) => (
            <a
              href={"#" + navTargets[index]}
              key={navTargets[index]}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__meta">
          <p>{t.hero.location}</p>
          <a
            href="https://www.instagram.com/eande.visuals/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>
      </div>

      <div className="hero-scroll" id="top" ref={heroScrollRef}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__media" aria-hidden="true">
            <Image
              src={YOUTUBE_THUMBNAIL_URL}
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
            />
          </div>
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__focus-frame" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero__index" aria-hidden="true">
            <span>01</span>
            <i />
            <small>03</small>
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">E&amp;E Visuals · Dzenad Cakic</p>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero__description">{t.hero.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                <span>{t.hero.primary}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--secondary" href="#work">
                <span>{t.hero.secondary}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <button
            className="hero__film-story"
            type="button"
            onClick={() => setShowreelOpen(true)}
            aria-haspopup="dialog"
            aria-label={`${t.showreel.title} — ${t.showreel.play}`}
          >
            <span className="hero__film-kicker">01 / {t.showreel.eyebrow}</span>
            <strong aria-hidden="true">
              <span>GOLF VI</span>
              <em>GTI</em>
            </strong>
            <span className="hero__film-link">{t.showreel.play} ▶</span>
          </button>

          <div className="hero__footer">
            <p>{t.hero.focus}</p>
            <p className="hero__demo-label">{t.hero.demo}</p>
            <a href="#work">
              {t.hero.scroll} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
      </div>

      <section className="work-section section-shell" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <p className="section-label">01 / {t.work.eyebrow}</p>
          <div>
            <h2 id="work-title">{t.work.title}</h2>
            <p>{t.work.intro}</p>
          </div>
        </div>

        <div className="project-grid">
          {projectMedia.map((project, index) => {
            const projectCopy = t.projects[index];
            return (
              <article className={"project-card project-card--" + (index + 1)} key={project.id}>
                <a
                  href={
                    project.caseStudyHref
                      ? project.caseStudyHref + "?lang=" + language
                      : "/project?project=" + project.id + "&lang=" + language
                  }
                  aria-label={projectCopy.title}
                >
                  <figure>
                    <img
                      src={project.image}
                      alt={
                        project.isDemo
                          ? projectCopy.category + " demo visual"
                          : projectCopy.title + " — " + projectCopy.category
                      }
                      loading={index > 1 ? "lazy" : "eager"}
                      width="1800"
                      height="1200"
                    />
                    <figcaption>
                      <span>{project.isDemo ? t.work.demo : t.work.original}</span>
                      <span>0{index + 1}</span>
                    </figcaption>
                  </figure>
                  <div className="project-card__meta">
                    <div>
                      <p>{projectCopy.category}</p>
                      <h3>{projectCopy.title}</h3>
                    </div>
                    <span>{project.year} · {project.location}</span>
                  </div>
                  <p className="project-card__description">{projectCopy.description}</p>
                  <span className="project-card__link">{t.work.view} ↗</span>
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="instagram-journal section-shell" aria-labelledby="journal-title">
        <div className="section-intro journal-intro">
          <p className="section-label">02 / {t.journal.eyebrow}</p>
          <div>
            <h2 id="journal-title">{t.journal.title}</h2>
            <p>{t.journal.intro}</p>
          </div>
        </div>

        <div className="journal-grid">
          {instagramStories.map((story, index) => {
            const storyCopy = story.copy[language];
            return (
              <article
                className={`journal-card journal-card--${story.layout}`}
                key={story.href}
              >
                <a href={story.href} target="_blank" rel="noreferrer">
                  <figure>
                    <img
                      src={story.image}
                      alt={storyCopy.alt}
                      loading="lazy"
                      width="1280"
                      height="1600"
                    />
                    <figcaption>
                      <span>{storyCopy.meta}</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </figcaption>
                  </figure>
                  <div className="journal-card__copy">
                    <p>{storyCopy.meta}</p>
                    <h3>{storyCopy.title}</h3>
                    <p>{storyCopy.text}</p>
                    <span>{t.journal.open} ↗</span>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        <a
          className="journal-follow"
          href="https://www.instagram.com/eande.visuals/"
          target="_blank"
          rel="noreferrer"
        >
          <span>@eande.visuals</span>
          <strong>{t.journal.follow} ↗</strong>
        </a>
      </section>

      <section className="services section-shell" id="services" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="section-label">03 / {t.services.eyebrow}</p>
          <div>
            <h2 id="services-title">{t.services.title}</h2>
          </div>
        </div>
        <div className="service-list">
          {t.services.items.map((service, index) => (
            <article className="service-row" key={service[0]}>
              <span>0{index + 1}</span>
              <h3>{service[0]}</h3>
              <p>{service[1]}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="about__portrait">
          <div className="portrait-placeholder" role="img" aria-label={t.about.portrait}>
            <LogoMark />
            <span>{t.about.portrait}</span>
          </div>
        </div>
        <div className="about__copy">
          <p className="section-label">04 / {t.about.eyebrow}</p>
          <h2 id="about-title">{t.about.title}</h2>
          <p className="about__lead">{t.about.textOne}</p>
          <p>{t.about.textTwo}</p>
          <dl className="fact-list">
            {t.about.facts.map((fact) => (
              <div key={fact[0]}>
                <dt>{fact[0]}</dt>
                <dd>{fact[1]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="process section-shell" aria-labelledby="process-title">
        <div className="section-intro">
          <p className="section-label">05 / {t.process.eyebrow}</p>
          <div>
            <h2 id="process-title">{t.process.title}</h2>
          </div>
        </div>
        <ol className="process-list">
          {t.process.items.map((item, index) => (
            <li key={item[0]}>
              <span>0{index + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="testimonials-placeholder section-shell" aria-labelledby="testimonial-title">
        <p className="section-label">06 / {t.testimonials.eyebrow}</p>
        <div>
          <h2 id="testimonial-title">{t.testimonials.title}</h2>
          <p>{t.testimonials.text}</p>
          <span>{t.testimonials.label}</span>
        </div>
      </section>

      <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact__intro">
          <p className="section-label">07 / {t.contact.eyebrow}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
          <div className="contact-links">
            <a
              href="https://www.instagram.com/eande.visuals/"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.instagram} ↗
            </a>
            <span>{t.contact.location}</span>
            <span>
              <small>{t.contact.emailLabel}</small>
              {t.contact.emailPlaceholder}
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <div className="form-field">
            <label htmlFor="name">{t.contact.form.name}</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="company">{t.contact.form.company}</label>
            <input id="company" name="company" autoComplete="organization" />
          </div>
          <div className="form-field">
            <label htmlFor="email">{t.contact.form.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">{t.contact.form.phone}</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="form-field">
            <label htmlFor="project-type">{t.contact.form.type}</label>
            <select id="project-type" name="project-type" required defaultValue="">
              <option value="" disabled>{t.contact.form.choose}</option>
              {t.contact.form.types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="date">{t.contact.form.date}</label>
            <input id="date" name="date" type="date" />
          </div>
          <div className="form-field form-field--wide">
            <label htmlFor="budget">{t.contact.form.budget}</label>
            <select id="budget" name="budget" required defaultValue="">
              <option value="" disabled>{t.contact.form.choose}</option>
              {t.contact.form.budgets.map((budget) => (
                <option key={budget}>{budget}</option>
              ))}
            </select>
          </div>
          <div className="form-field form-field--wide">
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <label className="consent form-field--wide">
            <input type="checkbox" name="privacy" required />
            <span>{t.contact.form.consent}</span>
          </label>
          <button className="button button--primary form-field--wide" type="submit">
            <span>{t.contact.form.submit}</span>
            <span aria-hidden="true">↗</span>
          </button>
          <p className="form-status form-field--wide" role="status" aria-live="polite">
            {formSent ? t.contact.form.success : ""}
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <LogoMark />
          <div>
            <strong>E&amp;E Visuals by Dzenad Cakic</strong>
            <span>{t.footer.line}</span>
          </div>
        </div>
        <div className="site-footer__links">
          <a href="https://www.instagram.com/eande.visuals/" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href={YOUTUBE_VIDEO_URL} target="_blank" rel="noreferrer">
            {t.footer.youtube} ↗
          </a>
          <a href="/impressum">{t.footer.legal[0]}</a>
          <a href="/datenschutz">{t.footer.legal[1]}</a>
          <button type="button" onClick={() => setCookieNotice(true)}>
            {t.footer.legal[2]}
          </button>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} E&amp;E Visuals. {t.footer.rights}</span>
          <span>{t.hero.location}</span>
          <a href="#top">{t.common.backTop} ↑</a>
        </div>
      </footer>

      {showreelOpen && (
        <div className="media-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button
            className="media-modal__backdrop"
            type="button"
            onClick={() => setShowreelOpen(false)}
            aria-label={t.showreel.close}
          />
          <div className="media-modal__content">
            <button
              className="media-modal__close"
              type="button"
              onClick={() => setShowreelOpen(false)}
              aria-label={t.showreel.close}
              autoFocus
            >
              ×
            </button>
            <div className="media-modal__frame">
              <iframe
                src={YOUTUBE_EMBED_URL}
                title={t.showreel.modalTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div>
              <h2 id="modal-title">{t.showreel.modalTitle}</h2>
              <p>{t.showreel.modalText}</p>
              <a
                className="media-modal__youtube"
                href={YOUTUBE_VIDEO_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.showreel.youtubeLink} ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {cookieNotice && (
        <div className="cookie-note" role="status">
          <p>{t.footer.cookie}</p>
          <button type="button" onClick={() => setCookieNotice(false)} aria-label="Close">×</button>
        </div>
      )}
    </main>
  );
}
