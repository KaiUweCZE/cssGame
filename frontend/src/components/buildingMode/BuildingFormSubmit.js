import React from "react";
import { useMutation, gql } from "@apollo/client";

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
      containerProperites: $containerProperties
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
  return <input type="submit" value="set" />;
};

export default BuildingFormSubmit;
