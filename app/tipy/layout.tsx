// app/tipy/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipy – Apartmán Dvě zátoky",
  description: "Inspirujte se tipy na výlety, atrakce a aktivity v okolí Lipna a Šumavy během pobytu v Apartmánu Dvě zátoky ve Frymburku.",
  keywords: [
    "tipy výlety",
    "Apartmán Dvě zátoky tipy",
    "Lipno atrakce",
    "Šumava tipy",
    "co dělat Lipno",
    "Frymburk aktivity",
    "rodinné výlety",
    "vodní sporty Lipno",
    "turistické trasy",
    "cyklotrasy Šumava"
  ],
 
};

export default function TipyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
