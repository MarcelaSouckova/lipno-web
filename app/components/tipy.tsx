import React, { useState } from 'react';
import Image from 'next/image';
import { FaHiking, FaChild, FaUtensils, FaBicycle, FaShip, FaSnowflake } from 'react-icons/fa';
 
interface Detail {
  image: { src: string; alt: string };
  description: string;
  websiteUrl: string;
  mapEmbedUrl: string;
}
 
interface Suggestion {
  title: string;
  detail?: Detail;
}
 
interface Category {
  title: string;
  icon: React.ElementType;
  suggestions: Suggestion[];
}
 
const categories: Category[] = [
  {
    title: 'Výlety',
    icon: FaHiking,
    suggestions: [
      {
        title: 'Naučná stezka Olšina',
        detail: {
          image: { src: '/images/Olšina.jfif', alt: 'Naučná stezka Olšina' },
          description:
            'Přírodovědná naučná stezka kolem rašelinišť u Olšiny se zastaveními a informačními panely o místní flóře a fauně.',
          websiteUrl: 'https://www.vls.cz/cs/naucna-stezka-olsina',
          mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10515.299272880227!2d14.093457447384642!3d48.785234591152005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47749fb577383915%3A0xbdd9198de1d1acfd!2zT2zFoWluYQ!5e0!3m2!1scs!2scz!4v1746779472537!5m2!1scs!2scz',
        },
      },
      {
        title: 'Jezerní stezka',
        detail: {
          image: { src: '/images/jezerni stezka.jfif', alt: 'Jezerní stezka' },
          description:
            'Malebná trasa kolem jezera s vyhlídkovými body a odpočinkovými zónami. Vhodná pro rodiny i cyklisty.',
          websiteUrl:
            'https://www.lipno.cz/volny-cas/in-line-brusleni/jezerni-in-line-stezka',
          mapEmbedUrl:
            'https://www.google.com/maps/d/embed?mid=1ScgyyYm9skDotMhEiy0QpkbnwALGfKCQ&ehbc=2E312F',
        },
      },
      {
        title: 'Hrad Vítkův Kámen',
        detail: {
          image: { src: '/images/Vítkův hrádek.jfif', alt: 'Hrad Vítkův Kámen' },
          description:
            'Gotický hrad z 13. století s expozicemi a průvodcovskými prohlídkami. Krásný výhled na Šumavu a Lipno.',
          websiteUrl: 'https://www.vitkuvhradek.eu',
          mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.16199709806!2d14.100672474956864!3d48.64501607130403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47737d24aac9b913%3A0x33e4b0bdcb464568!2zVsOtdGvFr3YgSHLDoWRlaw!5e0!3m2!1scs!2scz!4v1746637096007!5m2!1scs!2scz',
        },
      },
    ],
  },
  {
    title: 'Atrakce pro děti',
    icon: FaChild,
    suggestions: [
      {
        title: 'Království lesa',
        detail: {
          image: { src: '/images/Království lesa.jfif', alt: 'Království lesa' },
          description:
            'Dětský ráj plný zábavy! Království lesa na Lipně nabízí desítky atrakcí, tvořivé dílničky, království zvířátek a herní prvky v krásné přírodě.',
          websiteUrl: 'https://www.kralovstvilesa.cz/',
          mapEmbedUrl:
            'https://www.google.com/maps?q=Kr%C3%A1lovstv%C3%AD%20lesa%20Lipno&output=embed',
        },
      },
      {
        title: 'Stezka korunami stromů',
        detail: {
          image: { src: '/images/Stezka korunami.jfif', alt: 'Stezka korunami stromů' },
          description:
            'Vydejte se na unikátní Stezku korunami stromů v Lipně, která nabízí chodník v korunách stromů, vyhlídkovou věž a úchvatné výhledy na okolní lesy a jezero.',
          websiteUrl: 'https://www.stezkakorunamistromu.cz/',
          mapEmbedUrl:
            'https://www.google.com/maps?q=Stezka+korunami+stromů+Lipno&output=embed',
        },
      },
      {
        title: 'Aquapark Frymburk',
        detail: {
          image: { src: '/images/Acquapark.jfif', alt: 'Aquapark Frymburk' },
          description: 'Moderní aquapark s tobogány, bazény a wellness zázemím přímo u Lipna.',
          websiteUrl: 'https://www.hotelfrymburk.cz/aquapark',
          mapEmbedUrl: 'https://www.google.com/maps?q=Aquapark+Frymburk&output=embed',
        },
      },
    ],
  },
  {
    title: 'Restaurace',
    icon: FaUtensils,
    suggestions: [
      {
        title: 'Penzion Kovářov',
        detail: {
          image: {
            src: '/images/Penzion K.webp',
            alt: 'Penzion Kovářov'
          },
          description: 'Penzion Kovářov nabízí možnost obědů a večeří v příjemném prostředí přímo na místě.',
          websiteUrl: 'https://www.penzionkovarov.cz/',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.8178620924377!2d14.121293374960723!3d48.689846871309754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477362f048c40a17%3A0xf5f02043747855ca!2sPenzion%20Kov%C3%A1%C5%99ov%20-%20Lipno!5e0!3m2!1scs!2scz!4v1746783282539!5m2!1scs!2scz'
        }
      },
     
      {
        title: 'Hotel Maxant Frymburk',
        detail: {
          image: {
            src: '/images/Maxant.webp',
            alt: 'Hotel Maxant Frymburk'
          },
          description: 'Hotel Maxant ve Frymburku nabízí možnost občerstvení v útulné restauraci a kávu ve vyhlášené cukrárně.',
          websiteUrl: 'https://www.hotelmaxant.cz/cs/',
          mapEmbedUrl: 'https://www.google.com/maps?q=Hotel+Maxant+Frymburk&output=embed'
        }
      }
      ,
      {
        title: 'Kynutá buchta',
        detail: {
          image: {
            src: '/images/Buchta.webp',
            alt: 'Kynutá buchta'
          },
          description: 'Kynutá buchta bistro nabízí domácí pečené kynuté buchty a dezerty k posezení nebo s sebou.',
          websiteUrl: 'https://www.kynutabuchtabistro.cz/',
          mapEmbedUrl: 'https://www.google.com/maps?q=Kynut%C3%A1+buchta+bistro&output=embed'
        }
      }
     
    ],
  },
  {
    title: 'Zimní aktivity',
    icon: FaSnowflake,
    suggestions: [
      {
        title: 'Ski areál Lipno',
        detail: {
          image: {
            src: '/images/lyžař.jfif',
            alt: 'Lyžař na sjezdovce na Lipně'
          },
          description: 'Skiareál Lipno se specializuje na rodiny s dětmi a lyžařskou výuku začátečníků a mírně pokročilých přímo v Lipně nad Vltavou. Lyžaři ocení pohodlnou přepravu na 3 čtyřsedačkových lanovkách, bezpečné a kvalitně zasněžované sjezdovky či snowpark se zábavnou skicrossovou dráhou. Klenotem Skiareálu Lipno je Foxpark, který je nejmodernějším výukovým hřištěm se třemi pojízdnými koberci, pohádkovými slalomy a zábavným výukovým programem s maskotem lišákem Foxem.',
          websiteUrl: 'https://www.lipnocentrum.cz/skiareal-lipno',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21089.802649378547!2d14.182883374316411!3d48.64380439999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47737b2c913f9773%3A0xc1b1c5c77b011c00!2zUm9kaW5uw70gYXJlw6FsIExpcG5v!5e0!3m2!1scs!2sus!4v1747066127692!5m2!1scs!2sus'
        }
      },
     
      {
        title: 'Běžkařské trasy Frymburk - Lipno',
        detail: {
          image: {
            src: '/images/běžky.jfif',
            alt: 'Běžkař na trase v zasněžené Šumavě'
          },
          description: 'Oblast Lipna a Šumavy nabízí téměř 40 km pravidelně upravovaných tratí pro klasiku i bruslení',
          websiteUrl: 'https://www.lipno.cz/volny-cas/lyzovani/bezky-a-bezecke-trasy/',
          mapEmbedUrl: 'test'
        }
      },
      {
        title: 'Bruslení na lipenském jezeře',
        detail: {
          image: {
            src: '/images/magistrála.jpg',
            alt: 'Lidé bruslící na zamrzlém Lipenském jezeře'
          },
          description: 'Když teploty klesnou, promění se hladina Lipna v přírodní kluziště – vychutnejte si bruslení s výhledem na okolní Šumavu.',
          websiteUrl: 'https://ledovamagistrala.cz/',
          mapEmbedUrl: 'test'
        }
      },
    ],
  },
 
  {
  title: 'Půjčovny',
  icon: FaBicycle,
  suggestions: [
    {
      title: 'Půjčovna sportovního vybavení Frymburk',
      detail: {
        image: {
          src: '/images/půjčovna.jfif',
          alt: 'půjčovna sportovního vybavení'
        },
        description: 'Půjčovna sportovního vybavení jen 50 m od Jezerní cyklostezky Frymburk–Lipno. Nabízíme kola, elektrokola, koloběžky, inline brusle i zimní výbavu',
        websiteUrl: 'https://www.pujcovna-frymburk.cz/',
        mapEmbedUrl: 'test'
      }
    },
    {
      title: 'Lipno centrum',
      detail: {
        image: {
          src: '/images/paddleboard.jfif',
          alt: 'Lidé na paddleboardu na Lipenském jezeře'
        },
        description: 'Vydejte se objevovat klidné zálivy Lipna v kajaku nebo na paddleboardu.',
        websiteUrl: 'https://www.lipnocentrum.cz/',
        mapEmbedUrl: 'test' // vložte svůj embed kód
      }
    },
   
  ]
},
 
  {
    title: 'Přívozy',
    icon: FaShip,
    suggestions: [
      {
  title: 'Cyklopřevoz Hrdoňov – Svatý Tomáš',
  detail: {
    image: {
      src: '/images/cyklopřevoz.jfif',
      alt: 'Cyklopřevoz Hrdoňov – Svatý Tomáš na Lipenském jezeře'
    },
    description: 'Cyklopřevoz Hrdoňov – Svatý Tomáš jezdí v letní sezóně (květen–září) denně od 9:00 do 18:00 hodin; mohou ho využít cyklisté i pěší turisté. ',
    websiteUrl: 'https://lipnobluemarine.cz/cykloprevoz/',
    mapEmbedUrl: 'test' // vložte svůj embed kód
  }
},
 
      { title: 'Výletní loď ke skalám' },
      { title: 'Sezónní přívoz na ostrov' },
    ],
  },
];
 
