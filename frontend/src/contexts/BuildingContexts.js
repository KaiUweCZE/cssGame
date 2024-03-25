import React, { createContext, useEffect, useState } from "react";

export const BuildingFormContext = createContext({});

export const BuildingProvider = ({ children }) => {
  const [propertiesBridge, setPropertiesBridge] = useState([""]);
  const [propertiesContainer, setPropertiesContainer] = useState([""]);
  const [valuesBridge, setValuesBridge] = useState([""]);
  const [valuesContainer, setValuesContainer] = useState([""]);
  const [maximumNumber, setMaximumNumber] = useState(false);

  const handleAdd = (type, number, setNumber) => {
    const setProperties =
      type === "bridge" ? setPropertiesBridge : setPropertiesContainer;
    const setValues = type === "bridge" ? setValuesBridge : setValuesContainer;

    if (number < 4) {
      setNumber((prev) => prev + 1);
      setProperties((prev) => [...prev, ""]);
      setValues((prev) => [...prev, ""]);
    } else {
      setMaximumNumber(true);
    }
    console.log(number, type);
  };

  const handleRemove = (type, number, setNumber) => {
    const properties =
      type === "bridge" ? propertiesBridge : propertiesContainer;
    const values = type === "bridge" ? valuesBridge : valuesContainer;
    const setProperties =
      type === "bridge" ? setPropertiesBridge : setPropertiesContainer;
    const setValues = type === "bridge" ? setValuesBridge : setValuesContainer;

    if (number > 0) {
      setNumber((prev) => prev - 1);
      const newProperties = properties.slice(0, -1);
      setProperties(newProperties);
      const newValues = values.slice(0, -1);
      setValues(newValues);
      setMaximumNumber(false);
    }
  };

  const handlePropertyChange = (index, value, type) => {
    const properties =
      type === "bridge" ? propertiesBridge : propertiesContainer;
    const setProperties =
      type === "bridge" ? setPropertiesBridge : setPropertiesContainer;
    const newProperties = properties.map((item, i) =>
      i === index ? value : item
    );
    setProperties(newProperties);
  };

  const handleValueChange = (index, value, type) => {
    const values = type === "bridge" ? valuesBridge : valuesContainer;
    const setValues = type === "bridge" ? setValuesBridge : setValuesContainer;
    const newValues = values.map((item, i) => (i === index ? value : item));
    setValues(newValues);
  };

  const contextValues = {
    propertiesBridge,
    propertiesContainer,
    valuesBridge,
    valuesContainer,
    setValuesBridge,
    setPropertiesBridge,
    setValuesContainer,
    setPropertiesContainer,
    handleAdd,
    handleRemove,
    handlePropertyChange,
    handleValueChange,
    maximumNumber,
  };

  return (
    <BuildingFormContext.Provider value={contextValues}>
      {children}
    </BuildingFormContext.Provider>
  );
};

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
