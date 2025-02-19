import React from "react";

import ResolveForm from "./ResolveForm";

const BuildingFormBridge = (props) => {
  return <ResolveForm name={props.name} type="bridge" />;
};

export default BuildingFormBridge;

/*import React, { useContext, useState, useEffect } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { leftBracket } from "@data/ImagesData";
import useFormHandlers from "@/hooks/useFormHandlers";
import WarningLabel from "@components/errors/WarningLabel";
import ResolverButton from "./ResolverButton";

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
    <div>
      <form
        onSubmit={handleSubmit}
        className="building-resolver-form"
        aria-label={`Bridge properties form for ${props.name}`}
      >
        <div className="resolver-box" role="group" aria-label="Bridge selector">
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
              onChange={(e) =>
                handleInputChange(index, "value", e.target.value)
              }
              aria-label={`Property value ${index + 1}`}
            />
          </div>
        ))}

        <ResolverButton />
      </form>{" "}
      {error && <WarningLabel text="You used forbidden properties" />}
    </div>
  );
};

export default BuildingFormBridge;
*/
