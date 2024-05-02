import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema.js'; // Importa o schema GraphQL definido no arquivo schema.js
import resolvers from './resolvers.js'; // Importa os resolvers
import db from '../database/config.js';

await db.connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
