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
import { Level } from "./Level.js";
import { Message } from "./Message.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { emailMutations } from "./emailSchema/emailSchema.js";
import { tokenMutations, tokenQueries } from "./tokenSchema/tokenSchema.js";
import { VerificationToken } from "./VerificationToken.js";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    emailVerified: { type: GraphQLBoolean },
    password: { type: GraphQLString },
    level: { type: GraphQLInt },
    levelsPlayed: { type: new GraphQLList(GraphQLString) },
    completedLevels: { type: new GraphQLList(GraphQLString) },
  },
});

const ResponseType = new GraphQLObjectType({
  name: "Response",
  fields: {
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    user: { type: UserType },
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
    description: { type: GraphQLString },
    likes: { type: new GraphQLList(GraphQLString) },
    likeCount: { type: GraphQLInt },
    finish: { type: GraphQLInt },
    usersPlayed: { type: new GraphQLList(GraphQLString) },
    usersCount: { type: GraphQLInt },
  }),
});

const MessageType = new GraphQLObjectType({
  name: "MessageType",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (message) => message.id.toString(),
    },
    author: {
      type: UserType,
      resolve: async (message) => {
        const user = await User.findById(message.author);
        return user
          ? {
              ...user.toObject(),
              id: user._id.toString(),
            }
          : null;
      },
    },
    subject: { type: GraphQLString },
    text: { type: GraphQLString },
    images: { type: new GraphQLList(GraphQLString) },
  }),
});

