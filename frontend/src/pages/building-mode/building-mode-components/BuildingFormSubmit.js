import React, { useContext, useEffect, useState } from "react";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { RestrictionContext } from "@contexts/building-contexts/restrictionContext";
import { UserContext } from "../../../contexts/UserContext";
import ErrorBuilding from "./ErrorBuilding";
import { useCreateLevel } from "@utils/queries/useCreateLevel";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import { list } from "@data/listOfProperities";
import { useGetLevels } from "@utils/queries/useGetLevels";
import { arraysEqual } from "@utils/arraysEqual";
import { Save, Verified } from "lucide-react";

// submit input for handling the creation of a new level
const BuildingFormSubmit = () => {
  const { levels } = useGetLevels();
  const [disable, setDisable] = useState(false);
  const [duplicateName, setDuplicateName] = useState("");
  const [levelNames, setLevelNames] = useState([""]);
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
    originPropertiesContainer,
    originValuesContainer,
    originPropertiesBridge,
    originValuesBridge,
  } = useContext(BuildingFormContext);

  const { result } = useContext(customCommonContext);

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
    if (levels) {
      setLevelNames(levels.map((level) => level.name));
      console.log("levels: ", levelNames);
    }
  }, [levels]);

  // form submission handler
  const handleCreateLevel = (e) => {
    e.preventDefault();

    // validate level name input
    if (!levelName) {
      console.log("Level name is required");
      setErrorMessage({ invalid: true, type: "no-name" });
      return;
    }

    // validate if level name is unique
    if (levelNames.includes(levelName)) {
      console.log("This level name exists");
      setErrorMessage({ invalid: true, type: "duplicite-name" });
      return;
    }

    // check if at least one style element has been filled in inputs
    const hasBridgeData =
      (originPropertiesBridge.length > 1 && originValuesBridge.length > 1) ||
      (originPropertiesBridge[0] !== "" && originValuesBridge[0] !== "");
    const hasContainerData =
      (originPropertiesContainer.length > 1 &&
        originValuesContainer.length > 1) ||
      (originPropertiesContainer[0] !== "" && originValuesContainer[0] !== "");

    const correctBridge = originPropertiesBridge.every(
      (e) => list.includes(e) || e === ""
    );
    const correctContainer = originPropertiesContainer.every(
      (e) => list.includes(e) || e === ""
    );

    const duplicate = levels.find((level) => {
      const isBridgeDuplicate = arraysEqual(
        originPropertiesBridge,
        level.bridgeProperties
      );
      const isContainerDuplicate = arraysEqual(
        originPropertiesContainer,
        level.containerProperties
      );
      const isAllowedDuplicate = arraysEqual(allowedList, level.allowedList);
      const isDeniedDuplicate = arraysEqual(deniedList, level.deniedList);

      return (
        isBridgeDuplicate &&
        isContainerDuplicate &&
        isAllowedDuplicate &&
        isDeniedDuplicate
      );
    });

    if (duplicate) {
      console.log("An identical level configuration exists");
      setDuplicateName(duplicate.name);
      setErrorMessage({ invalid: true, type: "duplicate-properties" });
      return;
    }

    // validate if there are any styles
    if (!hasBridgeData && !hasContainerData) {
      console.log("You have to style at least one of element");
      setErrorMessage({ invalid: true, type: "no-styles" });
      return;
    }

    // validate if css properties are valide
    if (!correctBridge || !correctContainer) {
      console.log("Invalid css properties", correctBridge, correctContainer);
      setErrorMessage({ invalid: true, type: "invalid" });
      return;
    }

    // validate if the author solved the level
    if (!result) {
      console.log("You must prove that the level is solvable");
      setErrorMessage({ invalid: true, type: "result-false" });
      return;
    }

    // execute the mutation with the form data
    if (result && (hasBridgeData || hasContainerData) && levelName) {
      try {
        createLevel({
          name: levelName,
          author: user.name,
          bridgeProperties: originPropertiesBridge,
          bridgeValues: originValuesBridge,
          containerProperties: originPropertiesContainer,
          containerValues: originValuesContainer,
          allowedList,
          deniedList,
          numberOfInputs: maximumNumber,
          description,
        });
        setErrorMessage({
          invalid: false,
          type: "done",
        });
        setDisable(true);
      } catch (error) {
        console.log("Error while creating the level:", error.message);
      }
    }
  };
  return (
    <>
      <button
        className="building-button"
        type="submit"
        disabled={disable}
        onClick={handleCreateLevel}
        aria-label={
          errorMessage.type === "done"
            ? "Level saved successfully"
            : "Save level"
        }
        aria-disabled={disable}
        aria-busy={loading}
      >
        {errorMessage.type === "done" ? (
          <Verified color="#69c972" aria-hidden="true" />
        ) : (
          <Save color="white" aria-hidden="true" />
        )}{" "}
        <span>Save Level</span>
      </button>

      {errorMessage.invalid ? (
        <ErrorBuilding type={errorMessage.type} duplicate={duplicateName} />
      ) : (
        errorMessage.type === "done" && (
          <span className="correct-level" role="status" aria-live="polite">
            Level is created
          </span>
        )
      )}
    </>
  );
};

export default BuildingFormSubmit;
