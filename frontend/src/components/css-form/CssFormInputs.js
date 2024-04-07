import React, { useState } from "react";
import RemoveInput from "./RemoveInput";
import CssFormBoxButtons from "./CssFormBoxButtons";

const CssFormInputs = (props) => {
  return (
    <form className="form-css" onSubmit={props.submit}>
      {props.properties.map((property, index) => (
        <div className="form-css__row" key={index}>
          <input
            type="text"
            placeholder={props.name === "parts" ? `${index + 1}.element` : ""}
            value={property}
            onFocus={() => {
              props.setIsFocused(true);
              props.setPropertyIndex(index);
            }}
            // if user clicks somewhere isFocused will be false after 50ms
            onBlur={() =>
              setTimeout(() => {
                props.setIsFocused(false);
              }, 50)
            }
            // the text that the user typess will be displayed in form
            onChange={(e) => {
              props.propertyIndex(index, e.target.value),
                props.setSuggestValue(e.target.value);
            }}
          />
          <input
            type="text"
            value={props.values[index] || ""}
            // the text that the user typess will be displayed in form
            onChange={(e) => props.valueIndex(index, e.target.value)}
          />
          <RemoveInput
            index={index}
            removeInput={props.removeInput}
            removeLabel={props.removeLabel}
          />
        </div>
      ))}
      <CssFormBoxButtons
        addInput={props.addInput}
        addLabel={props.addLabel}
        stop={props.stop}
      />
    </form>
  );
};

export default CssFormInputs;
