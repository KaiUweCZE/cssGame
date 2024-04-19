import React, { useContext, useState, useEffect } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { leftBracket, rightBracket } from "@data/ImagesData";
import useFormHandlers from "@utils/hooks/useFormHandlers";
import WarningLabel from "@components/Errors/WarningLabel";

const BuildingFormBridge = (props) => {
  const {
    originPropertiesBridge,
    originValuesBridge,
    setPropertiesBridge,
    setValuesBridge,
  } = useContext(BuildingFormContext);

  const { inputs, handleInputChange, handleSubmit, error } = useFormHandlers(
    originPropertiesBridge,
    originValuesBridge,
    setPropertiesBridge,
    setValuesBridge
  );

  return (
    <form onSubmit={handleSubmit} className="building-resolver-form">
      <div className="resolver-box">
        <span>.{props.name}</span>
        <img src={leftBracket} />
      </div>
      {inputs.map((input, index) => (
        <div key={index} className="resolver-inputs">
          <input
            type="text"
            value={input.property}
            onChange={(e) =>
              handleInputChange(index, "property", e.target.value)
            }
          />
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(index, "value", e.target.value)}
          />
        </div>
      ))}
      <div className="resolver-box">
        <img src={rightBracket} alt="" />
        <input type="submit" value="set" />
      </div>
      {error ? (
        <WarningLabel text="you do not meet the conditions of the allowed/denied list" />
      ) : (
        ""
      )}
    </form>
  );
};

export default BuildingFormBridge;
