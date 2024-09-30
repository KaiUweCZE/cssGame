import React, { useEffect, useState } from "react";

const Logo = () => {
  const fullText = ". css-game{";
  const fullAttributeText = " @include ";
  const fullValuesText = " logo-style;";
  const [displayedText, setDisplayedText] = useState("");
  const [attributeText, setAttributeText] = useState("");
  const [valuesText, setValuesText] = useState("");
  const [curlyBracket, setCurlyBracket] = useState("");
  const [finalBracket, setFinalBracket] = useState("");
  const [newStyle, setNewStyle] = useState({});
  const [bracketStyle, setBracketStyle] = useState({});
  const [animationStage, setAnimationStage] = useState(0);

  const animateText = (text, setText, nextStage, speed) => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length - 1) {
        setText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(timer);

        setAnimationStage((prev) => prev + 1);
      }
    }, speed);
    return () => clearInterval(timer);
  };

  const easeText = (text, setText, nextStage, speed) => {
    let index = text.length;
    const timer = setInterval(() => {
      if (index > 0) {
        setText((prev) => prev.slice(0, -1));
        index--;
      } else {
        clearInterval(timer);

        setAnimationStage((prev) => prev + 1);
      }
    }, speed);
    return () => clearInterval(timer);
  };

  useEffect(() => {
    return animateText(fullText, setDisplayedText, 1, 100);
  }, []);

  useEffect(() => {
    if (animationStage === 1) {
      return animateText(fullAttributeText, setAttributeText, 2, 100);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 2) {
      return animateText(fullValuesText, setValuesText, 3, 100);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 3) {
      setCurlyBracket("}");
      return easeText(fullValuesText, setValuesText, 3, 20);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 4) {
      setCurlyBracket("}");
      return easeText(fullAttributeText, setAttributeText, 3, 20);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 5) {
      setCurlyBracket("}");
      setTimeout(
        () => {
          setNewStyle("finished");
          setBracketStyle("finish-bracket");
        },

        200
      );

      setTimeout(() => {
        setAttributeText("");
        setCurlyBracket("");
        setValuesText("");
        setDisplayedText(".css-game { }");
      }, 200);

      setTimeout(() => {
        setDisplayedText(".css-game ");
        setFinalBracket("{ }");
      }, 200);
    }
  }, [animationStage]);

  const getSpecialClass = (index) => {
    switch (index) {
      case 1:
        return "second-letter";
      case 5:
        // different class for 5.character?
        return "fifth-letter";
      default:
        return "";
    }
  };

  const renderDisplayedText = () => {
    return displayedText.split("").map((char, index) => (
      <span
        key={index}
        className={`main-text ${newStyle} ${getSpecialClass(index)}`}
      >
        {char}
      </span>
    ));
  };

  const renderBracket = () => {
    return finalBracket.split("").map((char, index) => (
      <span
        key={index}
        className={
          index === 0
            ? `main-text bracket ${bracketStyle} first-bracket`
            : `main-text bracket ${bracketStyle}`
        }
      >
        {`${char}`}{" "}
      </span>
    ));
  };

  return (
    <div className={`logo ${newStyle}`}>
      <span className={`main-text ${newStyle}`}>{renderDisplayedText()}</span>
      <span className={`main-text bracket ${bracketStyle}`}>
        {renderBracket()}
      </span>

      <span className="attribute-text">{attributeText}</span>
      <span className="values-text">{valuesText}</span>
      <span className="main-text">{curlyBracket}</span>
    </div>
  );
};

export default Logo;
