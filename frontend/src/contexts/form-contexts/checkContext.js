import React, { createContext, useState } from "react";

/*
Obtain data about .bridge & .container for AboutClassComponents
*/
export const CheckContext = createContext({
  active: false,
  setActive: () => {},
});

export const CheckContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [aboutClass, setAboutClass] = useState("");

  const contextValue = {
    active,
    setActive,
    aboutClass,
    setAboutClass,
  };

  return (
    <CheckContext.Provider value={contextValue}>
      {children}
    </CheckContext.Provider>
  );
};
