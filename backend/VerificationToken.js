import mongoose from "mongoose";

const VerificationTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

VerificationTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

export const VerificationToken = mongoose.model(
  "VerificationToken",
  VerificationTokenSchema
);
