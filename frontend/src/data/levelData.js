// id,
// startPointStyle & endPointStyle can be used for change origin style of StartPoint, EndPoint components
// containerStyles(specific style for .container-bridge),
// bridgeStyles(specific style for .bridge)
/* partOfBridgeStyles(specific style for parts of bridge)
 * mainStyle defines style for each atomic element
 * childrenStyle defines style for specific child of partOfBridgeStyles
 */
// partOfBridge(some level has seperated parts of bridge)
// master true/false will be use MasterBridgeElement component
// correctPosition sets the desired position for checking
// obsatcle(This is another element for which can be used in levels)
// emojiRun sets specific class with keyframes for emoji animation
// partsStyle true/false it allows additional forms for styling individual parts

import { transition } from "@cloudinary/url-gen/actions/effect";

/* Will be add: 
1. number of css properties => it defines how many styles a user can use for a change
2. allowed css properties => list of properties wich can be used
3. not allowed css properties => list of properties wich can not be used
4. disabledForm
*/
export const levelData = [
  /* ===== BOX-MODEL ===== */
  {
    id: 1,
    module: "box-model",
    containerStyles: {},
    bridgeStyles: {
      margin: "2rem",
    },
    disabledForm: "container",
    partOfBridge: 1,
    obstacle: false,
    help: "Try removing the margin around the bridge - remember, margin creates space OUTSIDE an element. Experiment with different margin values or directions!",
  },
  {
    id: 2,
    module: "box-model",
    containerStyles: {
      margin: "0 2rem 0 0",
    },
    bridgeStyles: {},
    deniedList: ["margin"],
    partOfBridge: 1,
    obstacle: false,
    help: "The container has a right margin creating a gap. You can't use 'margin' directly (it's denied), but CSS offers more specific margin properties. Try margin-left, margin-right, or shorthand notation!",
  },
  {
    id: 3,
    module: "box-model",
    containerStyles: {
      padding: "0 1rem",
    },
    bridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    deniedList: ["padding"],
    help: "The inner padding is blocking your progress! Since 'padding' is denied, try using more specific padding properties like padding-inline-start or padding-left to create the right space.",
  },
  {
    id: 4,
    module: "box-model",
    containerStyles: {
      "padding-block": "1rem",
    },
    bridgeStyles: {
      margin: "0 1rem",
    },
    deniedList: ["margin"],
    partOfBridge: 1,
    obstacle: false,
    help: "Both vertical padding and horizontal margins are affecting your bridge. Since you can't modify margin directly, focus on alternative approaches to space manipulation with the padding-block property!",
  },
  {
    id: 5,
    module: "box-model",
    containerStyles: {
      position: "relative",
    },
    bridgeStyles: {
      position: "absolute",
      top: "-4rem",
      left: "2rem",
    },
    allowedList: ["margin"],
    inputAmount: 1,
    partOfBridge: 1,
    obstacle: false,
    help: "The bridge is positioned absolutely but in the wrong place! Since margin is the only allowed property, use negative or positive margin values to shift the bridge to its proper position. Remember that margin can move positioned elements too!",
  },
  /* ===== POSITION ===== */
  {
    id: 6,
    module: "position",
    containerStyles: {
      display: "flex",
      position: "relative",
    },
    bridgeStyles: {
      position: "absolute",
      top: "2rem",
    },
    partOfBridge: 1,
    obstacle: false,
    help: "Try adjusting its vertical position!",
  },
  {
    id: 7,
    module: "position",
    inputAmount: 1,
    containerStyles: {
      position: "relative",
      left: "2rem",
      top: "2rem",
    },
    bridgeStyles: {
      position: "absolute",
    },
    partOfBridge: 1,
    obstacle: false,
    help: "Amout of styling properties are limited here. Try adjusting the direction properties for both elements to find the perfect alignment!",
  },
  {
    id: 8,
    module: "position",
    inputAmount: 1,
    containerStyles: {},
    bridgeStyles: {
      position: "fixed",
      right: "0",
      width: "100%",
      "max-width": "30rem",
    },
    allowedList: ["position"],
    partOfBridge: 1,
    obstacle: false,
    help: "Oops! The bridge isn't where it should be. Reposition it to connect the platforms!",
  },
  {
    id: 9,
    module: "position",
    containerStyles: {
      position: "relative",
    },
    bridgeStyles: {
      display: "flex",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {
        0: {
          position: "absolute",
          top: "-5rem",
        },
        1: {},
        2: {},
        3: {},
      },
    },
    deniedList: ["transform", "top", "bottom"],
    master: true,
    partOfBridge: 4,
    partsStyle: true,
    obstacle: false,
    help: "Try positioning the first part of the bridge in a way that makes it immune to directional shifts.",
  },
  {
    // check it
    id: 10,
    module: "position",
    containerStyles: {
      position: "relative",
    },
    bridgeStyles: {
      display: "flex",
      position: "relative",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {
        0: {},
        1: {},
        2: {
          filter: "brightness(0.5)",
          bottom: "0",
        },
        3: {
          position: "absolute",
          top: "-5rem",
          right: 0,
        },
      },
    },
    correctPosition: {
      wrapperStyle: {},
      childrenStyle: {
        0: {},
        1: {},
        2: {
          position: "absolute",
          bottom: "0",
          width: "33%",
        },
        3: {},
      },
    },
    master: true,
    partOfBridge: 4,
    partsStyle: true,
    obstacle: false,
    help: "That worn-out bridge section needs attention! Focus on its positioning properties while being mindful of the overall .bridge settings.",
  },
  {
    id: 11,
    module: "position",
    containerStyles: {},
    bridgeStyles: {
      position: "absolute",
      top: "-5rem",
      left: "2rem",
      right: "3rem",
    },
    inputAmount: 1,
    partOfBridge: 1,
    obstacle: false,
    help: "Is there a clever way to handle positioning with a single CSS declaration? Think about shorthand properties!",
  },
  /* ===== FLEX ===== */
  {
    id: 12,
    module: "flex",
    containerStyles: {
      display: "flex",
      "align-items": "flex-end",
    },
    bridgeStyles: {},
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Watch out: the container holding the bridge aligns its items to the end.",
  },
  {
    id: 13,
    module: "flex",
    containerStyles: {
      display: "flex",
      gap: ".5rem",
    },
    bridgeStyles: {},
    partOfBridgeStyles: {},
    partOfBridge: 3,
    obstacle: false,
    help: "Minimize the gaps between each part of the bridge!",
  },
  {
    id: 14,
    module: "flex",
    containerStyles: {
      display: "flex",
      "flex-direction": "column",
    },
    bridgeStyles: {},
    partOfBridgeStyles: {
      mainStyle: {
        width: "50%",
        "max-width": "100%",
      },
      childrenStyle: {},
    },
    partOfBridge: 3,
    obstacle: false,
    help: "The container's items are arranged in a column... that needs to change.",
  },
  {
    id: 15,
    module: "flex",
    containerStyles: {
      display: "flex",
      "flex-direction": "column",
      "justify-content": "flex-end",
      "align-items": "flex-end",
    },
    bridgeStyles: {
      display: "flex",
      "flex-direction": "column",
      "justify-content": "flex-end",
      height: "auto",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {},
    },
    deniedList: ["justify-content"],
    partOfBridge: 3,
    master: true,
    obstacle: false,
    help: "When you switch from row to column, justify becomes align and align becomes justify.",
  },
  {
    id: 16,
    module: "flex",
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "flex",
    },
    bridgeStyles: {
      display: "flex",
      "flex-direction": "column",
      "flex-wrap": "wrap-reverse",
      height: "100%",
      //"grid-template-rows": "repeat(3, 1fr)",
    },
    partOfBridgeStyles: {
      mainStyle: {
        width: "33.334%",
        "max-width": "100%",
      },
      childrenStyle: {},
    },
    partOfBridge: 3,
    master: true,

    obstacle: false,
    emojiRun: false,
    help: "Wrong wrap and wrong direction.",
  },

  {
    id: 17,
    module: "flex",
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      top: "-5rem",
    },
    bridgeStyles: {
      display: "flex",
    },
    partOfBridgeStyles: {
      mainStyle: {
        "max-width": "100%",
      },
      childrenStyle: {
        0: { flex: "0 1 20%" },
        1: { flex: "0 1 20%" },
        2: { flex: "0 1 20%" },
      },
    },
    correctPosition: {
      //wrapperStyle: {},
      childrenStyle: {
        0: {
          width: "60%",
        },
        1: { flex: "0 1 20%" },
        2: { flex: "0 1 20%" },
      },
    },
    deniedList: ["flex"],
    inputAmount: 1,
    partsStyle: true,
    partOfBridge: 3,
    master: true,
    help: "First part of the bridge have to be the largest... so it must grow 😉",
  },

  /* ===== GRID ===== */
  {
    id: 18,
    module: "grid",
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "flex",
    },
    bridgeStyles: {
      display: "grid",
      "grid-template-rows": "repeat(3, 1fr)",
    },
    partOfBridgeStyles: {
      mainStyle: {
        width: "11.112vw",
        "max-width": "100%",
      },
      childrenStyle: {
        0: {
          "max-width": "9.5rem",
        },
        1: {
          "max-width": "9.5rem",
        },
        2: {
          "max-width": "9.5rem",
        },
      },
    },
    deniedList: ["display"],
    partOfBridge: 3,
    master: true,
    obstacle: false,
    emojiRun: false,
    help: "A grid with three rows and one column... add more columns!",
  },
  {
    id: 19,
    module: "grid",
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr",
    },
    bridgeStyles: {
      display: "flex",
      "grid-row": "2",
      "grid-column": "span 2",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {},
    },
    deniedList: ["display"],
    partOfBridge: 3,
    master: true,
    obstacle: false,
    emojiRun: false,
    help: "The bridge is stuck in the middle row and doesn't reach far enough. Explore different grid positioning to create a more effective crossing point.",
  },
  {
    id: 20,
    module: "grid",
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "grid",
    },
    bridgeStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr",
      height: "100%",
    },
    partOfBridgeStyles: {
      mainStyle: {
        width: "100%",
        "max-width": "100%",
      },
      childrenStyle: {
        0: {
          "grid-area": "2 / 2",
        },
        1: {
          "grid-area": "3 / 3",
        },
        2: {
          "grid-area": "3 / 2",
        },
      },
    },
    deniedList: ["display"],
    partOfBridge: 3,
    master: true,
    obstacle: false,
    emojiRun: false,
    partsStyle: true,
    help: "Bridge parts are scattered! Rearrange them to form a straight line across the top row, with each piece in its own column.",
  },
  {
    id: 21,
    module: "grid",
    containerStyles: {
      display: "grid",
    },
    bridgeStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr",
      "justify-items": "start",
    },
    partOfBridgeStyles: {
      mainStyle: {
        "min-width": "2rem",
        width: "auto",
        "max-width": "none",
      },
      childrenStyle: {},
    },

    inputAmount: 1,
    partOfBridge: 2,
    master: true,
    obstacle: false,
    disabledForm: "container",
    help: "Your narrow bridge sections need more width to be useful. The current alignment keeps them confined to their starting points. Can you make them expand?",
  },
  {
    id: 22,
    module: "grid",
    startPointStyle: {},
    endPointStyle: {
      position: "relative",
      top: "12rem",
    },
    containerStyles: {
      display: "grid",
    },
    bridgeStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr 1fr 1fr",
      height: "auto",
      "place-items": "end",
    },
    partOfBridgeStyles: {
      mainStyle: {
        height: "auto",
        "min-height": "3rem",
        "max-width": "100%",
      },
      childrenStyle: {
        0: {
          "grid-area": "2 / 3",
        },
        1: {
          "grid-area": "1 / 2",
        },
        2: {
          "grid-area": "1 / 3",
        },
      },
    },
    partOfBridge: 3,
    master: true,
    correctPosition: {
      wrapperStyle: {
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        "grid-template-rows": "1fr 1fr 1fr 1fr 1fr",
        "align-items": "stretch",
      },
      childrenStyle: {
        0: {
          height: "auto",
          "grid-area": "1 / 1",
        },
        1: {
          height: "auto",
          "grid-area": "2 / span 2",
        },
        2: {
          height: "auto",
          "grid-area": "3 / span 3",
        },
      },
    },
    deniedList: ["place-items"],
    obstacle: false,
    emojiRun: "twenty-one-stairs",
    partsStyle: true,
    help: "The alignment is pushing everything to the end. Consider how to reposition each part to create a path that gradually widens as it descends and the parts of the bridge to fill the space that is marked out for them.",
  },
  {
    id: 23,
    module: "grid",
    endPointStyle: {
      position: "relative",
      top: "12rem",
    },
    containerStyles: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      position: "relative",
    },
    partOfBridgeStyles: {
      mainStyle: {
        position: "absolute",
      },
      childrenStyle: {
        0: {
          top: "0rem",
        },
        1: {
          top: "4rem",
        },
        2: {
          top: "8rem",
        },
      },
    },
    correctPosition: {
      wrapperStyle: {
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        "grid-template-rows": "1fr 1fr 1fr",
        height: "12rem",
      },
      childrenStyle: {
        0: {
          "grid-area": "1 / 1",
        },
        1: {
          "grid-area": "2 / 2",
        },
        2: {
          "grid-area": "3 / 3",
        },
      },
    },
    partsStyle: true,
    deniedList: [
      "grid-area",
      "grid",
      "top",
      "inset",
      "bottom",
      "right",
      "left",
      "translate",
      "transform",
    ],
    inputAmount: 1,
    master: true,
    partOfBridge: 3,
    obstacle: false,
    emojiRun: "stairs-run",
    help: "The bridge pieces need reorganizing into a diagonal path. Current positioning isn't working - try a completely different layout approach and consider how each section could be aligned differently.",
  },

  {
    id: 24,
    module: "grid",
    containerStyles: {},
    bridgeStyles: {
      display: "grid",
      "grid-template-rows": "1fr 1fr",
    },
    partOfBridgeStyles: {
      mainStyle: {
        "max-width": "100%",
      },
      childrenStyle: {
        0: {
          "grid-area": "a",
        },
        1: {
          "grid-area": "b",
        },
        2: {
          "grid-area": "c",
        },
      },
    },
    correctPosition: {
      wrapperStyle: {
        display: "grid",
        "grid-template-areas": `"a a c" ". b ."`,
        "grid-template-rows": "1fr 1fr",
        background: "#b7e9b145",
        height: "fit-content",
      },
      childrenStyle: {
        0: {
          "min-height": "4rem",
          "grid-area": "a",
        },
        1: {
          "min-height": "100%",
          "grid-area": "b",
        },
        2: {
          "min-height": "4rem",
          "grid-area": "c",
        },
      },
    },
    inputAmount: 1,
    disabledForm: "parts",
    partsStyle: true,
    partOfBridge: 3,
    master: true,
    help: "Check the bridge sections, they have a defined area.",
  },
  /* ===== OTHERS ===== */
  {
    id: 25,
    module: "others",
    containerStyles: {
      display: "flex",
      position: "relative",
    },
    bridgeStyles: {},
    partOfBridge: 1,
    obstacle: true,
    styleResolver: true,
    styleResultContainer: { overflow: "hidden" },
    obstacleStyle: "obstacle-25",
    help: "The obstacle is in the same container as the bridge; try hiding the overflow.",
  },
  {
    id: 26,
    module: "transform",
    containerStyles: {
      display: "flex",
      position: "relative",
    },
    bridgeStyles: {
      transform: "rotate(45deg) scale(0.5) translateY(2rem)",
    },
    inputAmount: 3,
    deniedList: ["transform"],
    disabledForm: "container",
    partOfBridge: 1,
    obstacle: false,
    help: "It is necessary to approach these transformations individually.",
  },
  {
    id: 27,
    module: "transform",
    endPointStyle: {
      position: "relative",
      top: "-4rem",
      height: "50rem",
    },
    containerStyles: {
      "--bridge-width": "30%",
    },
    bridgeStyles: {
      width: "var(--bridge-width)",
    },
    correctPosition: {
      wrapperStyle: {
        "clip-path": "polygon(100% 0, 0% 100%, 100% 100%)",
        height: "8rem",
      },
    },
    deniedList: ["transform"],
    disabledForm: "container",
    partOfBridge: 1,
    obstacle: false,
    help: "It is necessary to approach these transformations individually.",
  },
];

