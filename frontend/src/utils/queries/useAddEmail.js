import { gql, useMutation } from "@apollo/client";

export const ADD_EMAIL = gql`
  mutation AddEmail($userId: ID!, $email: String!) {
    addEmail(userId: $userId, email: $email) {
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

export const useAddEmail = () => {
  const [addEmail, { data, loading, error }] = useMutation(ADD_EMAIL);

  const handleAddEmail = async (userId, email) => {
    console.log(userId, email);

    try {
      const response = await addEmail({
        variables: { userId, email },
      });

      console.log(response, userId, email);

      if (!response || !response.data) {
        throw new Error("No response from server");
      }

      if (response.errors) {
        const errorMessage = response.errors[0]?.message;
        throw new Error(errorMessage || "GraphQL error occurred");
      }

      const result = response.data.addEmail;

      if (!result.success) {
        throw new Error(
          response.data.addEmail.message || "Failed to add email"
        );
      }

      return response.data.addEmail;
    } catch (error) {
      console.error("Error adding email:", error);
      throw error;
    }
  };

  return {
    addEmail: handleAddEmail,
    data,
    loading,
    error,
  };
};
