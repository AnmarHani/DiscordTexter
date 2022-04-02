const {gql} = require('apollo-server-express')

const typeDefs = gql`
    input MessageInput {
        body: String
        response: [String]
    }

    type Message {
        id: ID
        body: String
        response: [String]
    }

    type Query {
        messagesIndex: [Message]
        oneMessage(id: ID): Message
    }

    type Mutation {
        createMessage(message: MessageInput): Message
        deleteMessage(id: ID): Boolean
    }
`

module.exports = typeDefs