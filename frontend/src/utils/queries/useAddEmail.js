import { gql, useMutation } from "@apollo/client";

export const ADD_EMAIL = gql`
  mutation AddEmail($userId: ID!, $email: String!) {
    addEmail(userId: $userId, email: $email) {
      id
      email
      emailVerified
    }
  }
`;

export const useAddEmail = () => {
  const [addEmail, { data, loading, error }] = useMutation(ADD_EMAIL);

  const handleAddEmail = async (userId, email) => {
    try {
      const response = await addEmail({ variables: { userId, email } });
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
