import { gql, useQuery } from "@apollo/client";

const GET_USERS_LEVELS = gql`
  query GetUsersLevels($userName: String!) {
    getUsersLevels(userName: $userName) {
      id
      name
      author
      description
      finish
      likeCount
      usersCount
    }
  }
`;
const useGetUsersLevels = (userName) => {
  const { data, loading, error, refetch } = useQuery(GET_USERS_LEVELS, {
    variables: { userName },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  console.log("function obtain user: ", userName);

  return {
    levels: data?.getUsersLevels || [],
    loading,
    error,
    isEmpty:
      !loading && (!data?.getUsersLevels || data.getUsersLevels.length === 0),
    isError: !!error,
    refetch,
  };
};

export default useGetUsersLevels;
