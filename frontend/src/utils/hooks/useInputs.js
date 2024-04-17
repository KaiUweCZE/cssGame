import React, { useState, useEffect, useContext } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";

const useInputs = () => {
  const { maximumNumber } = useContext(BuildingFormContext);
  const [inputs, setInputs] = useState(
    Array.from({ length: maximumNumber }, () => ({
      property: "",
      value: "",
    }))
  );

  // Update the inputs array when maximumNumber changes
  useEffect(() => {
    setInputs(
      Array.from({ length: maximumNumber }, () => ({
        property: "",
        value: "",
      }))
    );
  }, [maximumNumber]);

  return { inputs, setInputs };
};

export default useInputs;
