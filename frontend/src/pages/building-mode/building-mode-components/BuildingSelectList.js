import React, { useContext, useState } from "react";
import FormSectionRestrictions from "./FormSectionRestrictions";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import caretIcon from "@/assets/images/icons/caret-down.webp";

const BuildingSelectList = () => {
  const [select, setSelect] = useState("");
  const { setResult } = useContext(customCommonContext);
  const handleSelect = (e) => {
    setResult(false);
    setSelect(e.target.value);
    console.log(select);
  };
  const renderSelect = () => {
    switch (select) {
      case "1":
        return <FormSectionRestrictions name="allowed" />;
      case "2":
        return <FormSectionRestrictions name="denied" />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="form-section-select" role="group" aria-labelledby="list-type-label">
        <label id="list-type-label" htmlFor="options">
          You can set a list of allowed/denied properties:
        </label>
        <div className="select-wrapper">
          <select 
            name="options" 
            id="options" 
            onChange={handleSelect}
            aria-label="Select property list type"
          >
            <option className="hoverer" value="0">
              You can select here
            </option>
            <option value="1">allowed list</option>
            <option value="2">denied list</option>
          </select>
          <img
            className="select-icon"
            src={caretIcon}
            width="16"
            height="16"
            alt="dropdown icon"
            aria-hidden="true"
          />
        </div>
      </div>
      {renderSelect()}
    </>
  );
};

export default BuildingSelectList;
