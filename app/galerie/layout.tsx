import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie – Apartmán Dvě zátoky",
  description: "Prohlédněte si fotogalerii Apartmánu Dvě zátoky ve Frymburku na Lipně – ukázka interiéru, exteriéru, okolní přírody a vybavení pro vaši dokonalou dovolenou.",
  keywords: [
    "fotogalerie",
    "Apartmán Dvě zátoky",
    "Lipno fotky",
    "Frymburk foto",
    "ubytování galerie",
    "Šumava fotografie",
    "pronájem apartmánu fotky",
    "interiér apartmánu",
    "exteriér Lipno",
    "dovolená fotogalerie"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
