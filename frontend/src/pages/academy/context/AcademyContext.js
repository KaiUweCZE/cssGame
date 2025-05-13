import React, { createContext, useState } from "react";

export const AcademyContext = createContext({});

export const AcademyProvider = ({ children }) => {
  const [cssValues, setCssValues] = useState([]);
  const [editablePart, setEditablePart] = useState("element");
  const [amountOfElements, setAmountOfElements] = useState(1);
  const [levelId, setLevelId] = useState(0);
  const contextValues = {
    cssValues,
    setCssValues,
    editablePart,
    setEditablePart,
    amountOfElements,
    setAmountOfElements,
    levelId,
    setLevelId,
  };

  return (
    <AcademyContext.Provider value={contextValues}>
      {children}
    </AcademyContext.Provider>
  );
};
