import React, { useContext } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { leftBracket } from "@data/ImagesData";
import useFormHandlers from "@/hooks/useFormHandlers";
import WarningLabel from "@components/errors/WarningLabel";
import ResolverButton from "./ResolverButton";

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
    <form
      onSubmit={handleSubmit}
      className="building-resolver-form"
      aria-label={`Container properties form for ${props.name}`}
    >
      <div
        className="resolver-box"
        role="group"
        aria-label="Container selector"
      >
        <span>.{props.name}</span>
        <img src={leftBracket} alt="Left bracket symbol" />
      </div>
      {inputs.map((input, index) => (
        <div
          key={index}
          className="resolver-inputs"
          role="group"
          aria-label={`Property pair ${index + 1}`}
        >
          <input
            type="text"
            value={input.property}
            onChange={(e) =>
              handleInputChange(index, "property", e.target.value)
            }
            aria-label={`Property name ${index + 1}`}
          />
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(index, "value", e.target.value)}
            aria-label={`Property value ${index + 1}`}
          />
        </div>
      ))}
      <ResolverButton />
      {error ? (
        <WarningLabel text="you do not meet the conditions of the allowed/denied list" />
      ) : (
        ""
      )}
    </form>
  );
};

export default BuildingFormContainer;
