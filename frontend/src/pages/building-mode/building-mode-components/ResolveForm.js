import React, { useContext } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { leftBracket } from "@data/ImagesData";
import useFormHandlers from "@/hooks/useFormHandlers";
import WarningLabel from "@components/errors/WarningLabel";
import ResolverButton from "./ResolverButton";

const ResolveForm = ({ name, type }) => {
  const {
    originPropertiesBridge,
    originValuesBridge,
    setPropertiesBridge,
    setValuesBridge,
    originPropertiesContainer,
    originValuesContainer,
    setPropertiesContainer,
    setValuesContainer,
  } = useContext(BuildingFormContext);

  const formProps = {
    bridge: {
      originProperties: originPropertiesBridge,
      originValues: originValuesBridge,
      setProperties: setPropertiesBridge,
      setValues: setValuesBridge,
    },
    container: {
      originProperties: originPropertiesContainer,
      originValues: originValuesContainer,
      setProperties: setPropertiesContainer,
      setValues: setValuesContainer,
    },
  }[type];

  const { inputs, handleInputChange, handleSubmit, error } = useFormHandlers(
    formProps.originProperties,
    formProps.originValues,
    formProps.setProperties,
    formProps.setValues
  );

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="building-resolver-form"
        aria-label={`${type} properties form for ${name}`}
      >
        <div
          className="resolver-box"
          role="group"
          aria-label={`${type} selector`}
        >
          <span>.{name}</span>
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
              onChange={(e) =>
                handleInputChange(index, "value", e.target.value)
              }
              aria-label={`Property value ${index + 1}`}
            />
          </div>
        ))}
        <ResolverButton />
      </form>
      {error && <WarningLabel text="You used forbidden properties" />}
    </div>
  );
};

export default ResolveForm;
