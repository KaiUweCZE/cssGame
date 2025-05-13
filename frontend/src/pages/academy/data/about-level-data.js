import { tipsImages } from "../../../data/imagesData";

/*
next tips: uiverse, adobe/express/tools, svgrepo, haikei app, css battle, codepen, clip path, filter to specific color generator
*/

export const aboutLevelData = [
  {
    id: 1,
    name: "Box Model",
    main: {
      description: `
        Margins and padding are the unsung heroes of CSS layout. They create the visual breathing room that makes interfaces feel polished and professional rather than cramped and chaotic.
        The key distinction: margins create space OUTSIDE an element (between elements), while padding creates space INSIDE an element (between content and border). Mastering both gives you precise control over your layout's spatial relationships.
    `,
      li: [
        {
          headline: "Margin: The Outer Space",
          blocks: [
            {
              type: "paragraph",
              text: "Margin defines the space around an element, creating separation between elements on the page. It offers incredible flexibility:",
            },
            {
              type: "bulletList",
              items: [
                "Individual sides: margin-top, margin-right, margin-bottom, margin-left",
                "Logical properties: margin-block (top/bottom), margin-inline (left/right)",
                {
                  text: "Shorthand notations:",
                  subitems: [
                    "margin: 10px (all sides)",
                    "margin: 10px 20px (vertical horizontal)",
                    "margin: 10px 20px 15px 25px (top right bottom left)",
                  ],
                },
              ],
            },
            {
              type: "section",
              title: "Unique behaviors to understand:",
              items: [
                "Margins can be negative, pulling elements closer or creating overlaps",
                "Vertical margins collapse between block elements (only the larger value applies)",
                "Margin: auto with a defined width centers elements horizontally",
              ],
            },
          ],
        },
        {
          headline: "Padding: The Inner Space",
          blocks: [
            {
              type: "paragraph",
              text: "Padding creates space between an element's content and its border, giving your content room to breathe. Like margin, it offers multiple ways to control spacing:",
            },
            {
              type: "bulletList",
              items: [
                "Individual sides: padding-top, padding-right, padding-bottom, padding-left",
                "Logical properties: padding-block, padding-inline (follow writing direction)",
                {
                  text: "Shorthand options:",
                  subitems: [
                    "padding: 10px (all sides)",
                    "padding: 10px 20px (vertical horizontal)",
                    "padding: 5px 10px 15px 20px (top right bottom left)",
                  ],
                },
              ],
            },
            {
              type: "section",
              title: "Important distinctions:",
              items: [
                "Padding values cannot be negative (unlike margin)",
                "Padding never collapses (unlike vertical margins)",
                "Padding is included in background color/image area",
                "Padding increases element size by default (unless using border-box)",
              ],
            },
          ],
        },

        // Box Model Mastery
        {
          headline: "Box Model Mastery",
          blocks: [
            {
              type: "paragraph",
              text: "The relationship between margin, padding, and element size depends on the box-sizing property:",
            },
            {
              type: "bulletList",
              items: [
                "content-box (default): width + padding + border = actual width",
                "border-box: width includes padding and border",
              ],
            },
            {
              type: "paragraph",
              text: "This seemingly small detail has massive layout implications! Most modern CSS frameworks use border-box globally for more intuitive sizing.",
            },
            {
              type: "tip",
              title: "Pro tip:",
              text: "When debugging layouts, use the browser's element inspector to visualize the box model. It clearly shows how margin, border, padding, and content dimensions interact.",
            },
          ],
        },
      ],

      aboutLevel: `In this level, you'll experiment with margin properties to help your emoji cross the river. While there are multiple approaches, consider which margin properties will most efficiently create the path you need. Remember that shorthand properties like margin can adjust multiple sides at once!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EhbZGV2dqZ4?si=ahNQORJGR6jH5lEj",
        text: `Want a visual explanation? Check out Kevin Powell's excellent tutorial on CSS spacing properties. His clear examples demonstrate how margin and padding affect layout in real-world designs.`,
      },
      tip: {
        title: "My Color Space",
        text: `
        Color selection is fundamental to creating stunning interfaces, and My Color 
        Space transforms this challenging process into something effortless and intuitive
        `,
        img: {
          src: "",
          alt: "",
          span: "Check it!",
          href: "https://mycolor.space/",
        },
      },
    },
  },
  {
    id: 2,
    name: "Position",
    main: {
      description: `
        The position property is your secret weapon for precise element placement in CSS layouts. It's like having a GPS system for your HTML elements, determining exactly where and how they appear on the page.
        
        Unlike margin and padding which create space, position changes where elements live in relation to other elements or the viewport itself. Mastering position unlocks layouts that would otherwise be impossible to achieve.
      `,
      li: [
        {
          headline: "Static: The Default State",
          blocks: [
            {
              type: "paragraph",
              text: "Static positioning is the default for every element. It's like the natural order of things in the HTML document flow:",
            },
            {
              type: "bulletList",
              items: [
                "Elements appear exactly where they would normally appear in document flow",
                "Directional properties (top, right, bottom, left) have no effect",
                "z-index has no effect - stacking is determined purely by document order",
              ],
            },
            {
              type: "paragraph",
              text: "You'll rarely set position: static explicitly - it's more often used to override another position value that was previously applied.",
            },
          ],
        },
        {
          headline: "Relative: Subtle Adjustments",
          blocks: [
            {
              type: "paragraph",
              text: "Relative positioning is like giving your element a gentle nudge from its original position:",
            },
            {
              type: "bulletList",
              items: [
                "The element stays in the document flow (other elements behave as if it's still in its original spot)",
                "Directional properties (top, right, bottom, left) shift the element from its original position",
                "Creates a positioning context for absolutely positioned children",
              ],
            },
            {
              type: "section",
              title: "Key behavior to understand:",
              items: [
                "The element's original space is preserved - nothing collapses to fill it",
                "Relative coordinates are counterintuitive: top: 10px moves DOWN by 10px",
                "Multiple relative values can be combined (e.g., top and left together)",
              ],
            },
          ],
        },
        {
          headline: "Absolute: Breaking Free",
          blocks: [
            {
              type: "paragraph",
              text: "Absolute positioning removes an element from the document flow entirely, giving you complete control over its placement:",
            },
            {
              type: "bulletList",
              items: [
                "Element is removed completely from normal flow (other elements ignore it)",
                "Positioned relative to nearest positioned ancestor (or viewport if none exists)",
                "No space is reserved for the element in layout",
              ],
            },
            {
              type: "section",
              title: "Common applications:",
              items: [
                "Tooltips and popovers that need precise placement",
                "Badges or notification indicators that overlay other elements",
                "Custom UI controls that need to break out of normal document flow",
              ],
            },
            {
              type: "tip",
              title: "Pro tip:",
              text: "Always ensure your absolutely positioned elements have a positioned parent (position: relative, absolute, fixed, or sticky). Otherwise, they'll position relative to the document body, which often leads to unexpected behavior!",
            },
          ],
        },
        {
          headline: "Fixed: Viewport Anchoring",
          blocks: [
            {
              type: "paragraph",
              text: "Fixed positioning locks an element to the viewport, making it stay in place even during scrolling:",
            },
            {
              type: "bulletList",
              items: [
                "Element is removed from document flow (like absolute)",
                "Always positioned relative to the viewport, ignoring any parent containers",
                "Stays in the same screen position during scrolling",
              ],
            },
            {
              type: "section",
              title: "Perfect for:",
              items: [
                "Navigation bars that stick to the top or bottom of the screen",
                "Cookie consent banners that remain visible",
                "Chat widgets that follow as users scroll",
              ],
            },
          ],
        },
        {
          headline: "Sticky: The Hybrid Powerhouse",
          blocks: [
            {
              type: "paragraph",
              text: "Sticky positioning is the chameleon of positioning methods, switching between relative and fixed behavior depending on scroll position:",
            },
            {
              type: "bulletList",
              items: [
                "Acts like position: relative until a specified scroll threshold",
                "Then behaves like position: fixed when the threshold is crossed",
                "Remains within its parent container's boundaries",
              ],
            },
            {
              type: "paragraph",
              text: "This modern positioning value solves countless UI patterns that previously required complex JavaScript. It's perfect for section headings that stick while scrolling through content, persistent action buttons that follow just until the end of a section, and sidebar navigation that stays visible within its container.",
            },
            {
              type: "section",
              title: "Browser support notes:",
              items: [
                "Well-supported in modern browsers",
                "May require fallbacks in some legacy scenarios",
                "Check positioning behavior when parent uses overflow properties",
              ],
            },
          ],
        },
        {
          headline: "Inset: The Positioning Shorthand",
          blocks: [
            {
              type: "paragraph",
              text: "The inset property is a powerful shorthand that lets you set all four directional properties (top, right, bottom, left) simultaneously:",
            },
            {
              type: "bulletList",
              items: [
                "Accepts the same values as individual position properties",
                "Works with any positioning method except static",
                {
                  text: "Follows the same pattern as margin/padding shorthands:",
                  subitems: [
                    "inset: 10px (all sides)",
                    "inset: 10px 20px (vertical horizontal)",
                    "inset: 5px 10px 15px 20px (top right bottom left)",
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              text: "This modern CSS property drastically reduces the verbosity of your positioning code. Instead of setting four separate properties, you get the same result with a single clean declaration.",
            },
          ],
        },
        {
          headline: "Z-Index: The Third Dimension",
          blocks: [
            {
              type: "paragraph",
              text: "While technically not a position value, z-index is deeply connected to positioned elements, controlling their stacking order in 3D space:",
            },
            {
              type: "bulletList",
              items: [
                "Only works on positioned elements (any value except static)",
                "Higher values appear on top of lower values",
                "Creates stacking contexts that can isolate groups of elements",
              ],
            },
            {
              type: "tip",
              title: "Debugging tip:",
              text: "When z-index seems not to work, check if your element (or its ancestors) is creating a new stacking context. Common causes include opacity values less than 1, transform properties, filter effects, or will-change declarations.",
            },
          ],
        },
      ],
      aboutLevel: `In this level, you'll experiment with position properties to help your emoji cross the river. Try different position values to precisely place your bridge elements. Remember that multiple approaches can work - the key is understanding how position affects the document flow and element placement!`,
      videoSection: {
        src: "https://www.youtube.com/embed/P6UgYq3J3Qs?si=C2-rTWC3YYgzYgEX",
        text: `Want to see positioning in action? Check out Kevin Powell's excellent breakdown of CSS position properties. His visual examples make it easy to grasp how each value behaves in real-world scenarios.`,
      },
      tip: {
        title: "Uiverse",
        text: `
        Uiverse is a treasure trove of beautiful, copy-paste-ready CSS
        components that'll instantly level up your projects! From buttons that
        spark joy to cards with delightful hover effects, it's like having a secret
        weapon for those moments when you need
        something that looks professional without reinventing the wheel.
        `,
        img: {
          src: "",
          alt: "UI Universe",
          span: "Check it!",
          href: "https://uiverse.io/",
        },
      },
    },
  },
  {
    id: 3,
    name: "Flexbox",
    main: {
      description: `
        Flexbox is a powerful layout system that revolutionized how we build responsive interfaces. Unlike traditional CSS layouts, Flexbox thinks in terms of relationships between items, allowing content to expand, shrink, and rearrange itself intelligently.
        
        Think of Flexbox as a magical container that gives your elements superpowers - they can grow when there's extra space, shrink when things get tight, and align themselves perfectly without the need for complex calculations or hacks.
      `,
      li: [
        {
          headline: "The Flex Container",
          blocks: [
            {
              type: "paragraph",
              text: "Every Flexbox layout starts with a parent element (the flex container) that establishes a flex formatting context for its children. This relationship is the foundation of Flexbox's power:",
            },
            {
              type: "bulletList",
              items: [
                "display: flex — Transforms an element into a flex container",
                "flex-direction — Controls the primary axis (row, column, row-reverse, column-reverse)",
                "flex-wrap — Determines whether items must stay on a single line or can wrap to multiple lines",
                {
                  text: "justify-content — Distributes space along the primary axis:",
                  subitems: [
                    "flex-start — Packs items at the start",
                    "flex-end — Packs items at the end",
                    "center — Centers items",
                    "space-between — Spreads items with space between",
                    "space-around/space-evenly — Distributes space evenly around items",
                  ],
                },
                {
                  text: "align-items — Controls alignment along the cross axis:",
                  subitems: [
                    "flex-start — Aligns to start of cross axis",
                    "flex-end — Aligns to end of cross axis",
                    "center — Centers items on cross axis",
                    "stretch — Stretches items to fill container (default)",
                    "baseline — Aligns by text baselines",
                  ],
                },
              ],
            },
            {
              type: "tip",
              title: "Primary vs Cross Axis",
              text: "Remember that Flexbox is direction-agnostic! In row direction, primary axis is horizontal and cross axis is vertical. In column direction, they're flipped. This mental model is crucial for mastering Flexbox.",
            },
          ],
        },
        {
          headline: "Flex Items: Growing & Shrinking",
          blocks: [
            {
              type: "paragraph",
              text: "The real magic of Flexbox happens with its ability to distribute space dynamically. These three properties control how flex items respond to available space:",
            },
            {
              type: "bulletList",
              items: [
                "flex-grow — Determines how much an item should grow relative to its siblings when extra space is available (default: 0)",
                "flex-shrink — Controls how much an item should shrink when there isn't enough space (default: 1)",
                "flex-basis — Sets the initial 'ideal' size of an item before growing/shrinking happens (similar to width/height but axis-independent)",
              ],
            },
            {
              type: "paragraph",
              text: "These three properties can be combined into the powerful flex shorthand: flex: grow shrink basis. For example, flex: 1 0 auto means 'grow proportionally, don't shrink, and start with auto size'.",
            },
            {
              type: "section",
              title: "Common flex patterns:",
              items: [
                "flex: 1 — Grow to fill available space equally (shorthand for flex: 1 1 0)",
                "flex: 0 0 200px — Fixed-width item that won't grow or shrink",
                "flex: 0 1 auto — Default behavior: don't grow, can shrink if needed",
                "flex: 2 1 auto — Grow twice as much as siblings with flex: 1",
              ],
            },
          ],
        },
        {
          headline: "Advanced Alignment Techniques",
          blocks: [
            {
              type: "paragraph",
              text: "Flexbox provides powerful tools for solving complex alignment challenges without resorting to CSS hacks:",
            },
            {
              type: "bulletList",
              items: [
                "align-self — Overrides the container's align-items for individual items",
                "gap — Creates consistent spacing between items (modern alternative to margins)",
                "margin: auto — In Flexbox, auto margins absorb all available space in their direction",
              ],
            },
            {
              type: "section",
              title: "Practical applications:",
              items: [
                "Space-between navigation: Use margin-right: auto on one item to push others to the opposite end",
                "Centering with auto margins: margin: auto centers perfectly in both directions",
                "Double-ended distribution: Combine gap with space-between for sophisticated layouts",
              ],
            },
            {
              type: "tip",
              title: "Minimum size gotcha",
              text: "Flexbox won't shrink text content below its longest word by default. When a flex item contains text that refuses to shrink, add min-width: 0 to override this behavior and prevent overflow issues!",
            },
          ],
        },
        {
          headline: "Multi-line Flex Magic",
          blocks: [
            {
              type: "paragraph",
              text: "When flex items wrap onto multiple lines, we gain another dimension of control:",
            },
            {
              type: "bulletList",
              items: [
                "flex-wrap: wrap — Allows items to break into multiple lines when needed",
                "align-content — Controls how wrapped lines are positioned within container height",
                {
                  text: "The 'Deconstructed Pancake' pattern:",
                  subitems: [
                    "Set equal-width children with flex: 1 1 [min-width]",
                    "When container narrows below [children × min-width], items automatically stack",
                    "Creates responsive layouts without media queries!",
                  ],
                },
              ],
            },
            {
              type: "section",
              title: "When to use Grid vs Flexbox:",
              items: [
                "Use Flexbox for 1D layouts (rows OR columns)",
                "Use Grid for 2D layouts (rows AND columns)",
                "Use Flexbox when content should dictate layout",
                "Use Grid when layout should dictate content",
              ],
            },
          ],
        },
      ],
      aboutLevel: `In this level, you'll experiment with Flexbox properties to help your emoji cross the river. You'll need to manipulate flex container properties and individual item properties to create a perfect bridge. Remember that items can grow and shrink dynamically - this is the key to solving the level challenges!`,
      videoSection: {
        src: "https://www.youtube.com/embed/K74l26pE4YA?si=Ij8s1N3pMXwQ8BCy",
        text: `Want a visual explanation? Check out Kevin Powell's excellent tutorial on Flexbox. His clear examples demonstrate how flex properties interact to create powerful, responsive layouts.`,
      },
      tip: {
        title: "CSS Portal - Flexbox Generator",
        text: `CSS Portal is like having a Swiss Army knife for your flexbox needs!
        It offers interactive demos, property visualizations, and ready-to-use code
        snippets that make even the trickiest flex layouts feel approachable and fun to build.`,
        img: {
          src: "tipsImages.flexboxFroggy",
          alt: "Flexbox Froggy game",
          span: "Level up your skills!",
          href: "https://www.cssportal.com/css-flexbox-generator/",
        },
      },
    },
  },
  {
    id: 4,
    name: "Grid",
    main: {
      description: `
        CSS Grid is a two-dimensional layout system that transforms how we approach page layouts. While Flexbox excels at one-dimensional arrangements, Grid gives us precise control over both rows and columns simultaneously.
        
        Think of Grid as a digital canvas where you can position elements with pinpoint accuracy - regardless of their order in HTML. This powerful system lets you create complex layouts that would be nearly impossible with traditional CSS.
      `,
      li: [
        {
          headline: "Grid Container Fundamentals",
          blocks: [
            {
              type: "paragraph",
              text: "The Grid system starts by turning a parent element into a grid container, establishing a new grid formatting context for its children:",
            },
            {
              type: "bulletList",
              items: [
                "display: grid — Transforms an element into a grid container",
                {
                  text: "Creating columns and rows:",
                  subitems: [
                    "grid-template-columns — Defines width and number of columns",
                    "grid-template-rows — Defines height and number of rows",
                    "repeat() — Creates repeated track patterns (e.g., repeat(3, 1fr))",
                    "minmax() — Sets size range between min and max values",
                  ],
                },
                {
                  text: "The magical fr unit:",
                  subitems: [
                    "Represents a fraction of available space",
                    "1fr means 'one share of remaining space'",
                    "grid-template-columns: 1fr 2fr — Second column gets twice the space of first",
                  ],
                },
              ],
            },
            {
              type: "tip",
              title: "Auto-fit vs Auto-fill",
              text: "Use repeat(auto-fill, minmax(200px, 1fr)) to create as many columns as will fit, or repeat(auto-fit, minmax(200px, 1fr)) to create columns that expand to fill available space when there aren't enough items.",
            },
          ],
        },
        {
          headline: "Placing Grid Items",
          blocks: [
            {
              type: "paragraph",
              text: "Grid's true power comes from its ability to precisely control where items are placed, regardless of HTML order:",
            },
            {
              type: "bulletList",
              items: [
                "grid-column — Specifies which column(s) an item should occupy",
                "grid-row — Specifies which row(s) an item should occupy",
                {
                  text: "Placement shortcuts:",
                  subitems: [
                    "grid-column: 1 / 3 — Spans from line 1 to line 3 (two columns wide)",
                    "grid-column: 1 / -1 — Spans from first to last line (full width)",
                    "grid-column: span 2 — Spans across 2 columns from its starting position",
                  ],
                },
              ],
            },
            {
              type: "section",
              title: "Understanding grid lines:",
              items: [
                "Grid lines are numbered starting at 1 (not 0)",
                "Negative numbers count backwards from the end (-1 is the last line)",
                "Line numbers include both explicit and implicit tracks",
              ],
            },
            {
              type: "paragraph",
              text: "The ability to place items exactly where you want them—even overlapping other items—opens up layout possibilities that were previously impossible without absolute positioning.",
            },
          ],
        },
        {
          headline: "Named Grid Areas",
          blocks: [
            {
              type: "paragraph",
              text: "For complex layouts, Grid offers a visual way to design your page using named areas:",
            },
            {
              type: "bulletList",
              items: [
                "grid-template-areas — Defines a grid template using named cells",
                "grid-area — Assigns an item to a named area in the template",
              ],
            },
            {
              type: "section",
              title: "Example grid template:",
              items: [
                `grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";`,
                "Use '.' for empty cells: \"header . sidebar\"",
                "Areas must form rectangles (can't create L-shapes)",
              ],
            },
            {
              type: "code",
              language: "css",
              code: `
$/ // This does not work! $/
$#.wrong-grid$# {
  $##grid-template-areas$##: 
  $###"a b c"$### 
  $###"b b c"$###
}
              `,
              caption: "Example of invalid grid-template-areas",
            },
            {
              type: "tip",
              title: "Responsive layout trick",
              text: "Combine grid-template-areas with media queries to completely reorganize your layout at different breakpoints without changing your HTML structure.",
            },
          ],
        },
        {
          headline: "Grid Gaps & Alignment",
          blocks: [
            {
              type: "paragraph",
              text: "Grid offers powerful tools for spacing and aligning content both at the container level and for individual items:",
            },
            {
              type: "bulletList",
              items: [
                "column-gap/row-gap — Sets spacing between columns/rows",
                "gap — Shorthand for both column and row gaps",
                {
                  text: "Container alignment properties:",
                  subitems: [
                    "justify-content — Aligns grid tracks within container (horizontal)",
                    "align-content — Aligns grid tracks within container (vertical)",
                    "place-content — Shorthand for both justify-content and align-content",
                  ],
                },
                {
                  text: "Item alignment properties:",
                  subitems: [
                    "justify-items — Aligns items within their cells (horizontal)",
                    "align-items — Aligns items within their cells (vertical)",
                    "place-items — Shorthand for both justify-items and align-items",
                  ],
                },
              ],
            },
            {
              type: "section",
              title: "Self-alignment for individual items:",
              items: [
                "justify-self — Overrides justify-items for specific item",
                "align-self — Overrides align-items for specific item",
                "place-self — Shorthand for both justify-self and align-self",
              ],
            },
          ],
        },
        {
          headline: "Grid vs Flexbox: Choosing the Right Tool",
          blocks: [
            {
              type: "paragraph",
              text: "Grid and Flexbox are complementary tools, each with distinct strengths. Understanding when to use each will level up your layout skills:",
            },
            {
              type: "section",
              title: "Use Grid when:",
              items: [
                "Building two-dimensional layouts (rows AND columns)",
                "Creating complex, precise layouts where items need specific placement",
                "Working with overall page structure and major layout regions",
                "You need alignment in both directions simultaneously",
              ],
            },
            {
              type: "section",
              title: "Use Flexbox when:",
              items: [
                "Creating one-dimensional layouts (rows OR columns)",
                "Distribution of space between items is the primary concern",
                "Content should dictate layout rather than fitting into a rigid structure",
                "Working with unknown or dynamic content sizes",
              ],
            },
            {
              type: "tip",
              title: "Pro tip:",
              text: "Combine both! Use Grid for page-level layout and Flexbox for component-level arrangements within grid areas. This hybrid approach leverages the strengths of both systems.",
            },
          ],
        },
      ],
      aboutLevel: `In this level, you'll use Grid properties to help your emoji cross the river. You'll need to manipulate columns, rows, and placement to create the perfect bridge. Remember that Grid gives you precise control over two-dimensional space - you can place bridge segments exactly where they need to be, regardless of their order in HTML!`,
      videoSection: {
        src: "https://www.youtube.com/embed/EiNiSFIPIQE?si=1WLHwKggzWkrCH6Z",
        text: `Want a visual explanation? Check out this comprehensive tutorial on CSS Grid. The examples demonstrate how Grid properties work together to create powerful, precise layouts that would be challenging with other CSS techniques.`,
      },
      tip: {
        title: "CSS Grid Generator",
        text: `
        This interactive tool is a game-changer for visualizing CSS Grid layouts!
        You can drag, resize, and adjust your grid visually,
        then simply copy the
        generated CSS — perfect for both learning grid concepts and speeding up your workflow
        `,
        img: {
          src: "",
          alt: "",
          span: "Master Grid!",
          href: "https://cssgrid-generator.netlify.app/",
        },
      },
    },
  },
];
