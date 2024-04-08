import { handleAddInput, handleRemoveInput } from "@utils/formInputsHandlers";
import React, { createContext, useState } from "react";

export const customBridgeContext = createContext({});

export const CustomBridgeProvider = ({ children }) => {
  const [propertiesBridge, setPropertiesBridge] = useState([""]);
  const [valuesBridge, setValuesBridge] = useState([""]);
  const [stopBridge, setStopBridge] = useState(false);
  const [bridgeStyle, setBridgeStyle] = useState("");
  const maxLength = 3;

  const addInput = () =>
    handleAddInput(
      maxLength,
      propertiesBridge,
      valuesBridge,
      setPropertiesBridge,
      setValuesBridge,
      stopBridge,
      setStopBridge
    );
  const removeInput = (index) =>
    handleRemoveInput(
      index,
      propertiesBridge,
      setPropertiesBridge,
      valuesBridge,
      setValuesBridge,
      setStopBridge
    );

  const contextValue = {
    maxLength,
    propertiesBridge,
    setPropertiesBridge,
    valuesBridge,
    setValuesBridge,
    bridgeStyle,
    setBridgeStyle,
    stopBridge,
    setStopBridge,
    addInput,
    removeInput,
  };
  return (
    <customBridgeContext.Provider value={contextValue}>
      {children}
    </customBridgeContext.Provider>
  );
};
