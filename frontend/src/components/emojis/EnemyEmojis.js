import React, { useContext } from "react";
import { enemyImg } from "../../data/imagesData";
import EmojiMessage from "./EmojiMessage";
import { emojiData } from "../../data/emojiData";
import { ResultContext } from "@contexts/form-contexts/resultContext";

const EnemyEmoji = (props) => {
  const data = emojiData.find((e) => e.name === "enemy");
  const currentLevelAnimations = data.level.find(
    (e) => e.id === props.level
  ).animations;
  const { checked } = useContext(ResultContext);
  const animationFalse = currentLevelAnimations[0];
  const animationTrue = currentLevelAnimations[1];

  const getEnemyClass = () => {
    if (!checked.check) return "";
    return checked.result
      ? currentLevelAnimations[1]
      : currentLevelAnimations[0];
  };

  return (
    <div className={`enemy-emoji ${getEnemyClass()}`}>
      <img src={enemyImg} alt="" width="64" height="64" />
      {checked.check ? (
        checked.check && checked.result ? (
          <EmojiMessage text="no one can pass this way" specialClass="enemy" />
        ) : (
          <EmojiMessage
            text="I can't leave this unattended."
            specialClass={getEnemyClass()}
          />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default EnemyEmoji;
