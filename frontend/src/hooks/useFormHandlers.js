import { useState, useEffect, useCallback, useContext } from "react";
import useInputs from "./useInputs";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import { RestrictionContext } from "@contexts/building-contexts/restrictionContext";

const useFormHandlers = (properties, values, setProperties, setValues) => {
  const { inputs, setInputs } = useInputs();
  const [originProperties, setOriginProperties] = useState([]);
  const [originValues, setOriginValues] = useState([]);
  const [error, setError] = useState(null);
  const { setChange } = useContext(customCommonContext);
  const { allowedList, deniedList } = useContext(RestrictionContext);
  // Set starting state
  useEffect(() => {
    setOriginProperties(properties);
    setOriginValues(values);
  }, [properties, values]);

  useEffect(() => {
    setOriginProperties(properties);
    setOriginValues(values);
  }, [properties, values]);

  // Updates input values based on user interactions
  const handleInputChange = useCallback((index, type, value) => {
    setInputs((currentInputs) =>
      currentInputs.map((input, i) =>
        i === index ? { ...input, [type]: value } : input
      )
    );
  }, []);

  // Processes form submission and updates context states
  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedProperties = inputs?.map((input) => input.property);
    const submittedValues = inputs?.map((input) => input.value);

    // Check if any of the submitted properties are in the denied list
    const isDenied = submittedProperties.some((prop) =>
      deniedList.includes(prop)
    );
    // Check if all of the submitted properties are in the allowed list
    const isAllowed = submittedProperties.every((prop) =>
      allowedList.includes(prop)
    );

    if ((deniedList.length > 1 || deniedList[0] !== "") && isDenied) {
      setError("You cannot use values from the denied list.");
      return;
    }

    if ((allowedList.length > 1 || allowedList[0] !== "") && !isAllowed) {
      setError("You must use only values from the allowed list.");
      return;
    }

    updatePropertiesAndValues(submittedProperties, submittedValues);
    setError(null);
    console.log("Updated properties", properties);
  };

  // Helper function to update properties and values
  const updatePropertiesAndValues = (submittedProperties, submittedValues) => {
    setProperties(() => [...properties, ...submittedProperties]);
    setValues(() => [...values, ...submittedValues]);
    setTimeout(() => setChange((prev) => prev + 1), 5);
  };

  return {
    inputs,
    handleInputChange,
    handleSubmit,
    error,
  };
};

export default useFormHandlers;
