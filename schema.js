const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    deleteUser(id: ID!): Boolean
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`);

module.exports = schema;
