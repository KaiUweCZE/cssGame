import { gql, useMutation } from "@apollo/client";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const COMPLETE_LEVEL = gql`
  mutation CompleteLevel($id: ID!, $levelId: ID!) {
    completeLevel(id: $id, levelId: $levelId) {
      user {
        id
        completedLevels
      }
      level {
        id
        finish
      }
    }
  }
`;

const useCompletedLevel = () => {
  const [completeLevelMutation, { error, loading }] =
    useMutation(COMPLETE_LEVEL);
  const { user, setUser } = useContext(UserContext);

  const completeLevel = async (userId, levelId) => {
    try {
      if (user.completedLevels && !user.completedLevels.includes(levelId)) {
        const response = await completeLevelMutation({
          variables: { id: userId, levelId: levelId },
        });
        if (response && response.data.completeLevel) {
          const updatedUser = {
            ...user,
            completedLevels: [...(user.completedLevels || []), levelId],
          };
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));
        }
      } else {
        console.log("Level ID already completed");
      }
    } catch (err) {
      console.error("Error in completeLevel mutation:", err);
    }
  };

  return {
    completeLevel,
    error,
    loading,
  };
};

export default useCompletedLevel;
