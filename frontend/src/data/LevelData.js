
// id, level, name, bridgeStyles(specific style for bridge),
// partOfBridgeStyles(pecific style for parts of bridge)
// partOfBridge(some level has seperated parts of bridge)
// obsatcle(This is another element for )

export const levelData = [
    {
        id: 1,
        containerStyles: {},
        //specific styles for .bridge etc.
        bridgeStyles: {
            "display": "flex",
            "position": "absolute",
            "top": "5rem",
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 2,
        containerStyles: {},
        bridgeStyles: {
            "margin-inline": "2rem"
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 3,
        containerStyles: {},
        bridgeStyles: {
            "width": "50%"
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 4,
        containerStyles: {
            "padding-inline": "1rem",
        },
        bridgeStyles: {},
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 5,
        containerStyles: {
            "display": "flex",
            "alignItems": "flex-end"
        },
        bridgeStyles: {
            "width": "100%",
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 6,
        containerStyles: {
            "padding-inline": "1rem"
        },
        bridgeStyles: {
            "display": "flex",
            "width": "100%",
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 7,
        containerStyles: {
            "display": "flex",
            "flex-direction": "column",
        },
        bridgeStyles: {
        },
        partOfBridgeStyles: {},
        partOfBridge: 3,
        obstacle: false
    },
    {
        id: 8,
        containerStyles: {},
        bridgeStyles: {
            "position": "absolute",
            "top": "-4rem",
            "left": "100%"
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 9,
        containerStyles: {},
        bridgeStyles: {},
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: true,
        styleResolver: true,
        styleResult: "hidden"
    },
    {
        id: 10,
        containerStyles: {
        },
        bridgeStyles: {
            "display": "none"
        },
        partOfBridgeStyles: {},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 11,
        containerStyles: {
            "display": "flex",
            "gap": ".5rem"
        },
        bridgeStyles: {
        },
        partOfBridgeStyles: {},
        partOfBridge: 3,
        obstacle: false
    },
    {
        id: 12,
        containerStyles: {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "flex-end"

        },
        bridgeStyles: {
            "display": "flex",
            "flex-direction": "column",
            "align-items": "flex-end",
            "height": "fit-content",
        },
        partOfBridgeStyles: {
            mainStyle:{},
            childrenStyle: {}
        },
        partOfBridge: 3,
        master: true,
        obstacle: false
    },
    {
        id: 13,
        startPointStyle: {
        },
        endPointStyle: {
            "position": "relative",
            "top": "12rem",
        },
        containerStyles: {
            "display": "flex",
        },
        bridgeStyles: {
            "display": "flex",
            "position": "relative",
            "height": "100%"
        },
        partOfBridgeStyles: {
            mainStyle: {
            },
            childrenStyle: {
                0: {
                    "marginTop": "8rem",
                },
                1: {
                    "marginTop": "4rem",
                },
                2: {
                    "marginTop": "0rem",
                },
            }


        },
        partOfBridge: 3,
        master: true,
        correctPosition: {
            mainStyle: {
            },
            childrenStyle: {
                0: {
                    "marginTop": "0rem",
                },
                1: {
                    "marginTop": "4rem",
                },
                2: {
                    "marginTop": "8rem",
                },
            }
        },
        obstacle: false,
        emojiRun: "stairs-run"
    },
    {
        id: 14,
        startPointStyle: {
        },
        endPointStyle: {
            "position": "relative",
            "top": "12rem",
        },
        containerStyles: {
            "display": "flex",
        },
        bridgeStyles: {
            "display": "flex",
            "position": "relative",
            "height": "100%"
        },
        partOfBridgeStyles: {
            mainStyle: {
            },
            childrenStyle: {
                0: {
                    "marginTop": "8rem",
                },
                1: {
                    "marginTop": "4rem",
                },
                2: {
                    "marginTop": "0rem",
                },
            }


        },
        partOfBridge: 3,
        master: true,
        correctPosition: {
            mainStyle: {
            },
            childrenStyle: {
                0: {
                    "marginTop": "0rem",
                },
                1: {
                    "marginTop": "4rem",
                },
                2: {
                    "marginTop": "8rem",
                },
            }
        },
        obstacle: false,
        emojiRun: "stairs-run"
    },
]

/*
 {
        id: 4,
        name: "Level 4",
        level: 4,
        about: `„Z faktury je evidentní, že se 
        zneužívá naše logo a název služby Firmy.cz,“ 
        říká pro SZ Byznys manažerka PR a interní 
        komunikace Seznam.cz Aneta Kapuciánová. 
        „Základní zápis do katalogu Firmy.cz je u 
        nás vždy zdarma, platí se pak doplňkové služby,
         případně kampaně, 
        které si zákazník může na svou firmu objednat.“`,
        bridgeStyles: {
            "display": "flex",
            "width": "100%",
            "height": "100%",
            "alignItems": "flex-start",
            "transform": "rotate(90deg)"
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 6,
        name: "Level 6",
        level: 6,
        about: `ti Alza a snaží se oklamat zákazníky,“ 
        upozorňuje na varianty zneužívání společnost v 
        tiskové zprávě. 
        Jen za letošní rok podobných případů řešila 
        stovky.`,
        bridgeStyles: {
            "alignItems": "flex-end",
            "width": "100%",
            "height": "100%",
        },
        partOfBridgeStyles:{
            "max-width": "100%",
        }, 
        partOfBridge: 3,
        obstacle: false
    },
    {
        id: 7,
        name: "Level 7",
        level: 7,
        about: `kturační údaje jsou správné, co však 
        správné není, jsou kontaktní e-mail a bankovní 
        údaje. To ale člověk, který chce 
        fakturu zaplatit, 
        nedokáže na první pohled odhalit,“ dodala.`,
        bridgeStyles: {
            "alignItems": "flex-end"
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: true
    },
    {
        id: 8,
        name: "Level 8",
        level: 8,
        about: `rvní takový případ, který Seznam řeší. 
        Podobné podvody jeho jménem probíhaly již 
        před dvěma roky. Útočníci si navíc zpravidla 
        vybírají subjekty, 
        které se službami, jako jsou Firm`,
        bridgeStyles: {
            "alignItems": "flex-end"
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    }

*/