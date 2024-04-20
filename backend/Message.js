import mongoose from "mongoose";
import { User } from "./User.js";

const MessageSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const Message = mongoose.model("Message", MessageSchema);
