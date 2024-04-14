import { gql, useQuery } from "@apollo/client";

const GET_LEVEL = gql`
  query GetLevel($id: ID!) {
    level(id: $id) {
      id
      bridgeValues
      bridgeProperties
      containerValues
      containerProperties
      allowedList
      deniedList
      numberOfInputs
    }
  }
`;

export const useGetLevel = (id) => {
  const { loading, error, data } = useQuery(GET_LEVEL, { variables: { id } });

  return { loading, error, data };
};
