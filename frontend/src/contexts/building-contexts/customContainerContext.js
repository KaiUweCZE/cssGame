import { handleAddInput, handleRemoveInput } from "@utils/formInputsHandlers";
import React, { createContext, useState } from "react";

export const customContainerContext = createContext({});

export const CustomContainerProvider = ({ children }) => {
  const [propertiesContainer, setPropertiesContainer] = useState([""]);
  const [valuesContainer, setValuesContainer] = useState([""]);
  const [stopContainer, setStopContainer] = useState(false);
  const [containerStyle, setContainerStyle] = useState("");
  const maxLength = 3;

  const addInput = () =>
    handleAddInput(
      maxLength,
      propertiesContainer,
      valuesContainer,
      setPropertiesContainer,
      setValuesContainer,
      stopContainer,
      setStopContainer
    );
  const removeInput = (index) =>
    handleRemoveInput(
      index,
      propertiesContainer,
      setPropertiesContainer,
      valuesContainer,
      setValuesContainer,
      setStopContainer
    );

  const contextValue = {
    maxLength,
    propertiesContainer,
    setPropertiesContainer,
    valuesContainer,
    setValuesContainer,
    containerStyle,
    setContainerStyle,
    stopContainer,
    setStopContainer,
    addInput,
    removeInput,
  };
  return (
    <customContainerContext.Provider value={contextValue}>
      {children}
    </customContainerContext.Provider>
  );
};
