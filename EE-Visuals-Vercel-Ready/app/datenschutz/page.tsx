import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="subpage legal-page">
      <header className="subpage-header">
        <Link className="subpage-brand" href="/#top">ƎE · E&amp;E Visuals</Link>
        <Link href="/">Zur Startseite ←</Link>
      </header>
      <article>
        <p className="section-label">Rechtliches / Vorlage</p>
        <h1>Datenschutzerklärung</h1>
        <div className="legal-warning">
          Noch nicht veröffentlichungsfertig: Diese Struktur muss nach Auswahl von Hosting, Formular-Backend, Analytics, Fonts, Videos und Cookie-Lösung individuell ergänzt und rechtlich geprüft werden.
        </div>
        <section>
          <h2>1. Verantwortliche Stelle</h2>
          <p>[VOLLSTÄNDIGEN NAMEN, ANSCHRIFT UND KONTAKTDATEN ERGÄNZEN]</p>
        </section>
        <section>
          <h2>2. Hosting und Server-Logdaten</h2>
          <p>[FINALEN HOSTING-ANBIETER, VERARBEITETE DATEN, ZWECK, RECHTSGRUNDLAGE UND SPEICHERDAUER ERGÄNZEN]</p>
        </section>
        <section>
          <h2>3. Kontaktaufnahme und Formular</h2>
          <p>
            Das Formular in diesem Prototyp sendet derzeit keine Daten an ein Backend. Nach technischer Anbindung müssen Empfänger, Zweck, Rechtsgrundlage, Speicherdauer und mögliche Auftragsverarbeiter ergänzt werden.
          </p>
        </section>
        <section>
          <h2>4. Externe Medien und Links</h2>
          <p>
            Demo-Bilder werden aktuell von einem externen Bilddienst geladen. Vor Veröffentlichung sollen diese durch eigene, lokal optimierte Medien ersetzt werden. Externe Links, Video-Player und Social-Media-Einbindungen müssen in der finalen Erklärung berücksichtigt werden.
          </p>
        </section>
        <section>
          <h2>5. Cookies, Analyse und Einwilligungen</h2>
          <p>
            Der Prototyp nutzt keine absichtlich eingebauten optionalen Tracking-Cookies. Sobald Analytics, eingebettete Videos, Karten oder Marketingdienste ergänzt werden, muss die technische und rechtliche Umsetzung neu geprüft werden.
          </p>
        </section>
        <section>
          <h2>6. Betroffenenrechte und Aufbewahrung</h2>
          <p>[KONKRETE INFORMATIONEN ZU RECHTEN, KONTAKTWEGEN, BESCHWERDESTELLE UND LÖSCHKONZEPT RECHTLICH PRÜFEN UND ERGÄNZEN]</p>
        </section>
      </article>
    </main>
  );
}
