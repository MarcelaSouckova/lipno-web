// app/rezervace/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezervace – Apartmán Dvě zátoky",
  description: "Rezervujte si ubytování v Apartmánu Dvě zátoky na Lipně ve Frymburku. Zjistěte dostupné termíny, ceny a podmínky pronájmu online.",
  keywords: [
    "rezervace",
    "Apartmán Dvě zátoky",
    "termín pronájmu",
    "rezervace Lipno",
    "online rezervace",
    "Frymburk rezervace",
    "Šumava rezervace",
    "ceník",
    "volné termíny",
    "ubytování Lipno",
    "rezervovat apartmán"
  ],
  
};

export default function RezervaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
