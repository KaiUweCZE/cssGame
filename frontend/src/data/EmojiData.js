
export const emojiData = [
    {
        name: "main",
        secondScene: {
            textIntro:{
                first: ["Tohle je nemožné, jak se mám dostat zpět? Přes tu divokou řeku se nikdy nepřebrodím.",
                "To vím moc dobře, přes ten most"],
                second: ["", ""]
            } ,
            actionStep:{
                text: 1
            } 
        }
    },
    {
        name: "guide",
        secondScene: {
            textIntro:{
                first: ["Neboj se, zachovej chladnou hlavu. Myslíš, že jsi jediný, kdo se takto ztratil? Je tu cesta kterou se dostaneš zpět.",
                "Pitomče! Tvou překážkou není most, ale svázané ruce, cesta, kterou ti nabízím ti umožní nejen se vrátit domů, ale překonat kteroukoliv obtíž."],
                second: ["", ""]
            },
            actionStep: {
                class: 2,
                text: 3
            }        
        },
        texts: {
            help: {
                levelFirst: ["", ""],
                levelSecond: ["", ""]
            }
        }
    }
]