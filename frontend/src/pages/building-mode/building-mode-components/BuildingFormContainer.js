import React, { useContext, useState, useEffect } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { leftBracket, rightBracket } from "@data/ImagesData";
import useFormHandlers from "@utils/hooks/useFormHandlers";
import WarningLabel from "@components/errors/WarningLabel";

const BuildingFormContainer = (props) => {
  const {
    originPropertiesContainer,
    originValuesContainer,
    setPropertiesContainer,
    setValuesContainer,
  } = useContext(BuildingFormContext);

  const { inputs, handleInputChange, handleSubmit, error } = useFormHandlers(
    originPropertiesContainer,
    originValuesContainer,
    setPropertiesContainer,
    setValuesContainer
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
        <input type="submit" value="check" />
      </div>
      {error ? (
        <WarningLabel text="you do not meet the conditions of the allowed/denied list" />
      ) : (
        ""
      )}
    </form>
  );
};

export default BuildingFormContainer;
