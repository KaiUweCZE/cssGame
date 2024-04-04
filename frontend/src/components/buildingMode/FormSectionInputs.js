import React, { useContext, useEffect, useState } from "react";
import { minusIcon2, plusIcon2 } from "../../data/ImagesData";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { checkProperties } from "@utils/buildingFunctions";
import WarningLabel from "./WarningLabel";

const FormSectionInputs = (props) => {
  const [number, setNumber] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const {
    maximumNumber,
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
        <div className="FormButtonsGroup">
          <img
            className={number === 4 ? "deactivated" : ""}
            src={plusIcon2}
            alt=""
            onClick={() => handleAdd(props.label, number, setNumber)}
          />
          <img
            src={minusIcon2}
            alt=""
            onClick={() => handleRemove(props.label, number, setNumber)}
          />
        </div>
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
      {isValid ? (
        ""
      ) : (
        <WarningLabel text="Your inputs contain wrong property" />
      )}
    </div>
  );
};

export default FormSectionInputs;
