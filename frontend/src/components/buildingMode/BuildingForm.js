import React from "react";
import FormSectionInputs from "./FormSectionInputs";
import BuildingFormSubmit from "./BuildingFormSubmit";
import FormSectionText from "./FormSectionText";
import FormSectionRestrictions from "./FormSectionRestrictions";

const BuildingForm = () => {
  return (
    <form className="BuildingForm" action="">
      <div className="FormSection">
        <label htmlFor="">name of level:</label>
        <input type="text" name="" id="" />
      </div>
      <FormSectionInputs label="bridge" />
      <FormSectionInputs label="container" />
      <FormSectionRestrictions name="allowed" />
      <FormSectionRestrictions name="denied" />
      <BuildingFormSubmit />
    </form>
  );
};

export default BuildingForm;
