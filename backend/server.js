import cors from 'cors'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import {ApolloServer} from "@apollo/server";
import { readFile } from 'node:fs/promises';
import {startStandaloneServer} from "@apollo/server/standalone";
import { resolvers } from './resolvers.js';

const PORT = 9000;

const app = express();
app.use(cors(), express.json())

app.post('/login')

const typeDefs = await readFile('./schema.graphql', 'utf8')

const server = new ApolloServer({ typeDefs, resolvers });
await server.start()
app.use('/graphql', expressMiddleware(server));

app.listen( {port: PORT}, () => {
    console.log(`Server is running on port: ${PORT}`);
})