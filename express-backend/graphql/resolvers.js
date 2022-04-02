const messageController = require('../controllers/messageController.js')

const resolvers = {
    Query : {
        messagesIndex: async() => {
            return await messageController.getAllMessages()
        },
        oneMessage: async(parent, args) => {
            return await messageController.getOneMessage(args.id)
        },
    },
    Mutation:{
        createMessage: async(parent, args, context, info) => {
            return await messageController.postMessage(args.message) //pass all parameters as on object
        },
        deleteMessage: async(parent, args) => {
            return await messageController.deleteMessage(args.id) //pass all parameters as on object
        },
    }
}

module.exports = resolvers