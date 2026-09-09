import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="subpage legal-page">
      <header className="subpage-header">
        <Link className="subpage-brand" href="/#top">ƎE · E&amp;E Visuals</Link>
        <Link href="/">Zur Startseite ←</Link>
      </header>
      <article>
        <p className="section-label">Rechtliches / Vorlage</p>
        <h1>Impressum</h1>
        <div className="legal-warning">
          Diese Seite ist eine klar gekennzeichnete Vorlage. Vor der Veröffentlichung müssen die echten Unternehmens- und Kontaktdaten ergänzt und rechtlich geprüft werden.
        </div>
        <section>
          <h2>Angaben gemäß geltenden Informationspflichten</h2>
          <dl>
            <div><dt>Unternehmensbezeichnung</dt><dd>E&amp;E Visuals by Dzenad Cakic</dd></div>
            <div><dt>Inhaber</dt><dd>Dzenad Cakic</dd></div>
            <div><dt>Ladungsfähige Anschrift</dt><dd>[VOR VERÖFFENTLICHUNG ERGÄNZEN]</dd></div>
            <div><dt>E-Mail</dt><dd>[VOR VERÖFFENTLICHUNG ERGÄNZEN]</dd></div>
            <div><dt>Telefon</dt><dd>[OPTIONAL / ERGÄNZEN]</dd></div>
            <div><dt>Umsatzsteuer-ID</dt><dd>[FALLS VORHANDEN ERGÄNZEN]</dd></div>
            <div><dt>Inhaltlich verantwortlich</dt><dd>[VOLLSTÄNDIGE ANGABEN ERGÄNZEN]</dd></div>
          </dl>
        </section>
        <section>
          <h2>Hinweis zur Prüfung</h2>
          <p>
            Die endgültigen Pflichtangaben hängen von Rechtsform, Leistungen und eingesetzten Diensten ab. Diese Vorlage ersetzt keine individuelle rechtliche Beratung.
          </p>
        </section>
      </article>
    </main>
  );
}
