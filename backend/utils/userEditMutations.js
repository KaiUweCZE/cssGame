import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { User } from "../User.js";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    emailVerified: { type: GraphQLBoolean },
    password: { type: GraphQLString },
    level: { type: GraphQLInt },
    completedLevels: { type: new GraphQLList(GraphQLString) },
  },
});

export const userEdit = {
  addEmail: {
    type: UserType,
    args: {
      userId: { type: new GraphQLNonNull(GraphQLID) },
      email: { type: new GraphQLList(GraphQLString) },
    },
    resolve: async (_, { userId, email }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("Email already in use");
        }
        const user = await User.findById(userId);
        if (!user) {
          console.log("User not found for userId:", userId);
          return { success: false, message: "User not found" };
        }
        console.log("User found:", user);
        user.email = email;

        await user.save();
        return user;
      } catch (error) {
        console.error("Error in addEmail resolver:", error);
        return { success: false, message: "Failed to add email" };
      }
    },
  },
};
