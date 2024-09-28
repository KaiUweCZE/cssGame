import React, { useEffect, useState } from "react";

const Logo = () => {
  const fullText = ". css-game {";
  const fullAttributeText = " color: ";
  const fullValuesText = " white;";
  const [displayedText, setDisplayedText] = useState("");
  const [attributeText, setAttributeText] = useState("");
  const [valuesText, setValuesText] = useState("");
  const [curlyBracket, setCurlyBracket] = useState("");
  const [finalBracket, setFinalBracket] = useState("");
  const [newStyle, setNewStyle] = useState({});
  const [bracketStyle, setBracketStyle] = useState({});
  const [animationStage, setAnimationStage] = useState(0);

  const animateText = (text, setText, nextStage) => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length - 1) {
        setText((prev) => prev + text[index]);
        index++;
      } else {
        console.log("niow", nextStage + 1);
        clearInterval(timer);

        setAnimationStage((prev) => prev + 1);
      }
    }, 100);
    return () => clearInterval(timer);
  };

  useEffect(() => {
    return animateText(fullText, setDisplayedText, 1);
  }, []);

  useEffect(() => {
    if (animationStage === 1) {
      console.log("attribute");
      return animateText(fullAttributeText, setAttributeText, 2);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 2) {
      return animateText(fullValuesText, setValuesText, 3);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 3) {
      setCurlyBracket("}");
      setTimeout(
        () => {
          setNewStyle({
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          });
          setBracketStyle({
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "inline-block",
          });
        },

        500
      );
      setTimeout(() => {
        setAttributeText("");
        setCurlyBracket("");
        setValuesText("");
        setDisplayedText(".css-game");
        setFinalBracket("{}");
      }, 800);
    }
  }, [animationStage]);

  const logText = () => {
    console.log("Main text:", displayedText);
    console.log("Attribute text:", attributeText);
    console.log("Values text:", valuesText);
  };

  return (
    <div className="logo" onClick={logText}>
      <span className="main-text" style={newStyle}>
        {displayedText}
      </span>
      <span className="main-text bracket" style={bracketStyle}>
        {finalBracket}
      </span>
      <span className="attribute-text">{attributeText}</span>
      <span className="values-text">{valuesText}</span>
      <span className="main-text">{curlyBracket}</span>
    </div>
  );
};

export default Logo;
