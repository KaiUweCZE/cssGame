export const handleAddInput = (
  maxLength,
  properties,
  values,
  setProperties,
  setValues,
  stopAdd,
  setStopAdd
) => {
  if (properties.length >= maxLength) {
    setProperties([...properties, ""]);
    setValues([...values, ""]);
    setStopAdd(true);
  } else if (!stopAdd) {
    setProperties([...properties, ""]);
    setValues([...values, ""]);
  }
};

// remove input from form
export const handleRemoveInput = (
  index,
  properties,
  setProperties,
  values,
  setValues,
  setStopAdd
) => {
  if (properties.length === 1) {
    console.log("you cannot remove another element");
  } else {
    const filteredProperties = properties.filter((_, i) => i !== index);
    setProperties(filteredProperties);
    const filteredValues = values.filter((_, i) => i !== index);
    setValues(filteredValues);
    setStopAdd(false);
  }
};
