import React, { useContext, useEffect, useState } from "react";
import { minusIcon, plusIcon } from "../../data/ImagesData";
import { BuildingFormContext } from "../../contexts/BuildingContexts";
import { checkProperties } from "../../Functions/buildingFunctions";
import WarningLabel from "./WarningLabel";

const FormSectionInputs = (props) => {
  const [number, setNumber] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const {
    propertiesContainer,
    propertiesBridge,
    handleAdd,
    handleRemove,
    handlePropertyChange,
    handleValueChange,
  } = useContext(BuildingFormContext);
  const properties =
    props.label === "bridge" ? propertiesBridge : propertiesContainer;

  useEffect(() => {
    setIsValid(checkProperties(properties));
  }, [properties]);

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
      {isValid ? "" : <WarningLabel />}
    </div>
  );
};

export default FormSectionInputs;
