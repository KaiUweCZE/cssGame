import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from "graphql";
import { sendConfirmationEmail, sendResetPasswordEmail } from "../services/emailService.js";

const EmailResponseType = new GraphQLObjectType({
  name: "EmailResponse",
  fields: {
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  },
});

export const emailMutations = {
  sendConfirmationEmail: {
    type: EmailResponseType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      token: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, { email, token }) => {
      try {
        const result = await sendConfirmationEmail(email, token);
        return {
          success: result.success,
          message: result.success ? "Email sent successfully" : result.error,
        };
      } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email" };
      }
    },
  },
  sendResetPasswordEmail: {
    type: EmailResponseType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      token: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, { email, token }) => {
      try {
        const result = await sendResetPasswordEmail(email, token);
        return {
          success: result.success,
          message: result.success ? "Email sent successfully" : result.error,
        };
      } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email" };
      }
    },
  },
};
