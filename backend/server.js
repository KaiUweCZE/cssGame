import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { connectDB } from './db.js';
import { schema } from './schema.js';
//import { readFile } from 'node:fs/promises';
//import { expressMiddleware } from '@apollo/server/express4'
//import {ApolloServer} from "@apollo/server";

const app = express();
dotenv.config();

// take a port from .env file
const PORT = process.env.PORT || 9001;

// connection to the database
connectDB();

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen( {port: PORT}, () => {
    console.log(`Server is running on port: ${PORT}`);
})