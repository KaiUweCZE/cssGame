import { gql, useMutation } from "@apollo/client";

const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
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

const useVerification = () => {
  const [verifyUser, { loading, error, data }] = useMutation(VERIFY_USER);

  const handleVerifyUser = async (token) => {
    try {
      const response = await verifyUser({
        variables: { token },
      });

      if (response.data?.verifyUser?.success) {
        console.log("User verified successfully");
        return response.data.verifyUser;
      } else {
        console.error(
          "User verification failed:",
          response.data?.verifyUser?.message || "Unknown error"
        );
        throw new Error(
          response.data?.verifyUser?.message || "Verification failed"
        );
      }
    } catch (err) {
      console.error("Error during user verification:", err);
      if (err.networkError) {
        console.error("Network error:", err.networkError);
      }
      if (err.graphQLErrors) {
        console.error("GraphQL errors:", err.graphQLErrors);
      }
      throw err;
    }
  };

  return {
    handleVerifyUser,
    loading,
    error,
    data,
  };
};

export default useVerification;
