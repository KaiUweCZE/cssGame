import React from "react";
import FormSectionInputs from "./FormSectionInputs";
import BuildingFormSubmit from "./BuildingFormSubmit";
import FormSectionText from "./FormSectionText";

const BuildingForm = () => {
  return (
    <form className="BuildingForm" action="">
      <div className="FormSection">
        <label htmlFor="">name of level:</label>
        <input type="text" name="" id="" />
      </div>
      <FormSectionInputs label="bridge" />
      <FormSectionInputs label="container" />
      <div className="FormTextarea">
        <label htmlFor="">allowed:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="FormTextarea">
        <label htmlFor="">denied:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <BuildingFormSubmit />
    </form>
  );
};

export default BuildingForm;