const UserAndLevelType = new GraphQLObjectType({
  name: "UserAndLevelType",
  fields: {
    user: { type: UserType },
    level: { type: LevelType },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...tokenQueries,
    users: {
      type: new GraphQLList(UserType),
      resolve: (root, args) => {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        let user = await User.findById(args.id);
        if (!user.completedLevels) {
          user.completedLevels = [];
          await user.save();
        }
        return user;
      },
    },
    getLevelsDetails: {
      type: new GraphQLList(LevelType),
      args: {
        levelIds: { type: GraphQLList(new GraphQLNonNull(GraphQLID)) },
      },
      resolve: async (parent, args) => {
        try {
          const levels = await Level.find({
            _id: { $in: args.levelIds },
          });

          return levels;
        } catch (err) {
          console.error("Error fetching levels:", err);
          throw new Error("Error fetching levels: " + err.message);
        }
      },
    },
    levels: {
      type: new GraphQLList(LevelType),
      resolve: (root, args) => {
        return Level.find();
      },
    },
    level: {
      type: LevelType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return Level.findById(args.id);
      },
    },
    getUsersLevels: {
      type: new GraphQLList(LevelType),
      args: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, { userName }) => {
        try {
          const levels = await Level.find({ author: userName });
          if (!levels || levels.length === 0) {
            return [];
          }

          return levels;
        } catch (error) {
          console.error("An Error while getting levels: ", error);
          throw new Error("Levels does not exist.");
        }
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...emailMutations,
    ...tokenMutations,
    createUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const hashedPassword = bcryptjs.hashSync(args.password, 10);
        const userData = {
          name: args.name,
          password: hashedPassword,
          emailVerified: false,
        };

        if (args.email) {
          userData.email = args.email;
        }

        const user = new User(userData);
        try {
          const savedUser = await user.save();
          return savedUser;
        } catch (error) {
          console.error("Error creating user:", error);
          throw new Error("Failed to create user: " + error.message);
        }
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
    addEmail: {
      type: ResponseType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLString },
      },
      resolve: async (_, { userId, email }) => {
        try {
          const existingEmail = await User.findOne({ email });
          if (existingEmail) {
            return {
              user: null,
              success: false,
              message: "Email is already use",
            };
          }

          const user = await User.findById(userId);
          if (!user) {
            console.log("User not found for userId:", userId);
            return { user: null, success: false, message: "User not found" };
          }

          if (user.email) {
            return {
              user: null,
              success: false,
              message: "User has email already",
            };
          }
          console.log("User found:", user.name);
          user.email = email;
          await user.save();

          return { user, success: true, message: "Email successfully added" };
        } catch (error) {
          console.error("Error in addEmail resolver:", error);
          return { user: null, success: false, message: "Failed to add email" };
        }
      },
    },
    changePassword: {
      type: ResponseType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, { userId, password }) => {
        try {
          const user = await User.findById(userId);
          if (!user) {
            return { success: false, message: "User not found" };
          }

          const hashedPassword = await bcryptjs.hash(password, 10);
          user.password = hashedPassword;
          await user.save();

          return {
            success: true,
            message: "Password changed successfully",
            user,
          };
        } catch (error) {
          console.error("Error changing password:", error);
          return {
            success: false,
            message: "An error occurred while changing the password",
            user: null,
          };
        }
      },
    },
    verifyUser: {
      type: ResponseType,
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, { token }) => {
        console.log("Received verifyUser request for token:", token);
        try {
          const verificationToken = await VerificationToken.findOne({ token });
          if (!verificationToken) {
            return { success: false, message: "Invalid token" };
          }

          if (verificationToken.expiresAt < new Date()) {
            return { success: false, message: "Token has expired" };
          }

          const user = await User.findByIdAndUpdate(
            verificationToken.userId,
            { emailVerified: true },
            { new: true }
          );

          if (!user) {
            return { success: false, message: "User not found" };
          }

          await VerificationToken.deleteOne({ _id: verificationToken._id });

          console.log("User verified successfully:", user);
          return {
            success: true,
            message: "Email verified successfully",
            user: user,
          };
        } catch (error) {
          console.error("Error in verifyUser resolver:", error);
          return { success: false, message: "Failed to verify email" };
        }
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
        description: { type: GraphQLString },
        likes: { type: new GraphQLList(GraphQLString) },
        likeCount: { type: GraphQLInt },
        finish: { type: GraphQLInt },
        usersPlayed: { type: new GraphQLList(GraphQLString) },
        usersCount: { type: GraphQLInt },
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
          description: args.description,
          likes: args.likes,
          likeCount: args.likeCount,
          finish: args.finish,
          usersPlayed: args.usersPlayed,
          usersCount: args.usersCount,
        });
        return level.save();
      },
    },
    editDescription: {
      type: LevelType,
      args: {
        levelId: { type: new GraphQLNonNull(GraphQLID) },
        userName: { type: new GraphQLNonNull(GraphQLString) },
        newDescription: { type: GraphQLString },
      },
      resolve: async (parent, { levelId, userName, newDescription }) => {
        try {
          const level = await Level.findById(levelId);

          if (!level) {
            throw new Error("Level not found");
          }

          if (userName !== level.author) {
            throw new Error(
              "Unauthorized user - only author can edit this level"
            );
          }

          const updatedLevel = await Level.findByIdAndUpdate(
            levelId,
            { description: newDescription },
            { new: true }
          );
          return updatedLevel;
        } catch (error) {
          throw new Error("An error occured during editation.");
        }
      },
    },
    deleteLevel: {
      type: LevelType,
      args: {
        levelId: { type: new GraphQLNonNull(GraphQLID) },
        levelName: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, { levelId, levelName }) => {
        /*if (!context.userId) {
          throw new Error("Authentication required");
        }*/

        console.log("Delete level attempt:", {
          levelId,
          levelName,
          //userId: context.userId,
          timestamp: new Date().toISOString(),
        });

        try {
          if (!levelId.match(/^[0-9a-fA-F]{24}$/)) {
            throw new Error("Invalid level ID format");
          }

          const level = await Level.findById(levelId);

          if (!level) {
            throw new Error("Level not found");
          }

          if (level.name !== levelName) {
            throw new Error("Level name does not match");
          }

          /*if (level.createdBy.toString() !== context.userId) {
            throw new Error(
              "Unauthorized - you can only delete your own levels"
            );
          }*/

          const deletedLevel = await Level.findByIdAndDelete(levelId);
          return deletedLevel;
        } catch (err) {
          throw new Error(
            err.message || "An error occurred while deleting the level"
          );
        }
      },
    },
    likeLevel: {
      type: LevelType,
      args: {
        levelId: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, { levelId, userId }) => {
        const level = await Level.findByIdAndUpdate(
          levelId,
          {
            $addToSet: { likes: userId },
            $inc: { likeCount: 1 },
          },
          { new: true }
        );
        return level;
      },
    },
    unlikeLevel: {
      type: LevelType,
      args: {
        levelId: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, { levelId, userId }) => {
        return Level.findByIdAndUpdate(
          levelId,
          { $pull: { likes: userId }, $inc: { likeCount: -1 } },
          { new: true }
        );
      },
    },
    addLevelPlayed: {
      type: UserType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        levelId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        const user = await User.findById(args.userId);
        if (!user) {
          throw new Error("user not found");
        }
        if (!user.levelsPlayed.includes(args.levelId)) {
          user.levelsPlayed.push(args.levelId);
          await user.save();
        }
        return user;
      },
    },
    levelPlayed: {
      type: LevelType,
      args: {
        levelId: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        const level = await Level.findById(args.levelId);
        if (!level) {
          throw new Error("level not found");
        }
        if (!level.usersPlayed.includes(args.userId)) {
          level.usersPlayed.push(args.userId);
          level.usersCount += 1;
          await level.save();
        }
        return level;
      },
    },
    completeLevel: {
      type: UserAndLevelType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        levelId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        const user = await User.findById(args.id);
        if (!user) {
          throw new Error("User not found");
        }
        let level;
        if (!user.completedLevels.includes(args.levelId)) {
          user.completedLevels.push(args.levelId);
          await user.save();

          level = await Level.findByIdAndUpdate(
            args.levelId,
            { $inc: { finish: 1 } },
            { new: true }
          );
          console.log("Finish increase by 1");
        } else {
          throw new Error("Level is already completed by this user");
        }
        return { user, level };
      },
    },
    createMessage: {
      type: MessageType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        text: { type: new GraphQLNonNull(GraphQLString) },
        subject: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const user = await User.findById(args.userId);
        if (!user) {
          throw new Error("User not found");
        }
        const message = new Message({
          author: user._id.toString(),
          text: args.text,
          subject: args.subject,
          images: args.images,
        });
        await message.save();
        return message;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
