import React, { createContext, useState } from "react";

export const RestrictionContext = createContext({});

export const RestrictionProvider = ({ children }) => {
  const [allowedList, setAllowedList] = useState([""]);
  const [deniedList, setDeniedList] = useState([""]);

  const handleAdd = (type, number, setNumber) => {
    //const list = type === "allowed" ? allowedList : deniedList;
    const setList = type === "allowed" ? setAllowedList : setDeniedList;
    setNumber(number + 1);
    setList((prev) => [...prev, ""]);
  };

  const handleRemove = (type, number, setNumber) => {
    const list = type === "allowed" ? allowedList : deniedList;
    const setList = type === "allowed" ? setAllowedList : setDeniedList;
    if (number > 0) {
      setNumber(number - 1);
      const newList = list.slice(0, -1);
      setList(newList);
    }
  };

  const handleListChange = (index, value, type) => {
    const list = type === "allowed" ? allowedList : deniedList;
    const setList = type === "allowed" ? setAllowedList : setDeniedList;
    const newList = list.map((item, i) => (i === index ? value : item));
    setList(newList);
  };

  const logList = (type) => {
    const list = type === "allowed" ? allowedList : deniedList;
    console.log(list);
  };

  const contextValues = {
    allowedList,
    deniedList,
    setAllowedList,
    setDeniedList,
    handleAdd,
    handleRemove,
    handleListChange,
    logList,
  };

  return (
    <RestrictionContext.Provider value={contextValues}>
      {children}
    </RestrictionContext.Provider>
  );
};
