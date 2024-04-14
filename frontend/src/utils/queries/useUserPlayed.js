import { gql, useMutation } from "@apollo/client";

const PLAYED_LEVEL = gql`
  mutation LevelPlayed($levelId: ID!, $userId: ID!) {
    levelPlayed(levelId: $levelId, userId: $userId) {
      id
      usersPlayed
      usersCount
    }
  }
`;

export const useUserPlayed = () => {
  const [playedLevelMutation, { error, loading, data }] =
    useMutation(PLAYED_LEVEL);

  const playedLevel = async (levelId, userId) => {
    try {
      const response = await playedLevelMutation({
        variables: { levelId, userId },
      });
      return response.data.levelPlayed;
    } catch (error) {
      console.error("Error playing the level:", error);
      throw new Error("Failed to play level: " + error.message);
    }
  };
  return {
    playedLevel,
    error,
    loading,
    data,
  };
};
