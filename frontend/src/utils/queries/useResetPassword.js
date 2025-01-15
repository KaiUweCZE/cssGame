import { gql, useMutation } from "@apollo/client";

export const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation SendResetPasswordEmail($email: String!, $token: String!) {
    sendResetPasswordEmail(email: $email, token: $token) {
      success
      message
    }
  }
`;

export const useResetPassword = () => {
  const [sendEmail, { loading, error, data }] = useMutation(
    SEND_RESET_PASSWORD_EMAIL
  );

  const handleSendEmail = async (email, token) => {
    try {
      const response = await sendEmail({ variables: { email, token } });
      return response.data.sendResetPasswordEmail;
    } catch (error) {
      console.error("An error occurs", error);
      throw error;
    }
  };

  return {
    handleSendEmail,
    loading,
    error,
    data,
  };
};
