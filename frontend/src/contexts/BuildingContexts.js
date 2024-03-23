import React, { createContext, useState } from "react";

export const BuildingFormContext = createContext({});

export const BuildingProvider = ({ children }) => {
  const [propertiesBridge, setPropertiesBridge] = useState([""]);
  const [properiesContainer, setPropertiesContainer] = useState([""]);
  const [valuesBridge, setValuesBridge] = useState([""]);
  const [valuesContainer, setValuesContainer] = useState([""]);

  const contextValues = {
    propertiesBridge,
    properiesContainer,
    valuesBridge,
    valuesContainer,
    setValuesBridge,
    setPropertiesBridge,
    setValuesContainer,
    setPropertiesContainer,
  };

  return (
    <BuildingFormContext.Provider value={contextValues}>
      {children}
    </BuildingFormContext.Provider>
  );
};
