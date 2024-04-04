import React, { createContext, useState, useEffect } from "react";

// for selecting and setting basic parameters of a given level
export const LevelContext = createContext({
  style: {},
  setStyle: () => {},
  setLevel: () => {},
});

export const LevelProvider = ({ children }) => {
  const [style, setStyle] = useState({
    container: "",
    bridge: "",
    partOfBridge: "",
  });
  const [level, setLevel] = useState(() => {
    const savedLevel = localStorage.getItem("level");
    return savedLevel ? JSON.parse(savedLevel) : { partOfBridge: 1 };
  });

  useEffect(() => {
    const savedLevel = localStorage.getItem("level");
    if (savedLevel) {
      const levelObject = JSON.parse(savedLevel);
      setLevel(levelObject);
      const containerStyle = levelObject.containerStyles;
      const bridgeStyle = levelObject.bridgeStyles;
      const partStyle = levelObject.partOfBridgeStyles?.childrenStyle;
      setStyle({
        container: containerStyle,
        bridge: bridgeStyle,
        parts: partStyle,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("level", JSON.stringify(level));
  }, [level]);

  const contextValue = {
    style,
    level,
    setStyle,
    setLevel,
  };

  return (
    <LevelContext.Provider value={contextValue}>
      {children}
    </LevelContext.Provider>
  );
};
