import React, { useContext, useEffect, useState } from "react";
import { minusIcon, plusIcon } from "../../data/ImagesData";
import { BuildingFormContext } from "../../contexts/BuildingContexts";

const FormSectionInputs = (props) => {
  const context = useContext(BuildingFormContext);
  const [number, setNumber] = useState(1);

  const {
    propertiesBridge,
    valuesBridge,
    setPropertiesBridge,
    setValuesBridge,
    propertiesContainer,
    valuesContainer,
    setPropertiesContainer,
    setValuesContainer,
    handleAdd,
    handleRemove,
    handlePropertyChange,
    handleValueChange,
  } = context;

  const [properties, setProperties] =
    props.label === "bridge"
      ? [propertiesBridge, setPropertiesBridge]
      : [propertiesContainer, setPropertiesContainer];
  const [values, setValues] =
    props.label === "bridge"
      ? [valuesBridge, setValuesBridge]
      : [valuesContainer, setValuesContainer];

  const printForm = (e) => {
    e.preventDefault();
    console.log(properties, values);
  };

  return (
    <div className="FormSection">
      <div>
        <label htmlFor="">{props.label}:</label>
        <img
          src={plusIcon}
          alt=""
          onClick={() => handleAdd(props.label, number, setNumber)}
        />
        <img
          src={minusIcon}
          alt=""
          onClick={() => handleRemove(props.label, number, setNumber)}
        />
      </div>
      {Array.from({ length: number }, (_, index) => (
        <div key={index} className="GroupOfInputs">
          <input
            type="text"
            name={`name_${index}`}
            id={`id_${index}_1`}
            onChange={(e) =>
              handlePropertyChange(index, e.target.value, props.label)
            }
          />
          <input
            type="text"
            name={`value_${index}`}
            id={`id_${index}_2`}
            onChange={(e) =>
              handleValueChange(index, e.target.value, props.label)
            }
          />
        </div>
      ))}
      <button onClick={(e) => printForm(e)}>console.log</button>
    </div>
  );
};

export default FormSectionInputs;
