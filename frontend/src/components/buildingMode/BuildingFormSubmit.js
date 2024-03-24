import React, { useContext } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  BuildingFormContext,
  RestrictionContext,
} from "../../contexts/BuildingContexts";

const CREATE_LEVEL = gql`
  mutation CreateLevel(
    $name: String!
    $author: String!
    $bridgeProperties: [String]
    $bridgeValues: [String]
    $containerProperties: [String]
    $containerValues: [String]
    $allowedList: [String]
    $deniedList: [String]
    $numberOfInputs: Int
  ) {
    createLevel(
      name: $name
      author: $author
      bridgeProperties: $bridgeProperties
      bridgeValues: $bridgeValues
      containerProperties: $containerProperties
      containerValues: $containerValues
      allowedList: $allowedList
      deniedList: $deniedList
      numberOfInputs: $numberOfInputs
    ) {
      id
    }
  }
`;
const BuildingFormSubmit = () => {
  const [createLevel, { data, loading, error }] = useMutation(CREATE_LEVEL);
  const {
    propertiesContainer,
    valuesContainer,
    propertiesBridge,
    valuesBridge,
  } = useContext(BuildingFormContext);
  const { allowedList, deniedList } = useContext(RestrictionContext);

  // createUser({ variables: {name: username, email: email, password: password}})
  const handleCreateLevel = (e) => {
    e.preventDefault();
    createLevel({
      variables: {
        name: "LevelFromAmin",
        author: "admin",
        bridgeProperties: propertiesBridge,
        bridgeValues: valuesBridge,
        containerProperties: propertiesContainer,
        containerValues: valuesContainer,
        allowedList: allowedList,
        deniedList: deniedList,
        numberOfInputs: 3,
      },
    })
      .then(() => console.log("Level is set"))
      .catch((err) => {
        console.error(err);
        console.log(propertiesContainer);
      });
  };
  return <input type="submit" value="set" onClick={handleCreateLevel} />;
};

export default BuildingFormSubmit;
