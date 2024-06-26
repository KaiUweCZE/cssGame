import mongoose from "mongoose";

const LevelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  bridgeProperties: {
    type: [String],
    default: [],
  },
  bridgeValues: {
    type: [String],
    default: [],
  },
  containerProperties: {
    type: [String],
    default: [],
  },
  containerValues: {
    type: [String],
    default: [],
  },
  allowedList: {
    type: [String],
    default: [],
  },
  deniedList: {
    type: [String],
    default: [],
  },
  numberOfInputs: {
    type: Number,
    default: 4,
  },
  description: {
    type: String,
    maxlength: [500, "String can not have length more than 500 chars"],
  },
  likes: {
    type: [String],
    default: [],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  finish: {
    type: Number,
    default: 0,
  },
  usersPlayed: {
    type: [String],
    default: [],
  },
  usersCount: {
    type: Number,
    default: 0,
  },
});

export const Level = mongoose.model("Level", LevelSchema);
