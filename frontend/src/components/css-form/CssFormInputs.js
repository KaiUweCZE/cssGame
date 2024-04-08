import React, { useEffect, useState } from "react";
import RemoveInput from "./RemoveInput";
import CssFormBoxButtons from "./CssFormBoxButtons";
import SuggestList from "@components/SuggestList";
import RightBracket from "./RightBracket";

const CssFormInputs = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestValue, setSuggestValue] = useState("");
  const [propertyIndex, setPropertyIndex] = useState(null);
  return (
    <>
      <form className="form-css" onSubmit={props.submit}>
        {props.properties.map((property, index) => (
          <div className="form-css__row" key={index}>
            <input
              type="text"
              placeholder={props.name === "parts" ? `${index + 1}.element` : ""}
              value={property}
              onFocus={() => {
                setIsFocused(true);
                setPropertyIndex(index);
              }}
              // if user clicks somewhere isFocused will be false after 50ms
              onBlur={() =>
                setTimeout(() => {
                  setIsFocused(false);
                }, 50)
              }
              // the text that the user typess will be displayed in form
              onChange={(e) => {
                props.setPropertyAtIndex(index, e.target.value),
                  setSuggestValue(e.target.value);
              }}
            />
            <input
              type="text"
              value={props.values[index] || ""}
              // the text that the user typess will be displayed in form
              onChange={(e) => props.setValueAtIndex(index, e.target.value)}
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
