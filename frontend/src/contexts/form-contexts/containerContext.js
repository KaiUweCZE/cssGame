import React, { createContext, useState, useRef, useEffect } from "react";

// to set styles for .container
export const ContainerContext = createContext(null);

export const ContainerProvider = ({ children }) => {
  const [propertiesContainer, setPropertiesContainer] = useState([""]);
  const [valuesContainer, setValuesContainer] = useState([""]);
  const [stopAdd, setStopAdd] = useState(false);
  const [containerProperties, setContainerProperties] = useState(3);

  // add next inputs in form
  const handleAddInput = () => {
    if (propertiesContainer.length >= containerProperties) {
      setPropertiesContainer([...propertiesContainer, ""]);
      setValuesContainer([...valuesContainer, ""]);
      setStopAdd(true);
    } else if (!stopAdd) {
      setPropertiesContainer([...propertiesContainer, ""]);
      setValuesContainer([...valuesContainer, ""]);
    }
  };

  // remove input from form
  const handleRemoveInput = (index) => {
    if (propertiesContainer.length === 1) {
      console.log("you cannot remove another element");
    } else {
      const filteredProperties = propertiesContainer.filter(
        (_, i) => i !== index
      );
      setPropertiesContainer(filteredProperties);
      const filteredValues = valuesContainer.filter((_, i) => i !== index);
      setValuesContainer(filteredValues);
      setStopAdd(false);
    }
  };

  // close additional form
  const closeForm = () => {
    setPropertiesContainer([""]);
    setValuesContainer([""]);
    setStopAdd(false);
  };

  const contextValue = {
    propertiesContainer,
    valuesContainer,
    setPropertiesContainer,
    setValuesContainer,
    setContainerProperties,
    stopAdd,
    handleAddInput,
    handleRemoveInput,
    closeForm,
  };

  return (
    <ContainerContext.Provider value={contextValue}>
      {children}
    </ContainerContext.Provider>
  );
};
