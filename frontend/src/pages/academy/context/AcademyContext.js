import React, { createContext, useState } from "react";

export const AcamedyContext = createContext({});

export const AcademyProvider = ({ children }) => {
  const [cssValues, setCssValues] = useState([]);
  const [levelId, setLevelId] = useState(0);

  const contextValues = {
    cssValues,
    setCssValues,
    levelId,
    setLevelId,
  };

  return (
    <AcamedyContext.Provider value={contextValues}>
      {children}
    </AcamedyContext.Provider>
  );
};
