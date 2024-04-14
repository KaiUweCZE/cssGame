import { gql, useQuery } from "@apollo/client";

const GET_LEVELS = gql`
  query GetLevels {
    levels {
      id
      name
      author
      bridgeProperties
      containerProperties
      description
      likes
      likeCount
      finish
      usersPlayed
      usersCount
    }
  }
`;

const useGetLevels = () => {
  const { data, error, loading } = useQuery(GET_LEVELS);

  return { data, error, loading };
};
