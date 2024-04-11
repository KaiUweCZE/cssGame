import React, { useContext, useState } from "react";
import CssFormInputs from "../../components/css-form/CssFormInputs";
import CssFormHeadline from "../../components/css-form/CssFormHeadline";
import { useFormInputs } from "@utils/cssFormFunctions";
import { customContainerContext } from "@contexts/building-contexts/customContainerContext";
import { checkAllowedList } from "@utils/checkArray";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import ErrorList from "./database-components/ErrorList";

const CustomFormContainer = (props) => {
  const [error, setError] = useState({ allowed: false, denied: false });
  const { addInput, removeInput, maxLengthContainer, setContainerStyle } =
    useContext(customContainerContext);
  const { setChange, list, allowedList, deniedList } =
    useContext(customCommonContext);

  const {
    cssProperties,
    cssValues,
    setPropertyAtIndex,
    setValueAtIndex,
    handleAddLabel,
    handleRemoveLabel,
  } = useFormInputs([""], [""], maxLengthContainer);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStyles = cssProperties.reduce((acc, property, index) => {
      acc[property] = cssValues[index];
      return acc;
    }, {});
    if (!list.allowed && !list.denied) {
      setError({ allowed: false, denied: false });
      setContainerStyle(newStyles);
      setChange((prev) => prev + 1);
    }
    if (list.allowed) {
      if (checkAllowedList(cssProperties, allowedList)) {
        setError({ allowed: false, denied: false });
        setContainerStyle(newStyles);
        setChange((prev) => prev + 1);
      } else {
        setError({ allowed: true, denied: false });
      }
    }
    if (list.denied) {
      if (!checkAllowedList(cssProperties, deniedList)) {
        setError({ allowed: false, denied: false });
        setContainerStyle(newStyles);
        setChange((prev) => prev + 1);
      } else {
        setError({ allowed: false, denied: true });
      }
    }
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

export default CustomFormContainer;
