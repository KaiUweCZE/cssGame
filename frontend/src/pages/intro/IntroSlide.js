import { useTypingEffect } from "@utils/useTypingEffect";
import React from "react";

const IntroSlide = ({
  func,
  paragraph,
  slideId,
  classPortrait,
  position,
  headline,
  background,
}) => {
  const resultText = useTypingEffect(paragraph, 5);

  const imgClass = () => {
    if (slideId >= 3) {
      return "img-intro-animation";
    }
    return "";
  };

  const handleId = () => {
    if (slideId >= 4) {
      window.location = "map";
    } else {
      func((prev) => prev + 1);
    }
  };

  return (
    <section className={`intro-background ${classPortrait}`}>
      <img
        className={imgClass()}
        src={background}
        alt=""
        loading="eager"
        width={1600}
        height={900}
      />
      <article className={position !== "" ? position : ""}>
        <h2>{headline}</h2>
        <p>{resultText}</p>
        <button className="button-next" onClick={handleId}>
          next
        </button>
      </article>
    </section>
  );
};

export default IntroSlide;
