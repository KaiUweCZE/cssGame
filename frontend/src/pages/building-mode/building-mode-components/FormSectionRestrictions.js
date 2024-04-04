import React, { useContext, useState } from "react";
import { plusIcon2, minusIcon2 } from "../../../data/ImagesData";
import { RestrictionContext } from "@contexts/building-contexts/restrictionContext";

const FormSectionRestrictions = (props) => {
  const [number, setNumber] = useState(1);
  const { handleRemove, handleAdd, handleListChange } =
    useContext(RestrictionContext);
  return (
    <div className="FormRestrictions">
      <div className="LabelSection">
        <label htmlFor="">{props.name}:</label>
        <div className="FormButtonsGroup">
          <img
            src={plusIcon2}
            alt=""
            onClick={() => handleAdd(props.name, number, setNumber)}
          />
          <img
            src={minusIcon2}
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
            onChange={(e) =>
              handleListChange(index, e.target.value, props.name)
            }
          />
        );
      })}
    </div>
  );
};

export default FormSectionRestrictions;
