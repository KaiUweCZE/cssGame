import React, { useState } from "react";
import { plusIcon, minusIcon } from "../../data/ImagesData";

const FormSectionRestrictions = (props) => {
  const [number, setNumber] = useState(1);

  const handleAdd = () => {};
  const handleRemove = () => {};
  return (
    <div className="FormRestrictions">
      <div>
        <label htmlFor="">{props.name}:</label>
        <img src={plusIcon} alt="" onClick={() => handleAdd()} />
        <img src={minusIcon} alt="" onClick={() => handleRemove()} />
      </div>
      {Array.from({ length: number }, (_, index) => {
        return <input type="text" name={`name_${index}`} id={`id_${index}`} />;
      })}
    </div>
  );
};

export default FormSectionRestrictions;
