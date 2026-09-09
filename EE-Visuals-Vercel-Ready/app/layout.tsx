import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionDirector from "./motion-director";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eevisuals.de"),
  title: {
    default: "E&E Visuals — Fotografie & Film aus Augsburg",
    template: "%s — E&E Visuals",
  },
  description:
    "Cinematic Fotografie, Film und Visual Content für Automotive, Produkte, Unternehmen, Immobilien und Events — aus Augsburg, verfügbar in Bayern und deutschlandweit.",
  keywords: [
    "Fotograf Augsburg",
    "Videograf Augsburg",
    "Automotive Fotografie",
    "Produkt Fotografie",
    "Cinematic Video",
    "E&E Visuals",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E&E Visuals — Fotografie & Film aus Augsburg",
    description:
      "Cinematic Fotografie und Film für Fahrzeuge, Produkte, Unternehmen, Immobilien und Events.",
    locale: "de_DE",
    type: "website",
    siteName: "E&E Visuals",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-placeholder.svg",
    shortcut: "/logo-placeholder.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MotionDirector />
      </body>
    </html>
  );
}
