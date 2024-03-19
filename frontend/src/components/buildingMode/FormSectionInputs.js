import React, { useContext, useEffect, useState } from "react";
import { minusIcon, plusIcon } from "../../data/ImagesData";
import { BuildingFormContext } from "../../contexts/BuildingContexts";

const FormSectionInputs = (props) => {
  const [number, setNumber] = useState(1);
  const {
    propertiesBridge,
    valuesBridge,
    setPropertiesBridge,
    setValuesBridge,
  } = useContext(BuildingFormContext);

  const handleAdd = () => {
    if (number < 4) {
      setNumber((prev) => prev + 1);
      setPropertiesBridge([...propertiesBridge, ""]);
      setValuesBridge([...valuesBridge, ""]);
    }
  };

  const handleRemove = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
      const newProperties = propertiesBridge.slice(0, -1);
      setPropertiesBridge(newProperties);
      const newValues = valuesBridge.slice(0, -1);
      setValuesBridge(newValues);
    }
  };

  const handlePropertyChange = (index, value) => {
    const newProperties = propertiesBridge.map((item, i) =>
      i === index ? value : item
    );
    setPropertiesBridge(newProperties);
  };

  const handleValueChange = (index, value) => {
    const newValues = valuesBridge.map((item, i) =>
      i === index ? value : item
    );
    setValuesBridge(newValues);
  };

  const printForm = (e) => {
    e.preventDefault();
    console.log(propertiesBridge, valuesBridge);
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
