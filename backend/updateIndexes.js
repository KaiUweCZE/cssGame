import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./User.js";

dotenv.config();

async function updateIndexes() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Remove existing indexes
    await User.collection.dropIndex("email_1");
    await User.collection.dropIndex("password_1");

    // Create new sparse index for email
    await User.collection.createIndex(
      { email: 1 },
      { unique: true, sparse: true }
    );

    console.log("Indexes updated successfully");

    // Log updated indexes
    const updatedIndexes = await User.collection.indexes();
    console.log("Updated indexes:", JSON.stringify(updatedIndexes, null, 2));
  } catch (error) {
    console.error("Error updating indexes:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

updateIndexes();
