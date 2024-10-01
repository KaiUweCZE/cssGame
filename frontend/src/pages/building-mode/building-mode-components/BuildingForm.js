import React, { useContext, useEffect, useState } from "react";
import FormSectionInputs from "./FormSectionInputs";
import BuildingFormSubmit from "./BuildingFormSubmit";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import BuildingTextarea from "./BuildingTextarea";
import BuildingSelectList from "./BuildingSelectList";
import BuildingRadio from "./BuildingRadio";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import ResolverButton from "./ResolverButton";

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
    <form className="building-form" action="">
      <div className="form-section">
        <label htmlFor="">name of level:</label>
        <input
          type="text"
          name=""
          id=""
          maxLength={20}
          onChange={(e) => setLevelName(e.target.value)}
        />
      </div>
      <FormSectionInputs label="bridge" />
      <FormSectionInputs label="container" />
      <BuildingRadio maximumNumber={setMaximumNumber} />
      <BuildingSelectList />
      <BuildingTextarea description={setDescription} />
      <ResolverButton />
      <BuildingFormSubmit />
    </form>
  );
};

export default BuildingForm;
