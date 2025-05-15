import { gql, useMutation } from "@apollo/client";

import { GET_LEVELS } from "@/pages/database/Database";

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

export const useCreateLevel = () => {
  const [createLevelMutation, { data, loading, error }] = useMutation(
    CREATE_LEVEL,
    {
      refetchQueries: [{ query: GET_LEVELS }],
    }
  );

  const createLevel = async ({
    name,
    author,
    bridgeProperties,
    bridgeValues,
    containerProperties,
    containerValues,
    allowedList,
    deniedList,
    numberOfInputs,
    description,
  }) => {
    try {
      const response = await createLevelMutation({
        variables: {
          name,
          author,
          bridgeProperties,
          bridgeValues,
          containerProperties,
          containerValues,
          allowedList,
          deniedList,
          numberOfInputs,
          description,
        },
      });
      console.log("Level created with ID:", response.data.createLevel.id);
      return response.data.createLevel;
    } catch (err) {
      console.error("Error in creating level:", err);
      throw new Error("Failed to create level");
    }
  };

  return { createLevel, data, loading, error };
};
