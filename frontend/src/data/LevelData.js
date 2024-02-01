
// id, level, name, about, bridgeStyles(specific style for bridge),
// partOfBridgeStyles(pecific style for parts of bridge)
// partOfBridge(some level has seperated parts of bridge)
// obsatcle(This is another element for )

export const levelData = [
    {
        id: 1,
        name: "Level 1",
        level: 1,
        about: `Vypadá jako reálná faktura od Seznamu. 
        Údaje odpovídají, logo je nápadně podobné tomu, 
        které používá česká internetová společnost. 
        Klasická výzva k uhrazení reklamních služeb. 
        Má to však háček – jde o podvrh a peníze by 
        zamířily k podvodníkům. A počet těchto falešných 
        výzev k zaplacení se v poslední době zvyšuje.`,
        containerStyles: {},
        //specific styles for .bridge etc.
        bridgeStyles: {
            "display": "flex",
            "position": "absolute",
            "top": "5rem",
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 2,
        name: "Level 2",
        level: 2,
        about: `Problémem podle Kapuciánové je i to, 
        že faktury vypadají realisticky. „Kromě loga,
        které není naše (rozhodně ne aktuální, možná se 
        zhledem blíží k nějakému historickému), nelze
        bohužel
        Jednoduše odhalit, že se nejedná o naši fakturu,“`,
        containerStyles: {},
        bridgeStyles: {
            "margin-inline": "2rem"
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 3,
        name: "Level 3",
        level: 3,
        about: `Problémem podle Kapuciánové je i to, 
        že faktury vypadají realisticky. „Kromě loga,
        které není naše (rozhodně ne aktuální, možná se 
        zhledem blíží k nějakému historickému), nelze
        bohužel
        Jednoduše odhalit, že se nejedná o naši fakturu,“`,
        containerStyles: {},
        bridgeStyles: {
            "width": "50%"
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 4,
        name: "Level 4",
        level: 4,
        about: `Problémem podle Kapuciánové je i to, 
        že faktury vypadají realisticky. „Kromě loga,
        které není naše (rozhodně ne aktuální, možná se 
        zhledem blíží k nějakému historickému), nelze
        bohužel
        Jednoduše odhalit, že se nejedná o naši fakturu,“`,
        containerStyles: {
            "padding-inline": "1rem",
        },
        bridgeStyles: {},
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 5,
        name: "Level 5",
        level: 5,
        about: `Vypadá jako reálná faktura od Seznamu. 
        Údaje odpovídají, logo je nápadně podobné tomu, 
        které používá česká internetová společnost. 
        Klasická výzva k uhrazení reklamních služeb. 
        Má to však háček – jde o podvrh a peníze by 
        zamířily k podvodníkům. A počet těchto falešných 
        výzev k zaplacení se v poslední době zvyšuje.`,
        containerStyles: {
            "display": "flex",
            "alignItems": "flex-end"
        },
        bridgeStyles: {
            "width": "100%",
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 6,
        name: "Level 6",
        level: 6,
        about: `Vypadá jako reálná faktura od Seznamu. 
        Údaje odpovídají, logo je nápadně podobné tomu, 
        které používá česká internetová společnost. 
        Klasická výzva k uhrazení reklamních služeb. 
        Má to však háček – jde o podvrh a peníze by 
        zamířily k podvodníkům. A počet těchto falešných 
        výzev k zaplacení se v poslední době zvyšuje.`,
        containerStyles: {
            "padding-inline": "1rem"
        },
        bridgeStyles: {
            "display": "flex",
            "width": "100%",
        },
        partOfBridgeStyles:{},
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 7,
        name: "Level 7",
        level: 7,
        about: `ti Alza a snaží se oklamat zákazníky,“ 
        upozorňuje na varianty zneužívání společnost v 
        tiskové zprávě. 
        Jen za letošní rok podobných případů řešila 
        stovky.`,
        containerStyles: {
            "display": "flex",
            "flex-direction": "column",
        },
        bridgeStyles: {
        },
        partOfBridgeStyles:{},
        partOfBridge: 3,
        obstacle: false
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