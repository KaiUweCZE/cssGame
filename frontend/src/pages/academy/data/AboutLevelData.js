import { tipsImages } from "../../../data/ImagesData";

/*
next tips: uiverse, adobe/express/tools, svgrepo, haikei app, css battle, codepen, clip path, filter to specific color generator

*/

export const aboutLevelData = [
  {
    id: 1,
    introduction: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsum dignissimos aliquid, excepturi dicta reiciendis ea aliquam magni harum! 
            Iste rerum adipisci libero repellendus ea ab assumenda itaque vitae repudiandae aperiam.`,

    main: {
      description: `
                V CSS, position je zásadní vlastnost, 
                která umožňuje přesné umístění HTML 
                elementů na stránce. Pomocí této vlastnosti 
                můžete ovlivnit, jak a kde se element zobrazí 
                ve vztahu k ostatním elementům nebo k viewportu 
                prohlížeče. Existuje pět hlavních hodnot 
                position: static, relative, absolute, fixed, a sticky.
                `,
      li: [
        {
          headline: "static",
          p: `static: Toto je výchozí hodnota. Elementy s position: static jsou umístěny v normálním toku dokumentu, což znamená, že nejsou ovlivněny top, right, bottom, a left vlastnostmi.`,
        },
        {
          headline: "relative",
          p: `Element s position: relative je umístěn relativně vzhledem k jeho normální pozici v toku dokumentu. Můžete použít top, right, bottom, a left vlastnosti k jeho posunutí od této výchozí pozice, aniž byste ovlivnili umístění jiných elementů.`,
        },
        {
          headline: "absolute",
          p: `Element s position: absolute je vyjmut z normálního toku dokumentu a umístěn relativně k nejbližšímu umístěnému předkovi (tedy předkovi s hodnotou position jinou než static). Pokud takový předek neexistuje, bude se vztahovat k dokumentu jako celku. Top, right, bottom, a left vlastnosti poté určují jeho pozici vzhledem k tomuto předku.`,
        },
        {
          headline: "fixed",
          p: `Element s position: fixed je umístěn relativně k viewportu, což znamená, že zůstává na stejném místě i při rolování stránky. Stejně jako u absolute, můžete použít top, right, bottom, a left pro určení jeho pozice.`,
        },
        {
          headline: "sticky",
          p: `Element s position: sticky je kombinací relative a fixed pozicování. Element se chová jako relative pozicovaný, dokud nenarazí na stanovený bod při rolování, v tom okamžiku se chová jako fixed pozicovaný. To je užitečné pro hlavičky tabulek a navigační menu, které mají zůstat viditelné na stránce při rolování.`,
        },
      ],
      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
    },
    videoSection: {
      src: "https://www.youtube.com/embed/fF_NVrd1s14?si=cTyvY6EZ1Zm1mWvH",
      text: `Problematika position je trochu obšírnější a pro hlubší ponoření doporučuji shlédnout videoSection od Kevina Powella,
                skvělého lekotra, který dokáže srozumitelně zasvětit do CSS`,
    },
    tipsSection: {
      p: [
        `V designu webových stránek hraje volba správných barev 
                klíčovou roli. To, jak kombinujete barvy, může ovlivnit 
                nejen celkový vzhled vašeho webu, 
                ale i to, jak jsou vaše stránky vnímány návštěvníky.
                Najít tu pravou kombinaci, která je nejen esteticky přitažlivá, 
                ale také podporuje celkový záměr vaší stránky, může být výzvou. 
                Překonat tento tvůrčí blok, vám může pomoci nástroj Adobe Color.`,
        `Tato webová stránka navíc nabízí možnost experimentovat s vlastními 
                kombinacemi barev pomocí snadno použitelného rozhraní.
                Můžete vytvářet a sdílet vlastní palety, získávat zpětnou 
                vazbu od komunity a dokonce analyzovat trendy v 
                barevných schématech, které se v daném období nejvíce používají.`,
      ],
      img: tipsImages.adobeColor,
      h2: "Adobe Color",
      src: "https://color.adobe.com/explore",
    },
    images: {},
  },

  {
    id: 2,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,

    videoSection: {
      src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
      text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                vido od Kevina Powella`,
    },
    main: {
      description: `
                Marginy a paddingy patří k dalším základním vlastnostem,
                které ovlivňují rozložení a prostorové vztahy mezi elementy na webové stránce.
                Ačkoliv se na první pohled mohou zdát podobné, mají odlišné účely a 
                jejich správné použití je klíčové pro vytváření dobře 
                strukturovaných a vizuálně příjemných webových layoutů.
                Hlavní rozdíl mezi marginy a paddingy spočívá v tom, 
                že marginy ovlivňují prostor vně elementu, zatímco 
                paddingy ovlivňují prostor uvnitř elementu.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        definuje prostor kolem elementu; prostor mezi okrajem 
                        elementu a sousedními elementy. Marginy mohou být 
                        aplikovány na všechny čtyři strany elementu 
                        (horní, pravý, dolní, levý) a mohou mít různé hodnoty, 
                        což umožňuje flexibilní ovládání rozestupů mezi elementy. 
                        Marginy mohou být také záporné, což umožňuje překryv elementů.
                        `,
        },
        {
          headline: "padding",
          p: `
                        Na rozdíl od marginu, padding, neboli výplň, definuje 
                        prostor mezi okrajem elementu a jeho obsahem. 
                        Padding zvyšuje vnější rozměry elementu tím, že 
                        přidává prostor uvnitř elementu. Stejně jako marginy, i 
                        paddingy mohou být aplikovány na všechny čtyři strany
                        Padding je důležitý pro vizuální komfort uživatelů, 
                        protože zajišťuje, že text a další obsah nejsou 
                        příliš blízko k 
                        okrajům elementů, což usnadňuje čtení a interakci s obsahem.
                        `,
        },
      ],
      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
    },
    tipsSection: {
      p: [
        `Vaše počáteční setkání s CSS animacemi může působit jako výzva, ale osvojením základních pravidel si rychle otevřete dveře k oživení vašeho webu. Začít můžete třeba prohlédnutím inspirativních animací na stránce animista.net, kde najdete nejen předpřipravené CSS kódy, ale také možnost tyto animace dále přizpůsobit ve vašem editoru, aby ladily s vaší vizí.`,
      ],
      img: tipsImages.animista,
      src: "https://animista.net",
      h2: "Animista",
    },
    images: {},
  },

  {
    id: 3,
    introduction: `Temporibus doloremque veritatis aperiam enim, iusto doloribus. Iusto omnis 
        explicabo voluptatem, voluptas sequi laboriosam saepe, ipsa adipisci asperiores eligendi, 
        voluptates ut. Dignissimos non voluptatum eaque! Saepe sunt porro facere alias.
        Similique nobis, cupiditate dolor ab omnis`,
    videoSection: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusantium?",
      src: "https://www.youtube.com/embed/S0wilV67hjQ?si=nEkO_e3b1RHvW-xA",
    },
    main: {
      description: `Porozumění rozdílům mezi různými jednotkami a jejich správné použití 
                            může znamenat rozdíl mezi stránkou, která vypadá skvěle na jakémkoliv zařízení, 
                            a stránkou, která ztrácí svou funkčnost při změně velikosti obrazovky. 
                            Přístup k jednotkám CSS by měl být pragmatický a přizpůsobivý, 
                            aby odpovídal potřebám projektu a cílového publika.`,
      li: [
        {
          headline: "absolutní jednotky",
          p: `např. px, pt, cm Tyto jednotky jsou pevně dané a 
                            nezávislé na jakémkoliv jiném faktoru, 
                            jako je velikost obrazovky nebo rozlišení.`,
        },
        {
          headline: "relativní jednotky",
          p: `např. em, rem Tyto jednotky jsou odvozeny od jiných hodnot, 
                        jako je velikost písma rodičovského elementu (pro em) nebo 
                        velikost písma kořenového elementu (pro rem). 
                        Jsou skvělé pro responsivní design, protože se 
                        přizpůsobují uživatelovým preferencím a rozlišení zařízení.`,
        },
        {
          headline: "procentuální jednotky",
          p: `Procenta umožňují definovat velikost elementu 
                        vzhledem k velikosti jeho rodičovského elementu.`,
        },
        {
          headline: "viewport jednotky ",
          p: `např. vw, vh, vmin, vmax Tyto jednotky jsou relativní 
                        k velikosti viewportu, což znamená, že umožňují elementům 
                        přizpůsobit se různým velikostem a orientacím obrazovek.`,
        },
      ],
    },
    tipsSection: {
      p: [
        `Započít vaši cestu s CSS gradienty může být na první pohled komplikované, ale jakmile se seznámíte s jejich základními principy, vaše webové stránky se mohou proměnit a získat úplně nový rozměr estetiky. Kde začít? Stránka cssgradient.com je skvělým výchozím bodem, kde najdete inspiraci a praktické příklady gradientů, které můžete snadno implementovat a upravit v souladu s vaším designovým směrem.`,
      ],
      img: tipsImages.cssgradient,
      src: "https://cssgradient.io/",
      h2: "CSS GRADIENT",
    },
    images: {},
  },
  {
    id: 4,
    introduction: `Mollitia ipsum numquam molestias!
        Perspiciatis sit cum debitis nostrum doloribus deleniti ipsam placeat ipsa labore minus.`,

    videoSection: {
      text: "cum debitis nostrum dol",
      src: "https://www.youtube.com/embed/n23zomcLCPg?si=eAuktA9vVDS6x6nq",
    },
    main: {
      description: `Mollitia ipsum numquam molestias!
                Perspiciatis sit cum debitis nostrum doloribus deleniti ipsam`,
      li: [
        {
          headline: "ipsum",
          p: "soluta necessitatibus, totam culpa recusandae,",
        },
        {
          headline: "numquam",
          p: "repellendus velit et error eius nemo temporibus, tempore repudiandae",
        },
      ],
    },
    tipsSection: {
      p: [
        `Fancy Boreder radius je jeden z dalších zajímavých projektů, který vám umožní zábavně měnit a nastavovat hodnotu border-raidus v CSS.
                Díky intuitivnímu rozhraní můžete snadno měnit 
                zakřivení hran objektů, a tak 
                dodat vašim projektům osobitý charakter a styl.`,
      ],
      img: tipsImages.cssgradient,
      src: "https://9elements.github.io/fancy-border-radius/",
      h2: "Fancy border radius",
      specialClass: "fancy-border",
    },
    images: {},
  },
  {
    id: 5,
    introduction: `soluta necessitatibus, totam culpa recusandae, quia esse dignissimos. 
        Neque tempora repellendus velit et error eius nemo temporibus, tempore repudiandae,`,
    fullData: {
      videoSection: {
        text: "",
        src: "https://www.youtube.com/embed/S0wilV67hjQ?si=nEkO_e3b1RHvW-xA",
      },
      main: {
        description: "",
        li: [
          {
            headline: "",
            p: "",
          },
          {
            headline: "",
            p: "",
          },
        ],
      },
      images: {},
      tips: {},
    },
  },
  {
    id: 6,
    introduction: `Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. eaque nihil omnis possimus facere. 
        Quas ut accusantium nesciunt reprehenderit unde debitis,`,
    fullData: {
      videoSection: {
        text: "",
        src: "https://www.youtube.com/embed/S0wilV67hjQ?si=nEkO_e3b1RHvW-xA",
      },
      main: {
        description: "",
        li: [
          {
            headline: "",
            p: "",
          },
          {
            headline: "",
            p: "",
          },
        ],
      },
      images: {},
      tips: {},
    },
  },
  {
    id: 7,
    introduction: `A voluptatum magni dicta earum nam, quam, aliquam 
        minus placeat quod molestias modi possimus molestiae hic iste nostrum.`,
    fullData: {
      videoSection: {
        text: "",
        src: "https://www.youtube.com/embed/S0wilV67hjQ?si=nEkO_e3b1RHvW-xA",
      },
      main: {
        description: "",
        li: [
          {
            headline: "",
            p: "",
          },
          {
            headline: "",
            p: "",
          },
        ],
      },
      images: {},
      tips: {},
    },
  },
  {
    id: 8,
    introduction: `Voluptatem alias assumenda nihil consequatur nisi.
        Ipsam ducimus enim nobis laborum quae deserunt? Voluptates eligendi reiciendis necessitatibus.`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 9,
    introduction: `Atque ut placeat ratione cupiditate reprehenderit 
        quos laborum. Vel itaque similique autem quas.
        Perferendis similique, excepturi natus eius aut fugit sequi 
        quisquam et in exercitationem dolor, sunt modi quam consectetur libero unde?`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 10,
    introduction: `In consequatur sapiente impedit expedita officia omnis non 
        necessitatibus quisquam dolorum porro vitae eveniet reprehenderit, at ipsam? `,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 11,
    introduction: `Sint harum sapiente quae voluptatibus earum hic 
        faciaccusantium veniam rem molestiae non, 
        praesentium voluptatibus, reiciendis nesciunt odio voluptas id?`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 12,
    introduction: `Temporibus aspernatur corporis iusto ab quod asperiores. veniam quam illum vitae ea? Architecto, neque expedita?`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 13,
    introduction: `Sint sit eius nobis, optio praesentium ea ullam iusto. 
        Natus sequi harum consequuntur molestias soluta`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 14,
    introduction: `Fd quaerat. Quae dolor et architecto
            magnam delectus veritatis quod autem odio, quibusdam aliquid dolore.
            Saepe illum corrupti voluptatum animi tempore odit ratione provident,`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 15,
    introduction: `Ugiat adipisci ipsa suscipit amet corporis et sit 
        nam blanditiis dolorum totam, atque harum! Nisi veniam consequuntur 
        optio repellendus quos? Possimus, nemo!
        Harum optio  blanditiis tempora officiis temporibus quod, labore vitae dolorum error aliqui`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 16,
    introduction: `Lexercitationem dolore aperiam numquam culpa. 
        Eveniet doloribus, expedita sapiente repellat.`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 17,
    introduction: `lis praesentium quibusdam sunt dolores itaque iusto 
        nisi laboriosam, recusandae in quam a placeat? 
        Voluptates explicabo perspiciatis nostrum quisquam cum, sed suscipit eligendi?
        Quam harum nihil sed est voluptate quis iusto libero, 
        quaerat quibusdam asperiores mollitia rem expedita! Culpa est, laboriosam `,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 18,
    introduction: `Libero repellendus ea ab assumenda 
        itaque vitae repudiandae aperiam.
        aliquam ratione fugit dolores aliquid aperiam velit laborum id quidem error, 
        dicta ducimus sunt ab porro ipsum natus corrupti, provident 
        distinctio iure exercitationem? Sit eum vel suscipit nostrum!
        Temporibus doloremque veritatis aperiam enim, iusto doloribus. Iusto omnis 
        explicabo voluptatem, voluptas sequi laboriosam saepe, ipsa adipisci asperiores eligendi, 
        voluptates ut. Dignissimos non voluptatum eaque! Saepe sunt porro facere alias.
        Similique nobis, cupiditate dolor ab omnis
        `,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 19,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim 
        inventore voluptatibus voluptatum quibusdam!  
        dolore officiis labore voluptatum.
        fuga odio consequatur ipsa cupiditate saepe! Non`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
  {
    id: 20,
    introduction: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsum dignissimos aliquid, excepturi dicta reiciendis ea aliquam magni harum! 
            Iste rerum adipisci libero repellendus ea ab assumenda itaque vitae repudiandae aperiam.`,
    fullData: {
      videoSection: {},
      main: {},
      images: {},
      tips: {},
    },
  },
];
