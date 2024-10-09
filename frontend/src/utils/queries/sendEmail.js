import { gql, useMutation } from "@apollo/client";

export const SEND_CONFIRMATION_EMAIL = gql`
  mutation SendConfirmationEmail($email: String!, $token: String!) {
    sendConfirmationEmail(email: $email, token: $token) {
      success
      message
    }
  }
`;

export const useSendEmail = () => {
  const [sendEmail, { loading, error, data }] = useMutation(
    SEND_CONFIRMATION_EMAIL
  );

  const handleSendEmail = async (email, token) => {
    try {
      const response = await sendEmail({ variables: { email, token } });
      return response.data.sendConfirmationEmail;
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
