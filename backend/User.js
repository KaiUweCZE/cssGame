import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: null,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
  completedLevels: {
    type: [String],
    default: [],
  },
});

export const User = mongoose.model("User", UserSchema);
