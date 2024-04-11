import React from "react";
import emojiImg from "@images/main-character.webp";
import background from "@images/cliff2.webp";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import trunkImg from "@images/plank.webp";

const AnimationBox = () => {
  const { scrollY } = useScrollPosition();
  return (
    <div className="animation-box">
      <img className="background" src={background} alt="" />
      <article className={scrollY > 1000 && scrollY < 1800 ? "showed" : "hide"}>
        {".bridge {"} <br /> transform: rotate(90deg); <br /> {"}"}
      </article>
      <img
        className={scrollY > 1000 && scrollY < 1800 ? "trunk active" : "trunk"}
        src={trunkImg}
        alt=""
      />
      <img
        src={emojiImg}
        className={scrollY > 1000 && scrollY < 1800 ? "emoji come-in" : "emoji"}
        alt=""
      />
    </div>
  );
};

export default AnimationBox;
