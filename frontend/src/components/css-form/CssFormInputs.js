import React, { useState } from "react";
import RemoveInput from "./RemoveInput";
import CssFormBoxButtons from "./CssFormBoxButtons";
import SuggestList from "@components/SuggestList";
import RightBracket from "./RightBracket";

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
          <div className="form-css__row" key={index}>
            <div>
              <input
                className={
                  property.length > 0
                    ? "form-css__input inputed"
                    : "form-css__input"
                }
                type="text"
                placeholder={
                  props.name === "parts" ? `${index + 1}.element` : ""
                }
                value={
                  property.length > 0 &&
                  property.length < 8 &&
                  focusedInput !== index
                    ? `${property}:`
                    : property
                }
                onFocus={() => {
                  setIsFocused(true);
                  setFocusedInput(index);
                  setPropertyIndex(index);
                }}
                onBlur={() =>
                  setTimeout(() => {
                    setIsFocused(false);
                    setFocusedInput(null); // Přidáno resetování focusedInput
                  }, 50)
                }
                onChange={(e) => {
                  const newValue = e.target.value.replace(/:$/, "");
                  props.setPropertyAtIndex(index, newValue);
                  setSuggestValue(newValue);
                }}
              />
              {property.length > 8 && focusedInput !== index && <span>:</span>}
            </div>

            <div>
              <input
                className={
                  props.values[index]?.length > 0
                    ? "form-css__input inputed"
                    : "form-css__input"
                }
                type="text"
                value={
                  props.values[index]?.length > 0 &&
                  props.values[index]?.length < 8 &&
                  focusedSecondInput !== index
                    ? `${props.values[index]};`
                    : props.values[index]
                }
                onChange={(e) => {
                  const newValue = e.target.value.replace(/;$/, "");
                  props.setValueAtIndex(index, newValue);
                }}
                onFocus={() => setFocusedSecondInput(index)}
                onBlur={() => setFocusedSecondInput(null)}
              />
              {props.values[index]?.length > 8 &&
                focusedSecondInput !== index && <span>;</span>}
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
          stop={props.stop}
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
