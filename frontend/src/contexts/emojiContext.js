import React, { createContext, useState } from "react";

// for emoji character manipulation
export const EmojiContext = createContext({
  specialClass: "",
  setSpecialClass: () => {},
});

export const EmojiProvider = ({ children }) => {
  const [specialClass, setSpecialClass] = useState("");
  //const [enemyAnimation, setEnemyAnimation] = useState("")

  /* depending on the result, the class for the 
    emoji component is set */
  const handleEmojiClass = (correct, levelSpecifics) => {
    /* levelSpecifics is an addition for some levels that need
        special animation */
    if (correct && levelSpecifics) {
      setSpecialClass(levelSpecifics);
    } else if (correct) {
      setSpecialClass("true");
    } else {
      setSpecialClass("false");
    }
  };

  const contextValue = {
    specialClass,
    setSpecialClass,
    handleEmojiClass,
    //enemyAnimation,
    //setEnemyAnimation
  };

  return (
    <EmojiContext.Provider value={contextValue}>
      {children}
    </EmojiContext.Provider>
  );
};
