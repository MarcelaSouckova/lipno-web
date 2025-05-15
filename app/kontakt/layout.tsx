// app/kontakt/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Apartmán Dvě zátoky",
  description: "Kontaktujte nás pro rezervaci a dotazy ohledně pronájmu apartmánu Dvě zátoky na Lipně ve Frymburku. Rádi Vám pomůžeme s cenami, dostupností a tipy na výlety.",
  keywords: [
    "kontakt",
    "Apartmán Dvě zátoky",
    "rezervace apartmánu",
    "kontakt Lipno",
    "e-mail pronájem",
    "telefonní kontakt",
    "dotazy ubytování",
    "Frymburk kontakt",
    "Šumava info",
    "ubytování dotazy"
  ],
  
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}