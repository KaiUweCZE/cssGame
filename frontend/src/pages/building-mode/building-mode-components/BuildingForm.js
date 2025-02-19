import React, { useContext, useEffect, useState } from "react";
import FormSectionInputs from "./FormSectionInputs";
import BuildingFormSubmit from "./BuildingFormSubmit";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import BuildingTextarea from "./BuildingTextarea";
import BuildingSelectList from "./BuildingSelectList";
import BuildingRadio from "./BuildingRadio";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import VerifyButton from "./VerifyButton";

const BuildingForm = () => {
  const { setLevelName, setDescription, setMaximumNumber } =
    useContext(BuildingFormContext);

  const { setResult, change, setChange } = useContext(customCommonContext);

  // setChange to 0 and force to setResult(false)
  // because of it is common context for database and building page
  useEffect(() => {
    setChange(0);
  }, []);

  useEffect(() => {
    if (change === 0) {
      setResult(false);
    }
  }, [change]);

  return (
    <form 
      className="building-form" 
      action=""
      role="form"
      aria-label="Level building configuration form"
    >
      <div className="form-section" role="group" aria-label="Level name input">
        <label htmlFor="level-name">Name of the level:</label>
        <input
          type="text"
          name="level-name"
          id="level-name"
          maxLength={20}
          onChange={(e) => setLevelName(e.target.value)}
          aria-required="true"
        />
      </div>
      <div className="bridge-elements" role="region" aria-label="Style configuration section">
        <h3>Set own styles:</h3>
        <FormSectionInputs label="bridge" />
        <FormSectionInputs label="container" />
      </div>
      <BuildingRadio maximumNumber={setMaximumNumber} />
      <BuildingSelectList />
      <BuildingTextarea description={setDescription} />
      <div className="building-form-box" role="group" aria-label="Form actions">
        <VerifyButton />
        <BuildingFormSubmit />
      </div>
    </form>
  );
};

export default BuildingForm;
