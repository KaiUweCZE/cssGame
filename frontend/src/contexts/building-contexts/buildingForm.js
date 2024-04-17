import React, { createContext, useState } from "react";

export const BuildingFormContext = createContext({});

export const BuildingProvider = ({ children }) => {
  // States for storing original properties and values for "bridge" and "container"
  // this styles will be send to the databse
  const [originPropertiesBridge, setOriginPropertiesBridge] = useState([""]);
  const [originValuesBridge, setOriginValuesBridge] = useState([""]);
  const [originPropertiesContainer, setOriginPropertiesContainer] = useState([
    "",
  ]);
  const [originValuesContainer, setOriginValuesContainer] = useState([""]);

  // States for storing current editable properties and values for "bridge" and "container"
  // these styles will be modified in the Resolver form(BuildingFormContainer/BuildingFormBridge)
  const [propertiesBridge, setPropertiesBridge] = useState([""]);
  const [propertiesContainer, setPropertiesContainer] = useState([""]);
  const [valuesBridge, setValuesBridge] = useState([""]);
  const [valuesContainer, setValuesContainer] = useState([""]);

  // State to control the maximum number of allowed items
  const [maximumNumber, setMaximumNumber] = useState(4);

  // States for storing additional information about the building level
  const [levelName, setLevelName] = useState("");
  const [description, setDescription] = useState("");
  //
  const [styled, setStyled] = useState(false);

  // Function to handle adding new properties and values
  const handleAdd = (type, number, setNumber) => {
    const setProperties =
      type === "bridge" ? setPropertiesBridge : setPropertiesContainer;
    const setValues = type === "bridge" ? setValuesBridge : setValuesContainer;
    const setOriginProperties =
      type === "bridge"
        ? setOriginPropertiesBridge
        : setOriginPropertiesContainer;
    const setOriginValues =
      type === "bridge" ? setOriginValuesBridge : setOriginValuesContainer;

    if (number < 4) {
      setNumber((prev) => prev + 1);
      setProperties((prev) => [...prev, ""]);
      setValues((prev) => [...prev, ""]);
      setOriginProperties((prev) => [...prev, ""]);
      setOriginValues((prev) => [...prev, ""]);
    } else {
      setMaximumNumber(true);
    }
    console.log(number, type, originPropertiesBridge);
  };

  // Function to handle removing properties and values
  const handleRemove = (type, number, setNumber) => {
    const properties =
      type === "bridge" ? propertiesBridge : propertiesContainer;
    const values = type === "bridge" ? valuesBridge : valuesContainer;

    const originProperties =
      type === "bridge" ? originPropertiesBridge : originPropertiesContainer;
    const originValues =
      type === "bridge" ? originValuesBridge : originValuesContainer;

    const setProperties =
      type === "bridge" ? setPropertiesBridge : setPropertiesContainer;
    const setValues = type === "bridge" ? setValuesBridge : setValuesContainer;
    const setOriginProperties =
      type === "bridge"
        ? setOriginPropertiesBridge
        : setOriginPropertiesContainer;
    const setOriginValues =
      type === "bridge" ? setOriginValuesBridge : setOriginValuesContainer;

    if (number > 0) {
      setNumber((prev) => prev - 1);
      const newProperties = properties.slice(0, -1);
      const newOriginProperties = originProperties.slice(0, -1);
      setProperties(newProperties);
      setOriginProperties(newOriginProperties);
      const newValues = values.slice(0, -1);
      const newOriginValues = originValues.slice(0, -1);
      setValues(newValues);
      setOriginValues(newOriginValues);
      setMaximumNumber(false);
    }
  };

  // Function to update properties based on user input
  const handlePropertyChange = (index, value, type) => {
    const properties =
      type === "bridge" ? propertiesBridge : propertiesContainer;
    const setProperties =
      type === "bridge" ? setPropertiesBridge : setPropertiesContainer;

    const originProperties =
      type === "bridge" ? originPropertiesBridge : originPropertiesContainer;
    const setOriginProperties =
      type === "bridge"
        ? setOriginPropertiesBridge
        : setOriginPropertiesContainer;
    const newProperties = properties.map((item, i) =>
      i === index ? value : item
    );
    const newOriginProperties = originProperties.map((item, i) =>
      i === index ? value : item
    );
    setProperties(newProperties);
    setOriginProperties(newOriginProperties);
  };

  // Function to update values based on user input
  const handleValueChange = (index, value, type) => {
    const values = type === "bridge" ? valuesBridge : valuesContainer;
    const setValues = type === "bridge" ? setValuesBridge : setValuesContainer;
    const originValues =
      type === "bridge" ? originValuesBridge : originValuesContainer;
    const setOriginValues =
      type === "bridge" ? setOriginValuesBridge : setOriginValuesContainer;
    const newValues = values.map((item, i) => (i === index ? value : item));
    const newOriginValues = originValues.map((item, i) =>
      i === index ? value : item
    );
    setOriginValues(newOriginValues);

    setValues(newValues);
  };

  const contextValues = {
    originPropertiesBridge,
    originValuesBridge,
    originPropertiesContainer,
    originValuesContainer,
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
    setMaximumNumber,
    levelName,
    setLevelName,
    description,
    setDescription,
    styled,
    setStyled,
  };

  return (
    <BuildingFormContext.Provider value={contextValues}>
      {children}
    </BuildingFormContext.Provider>
  );
};
