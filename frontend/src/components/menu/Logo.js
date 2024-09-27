import React, { useEffect, useState } from "react";

const Logo = () => {
  const fullText = ". css-game{color: white;}";
  const [displayedText, setDisplayedText] = useState("");
  const [newStyle, setNewStyle] = useState({});

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length - 1) {
        setDisplayedText((prev) => {
          const newText = prev + fullText[index];
          console.log(
            `index: ${index} Adding character: ${fullText[index]}, New text: ${newText}`
          );
          return newText;
        });
        index++;
      } else {
        setNewStyle({ color: "white", fontSize: "1.5rem", fontWeight: "bold" });
        setTimeout(() => {
          setDisplayedText(`.css-game{       }`);
        }, 500);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const logText = () => {
    console.log(displayedText);
  };

  return (
    <div className="logo" onClick={logText} style={newStyle}>
      {displayedText}
    </div>
  );
};

export default Logo;
