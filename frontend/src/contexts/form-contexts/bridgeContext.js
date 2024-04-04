import React, { createContext, useState, useRef, useEffect } from "react";

export const BridgeContext = createContext(null);

export const BridgeProvider = ({ children }) => {
  const [propertiesBridge, setPropertiesBridge] = useState([""]);
  const [valuesBridge, setValuesBridge] = useState([""]);
  const [stopAdd, setStopAdd] = useState(false);
  const [bridgeProperties, setBridgeProperties] = useState(3);

  // add next inputs in form
  const handleAddInput = () => {
    if (propertiesBridge.length >= bridgeProperties) {
      setPropertiesBridge([...propertiesBridge, ""]);
      setValuesBridge([...valuesBridge, ""]);
      setStopAdd(true);
    } else if (!stopAdd) {
      setPropertiesBridge([...propertiesBridge, ""]);
      setValuesBridge([...valuesBridge, ""]);
    }
  };

  // remove input from form
  const handleRemoveInput = (index) => {
    if (propertiesBridge.length === 1) {
      console.log("you cannot remove another element");
    } else {
      const filteredProperties = propertiesBridge.filter((_, i) => i !== index);
      setPropertiesBridge(filteredProperties);
      const filteredValues = valuesBridge.filter((_, i) => i !== index);
      setValuesBridge(filteredValues);
      setStopAdd(false);
    }
  };

  // close additional form
  const closeForm = () => {
    setPropertiesBridge([]);
    setValuesBridge([]);
  };

  const contextValue = {
    propertiesBridge,
    valuesBridge,
    setPropertiesBridge,
    setValuesBridge,
    setBridgeProperties,
    stopAdd,
    handleAddInput,
    handleRemoveInput,
    closeForm,
  };

  return (
    <BridgeContext.Provider value={contextValue}>
      {children}
    </BridgeContext.Provider>
  );
};
