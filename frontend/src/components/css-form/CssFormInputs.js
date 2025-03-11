import React, { useState } from "react";
import RemoveInput from "./RemoveInput";
import CssFormBoxButtons from "./CssFormBoxButtons";
import SuggestList from "@components/SuggestList";
import RightBracket from "./RightBracket";

const CHAR_LIMIT = 11;

const CssFormInputs = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestValue, setSuggestValue] = useState("");
  const [propertyIndex, setPropertyIndex] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [focusedSecondInput, setFocusedSecondInput] = useState(null);

  return (
    <>
      <form className="form-css" onSubmit={props.submit}>
        {props.properties.map((property, index) => (
          <div className="form-css-row" key={index}>
            <div
              className={`form-css-value ${
                focusedInput === index ? "focus-within" : ""
              } ${property.length > 0 ? "input-filled" : ""}`}
            >
              <input
                className={
                  property.length > 0
                    ? "form-css-input inputed"
                    : "form-css-input"
                }
                type="text"
                placeholder={
                  props.name === "parts" ? `${index + 1}.element` : ""
                }
                value={property}
                onFocus={() => {
                  setIsFocused(true);
                  setFocusedInput(index);
                  setPropertyIndex(index);
                }}
                onBlur={() =>
                  setTimeout(() => {
                    setIsFocused(false);
                    setFocusedInput(null);
                  }, 50)
                }
                onChange={(e) => {
                  const newValue = e.target.value.replace(/:$/, "");
                  props.setPropertyAtIndex(index, newValue);
                  setSuggestValue(newValue);
                }}
              />
              {property.length > 0 && focusedInput !== index && (
                <span className="form-css-span">:</span>
              )}
            </div>

            <div
              className={`form-css-value ${
                focusedSecondInput === index ? "focus-within" : ""
              } ${props.values[index]?.length > 0 ? "input-filled" : ""}`}
            >
              <input
                className={
                  props.values[index]?.length > 0
                    ? "form-css-input inputed"
                    : "form-css-input"
                }
                type="text"
                placeholder=""
                value={props.values[index] || ""}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/;$/, "");
                  props.setValueAtIndex(index, newValue);
                }}
                onFocus={() => setFocusedSecondInput(index)}
                onBlur={() => setFocusedSecondInput(null)}
              />
              {props.values[index]?.length > 0 &&
                focusedSecondInput !== index && (
                  <span className="form-css-span">;</span>
                )}
            </div>

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
          stop={
            props.name === "parts"
              ? props.properties.length >= props.maxInputs
              : props.properties.length >= (props.maxInputs || 3)
          }
          name={props.name}
        />
      </form>
      <RightBracket />
      {isFocused ? (
        <SuggestList
          value={suggestValue}
          func={props.setPropertyAtIndex}
          valueIndex={propertyIndex}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CssFormInputs;
