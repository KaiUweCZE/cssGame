import { gql, useMutation } from "@apollo/client";

const ADD_PLAYED_LEVEL = gql`
  mutation AddLevelPlayed($userId: ID!, $levelId: ID!) {
    addLevelPlayed(userId: $userId, levelId: $levelId) {
      name
      levelsPlayed
      level
    }
  }
`;

const useAddPlayedLevel = () => {
  const [addPlayedLevel, { data, loading, error }] =
    useMutation(ADD_PLAYED_LEVEL);

  const handleAddPlayedLevel = async (userId, levelId) => {
    try {
      const response = await addPlayedLevel({
        variables: { userId, levelId },
      });
      return response.data.addPlayedLevel;
    } catch (err) {
      console.error("Error adding played level:", err);
      throw err;
    }
  };
  return {
    handleAddPlayedLevel,
    data,
    loading,
    error,
  };
};

export default useAddPlayedLevel;
