import React, { useContext } from "react";
import { enemyImg } from "../../data/ImagesData";
import EmojiMessage from "./EmojiMessage";
import { emojiData } from "../../data/EmojiData";
import { ResultContext } from "@contexts/form-contexts/resultContext";

const EnemyEmoji = (props) => {
  const data = emojiData.find((e) => e.name === "enemy");
  const currentLevelAnimations = data.level.find(
    (e) => e.id === props.level
  ).animations;
  const { checked } = useContext(ResultContext);
  const animationFalse = currentLevelAnimations[0];
  const animationTrue = currentLevelAnimations[1];

  return (
    <>
      <img
        src={enemyImg}
        alt=""
        className={
          checked.check
            ? checked.result
              ? `emoji-character enemy ${animationTrue}`
              : `emoji-character enemy ${animationFalse}`
            : `emoji-character enemy`
        }
      />
      {checked.check ? (
        checked.check && checked.result ? (
          <EmojiMessage text="Ok, není tu most" specialClass="enemy" />
        ) : (
          <EmojiMessage
            text="tenhle most nemůžu nechat bez povšimnutí"
            specialClass="enemy"
          />
        )
      ) : (
        ""
      )}
    </>
  );
};

export default EnemyEmoji;
