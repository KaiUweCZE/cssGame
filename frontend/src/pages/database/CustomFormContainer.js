import React, { useContext } from "react";
import CssFormInputs from "../../components/css-form/CssFormInputs";
import CssFormHeadline from "../../components/css-form/CssFormHeadline";
import { useFormInputs } from "@utils/cssFormFunctions";
import { customContainerContext } from "@contexts/building-contexts/customContainerContext";

const CustomFormContainer = (props) => {
  const { addInput, removeInput, containerStyle, setContainerStyle } =
    useContext(customContainerContext);

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
    setContainerStyle(newStyles);
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

export default CustomFormContainer;
