import React, {useState} from "react";

export const checkResult = () => {
    const propertiesValidator = cssProperties.every(checkTypo);
if (!propertiesValidator) {
    console.error("Některé z vlastností nejsou korektní.");
    setError(true)
    // text to error component
    setErrorMessage("Oh man, this is not a correct css property");
    setTimeout(() => setError(false), 2000)
} else {
    setProperties(cssProperties)
    setValues(cssValues)
    setError(false)
    setTimeout(checkBridgePosition, 0)
    console.log("Všechny vlastnosti jsou korektní:", cssProperties, cssValues);
    console.log("vlastnosti a hodnoty: ",properties, values);
    //setTimeout(checkBridgePosition, 0);
    setHasChecked(true)
}
}

export const useFormInputs =(initialProps = [], initialValues = [], onAddCallback) => {
    const [cssProperties, setCssProperties] = useState(initialProps);
    const [cssValues, setCssValues] = useState(initialValues);

    const setPropertyAtIndex = (index, value) => {
      setCssProperties(prev => {
        const newProperties = [...prev];
        newProperties[index] = value;
        return newProperties;
      });
    };
  
    const setValueAtIndex = (index, value) => {
      setCssValues(prev => {
        const newValues = [...prev];
        newValues[index] = value;
        return newValues;
      });
    };
  
    const handleAddInput2 = () => {
      if (cssProperties.length >= 4) {
        console.log("Done!");
      } else {
        setCssProperties(properties => [...properties, ""]);
        setCssValues(values => [...values, ""]);
      }
      
    };
  
    const handleRemoveInput2 = (index) => {
      setCssProperties(prevProperties => prevProperties.filter((_, i) => i !== index));
      setCssValues(prevValues => prevValues.filter((_, i) => i !== index));
    };
  
    return { cssProperties, cssValues, setPropertyAtIndex, setValueAtIndex, handleAddInput2, handleRemoveInput2 };
  };


export const handleAddInput = (array, setArray, setValues, setStop) => {
  if (array.length >= 4) {
      setStop(true)
      console.log("Done!");
  } else if(!stopAdd){
      setArray([...properties, ""]);
      setValues([...values, ""]);
  }
};

export const contextValues = (name, context) => {
  if(name === "bridge"){
    return {
    properties: context.propertiesBridge,
    valuese: context.valuesBridge,
    setProperties: context.setPropertiesBridge,
    setValues: context.setValuesBridge,
    handleAddInput: context.handleAddInput,
    handleRemoveInput: context.handleRemoveInput,
    stopAdd: context.stopAdd
    }
  } else{
    return {
    properties: context.propertiesContainer,
    values: context.valuesContainer,
    setProperties: context.setPropertiesContainer,
    setValues: context.setValuesContainer,
    handleAddInput: context.handleAddInput,
    handleRemoveInput: context.handleRemoveInput,
    stopAdd: context.stopAdd
  };
  }
} 