import React, { createContext, useState, useRef, useEffect } from "react";

// for form parts alter PartsContext, each line is one part of the bridge
// compered to other forms where more styles can be set
export const PartsContext = createContext({});

export const PartsProvider = ({ children }) => {
  const [stopAdd, setStopAdd] = useState(false);

  const [propertiesParts, setPropertiesParts] = useState([]);
  const [valuesParts, setValuesParts] = useState([]);

  const handleAddInput = () => {
    if (propertiesParts.length >= 2) {
      setPropertiesParts([...propertiesParts]);
      setValuesParts([...valuesParts]);
      setStopAdd(true);
    } else if (!stopAdd) {
      setPropertiesParts([...propertiesParts]);
      setValuesParts([...valuesParts]);
    }
  };

  const handleRemoveInput = (index) => {
    if (propertiesParts.length === 1) {
      console.log("You can not remove another element");
    } else {
      const filteredProperties = propertiesParts.filter((_, i) => i !== index);
      setPropertiesParts(filteredProperties);
      const filteredValues = valuesParts.filter((_, i) => i !== index);
      setValuesParts(filteredValues);
      setStopAdd(false);
    }
  };

  const closeForm = () => {
    setStopAdd(false);
  };

  const contextValue = {
    propertiesParts,
    valuesParts,
    setPropertiesParts,
    setValuesParts,
    handleAddInput,
    handleRemoveInput,
    closeForm,
  };

  return (
    <PartsContext.Provider value={contextValue}>
      {children}
    </PartsContext.Provider>
  );
};
