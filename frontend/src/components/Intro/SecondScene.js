import React, { useState } from "react";
import { enviromentImages, nextIcon } from "@data/ImagesData";
import EmojiMessage from "../Emojis/EmojiMessage";
import MainEmoji from "../Emojis/MainEmoji";
import GuideEmoji from "../Emojis/GuideEmoji";
import { emojiData } from "../../data/EmojiData";

const SecondScene = (props) => {
  const [step, setStep] = useState(0);
  const mainEmoji = emojiData.find((e) => e.name === "main").secondScene;
  const guideEmoji = emojiData.find((e) => e.name === "guide").secondScene;

  const handleScene = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      props.setScene("last");
    }
  };

  return (
    <div className="container-welcome">
      <div
        className="box-welcome"
        style={{ backgroundImage: `url(${enviromentImages.dirt})` }}
      >
        <div
          className="box-welcome__lawn"
          style={{ backgroundImage: `url(${enviromentImages.lawn})` }}
        ></div>
        <img src={nextIcon} onClick={() => handleScene()} className="next" />
      </div>
      <MainEmoji
        intro={true}
        messageAction={[1, 3]}
        step={step}
        text={mainEmoji.textIntro.first}
        cssClass="main"
      />
      <GuideEmoji
        intro={true}
        messageAction={[2, 4]}
        step={step}
        text={guideEmoji.textIntro.first}
      />
    </div>
  );
};

export default SecondScene;

/*
<img src={guideImg} className={ step >= 2 ? `emoji-character guide active` : `emoji-character guide`} alt="" />
<img src={masterImg} className='emoji-character main' alt="" />
*/
