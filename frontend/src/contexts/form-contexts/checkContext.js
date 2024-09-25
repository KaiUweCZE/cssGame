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
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const [trigger, setTrigger] = useState(0);

  const contextValue = {
    active,
    setActive,
    aboutClass,
    setAboutClass,
    checkedBoxes,
    setCheckedBoxes,
    trigger,
    setTrigger,
  };

  return (
    <CheckContext.Provider value={contextValue}>
      {children}
    </CheckContext.Provider>
  );
};
