import { gql, useMutation } from "@apollo/client";

export const CREATE_VERIFICATION_TOKEN = gql`
  mutation CreateToken($userId: ID!) {
    createToken(userId: $userId) {
      success
      message
      token {
        id
        userId
        token
        createdAt
      }
    }
  }
`;

export const useCreateToken = () => {
  const [createToken, { data, error, loading }] = useMutation(
    CREATE_VERIFICATION_TOKEN
  );

  const handleCreateToken = async (userId) => {
    try {
      const response = await createToken({ variables: { userId } });
      return response.data.createToken;
    } catch (error) {
      console.error("Error creating token:", error);
      throw error;
    }
  };

  return {
    createToken: handleCreateToken,
    data,
    error,
    loading,
  };
};
