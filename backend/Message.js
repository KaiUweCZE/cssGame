import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subject: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
});

export const Message = mongoose.model("Message", MessageSchema);
