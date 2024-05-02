import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    addresses: [Address!]!
  }

  type Address {
    id: ID!
    user_id: ID!
    street: String!
    city: String!
    state: String!
    postal_code: String!
    user: User!
  }

  type Query {
    getUsers: [User!]!
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, name: String!): User!
    deleteUser(id: ID!): ID!
    createAddress(input: AddressInput!): Address!
  }

  input UserInput {
    name: String!
  }

  input AddressInput {
    street: String!
    city: String!
    state: String!
    postal_code: String!
    user_id: ID!
  }
`;

export default typeDefs;
