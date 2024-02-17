import React, { useEffect, useState } from "react";
import { useTypingEffect } from "../../Functions/useTypingEffect";


const FirstScene = (props) => {
    const [i, setI] = useState(0)
    const text = [`Na počátku jeden velmi zlý coder vzal Emojiho z jeho domova, kde byl stvořen aby jím lidé mohli své vřelé vzkazy zdůraznit. Cesta světem css je trnitá, plná překážek. Pakliže se rozhodneš pomoci mu najít cestu domů, tak věřím, že najdeš i ty svou cestu k světu css.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam voluptas nemo adipisci quam.`,
    `Jsi připraven vydat se dál?`
    ]
    const resultText = useTypingEffect(text[i], 15)
    
    const handleScene = () => {
        if (i < 2) {
            setI(prev => prev + 1)
        } else {
            props.setScene('second')
        }
        
    }
    return(
        <div className="container-welcome first">
            <p>
                {resultText}
            </p>
            <button onClick={() => handleScene()}>next</button>
        </div>
        
    )
}

export default FirstScene