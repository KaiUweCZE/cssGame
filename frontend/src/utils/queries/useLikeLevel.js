import { gql, useMutation } from "@apollo/client";

const LIKE_LEVEL = gql`
  mutation LikeLevel($levelId: ID!, $userId: ID!) {
    likeLevel(levelId: $levelId, userId: $userId) {
      id
      likes
      likeCount
    }
  }
`;

export const useLikeLevel = () => {
  const [likeLevelMutation, { error, loading, data }] = useMutation(LIKE_LEVEL);

  const likeLevel = async (levelId, userId) => {
    try {
      const respons = await likeLevelMutation({
        variables: { levelId, userId },
      });
      console.log("like přidán");
      return respons.data.likeLevel;
    } catch (err) {
      console.error("Error liking the level", err);
    }
  };

  return { likeLevel, error, loading, data };
};
