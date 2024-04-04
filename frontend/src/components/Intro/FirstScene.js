import React, { useEffect, useState } from "react";
import { useTypingEffect } from "@utils/useTypingEffect";

const FirstScene = (props) => {
  const [i, setI] = useState(0);
  const text = [
    `V dalekém koutě internetu, kde se rodí emoce a příběhy, byl Emoji - symbol radosti a sdílení - unesen zhrzeným kodérem, který pro samou šeď ve svém životě nechtěl zpřístupnit více barev druhým. Teď se Emoji ocitá v labyrintu CSS, kde každá vlastnot, každý blok pravidel představuje další zkoušku na cestě za svobodou.`,
    `Tvým úkolem je stát se průvodcem na této nelehké cestě, odhalit tajemství css stylů a pomoci Emojimu najít cestu zpět do světa, kde jeho přítomnost přináší smysl a radost do zpráv lidí.`,
    `Připrav se na dobrodružství, které otestují tvé schopnosti a možná, jen možná, ti otevřou dveře do kouzelného světa CSS, kde se skrývá moc přetvářet web podle tvého přání.`,
    `Postupně, krok za krokem, můžeš Emojiho zachránit. Cesta světem css je trnitá, plná překážek. Jsi připraven dostat Emojiho domů?`,
  ];
  const resultText = useTypingEffect(text[i], 15);

  const handleScene = () => {
    if (i < text.length - 1) {
      console.log(text.length);
      setI((prev) => prev + 1);
    } else {
      props.setScene("second");
    }
  };
  return (
    <div className="container-welcome first">
      <p>{resultText}</p>
      <button onClick={() => handleScene()}>{`next (${i + 1}/${
        text.length
      })`}</button>
    </div>
  );
};

export default FirstScene;