/*

  {
    id: 24,
    module: "flex",
    containerStyles: {},
    bridgeStyles: {},
    partOfBridge: 1,
    obstacle: true,
    styleResolver: true,
    styleResultContainer: { overflow: "hidden" },
    help: "The obstacle is in the same container as the bridge; try hiding the overflow.",
  },
  {
    id: 18,
    module: "grid",
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "grid",
    },
    bridgeStyles: {
      display: "flex",
      gap: "1rem",
    },
    partOfBridgeStyles: {
      mainStyle: {
        width: "100%",
        "max-width": "100%",
      },
      childrenStyle: {
        0: {
          flex: "1",
        },
        1: {
          flex: "4",
        },
        2: {
          flex: "1",
        },
      },
    },
    partOfBridge: 3,
    master: true,
    correctPosition: {
      mainStyle: {},
      childrenStyle: {},
    },
    obstacle: false,
    emojiRun: false,
    partsStyle: true,
    help: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolore quae dolorum iure. Saepe fugit maiores totam libero unde dicta?",
  },

 {
    id: 23,
    module: "grid",
    startPointStyle: {},
    endPointStyle: {
      position: "relative",
      top: "12rem",
    },
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      position: "relative",
      height: "100%",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {
        0: {
          marginTop: "8rem",
        },
        1: {
          marginTop: "4rem",
        },
        2: {
          marginTop: "0rem",
        },
      },
    },
    partOfBridge: 3,
    master: true,
    correctPosition: {
      mainStyle: {},
      childrenStyle: {
        0: {
          marginTop: "0rem",
        },
        1: {
          marginTop: "4rem",
        },
        2: {
          marginTop: "8rem",
        },
      },
    },
    obstacle: false,
    emojiRun: "stairs-run",
    help: "You can reverse the flex direction!",
  },

*/
