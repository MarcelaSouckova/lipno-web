// app/udalosti/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Události – Apartmán Dvě zátoky",
  description:
    "Seznamujeme vás s nadcházejícími událostmi, festivaly a akcemi v okolí Lipna a Šumavy během pobytu v Apartmánu Dvě zátoky ve Frymburku.",
  keywords: [
    "události Lipno",
    "Apartmán Dvě zátoky události",
    "festivaly Šumava",
    "akce Frymburk",
    "kultura Lipno",
    "sportovní akce",
    "muzikál Lipno",
    "gastro festival",
    "program pro rodiny",
    "letní akce"
  ],
  
};

export default function UdalostiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


