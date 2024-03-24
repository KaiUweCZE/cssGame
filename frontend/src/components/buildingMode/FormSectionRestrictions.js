import React, { useContext, useState } from "react";
import { plusIcon, minusIcon } from "../../data/ImagesData";
import { RestrictionContext } from "../../contexts/BuildingContexts";

const FormSectionRestrictions = (props) => {
  const [number, setNumber] = useState(1);
  const { handleRemove, handleAdd, handleListChange } =
    useContext(RestrictionContext);
  return (
    <div className="FormRestrictions">
      <div>
        <label htmlFor="">{props.name}:</label>
        <img
          src={plusIcon}
          alt=""
          onClick={() => handleAdd(props.name, number, setNumber)}
        />
        <img
          src={minusIcon}
          alt=""
          onClick={() => handleRemove(props.name, number, setNumber)}
        />
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
