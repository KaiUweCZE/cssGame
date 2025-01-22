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
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.cssgradient,
          alt: "Adobe Color Palette",
          span: "Check it!",
          href: "https://color.adobe.com/explore",
        },
      },
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
      tip: {
        text: `Color selection plays a vital role in web design, influencing not only your website's appearance but also how visitors perceive it. Adobe Color helps overcome creative blocks by offering an intuitive interface to experiment with color combinations, create custom palettes, and analyze current color trends.`,
        img: {
          src: tipsImages.cssgradient,
          alt: "Adobe Color Palette",
          span: "Check it!",
          href: "https://color.adobe.com/explore",
        },
      },
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
