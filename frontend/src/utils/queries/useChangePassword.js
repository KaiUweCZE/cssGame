import { gql, useMutation } from "@apollo/client";

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($userId: ID!, $password: String!) {
    changePassword(userId: $userId, password: $password) {
      success
      message
      user {
        id
        name
      }
    }
  }
`;

export const useChangePassword = () => {
  const [changePassword, { error, data, loading }] =
    useMutation(CHANGE_PASSWORD);

  const handleChangePassword = async (userId, password) => {
    try {
      const response = await changePassword({
        variables: { userId: userId, password },
      });

      if (response.data && response.data.changePassword) {
        return response.data.changePassword;
      } else {
        console.error("Unexpected response structure:", response);
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      if (error.graphQLErrors) {
        console.error("GraphQL errors:", error.graphQLErrors);
      }
      if (error.networkError) {
        console.error("Network error:", error.networkError);
      }
      throw error;
    }
  };

  return {
    handleChangePassword,
    error,
    loading,
    data,
  };
};
