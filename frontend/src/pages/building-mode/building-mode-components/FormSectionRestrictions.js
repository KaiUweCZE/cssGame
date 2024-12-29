import React, { useContext, useState } from "react";
import plusIcon from "@images/icons/plus-white.webp";
import minusIcon from "@images/icons/minus-white.webp";
import { RestrictionContext } from "@contexts/building-contexts/restrictionContext";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";

const FormSectionRestrictions = (props) => {
  const [number, setNumber] = useState(1);
  const { handleRemove, handleAdd, handleListChange } =
    useContext(RestrictionContext);

  const { setResult } = useContext(customCommonContext);
  return (
    <div 
      className="form-restrictions"
      role="group"
      aria-labelledby={`${props.name}-list-label`}
    >
      <div className="label-section">
        <label id={`${props.name}-list-label`} htmlFor={`${props.name}-input-0`}>
          {props.name}:
        </label>
        <div className="form-buttons-group">
          <img
            src={plusIcon}
            alt="Add new restriction"
            onClick={() => {
              handleAdd(props.name, number, setNumber);
              setResult(false);
            }}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleAdd(props.name, number, setNumber);
                setResult(false);
              }
            }}
          />
          <img
            src={minusIcon}
            alt="Remove last restriction"
            onClick={() => handleRemove(props.name, number, setNumber)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleRemove(props.name, number, setNumber);
              }
            }}
          />
        </div>
      </div>
      {Array.from({ length: number }, (_, index) => {
        return (
          <input
            key={index}
            type="text"
            name={`${props.name}-input-${index}`}
            id={`${props.name}-input-${index}`}
            onChange={(e) => {
              handleListChange(index, e.target.value, props.name);
              setResult(false);
            }}
            aria-label={`${props.name} list item ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default FormSectionRestrictions;
