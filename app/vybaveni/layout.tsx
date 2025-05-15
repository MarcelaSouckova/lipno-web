// app/vybaveni/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vybavení – Apartmán Dvě zátoky",
  description:
    "Objevte komfort a vybavení našeho Apartmánu Dvě zátoky ve Frymburku: moderní kuchyň, pohodlné ložnice, wellness zóna a vše, co potřebujete pro ideální pobyt u Lipna a v Šumavě.",
  keywords: [
    "vybavení Lipno",
    "Apartmán Dvě zátoky vybavení",
    "komfort Šumava",
    "kuchyň Apartmán Frymburk",
    "wellness Lipno",
    "wifi ve Frymburku",
    "parkování Lipno",
    "rodinné apartmá",
    "wellness zóna Šumava",
    "pohodlí u Lipna"
  ],
  
};

export default function VybaveniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
