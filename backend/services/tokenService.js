import { VerificationToken } from "../VerificationToken.js";
import crypto from "crypto";

export const createVerificationToken = async (userId) => {
  const token = crypto.randomBytes(32).toString("hex");

  const verificationToken = new VerificationToken({
    userId: userId,
    token: token,
  });

  await verificationToken.save();

  const expiresAt = new Date(verificationToken.createdAt.getTime() + 86400);

  console.log("Token created:", {
    id: verificationToken._id,
    userId: verificationToken.userId,
    token: verificationToken.token,
    createdAt: verificationToken.createdAt,
    expectedExpiresAt: expiresAt,
  });

  // Index description
  const collection = VerificationToken.collection;
  const indexInfo = await collection.indexInformation({ full: true });
  console.log("Index information:", JSON.stringify(indexInfo, null, 2));

  // check TTL index
  const ttlIndex = Object.values(indexInfo).find(
    (index) => index.expireAfterSeconds !== undefined
  );
  if (ttlIndex) {
    console.log("TTL index exists:", {
      name: ttlIndex.name,
      expireAfterSeconds: ttlIndex.expireAfterSeconds,
    });
  } else {
    console.log("TTL index does not exist!");
  }

  return verificationToken;
};
