

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
        //specific styles for .bridge etc.
        bridgeStyles: {
            "display": "flex",
            "width": "100%",
            "height": "100%",
            //align-items: flex-end;
            "alignItems": "flex-end"
        },
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 2,
        name: "Level 2",
        level: 2,
        about: `„Z faktury je evidentní, že se 
        zneužívá naše logo a název služby Firmy.cz,“ 
        říká pro SZ Byznys manažerka PR a interní 
        komunikace Seznam.cz Aneta Kapuciánová. 
        „Základní zápis do katalogu Firmy.cz je u 
        nás vždy zdarma, platí se pak doplňkové služby,
         případně kampaně, 
        které si zákazník může na svou firmu objednat.“`,
        bridgeStyles: {
            "alignItems": "flex-start",
            "transform": "rotate(90deg)"
        },
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
        bridgeStyles: {
            "alignItems": "flex-start",
            "margin-inline": "2rem"
        },
        partOfBridge: 1,
        obstacle: false
    },
    {
        id: 4,
        name: "Level 4",
        level: 4,
        about: `ti Alza a snaží se oklamat zákazníky,“ 
        upozorňuje na varianty zneužívání společnost v 
        tiskové zprávě. 
        Jen za letošní rok podobných případů řešila 
        stovky.`,
        bridgeStyles: {
            "alignItems": "flex-end"
        },
        partOfBridge: 3,
        obstacle: false
    },
    {
        id: 5,
        name: "Level 5",
        level: 5,
        about: `kturační údaje jsou správné, co však 
        správné není, jsou kontaktní e-mail a bankovní 
        údaje. To ale člověk, který chce 
        fakturu zaplatit, 
        nedokáže na první pohled odhalit,“ dodala.`,
        bridgeStyles: {
            "alignItems": "flex-end"
        },
        partOfBridge: 1,
        obstacle: true
    },
    {
        id: 6,
        name: "Level 6",
        level: 6,
        about: `rvní takový případ, který Seznam řeší. 
        Podobné podvody jeho jménem probíhaly již 
        před dvěma roky. Útočníci si navíc zpravidla 
        vybírají subjekty, 
        které se službami, jako jsou Firm`,
        bridgeStyles: {
            "alignItems": "flex-end"
        },
        partOfBridge: 1,
        obstacle: false
    }
]