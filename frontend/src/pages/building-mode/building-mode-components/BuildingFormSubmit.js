import React, { useContext, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { BuildingFormContext } from "@contexts/building-contexts/buildingForm";
import { RestrictionContext } from "@contexts/building-contexts/restrictionContext";
import { UserContext } from "../../../contexts/UserContext";

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
    $description: String
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
      description: $description
    ) {
      id
    }
  }
`;
const BuildingFormSubmit = () => {
  const [createLevel, { data, loading, error }] = useMutation(CREATE_LEVEL);
  const { user } = useContext(UserContext);
  const {
    maximumNumber,
    description,
    levelName,
    propertiesContainer,
    valuesContainer,
    propertiesBridge,
    valuesBridge,
  } = useContext(BuildingFormContext);
  const { allowedList, deniedList } = useContext(RestrictionContext);

  useEffect(() => {
    console.log(user.name, description);
  }, [user, description]);
  // createUser({ variables: {name: username, email: email, password: password}})
  const handleCreateLevel = (e) => {
    e.preventDefault();
    createLevel({
      variables: {
        name: levelName,
        author: user.name,
        bridgeProperties: propertiesBridge,
        bridgeValues: valuesBridge,
        containerProperties: propertiesContainer,
        containerValues: valuesContainer,
        allowedList: allowedList,
        deniedList: deniedList,
        numberOfInputs: maximumNumber,
        description: description,
      },
    })
      .then(() => console.log("Level is set"))
      .catch((err) => {
        console.error(err);
        console.log(levelName, propertiesContainer, description);
      });
  };
  return <input type="submit" value="set" onClick={handleCreateLevel} />;
};

export default BuildingFormSubmit;
