import React, { useContext, useEffect, useState } from "react";
import plusIcon from "@images/icons/plus-white.webp";
import minusIcon from "@images/icons/minus-white.webp";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { checkProperties } from "@utils/buildingFunctions";
import WarningLabel from "@components/errors/WarningLabel";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";

const FormSectionInputs = (props) => {
  const [number, setNumber] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const [localProperties, setLocalProperties] = useState([]);
  const { setResult } = useContext(customCommonContext);
  const { handleAdd, handleRemove, handlePropertyChange, handleValueChange } =
    useContext(BuildingFormContext);

  const handleCheckProperties = (value, index) => {
    const existingPropIndex = localProperties.findIndex(
      (prop) => prop.index === index
    );

    let newProperties;

    if (existingPropIndex !== -1) {
      newProperties = localProperties.map((prop) =>
        prop.index === index ? { value, index } : prop
      );
    } else {
      newProperties = [...localProperties, { value, index }];
    }

    setLocalProperties(
      newProperties.filter((prop) => prop.value.trim() !== "")
    );

    const valuesToCheck = newProperties
      .map((prop) => prop.value)
      .filter(Boolean);
    setIsValid(checkProperties(valuesToCheck));
  };

  return (
    <div
      className="form-section"
      role="group"
      aria-labelledby={`${props.label}-section-label`}
    >
      <div>
        <label id={`${props.label}-section-label`} htmlFor={`id_0_1`}>
          .{props.label}
        </label>
        <div className="form-buttons-group">
          <img
            className={number === 4 ? "deactivated" : ""}
            src={plusIcon}
            alt="Add new property input"
            onClick={() => {
              if (number < 4) {
                handleAdd(props.label, number, setNumber);
                setResult(false);
              }
            }}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                if (number < 4) {
                  handleAdd(props.label, number, setNumber);
                  setResult(false);
                }
              }
            }}
          />
          <img
            src={minusIcon}
            alt="Remove last property input"
            onClick={() => {
              if (number > 1) {
                handleRemove(props.label, number, setNumber);
                setResult(false);
              }
            }}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                if (number > 1) {
                  handleRemove(props.label, number, setNumber);
                  setResult(false);
                }
              }
            }}
          />
        </div>
      </div>
      {Array.from({ length: number }, (_, index) => (
        <div
          key={index}
          className="group-inputs"
          role="group"
          aria-label={`Property input group ${index + 1}`}
        >
          <input
            type="text"
            name={`name_${index}`}
            id={`id_${index}_1`}
            placeholder="css property:"
            onChange={(e) => {
              setResult(false);
              handleCheckProperties(e.target.value, index);
              handlePropertyChange(index, e.target.value, props.label);
            }}
            aria-label={`CSS property ${index + 1}`}
          />
          <input
            type="text"
            name={`value_${index}`}
            id={`id_${index}_2`}
            placeholder="css value;"
            onChange={(e) => {
              setResult(false);
              handleValueChange(index, e.target.value, props.label);
            }}
            aria-label={`Value for property ${index + 1}`}
          />
        </div>
      ))}
      {isValid ? "" : <WarningLabel text="Wrong property" />}
    </div>
  );
};

export default FormSectionInputs;
