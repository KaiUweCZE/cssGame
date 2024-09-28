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
    <div className="form-restrictions">
      <div className="label-section">
        <label htmlFor="">{props.name}:</label>
        <div className="form-buttons-group">
          <img
            src={plusIcon}
            alt=""
            onClick={() => {
              handleAdd(props.name, number, setNumber);
              setResult(false);
            }}
          />
          <img
            src={minusIcon}
            alt=""
            onClick={() => handleRemove(props.name, number, setNumber)}
          />
        </div>
      </div>
      {Array.from({ length: number }, (_, index) => {
        return (
          <input
            key={index}
            type="text"
            name={`name_${index}`}
            id={`id_${index}`}
            onChange={(e) => {
              handleListChange(index, e.target.value, props.name);
              setResult(false);
            }}
          />
        );
      })}
    </div>
  );
};

export default FormSectionRestrictions;
