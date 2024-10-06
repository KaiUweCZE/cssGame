import { gql } from "@apollo/client";

export const SEND_CONFIRMATION_EMAIL = gql`
  mutation SendConfirmationEmail($email: String!, $token: String!) {
    sendConfirmationEmail(email: $email, token: $token) {
      success
      message
    }
  }
`;
