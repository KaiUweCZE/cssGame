import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} from "graphql";
import { VerificationToken } from "../VerificationToken.js";
import { User } from "../User.js";
import { createVerificationToken } from "../services/tokenService.js";

const TokenType = new GraphQLObjectType({
  name: "Token",
  fields: {
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    token: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});

const TokenResponseType = new GraphQLObjectType({
  name: "TokenResponse",
  fields: {
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    token: { type: TokenType },
  },
});

export const tokenMutations = {
  createToken: {
    type: TokenResponseType,
    args: {
      userId: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_, { userId }) => {
      console.log("Received createToken request for userId:", userId);
      try {
        const user = await User.findById(userId);
        if (!user) {
          console.log("User not found for userId:", userId);
          return { success: false, message: "User not found" };
        }
        console.log("User found:", user);

        const token = await createVerificationToken(userId);
        console.log("Token created:", token);
        return {
          success: true,
          message: "Token created successfully",
          token: token,
        };
      } catch (error) {
        console.error("Error in createToken resolver:", error);
        return { success: false, message: "Failed to create token" };
      }
    },
  },
};

export const tokenQueries = {
  getTokens: {
    type: new GraphQLList(TokenType),
    args: {
      userId: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_, { userId }) => {
      try {
        const tokens = await VerificationToken.find({ userId });
        return tokens;
      } catch (error) {
        console.error("Error fetching tokens:", error);
        throw new Error("Failed to fetch tokens");
      }
    },
  },
  getAllTokens: {
    type: new GraphQLList(TokenType),
    resolve: async () => {
      try {
        const tokens = await VerificationToken.find();
        return tokens;
      } catch (error) {
        console.error("Error fetching tokens:", error);
        throw new Error("Failed to fetch tokens");
      }
    },
  },
};
