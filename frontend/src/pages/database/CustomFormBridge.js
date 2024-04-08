import React, { useContext } from "react";
import CssFormInputs from "../../components/css-form/CssFormInputs";
import CssFormHeadline from "../../components/css-form/CssFormHeadline";
import { useFormInputs } from "@utils/cssFormFunctions";
import { customBridgeContext } from "@contexts/building-contexts/customBridgeContext";

const CustomFormBridge = (props) => {
  const { addInput, removeInput, bridgeStyle, setBridgeStyle } =
    useContext(customBridgeContext);

  const {
    cssProperties,
    cssValues,
    setPropertyAtIndex,
    setValueAtIndex,
    handleAddLabel,
    handleRemoveLabel,
  } = useFormInputs([""], [""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStyles = cssProperties.reduce((acc, property, index) => {
      acc[property] = cssValues[index];
      return acc;
    }, {});
    setBridgeStyle(newStyles);
    console.log(cssProperties, cssValues);
  };

  return (
    <div className="container-form">
      <CssFormHeadline name={props.name} />
      <CssFormInputs
        submit={handleSubmit}
        addInput={addInput}
        removeInput={removeInput}
        addLabel={handleAddLabel}
        removeLabel={handleRemoveLabel}
        properties={cssProperties}
        setPropertyAtIndex={setPropertyAtIndex}
        values={cssValues}
        setValueAtIndex={setValueAtIndex}
        stop={props.stopAdd}
      />
    </div>
  );
};

export default CustomFormBridge;
