import React, { useContext, useEffect, useState } from "react";
import { minusIcon, plusIcon } from "../../data/ImagesData";
import { BuildingFormContext } from "../../contexts/BuildingContexts";

const FormSectionInputs = (props) => {
  const [number, setNumber] = useState(1);
  const context = useContext(BuildingFormContext);

  const {
    propertiesBridge,
    valuesBridge,
    setPropertiesBridge,
    setValuesBridge,
    propertiesContainer,
    valuesContainer,
    setPropertiesContainer,
    setValuesContainer,
  } = context;

  const [properties, setProperties] =
    props.label === "bridge"
      ? [propertiesBridge, setPropertiesBridge]
      : [propertiesContainer, setPropertiesContainer];
  const [values, setValues] =
    props.label === "bridge"
      ? [valuesBridge, setValuesBridge]
      : [valuesContainer, setValuesContainer];

  const handleAdd = () => {
    if (number < 4) {
      setNumber((prev) => prev + 1);
      setProperties([...properties, ""]);
      setValues([...values, ""]);
    }
  };

  const handleRemove = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
      const newProperties = properties.slice(0, -1);
      setProperties(newProperties);
      const newValues = values.slice(0, -1);
      setValues(newValues);
    }
  };

  const handlePropertyChange = (index, value) => {
    const newProperties = properties.map((item, i) =>
      i === index ? value : item
    );
    setProperties(newProperties);
  };

  const handleValueChange = (index, value) => {
    const newValues = values.map((item, i) => (i === index ? value : item));
    setValues(newValues);
  };

  const printForm = (e) => {
    e.preventDefault();
    console.log(properties, values);
  };

  return (
    <div className="FormSection">
      <div>
        <label htmlFor="">{props.label}:</label>
        <img src={plusIcon} alt="" onClick={() => handleAdd()} />
        <img src={minusIcon} alt="" onClick={() => handleRemove()} />
      </div>
      {Array.from({ length: number }, (_, index) => (
        <div key={index} className="GroupOfInputs">
          <input
            type="text"
            name={`name_${index}`}
            id={`id_${index}_1`}
            onChange={(e) => handlePropertyChange(index, e.target.value)}
          />
          <input
            type="text"
            name={`value_${index}`}
            id={`id_${index}_2`}
            onChange={(e) => handleValueChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={(e) => printForm(e)}>console.log</button>
    </div>
  );
};

export default FormSectionInputs;
