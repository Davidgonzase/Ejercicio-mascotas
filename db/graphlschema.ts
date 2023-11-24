// The GraphQL schema
export const typeDefs = `#graphql
  type Pet {
    id: ID!
    name: String!
    breed: String!
  }
  type Query {
    hello: String!
    pets: [Pet!]!
    pet(id: ID!): Pet!
    petByBreeds(breed:String!):[Pet!]!
  }
  type Mutation {
    addPet(name: String!, breed: String!): Pet!
    deletePet(id: ID!): String!
    updatePet(id: ID!, name: String, breed: String): Pet!
  }
`;