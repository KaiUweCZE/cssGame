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
    //setTimeout(checkBridgePosition, 0);
    setHasChecked(true)
}
}

export const useFormInputs =(initialProps = [], initialValues = []) => {
    const [cssProperties, setCssProperties] = useState(initialProps);
    const [cssValues, setCssValues] = useState(initialValues);

    // this function sets properties to correct index in array
    // it enables to display text in first column without styles change
    const setPropertyAtIndex = (index, value) => {
      setCssProperties(prev => {
        const newProperties = [...prev];
        newProperties[index] = value;
        return newProperties;
      });
    };
  
    // this function sets values to correct index in array
    // it enables to display text in second column without styles change
    const setValueAtIndex = (index, value) => {
      setCssValues(prev => {
        const newValues = [...prev];
        newValues[index] = value;
        return newValues;
      });
    };
  
    // add empty element to array
    const handleAddLabel = () => {
      console.log(cssProperties);
      if (cssProperties.length >= 4) {
        console.log("Done!");
      } else {
        setCssProperties(properties => [...properties, ""]);
        setCssValues(values => [...values, ""]);
        //console.log("properties", cssProperties);
        //console.log("values", cssValues);
      }
      
    };
  
    // remove specific element from array
    const handleRemoveLabel = (index) => {
      console.log(index);
      setCssProperties(prevProperties => prevProperties.filter((_, i) => i !== index));
      setCssValues(prevValues => prevValues.filter((_, i) => i !== index));
    };

    const closeForm = () => {
      cssProperties.length = 0
      cssValues.length = 0
    }
  
    return { cssProperties, cssValues, setPropertyAtIndex, setValueAtIndex, handleAddLabel, handleRemoveLabel, closeForm };
};


export const contextValues = (name, context) => {
  switch (name) {
    case "bridge":
      return {
        properties: context.propertiesBridge,
        values: context.valuesBridge,
        setProperties: context.setPropertiesBridge,
        setValues: context.setValuesBridge,
        handleAddInput: context.handleAddInput,
        handleRemoveInput: context.handleRemoveInput,
        stopAdd: context.stopAdd,
        closeForm: context.closeForm
        }
    case "container":
      return {
        properties: context.propertiesContainer,
        values: context.valuesContainer,
        setProperties: context.setPropertiesContainer,
        setValues: context.setValuesContainer,
        handleAddInput: context.handleAddInput,
        handleRemoveInput: context.handleRemoveInput,
        stopAdd: context.stopAdd,
        closeForm: context.closeForm
      };
    case "parts":
      return {
        properties: context.propertiesParts,
        values: context.valuesParts,
        setProperties: context.setPropertiesParts,
        setValues: context.setValuesParts,
        handleAddInput: context.handleAddInput,
        handleRemoveInput: context.handleRemoveInput,
        stopAdd: context.stopAdd,
        closeForm: context.closeForm
      };
    default: {
      console.log("Undefinded values");
    }
  }
  
   
} 