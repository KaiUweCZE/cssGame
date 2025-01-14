import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";

const REMOVE_EMAIL = gql`
  mutation RemoveEmail($userId: ID!) {
    removeEmail(userId: $userId) {
      success
      message
      user {
        id
        email
        emailVerified
      }
    }
  }
`;

export const useRemoveEmail = () => {
  const [removeEmailMutation, { loading }] = useMutation(REMOVE_EMAIL);

  const removeEmail = useCallback(async (userId) => {
    try {
      const { data } = await removeEmailMutation({
        variables: { userId },
      });

      if (!data.removeEmail.success) {
        throw new Error(data.removeEmail.message);
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || "An unexpected error occurred",
      };
    }
  }, [removeEmailMutation]);

  return {
    removeEmail,
    loading,
  };
};
