import React, { createContext, useState, useEffect } from "react";

export const customCommonContext = createContext({});

export const CustomCommonProvider = ({ children }) => {
  const [allowedList, setAllowedList] = useState([""]);
  const [deniedList, setDeniedList] = useState([""]);
  const [list, setList] = useState({ allowed: false, denied: false });
  const [change, setChange] = useState(0);
  const [result, setResult] = useState(false);
  const [levelId, setLevelId] = useState("");
  const [styled, setStyled] = useState(false);

  useEffect(() => {
    if (allowedList[0] !== "") {
      setList({ allowed: true, denied: false });
    }
    if (deniedList[0] !== "") {
      setList({ allowed: false, denied: true });
    }
    if (deniedList[0] === "" && allowedList[0] === "") {
      setList({ allowed: false, denied: false });
    }
  }, [allowedList, deniedList]);

  const contextValue = {
    allowedList,
    setAllowedList,
    deniedList,
    setDeniedList,
    list,
    setList,
    change,
    setChange,
    result,
    setResult,
    levelId,
    setLevelId,
    styled,
    setStyled,
  };

  return (
    <customCommonContext.Provider value={contextValue}>
      {children}
    </customCommonContext.Provider>
  );
};
