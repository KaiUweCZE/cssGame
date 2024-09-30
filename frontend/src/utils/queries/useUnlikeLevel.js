import { gql, useMutation } from "@apollo/client";

const UNLIKE_LEVEL = gql`
  mutation UnlikeLevel($levelId: ID!, $userId: ID!) {
    unlikeLevel(levelId: $levelId, userId: $userId) {
      id
      likes
      likeCount
    }
  }
`;

export const useUnlikeLevel = () => {
  const [unlikeLevelMutation, { error, loading, data }] =
    useMutation(UNLIKE_LEVEL);

  const unlikeLevel = async (levelId, userId) => {
    try {
      const respons = await unlikeLevelMutation({
        variables: { levelId, userId },
      });
      return respons.data.unlikeLevel;
    } catch (err) {
      console.error("Error unliking the level", err);
    }
  };

  return { unlikeLevel, error, loading, data };
};
