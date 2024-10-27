import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      levelsPlayed
      completedLevels
    }
  }
`;

const GET_LEVELS_DETAILS = gql`
  query GetLevelsDetails($levelIds: [ID!]!) {
    getLevelsDetails(levelIds: $levelIds) {
      id
      name
      author
      description
      likeCount
      usersCount
    }
  }
`;

const useGetPlayedLevels = (userId) => {
  // get completed levels and played levles from user data
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, {
    variables: { userId },
  });

  // get level details from levelIds
  const {
    data: levelsData,
    loading: levelsLoading,
    error: levelsError,
  } = useQuery(GET_LEVELS_DETAILS, {
    variables: {
      levelIds: userData?.user?.levelsPlayed || [],
    },
    skip:
      !userData?.user?.levelsPlayed || userData.user.levelsPlayed.length === 0,
  });

  return {
    user: userData?.user,
    levels: levelsData?.getLevelsDetails || [],
    loading: userLoading || levelsLoading,
    error: userError || levelsError,
  };
};

export default useGetPlayedLevels;
