import { tipsImages } from "../../../data/imagesData";

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
                In CSS, the position property is fundamental 
                for precisely placing HTML elements on a page. 
                This property determines how an element is positioned 
                relative to other elements or 
                the browser's viewport. There are six main position values:
                `,
      li: [
        {
          headline: "Static",
          p: ` Every element has this position by default. 
          Elements with position: static follow the normal page 
          flow and are not affected by top, 
          right, bottom, left properties or z-index. 
          Think of it as the element's "natural state".`,
        },
        {
          headline: "Relative",
          p: `The element stays in its original place in the document 
          flow, just like static. However, you can now use top, right, 
          bottom, and left properties to "nudge" it from its original 
          position. The key point is that moving the element 
          doesn't affect the position of other elements around it.`,
        },
        {
          headline: "Absolute",
          p: `The element is removed from the flow of the document 
          and other elements will behave as if 
          it’s not even there whilst all 
          the other positional properties will work on it.`,
        },
        {
          headline: "Fixed",
          p: `The element is removed from the flow of the document like 
          absolutely positioned elements. In fact they behave almost 
          the same, only fixed positioned elements are always relative 
          to the document, not any particular parent, 
          and are unaffected by scrolling.`,
        },
        {
          headline: "Sticky",
          p: `The element is treated like a relative value until the 
          scroll location of the viewport reaches a specified threshold, 
          at which point the element takes a 
          fixed position where it is told to stick.`,
        },
        {
          headline: "Inherit",
          p: `This position value doesn’t cascade, so this can be used 
          to specifically force it to, 
          and inherit the positioning value from its parent.`,
        },
      ],
      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,

      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },

      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.adobeColor,
          alt: "Adobe Color Palette",
          span: "Check it!",
          href: "https://color.adobe.com/explore",
        },
      },
    },
  },

  {
    id: 2,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 3,
    introduction: `Každý element na webové stránce potřebuje svůj prostor, aby mohl být správně zobrazen.
          Jedním z nejdůležitějších aspektů webového designu je použití správných CSS jednotek 
          a nastavení velikostí elementů tak, aby vypadaly dobře na všech zařízeních.
          Při budování mostů v reálném světě i těch na webu je klíčové znát jejich správné rozměry.`,
    videoSection: {
      text: "Pro lepší pochopení CSS jednotek a velikostí elementů se podívej na toto video od Kevina Powella:",
      src: "https://www.youtube.com/embed/S0wilV67hjQ?si=nEkO_e3b1RHvW-xA",
    },
    main: {
      description: `
                 Při vytváření responzivních webových stránek je zásadní zvolit správné jednotky 
                 pro šířku, výšku, mezery a další rozměry elementů. Různé typy jednotek mají 
                 své specifické vlastnosti a použití. Při řešení tohoto levelu budeš potřebovat
                 upravit šířku mostu, aby dosáhl druhého břehu. Porozumění tomu, jak pracovat
                 s procentuálními jednotkami a vlastností width ti pomůže tento level vyřešit.
                  `,
      li: [
        {
          headline: "absolutní jednotky",
          p: `Jednotky jako px, pt nebo cm mají pevnou velikost nezávislou na jakémkoliv kontextu.
              Pixel (px) je nejběžnější jednotkou pro přesné rozměry, ale není ideální 
              pro responzivní design, protože se nepřizpůsobuje velikosti obrazovky. 
              Například most se šířkou 500px může být příliš široký pro mobilní zařízení
              nebo příliš úzký pro velké monitory.`,
        },
        {
          headline: "relativní jednotky",
          p: `em a rem jsou odvozené od velikosti písma. em se vztahuje k velikosti 
              písma aktuálního elementu, zatímco rem k velikosti písma kořenového 
              elementu (html). Tyto jednotky jsou užitečné pro zachování poměrů 
              mezi velikostí textu a okolními prostory. Pro most bychom je mohli 
              použít, pokud by jeho šířka měla odpovídat nějaké textové referenci.`,
        },
        {
          headline: "procentuální jednotky",
          p: `Procenta (%) jsou velmi důležitá pro responzivní design, protože umožňují
              definovat velikost elementu relativně k jeho rodiči. Most s šířkou 50% 
              zabírá přesně polovinu dostupného prostoru, což může být nedostatečné, 
              pokud potřebujeme přemostit celou mezeru. Změna na 100% by zajistila, 
              že most vyplní celou dostupnou šířku svého kontejneru.`,
        },
        {
          headline: "viewport jednotky",
          p: `vw, vh, vmin a vmax jsou relativní k velikosti viewportu (viditelné oblasti 
              okna prohlížeče). 1vw představuje 1% šířky viewportu, takže most o šířce 
              100vw by byl stejně široký jako celá obrazovka. Tyto jednotky jsou užitečné, 
              když potřebujeme, aby element reagoval přímo na velikost obrazovky, 
              nezávisle na svém rodičovském kontejneru.`,
        },
      ],
      aboutLevel: `V tomto levelu je tvým úkolem prodloužit most tak, aby emoji mohlo přejít na druhou stranu.
                  Most má výchozí šířku 50%, což nestačí k překlenutí mezery.
                  Budeš muset zvětšit jeho šířku pomocí vlastnosti 'width' s procentuální hodnotou,
                  aby most dosáhl od jednoho břehu ke druhému. Zkus experimentovat s různými hodnotami
                  jako 75%, 90% nebo 100% a sleduj, jak se most přizpůsobuje.`,

      videoSection: {
        src: "https://www.youtube.com/embed/N5A6CINFgmw?si=wbZ_7ftJSEMNVPrh",
        text: `Podívej se na toto video, kde Kevin Powell vysvětluje rozdíly mezi CSS jednotkami 
              a pomůže ti lépe pochopit, kdy použít jakou jednotku pro responzivní design.`,
      },

      tip: {
        text: `Pro jednodušší práci s CSS velikostmi a responzivním designem můžeš využít nástroj CSS Gradient. 
              Kromě vytváření gradientů nabízí i další užitečné generátory vlastností včetně rozměrů a jednotek. 
              Pomůže ti lépe vizualizovat různé hodnoty a jejich dopad na vzhled stránky.`,
        img: {
          src: tipsImages.cssgradient,
          alt: "CSS Gradient Tool",
          span: "Vyzkoušej to!",
          href: "https://cssgradient.io/",
        },
      },
    },
    images: {},
  },

  {
    id: 4,
    introduction: `Prostor mezi elementy a jejich obsahem hraje klíčovou roli v designu webových stránek.
          Někdy však vnitřní prostor (padding) může překážet tam, kde ho nepotřebujeme.
          V tomto levelu se naučíš, jak pracovat s CSS vlastnostmi, které kontrolují prostor
          uvnitř a kolem elementů, abys mohl vytvořit perfektně vyvážený layout.`,
    videoSection: {
      text: "Podívej se na toto skvělé video, které vysvětluje rozdíly mezi margin a padding vlastnostmi v CSS:",
      src: "https://www.youtube.com/embed/n23zomcLCPg?si=eAuktA9vVDS6x6nq",
    },
    main: {
      description: `
                 CSS nabízí několik způsobů, jak kontrolovat prostor uvnitř a kolem elementů.
                 Box model je základním konceptem v CSS, který definuje, jak je element
                 vykreslován v prohlížeči. Skládá se ze čtyř částí: obsahu (content),
                 vnitřního okraje (padding), rámečku (border) a vnějšího okraje (margin).
                 
                 Pochopení toho, jak tyto části spolupracují, je klíčové pro vytvoření
                 přesných a responzivních layoutů. V některých případech může vnitřní padding
                 způsobit, že element zabírá více místa, než očekáváme, což může bránit
                 správnému zobrazení a fungování našeho designu.
                  `,
      li: [
        {
          headline: "padding vs. margin",
          p: `Padding (vnitřní okraj) vytváří prostor uvnitř elementu, mezi jeho obsahem a hranicí.
              Margin (vnější okraj) vytváří prostor kolem elementu, mezi jeho hranicí a okolními elementy.
              Hlavní rozdíl je v tom, že padding je považován za součást elementu a ovlivňuje jeho celkovou velikost,
              zatímco margin vytváří prostor kolem elementu a neovlivňuje jeho samotnou velikost.
              Problém může nastat, když má rodičovský element nastavený padding a jeho dítě potřebuje
              využít celý dostupný prostor - padding rodiče vytváří prostor, který dítě nemůže využít.`,
        },
        {
          headline: "padding-inline a padding-block",
          p: `Moderní CSS zavádí logické vlastnosti, které lépe odpovídají směru textu
              a zjednodušují tvorbu vícejazyčných stránek. padding-inline ovlivňuje horizontální
              padding v běžných jazycích psaných zleva doprava (jako čeština) - tedy
              padding-left a padding-right. padding-block ovlivňuje vertikální padding
              (padding-top a padding-bottom). Tyto vlastnosti jsou užitečné zejména pro
              responzivní design a lokalizaci, ale mohou také způsobit nechtěné mezery v layoutu.`,
        },
        {
          headline: "box-sizing",
          p: `Vlastnost box-sizing určuje, jak se počítá celková šířka a výška elementu.
              Výchozí hodnota content-box znamená, že šířka a výška se aplikují pouze na obsah,
              a padding a border se přidávají navíc. Hodnota border-box způsobí, že šířka a výška
              zahrnují obsah, padding i border. Při řešení problémů s paddingem, který blokuje
              prostor, může změna box-sizing na border-box pomoci, ale ne vždy je to nejlepší řešení.`,
        },
        {
          headline: "calc() a řešení prostorových problémů",
          p: `CSS funkce calc() umožňuje provádět matematické operace s různými jednotkami.
              Může být použita k odečtení velikosti paddingu od celkové šířky, což je užitečné,
              když potřebujeme, aby element vyplnil dostupný prostor navzdory paddingu rodiče.
              Například width: calc(100% + 2rem) může rozšířit element tak, aby kompenzoval
              padding-inline: 1rem na obou stranách rodičovského elementu.`,
        },
      ],
      aboutLevel: `V tomto levelu narazíš na problém, kde vnitřní padding kontejneru (padding-inline: 1rem)
                  brání tvému mostu, aby plně spojil oba břehy. Musíš najít způsob, jak tento problém vyřešit.
                  Můžeš buď odstranit padding z kontejneru (pokud máš přístup k jeho stylům), nebo upravit
                  šířku mostu tak, aby překonal tento padding (například pomocí calc() nebo nastavením
                  záporného margin). Experimentuj s různými přístupy a najdi ten, který pro tebe funguje nejlépe!`,

      videoSection: {
        src: "https://www.youtube.com/embed/n23zomcLCPg?si=eAuktA9vVDS6x6nq",
        text: `Kevin Powell v tomto videu detailně vysvětluje rozdíly mezi margin a padding
              a ukazuje různé techniky, jak s nimi pracovat pro dosažení požadovaného layoutu.`,
      },

      tip: {
        text: `CSS gradient je skvělý nástroj nejen pro vytváření gradientů, ale také pro pochopení,
              jak různé CSS vlastnosti ovlivňují rozvržení stránky. Zkoušej si vizualizovat padding
              a margin jako barevné oblasti kolem elementů, což ti může pomoci lépe pochopit,
              jak tyto vlastnosti ovlivňují layout a kde mohou způsobovat problémy.`,
        img: {
          src: tipsImages.cssgradient,
          alt: "CSS Gradient Tool",
          span: "Vyzkoušej to!",
          href: "https://cssgradient.io/",
        },
      },
    },
    images: {},
  },
  {
    id: 5,
    introduction: `Flexbox je mocný nástroj pro vytváření flexibilních a responzivních layoutů. 
          Umožňuje nám snadno kontrolovat zarovnání, směr a distribuci prostoru mezi položkami. 
          Někdy však může určité nastavení Flexboxu způsobit neočekávané chování, 
          které musíme umět rozpoznat a opravit.`,
    main: {
      description: `
                 CSS Flexbox (Flexible Box Layout) je jedním z nejužitečnějších a nejpoužívanějších 
                 nástrojů pro tvorbu moderních webových layoutů. Flexbox nabízí jednoduché a intuitivní
                 řešení mnoha běžných problémů v CSS, jako je zarovnání prvků, distribuce prostoru
                 a změna pořadí prvků bez nutnosti měnit HTML strukturu.
                 
                 Při práci s Flexboxem je důležité rozumět, jak fungují vlastnosti rodičovského 
                 elementu (flex container) a jejich vliv na dětské elementy (flex items). 
                 Jednou z těchto klíčových vlastností je align-items, která kontroluje 
                 zarovnání položek kolmo k hlavní ose.
                  `,
      li: [
        {
          headline: "Flex kontejner a flex položky",
          p: `Flexbox model se skládá ze dvou hlavních komponent: flex kontejneru a flex položek.
              Flex kontejner je element, který má nastavenou vlastnost display: flex nebo 
              display: inline-flex. Všechny jeho přímé potomky se automaticky stávají flex položkami.
              Flex kontejner definuje směr (flex-direction), zarovnání (align-items, justify-content)
              a další vlastnosti, které ovlivňují, jak se flex položky zobrazují.`,
        },
        {
          headline: "Hlavní a příčná osa",
          p: `V kontextu Flexboxu existují dvě osy: hlavní osa (main axis) a příčná osa (cross axis).
              Hlavní osa je určena vlastností flex-direction (výchozí hodnota je row, tedy vodorovně zleva doprava).
              Příčná osa je vždy kolmá k hlavní ose. Pokud je hlavní osa vodorovná, příčná osa je svislá.
              Vlastnost align-items kontroluje zarovnání prvků podél příčné osy.`,
        },
        {
          headline: "align-items vlastnost",
          p: `Vlastnost align-items určuje, jak jsou flex položky zarovnány podél příčné osy.
              Má několik možných hodnot:
              - flex-start: položky jsou zarovnány k začátku příčné osy (obvykle nahoru)
              - flex-end: položky jsou zarovnány ke konci příčné osy (obvykle dolů)
              - center: položky jsou zarovnány na střed příčné osy
              - stretch: položky se roztáhnou, aby vyplnily celou příčnou osu (výchozí hodnota)
              - baseline: položky jsou zarovnány podle baseline (základní čáry textu)
              
              Když je align-items nastaveno na flex-end, všechny položky jsou umístěny u spodního
              okraje kontejneru, což může způsobit, že se most ocitne příliš nízko.`,
        },
        {
          headline: "Řešení problémů se zarovnáním",
          p: `Existuje několik způsobů, jak vyřešit problém s nesprávně zarovnanými flex položkami:
              
              1. Změnit align-items v kontejneru na jinou hodnotu (flex-start, center, stretch)
              2. Použít align-self na konkrétní položku (most), což přepíše zarovnání nastavené v kontejneru
              3. Přidat margin-top: auto na most, což ho posune nahoru
              4. Použít transformaci (transform: translateY()) pro přesné umístění mostu
              
              Volba správného přístupu závisí na konkrétním případu a na tom, 
              k jakým vlastnostem máme přístup.`,
        },
      ],

      aboutLevel: `V tomto levelu se setkáváš s kontejnerem, který má nastavenou vlastnost
                  align-items: flex-end. To způsobuje, že most je zarovnán ke spodnímu okraji
                  kontejneru, což brání emoji v přechodu. Tvým úkolem je najít způsob, jak změnit
                  zarovnání mostu tak, aby byl ve správné pozici. Můžeš to vyřešit změnou
                  align-items na kontejneru nebo použitím align-self na samotném mostu. Experimentuj
                  s různými hodnotami a sleduj, jak ovlivňují pozici mostu v kontejneru.`,

      videoSection: {
        src: "https://www.youtube.com/embed/k32voqQhODc?si=NuKiNs9S9dKNb_SJ",
        text: `V tomto videu Kevin Powell vysvětluje, jak funguje vlastnost align-items
              v CSS Flexboxu a jak ji můžeš využít pro správné zarovnání prvků.`,
      },

      tip: {
        text: `Animista je skvělý nástroj pro vytváření CSS animací, který ti může pomoci
              lépe vizualizovat, jak se prvky pohybují a mění svou pozici v závislosti na
              různých vlastnostech. Zkoušej experimentovat s různými hodnotami align-items
              a pozoruj, jak ovlivňují rozložení stránky.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista - CSS Animation Library",
          span: "Vyzkoušej to!",
          href: "https://animista.net",
        },
      },
    },
    images: {},
  },
  {
    id: 6,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 7,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 8,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 9,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 10,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 11,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 12,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 13,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 14,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 15,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 16,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 17,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 18,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 19,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
  {
    id: 20,
    introduction: `Praesentium amet, iusto est sunt 
        facilis, dicta recusandae aperiam nisi nulla autem, 
        error sapiente quae asperiores dolor enim `,
    main: {
      description: `
               Margins and padding are among the fundamental properties
                that influence the layout and spatial relationships between
                 elements on a webpage. Although they may seem similar at
                  first glance, they serve different purposes, and their
                   correct usage is crucial for creating well-structured and
                    visually appealing web layouts. The main difference between 
                    margins and padding lies in the fact that margins affect the
                     space outside an element,
                while padding affects the space inside an element.
                `,
      li: [
        {
          headline: "margin",
          p: `
                        margin defines the space around an element; it is the space
                         between the edge of an element and its neighboring elements. 
                         Margins can be applied to all four sides of an element 
                         (top, right, bottom, left) and can have different values, 
                         allowing for flexible control of spacing between elements. 
                        Margins can also be negative, which enables elements to overlap.
                        `,
        },
        {
          headline: "padding",
          p: `
              unlike margins, padding, or inner spacing, defines the space 
              between the edge of an element and its content. Padding increases 
              the outer dimensions of an element by adding space inside it. 
              Like margins, padding can be applied to all four sides. 
              Padding is important for user visual comfort, as it ensures 
              that text and other content are not too close to the edges of elements, 
              making reading and interaction with the content easier.
               `,
        },
      ],

      aboutLevel: `V tomto levelu si vyzkoušíš manipulaci s position(možností je samozřejmě více, a kreativitě se meze nekladou)
                nicméně emoji se musí dostat přes řeku!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Pro jasnější a hlubší pochopení paddingu/marginu opět doporučuji shlédnout
                            vido od Kevina Powella`,
      },
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.animista,
          alt: "Animista.net web app",
          span: "Check it!",
          href: "https://animista.net",
        },
      },
    },
  },
];
