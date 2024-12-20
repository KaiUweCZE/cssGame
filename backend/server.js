import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { connectDB } from "./db.js";
import { schema } from "./schema.js";
import { authMiddleware, handleLogin } from "./auth.js";

const app = express();
dotenv.config();

// take a port from .env file
const PORT = process.env.PORT || 9001;

// connection to the database
connectDB();

app.use(cors());

app.use(authMiddleware);
app.post("/login", handleLogin);

// could be useful
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
