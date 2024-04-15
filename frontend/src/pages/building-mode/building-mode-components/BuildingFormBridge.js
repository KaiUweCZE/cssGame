import React, { useContext, useState, useEffect } from "react";
import { useFormInputs } from "@utils/cssFormFunctions";
import { checkAllowedList } from "@utils/checkArray";
import ErrorList from "../../database/database-components/ErrorList";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import useInputs from "@utils/hooks/useInputs";
import { leftBracket, rightBracket } from "@data/ImagesData";

const BuildingFormBridge = (props) => {
  const [number, setNumber] = useState(3);
  const [error, setError] = useState({ allowed: false, denied: false });
  const inputs = useInputs();
  const {
    propertiesBridge,
    setPropertiesBridge,
    setValuesBridge,
    valuesBridge,
    maximumNumber,
    handleAdd,
    handleRemove,
    handlePropertyChange,
    handleValueChange,
  } = useContext(BuildingFormContext);

  const [originProperties, setOriginProperties] = useState([""]);
  const [originValues, setOriginValues] = useState([""]);

  useEffect(() => {
    setOriginProperties(propertiesBridge);
    setOriginValues(valuesBridge);
  }, []);

  const handleInputChange = (index, type, value) => {
    setInputs((currentInputs) =>
      currentInputs.map((input, i) =>
        i === index ? { ...input, [type]: value } : input
      )
    );
  };

  const {
    cssProperties,
    cssValues,
    setPropertyAtIndex,
    setValueAtIndex,
    handleAddLabel,
    handleRemoveLabel,
  } = useFormInputs([""], [""], maximumNumber);

  const handleSubmit = (e) => {
    e.preventDefault();

    let submittedProperties = [];
    let submittedValues = [];

    inputs.forEach((input) => {
      submittedProperties.push(input.property); // Collect property
      submittedValues.push(input.value); // Collect value
    });

    setPropertiesBridge((prev) => [
      ...originProperties,
      ...submittedProperties,
    ]);
    setValuesBridge((prev) => [...originValues, ...submittedValues]);
    //submittedProperties = [];
    //submittedValues = [];
    console.log(
      "aktuální hodnoty: ",
      propertiesBridge,
      valuesBridge,
      submittedProperties,
      maximumNumber,
      inputs,
      originProperties
    );
  };

  return (
    <div
      className={
        props?.position ? `container-form ${props.position}` : "container-form"
      }
    >
      <form onSubmit={handleSubmit} className="foorm">
        <img src={leftBracket} />
        {inputs.map((input, index) => (
          <div key={index}>
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
              onChange={(e) =>
                handleInputChange(index, "value", e.target.value)
              }
            />
          </div>
        ))}
        <input type="submit" value="odeslat" />
        <img src={rightBracket} alt="" />
      </form>
      {error.denied || error.allowed ? (
        <>
          <ErrorList
            type={error.allowed ? "allowed list" : "denied list"}
            list={error.allowed ? allowedList : deniedList}
            remove={() => setError({ allowed: false, denied: false })}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BuildingFormBridge;
