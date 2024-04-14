import React, { useContext, useEffect, useState } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { RestrictionContext } from "@contexts/building-contexts/restrictionContext";
import { UserContext } from "../../../contexts/UserContext";
import ErrorBuilding from "./ErrorBuilding";
import { useCreateLevel } from "@utils/queries/useCreateLevel";

// submit input for handling the creation of a new level
const BuildingFormSubmit = () => {
  // state to manage error messages for form validation
  const [errorMessage, setErrorMessage] = useState({
    invalid: false,
    type: "",
  });

  // custom hook to call GraphQL mutation for creating a level
  const { createLevel, data, loading, error } = useCreateLevel();

  // Information about user
  const { user } = useContext(UserContext);

  // retrieve form data from inputs via BuildingFormContext
  const {
    maximumNumber,
    description,
    levelName,
    propertiesContainer,
    valuesContainer,
    propertiesBridge,
    valuesBridge,
  } = useContext(BuildingFormContext);

  // retrieve data from select element if allowedList/deniedList has been selected
  const { allowedList, deniedList } = useContext(RestrictionContext);

  // effects for debugging purposes
  useEffect(() => {
    if (data) {
      console.log("Level created successfully", data);
    }
    if (error) {
      console.error("Error creating level:", error);
      setErrorMessage({ invalid: true, type: "server-error" }); // Example of handling server error
    }
  }, [data, error]);

  useEffect(() => {
    console.log(user.name, description);
  }, [user, description]);

  // form submission handler
  const handleCreateLevel = (e) => {
    e.preventDefault();

    // validate level name input
    if (!levelName) {
      console.log("Level name is required");
      setErrorMessage({ invalid: true, type: "no-name" });
      return;
    }

    // check if at least one style element has been filled in inputs
    const hasBridgeData =
      propertiesBridge.length > 0 && valuesBridge.length > 0;
    const hasContainerData =
      propertiesContainer.length > 0 && valuesContainer.length > 0;

    if (!hasBridgeData && !hasContainerData) {
      console.log("You have to style at least one of element");
      setErrorMessage({ invalid: true, type: "no-styles" });
      return;
    }

    // execute the mutation with the form data
    try {
      createLevel({
        name: levelName,
        author: user.name,
        bridgeProperties: propertiesBridge,
        bridgeValues: valuesBridge,
        containerProperties: propertiesContainer,
        containerValues: valuesContainer,
        allowedList,
        deniedList,
        numberOfInputs: maximumNumber,
        description,
      });
    } catch (error) {
      console.log("Error while creating the level:", err.message);
    }
  };
  return (
    <>
      <input type="submit" value="set" onClick={handleCreateLevel} />
      {errorMessage.invalid ? <ErrorBuilding type={errorMessage.type} /> : ""}
    </>
  );
};

export default BuildingFormSubmit;
