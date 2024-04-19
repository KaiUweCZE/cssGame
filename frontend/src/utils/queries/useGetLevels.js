import { gql, useQuery } from "@apollo/client";

const GET_LEVELS = gql`
  query GetLevels {
    levels {
      id
      name
      author
      bridgeProperties
      containerProperties
      allowedList
      deniedList
      description
      likes
      likeCount
      finish
      usersPlayed
      usersCount
    }
  }
`;

export const useGetLevels = () => {
  const { data, error, loading } = useQuery(GET_LEVELS);

  return { levels: data?.levels, error, loading };
};
