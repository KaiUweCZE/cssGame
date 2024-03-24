import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
} from "graphql";
import { User } from "./User.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { Level } from "./Level.js";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    level: { type: GraphQLInt },
  },
});

const AuthPayloadType = new GraphQLObjectType({
  name: "AuthPayload",
  fields: {
    token: { type: GraphQLString },
    user: { type: UserType },
  },
});

const LevelType = new GraphQLObjectType({
  name: "Level",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    bridgeProperties: { type: new GraphQLList(GraphQLString) },
    bridgeValues: { type: new GraphQLList(GraphQLString) },
    containerProperties: { type: new GraphQLList(GraphQLString) },
    containerValues: { type: new GraphQLList(GraphQLString) },
    allowedList: { type: new GraphQLList(GraphQLString) },
    deniedList: { type: new GraphQLList(GraphQLString) },
    numberOfInputs: { type: GraphQLInt },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: (root, args) => {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return User.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const hashedPassword = bcryptjs.hashSync(args.password, 10);
        const user = new User({
          name: args.name,
          email: args.email,
          password: hashedPassword,
        });
        return user.save();
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return User.findByIdAndDelete(args.id);
      },
    },
    loginUser: {
      type: AuthPayloadType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const user = await User.findOne({ name: args.name });
        if (!user) throw new Error("User does not exist");
        const isValidPassword = bcryptjs.compareSync(
          args.password,
          user.password
        );
        if (!isValidPassword) throw new Error("Password does not match");
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        if (!user) {
          throw new Error("Invalid credentials");
        }
        return { token, user };
      },
    },
    increaseLevel: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        level: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        const user = await User.findById(args.id);
        if (!user) {
          throw new Error("User not found");
        } else {
          user.level = args.level;
          await user.save();
          return user;
        }
      },
    },
    createLevel: {
      type: LevelType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        bridgeProperties: { type: new GraphQLList(GraphQLString) },
        bridgeValues: { type: new GraphQLList(GraphQLString) },
        containerProperties: { type: new GraphQLList(GraphQLString) },
        containerValues: { type: new GraphQLList(GraphQLString) },
        allowedList: { type: new GraphQLList(GraphQLString) },
        deniedList: { type: new GraphQLList(GraphQLString) },
        numberOfInputs: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        const level = new Level({
          name: args.name,
          author: args.author,
          bridgeProperties: args.bridgeProperties,
          bridgeValues: args.bridgeValues,
          containerProperties: args.containerProperties,
          containerValues: args.containerValues,
          allowedList: args.allowedList,
          deniedList: args.deniedList,
          numberOfInputs: args.numberOfInputs,
        });
        return level.save();
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
