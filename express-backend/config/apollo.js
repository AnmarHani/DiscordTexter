const {ApolloServer} = require('apollo-server-express')

const typeDefs = require('../graphql/typeDefs.js')
const resolvers = require('../graphql/resolvers.js')

const corsOptions = {
  origin: '*',
  credentials: true
}

const apollo = async(app) => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        introspection: true
      })

    await apolloServer.start()
    
    apolloServer.applyMiddleware({app: app, cors: corsOptions})
}

module.exports = apollo