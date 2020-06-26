const { gql } = require('apollo-server')

const typeDefs = gql`
    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type User {
        id: ID!
        email: String!
        trips: [Launch]!
      }
      
      type Mission {
        name: String
        missionPatch(size: PatchSize): String
      }
      
      enum PatchSize {
        SMALL
        LARGE
    }

    type Query {
        launches: [Launch]!
        launch(id: ID!): Launch
        me: User
    }
`

module.exports = typeDefs;
