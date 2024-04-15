import React, { useContext, useState } from "react";
import FormSectionInputs from "./FormSectionInputs";
import BuildingFormSubmit from "./BuildingFormSubmit";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import BuildingTextarea from "./BuildingTextarea";
import BuildingSelectList from "./BuildingSelectList";
import BuildingRadio from "./BuildingRadio";
import BuildingSet from "./BuildingSet";

const BuildingForm = () => {
  const [select, setSelect] = useState("");
  const { setLevelName, setDescription, setMaximumNumber } =
    useContext(BuildingFormContext);

  return (
    <form className="BuildingForm" action="">
      <div className="FormSection">
        <label htmlFor="">name of level:</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setLevelName(e.target.value)}
        />
      </div>
      <FormSectionInputs label="bridge" />
      <FormSectionInputs label="container" />
      <BuildingRadio maximumNumber={setMaximumNumber} />
      <BuildingSelectList />
      <BuildingTextarea description={setDescription} />
      <BuildingFormSubmit />
      <BuildingSet />
    </form>
  );
};

export default BuildingForm;