const Tipy: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openDetail, setOpenDetail] = useState<{ cat: number; idx: number } | null>(null);
 
  const toggleCategory = (idx: number) => {
    setOpenCategory(openCategory === idx ? null : idx);
    setOpenDetail(null);
  };
 
  const toggleDetail = (catIdx: number, itemIdx: number) => {
    setOpenDetail(
      openDetail?.cat === catIdx && openDetail.idx === itemIdx
        ? null
        : { cat: catIdx, idx: itemIdx }
    );
  };
 
  return (
    <section className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Tipy na výlety a aktivity
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className="bg-gray-100 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <button
              onClick={() => toggleCategory(catIdx)}
              className="w-full text-left flex justify-between items-center mb-4"
            >
              <div className="flex items-center space-x-2">
                <cat.icon className="w-6 h-6 text-indigo-500" />
                <h3 className="text-xl font-semibold text-gray-700">
                  {cat.title}
                </h3>
              </div>
              <span className="text-indigo-500">
                {openCategory === catIdx ? '−' : '+'}
              </span>
            </button>
 
            {openCategory === catIdx && (
              <ul className="space-y-3">
                {cat.suggestions.map((sug, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{sug.title}</span>
                      {sug.detail && (
                        <button
                          onClick={() => toggleDetail(catIdx, idx)}
                          className="text-indigo-600 hover:text-indigo-800 text-sm"
                        >
                          {openDetail?.cat === catIdx && openDetail.idx === idx
                            ? '− Detail'
                            : '+ Detail'}
                        </button>
                      )}
                    </div>
 
                    {openDetail?.cat === catIdx && openDetail.idx === idx && sug.detail && (
                      <div className="mt-4 bg-gray-50 rounded-lg p-4 space-y-4">
                        <Image
                          src={sug.detail.image.src}
                          alt={sug.detail.image.alt}
                          width={500}
                          height={300}
                          className="rounded-md"
                        />
                        <p className="text-sm text-gray-700">
                          {sug.detail.description}
                        </p>
                        <div className="flex space-x-4">
                          <a
                            href={sug.detail.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline text-sm font-medium"
                          >
                            Oficiální stránky
                          </a>
                        </div>
                        <div className="mt-2">  
                          <iframe
                            src={sug.detail.mapEmbedUrl}
                            width="100%"
                            height="200"
                            allowFullScreen={false}
                            loading="lazy"
                            className="rounded-md border"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default Tipy;