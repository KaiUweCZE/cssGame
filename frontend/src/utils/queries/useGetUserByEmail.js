import { gql, useLazyQuery } from "@apollo/client";

const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      id
      email
    }
  }
`;

export const useGetUserByEmail = () => {
  const [getUserByEmail] = useLazyQuery(GET_USER_BY_EMAIL);

  const handleGetUserByEmail = async (email) => {
    try {
      console.log("Attempting to get user by email:", email);
      const { data, error } = await getUserByEmail({ variables: { email } });
      
      if (error) {
        console.error("GraphQL error:", error);
        return null;
      }
      
      console.log("GetUserByEmail response:", data);
      
      if (!data?.getUserByEmail) {
        console.log("No user found with email:", email);
        return null;
      }

      return data.getUserByEmail.id;
    } catch (error) {
      console.error("Error getting user by email:", error);
      return null;
    }
  };

  return { handleGetUserByEmail };
};
