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
/* Will be add: 
1. number of css properties => it defines how many styles a user can use for a change
2. allowed css properties => list of properties wich can be used
3. not allowed css properties => list of properties wich can not be used
4. banForm
*/
export const levelData = [
  {
    id: 1,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      width: "50%",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Make the bridge longer!",
  },
  {
    id: 2,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      "margin-inline": "2rem",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Adjust the outer margin!",
  },
  {
    id: 3,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
      "padding-inline": "1rem",
    },
    bridgeStyles: {
      display: "flex",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "The inner padding is blocking your progress!",
  },
  {
    id: 4,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
      "padding-inline": "1rem",
    },
    bridgeStyles: {
      display: "flex",
      margin: "1rem",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Focus on inner and outer padding!",
  },
  {
    id: 5,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      display: "none",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Someone prevented the bridge from rendering...",
  },
  {
    id: 6,
    numberOfProperties: 1,
    banForm: true,
    containerStyles: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    //specific styles for .bridge etc.
    bridgeStyles: {
      display: "flex",
      position: "relative",
      top: "5rem",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Move the bridge up!",
  },
  {
    id: 7,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      position: "absolute",
      top: "-4rem",
      left: "100%",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "The bridge is too high and too far to the left!",
  },
  {
    id: 8,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {},
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: true,
    styleResolver: true,
    //styleResultBridge: {"overflow":"hidden"},
    styleResultContainer: { overflow: "hidden" },
    //styleResultBoth: {"overflow":"hidden"},
    help: "The obstacle is in the same container as the bridge; try hiding the overflow.",
  },

  {
    id: 9,
    containerStyles: {
      display: "flex",
      "flex-direction": "column",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
    },
    partOfBridgeStyles: {},
    partOfBridge: 3,
    obstacle: false,
    help: "The container's items are arranged in a column... that needs to change.",
  },
  {
    id: 10,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
      "align-items": "flex-end",
    },
    bridgeStyles: {
      display: "flex",
      width: "100%",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    help: "Watch out: the container holding the bridge aligns its items to the end.",
  },

  {
    id: 11,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
      gap: ".5rem",
    },
    bridgeStyles: {
      display: "flex",
    },
    partOfBridgeStyles: {},
    partOfBridge: 3,
    obstacle: false,
    help: "Minimize the gaps between each part of the bridge!",
  },
  {
    id: 12,
    containerStyles: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
      "flex-direction": "column",
      "justify-content": "flex-end",
    },
    bridgeStyles: {
      display: "flex",
      "flex-direction": "column",
      "align-items": "flex-end",
      height: "fit-content",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {},
    },
    partOfBridge: 3,
    master: true,
    obstacle: false,
    help: "When you switch from row to column, justify becomes align and align becomes justify.",
  },
  {
    id: 13,
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "flex",
      width: "100%",
      height: "100%",
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
        width: "50%",
        "max-width": "100%",
      },
      childrenStyle: {},
    },
    partOfBridge: 3,
    master: true,
    correctPosition: {
      mainStyle: {},
      childrenStyle: {
        0: {
          marginTop: "0rem",
          width: "50%",
        },
        1: {
          marginTop: "0rem",
          width: "50%",
        },
        2: {
          position: "absolute",
          marginTop: "12rem",
          left: "0",
          width: "50%",
        },
      },
    },
    obstacle: false,
    emojiRun: false,
    help: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolore quae dolorum iure. Saepe fugit maiores totam libero unde dicta?",
  },
  {
    id: 14,
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "grid",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      height: "100%",
      width: "100%",
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
    id: 15,
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "flex",
      width: "100%",
      height: "100%",
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
    correctPosition: {
      mainStyle: {},
      childrenStyle: {},
    },
    obstacle: false,
    emojiRun: false,
    help: "A grid with three rows and one column... add more columns!",
  },

  {
    id: 16,
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      "grid-row": "2",
      "grid-column": "span 2",
      height: "100%",
    },
    partOfBridgeStyles: {
      mainStyle: {},
      childrenStyle: {},
    },
    deniedList: ["display"],
    partOfBridge: 3,
    master: true,
    correctPosition: {
      mainStyle: {},
      childrenStyle: {},
    },
    obstacle: false,
    emojiRun: false,
    help: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolore quae dolorum iure. Saepe fugit maiores totam libero unde dicta?",
  },
  {
    id: 17,
    startPointStyle: {},
    endPointStyle: {},
    containerStyles: {
      display: "grid",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr",
      height: "100%",
      width: "100%",
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
    id: 18,
    startPointStyle: {},
    endPointStyle: {
      position: "relative",
      top: "12rem",
    },
    containerStyles: {
      display: "grid",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr",
      height: "12rem",
    },
    partOfBridgeStyles: {
      mainStyle: {
        width: "100%",
        "max-width": "100%",
      },
      childrenStyle: {
        0: {},
        1: {
          "grid-area": "3 / span 2",
        },
        2: {
          "grid-area": "3 / 3",
          transform: "rotate(90deg)",
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
    partsStyle: true,
    help: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolore quae dolorum iure. Saepe fugit maiores totam libero unde dicta?",
  },
  {
    id: 19,
    startPointStyle: {},
    endPointStyle: {
      position: "relative",
      top: "8.5rem",
    },
    containerStyles: {
      display: "grid",
      width: "100%",
      height: "100%",
    },
    bridgeStyles: {
      display: "flex",
      height: "100%",
      width: "100%",
    },
    partOfBridgeStyles: {
      mainStyle: {
        width: "100%",
        "max-width": "100%",
      },
      childrenStyle: {
        0: {},
        1: {
          //"transform": "translateY(100%) rotate(45deg)"
        },
      },
    },
    partOfBridge: 2,
    master: true,
    correctPosition: {
      mainStyle: {},
      childrenStyle: {
        0: {},
        1: {
          transform: "translateY(100%) rotate(45deg)",
        },
      },
    },
    obstacle: false,
    emojiRun: false,
    partsStyle: true,
    help: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolore quae dolorum iure. Saepe fugit maiores totam libero unde dicta?",
  },
  {
    id: 20,
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
  {
    id: 21,
    containerStyles: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    //specific styles for .bridge etc.
    bridgeStyles: {
      display: "flex",
    },
    partOfBridgeStyles: {},
    partOfBridge: 1,
    obstacle: false,
    emojiRun: "twenty-one",
    styleResolver: true,
    styleResultBridge: { opacity: "0" },
    styleResultContainer: { opacity: "0" },
    enemy: true,
    help: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolore quae dolorum iure. Saepe fugit maiores totam libero unde dicta?",
  },
];
