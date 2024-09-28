import React, { useContext, useState } from "react";
import FormSectionRestrictions from "./FormSectionRestrictions";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";

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
      <div className="form-section-select">
        <label htmlFor="">
          You can set a list of allowed/denied properties:
        </label>
        <select name="options" id="options" onChange={handleSelect}>
          <option className="hoverer" value="0">
            You can select here
          </option>
          <option value="1">allowed list</option>
          <option value="2">denied list</option>
        </select>
      </div>
      {renderSelect()}
    </>
  );
};

export default BuildingSelectList;
