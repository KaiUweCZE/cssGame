import React from "react";
import { guideImg } from "../../data/ImagesData";
import EmojiMessage from "./EmojiMessage";
import { emojiData } from "../../data/EmojiData";
import { useMessageCounter } from "@utils/MessageCounter";

const GuideEmoji = (props) => {
  const data = emojiData.find((e) => e.name === "guide");
  const stepsClass = data?.secondScene.actionStep.class;
  const i = props.messageAction
    ? useMessageCounter(props.step, props.messageAction)
    : 0;
  const showMessage = props.messageAction
    ? props.messageAction.includes(props.step)
    : false;
  const messageText = props.messageAction ? props.text[i - 1] : 0;

  return (
    <>
      <div className="box-emoji">
        <img
          src={guideImg}
          alt=""
          className={
            props.step >= stepsClass
              ? `emoji-character guide active`
              : `emoji-character guide`
          }
        />
        {showMessage && <EmojiMessage text={props.text[i - 1]} />}
      </div>
    </>
  );
};

export default GuideEmoji;
